import { FormWrapper } from "./FormWrapper";
import { PhoneField } from "./Phone";

type UserData = {
  title: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  residentialAddress: string;
  postalCode: string;
  occupation: string;
  dob: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  title,
  firstName,
  lastName,
  phoneNumber,
  residentialAddress,
  postalCode,
  occupation,
  dob,
  updateFields,
}: UserFormProps)
{
  return (
    <FormWrapper
      title="User Information"
      description="Please enter your details"
    >
      <div className="flex flex-col gap-9 pt-9">
        <div className="flex gap-4">
          <div className="flex w-1/3 flex-col">
            <label>Title</label>
            <select
              className="h-9 border bg-white p-2 font-light text-gray-500"
              id="title"
              value={ title }
              onChange={ (e) => updateFields({ title: e.target.value }) }
            >
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
              <option value="ms">Ms.</option>
              <option value="others">Prefer not to say</option>
            </select>
          </div>
          <div className="flex w-1/3 flex-col">
            <label>First Name</label>
            <input
              className="h-9 border p-2 font-light text-gray-500"
              autoFocus
              required
              type="text"
              value={ firstName }
              onChange={ (e) => updateFields({ firstName: e.target.value }) }
            />
          </div>
          <div className="flex w-1/3 flex-col">
            <label>Last Name</label>
            <input
              className="h-9 border p-2 font-light text-gray-500"
              required
              type="text"
              value={ lastName }
              onChange={ (e) => updateFields({ lastName: e.target.value }) }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Mobile Number</label>
          <PhoneField label="" value={ phoneNumber } />
        </div>
        <div className="flex flex-col">
          <label>Gender</label>
          <select
            className="h-9 w-full border bg-white p-2 font-light text-gray-500"
            id="gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Prefer not to say</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Nationality</label>
          <select
            className="h-9 w-full border bg-white p-2 font-light text-gray-500"
            id="nationality"
          >
            <option value="usa">United States</option>
            <option value="india">India</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="flex gap-4">
          <div className="flex w-1/2 flex-col">
            <label>Residential Address</label>
            <input
              className="h-9 border p-2 font-light text-gray-500"
              required
              type="text"
              value={ residentialAddress }
              onChange={ (e) =>
                updateFields({ residentialAddress: e.target.value })
              }
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <label>Postal Code</label>
            <input
              className="h-9 border p-2 font-light text-gray-500"
              required
              type="text"
              value={ postalCode }
              onChange={ (e) => updateFields({ postalCode: e.target.value }) }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Occupation</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            required
            type="text"
            value={ occupation }
            onChange={ (e) => updateFields({ occupation: e.target.value }) }
          />
        </div>
        <div className="flex flex-col">
          <label>Date of Birth</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            required
            type="date"
            value={ dob }
            onChange={ (e) => updateFields({ dob: e.target.value }) }
          />
        </div>
      </div>
    </FormWrapper>
  );
}
