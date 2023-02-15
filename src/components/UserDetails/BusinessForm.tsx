import { FormWrapper } from "./FormWrapper";

type BusinessData = {
  zip: string;
  state: string;
  city: string;
  accountId: string;
  companyName: string;
  countryOfIncorporation: string;
  countryOfOperation: string;
  businessType: string;
  companyAddress: string;
  registrationNumber: string;
  incorporationDate: string;
};

type BusinessFormProps = BusinessData & {
  updateFields: (fields: Partial<BusinessData>) => void;
};

export function BusinessForm({
  zip,
  state,
  city,
  accountId,
  companyName,
  countryOfIncorporation,
  countryOfOperation,
  businessType,
  companyAddress,
  registrationNumber,
  incorporationDate,
  updateFields,
}: BusinessFormProps)
{
  return (
    <FormWrapper
      title="Business Information"
      description="Use a permanent address where you can receive mail."
    >
      <div className="flex flex-col gap-9 pt-9">
        <div className="flex flex-col">
          <label>Account Id</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            required
            type="text"
            value={ accountId }
            onChange={ (e) =>
              updateFields({ accountId: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Company Name</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            required
            type="text"
            value={ companyName }
            onChange={ (e) =>
              updateFields({ companyName: e.target.value })
            }
          />
        </div>
        <div className="flex gap-4">
          <div className="flex w-1/2 flex-col">
            <label>Country of Incorporation Address</label>
            <select
              className="h-9 w-full border bg-white p-2 font-light text-gray-500"
              id="countryOfIncorporation" value={ countryOfIncorporation }
            >
              <option value="usa">United States</option>
              <option value="india">India</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="flex w-1/2 flex-col">
            <label>Country of Operation</label>
            <select
              className="h-9 w-full border bg-white p-2 font-light text-gray-500"
              id="countryOfOperation" value={ countryOfOperation }
            >
              <option value="usa">United States</option>
              <option value="india">India</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Business Type</label>
          <select
            className="h-9 w-full border bg-white p-2 font-light text-gray-500"
            id="businessType" value={ businessType }
          >
            <option value="usa">United States</option>
            <option value="india">India</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Company Address</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            required
            type="text"
            value={ companyAddress }
            onChange={ (e) => updateFields({ companyAddress: e.target.value }) }
          />
        </div>
        <div className="flex gap-4">
          <div className="flex w-1/3 flex-col">
            <label>ZIP / Postal</label>
            <input
              className="h-9 border bg-white p-2 font-light text-gray-500"
              id="zip"
              value={ zip }
              onChange={ (e) => updateFields({ zip: e.target.value }) }
            />
          </div>
          <div className="flex w-1/3 flex-col">
            <label>State / Province</label>
            <input
              className="h-9 border p-2 font-light text-gray-500"
              autoFocus
              required
              type="text"
              value={ state }
              onChange={ (e) => updateFields({ state: e.target.value }) }
            />
          </div>
          <div className="flex w-1/3 flex-col">
            <label>City</label>
            <input
              className="h-9 border p-2 font-light text-gray-500"
              required
              type="text"
              value={ city }
              onChange={ (e) => updateFields({ city: e.target.value }) }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Registration Number</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            required
            type="number"
            value={ registrationNumber }
            onChange={ (e) => updateFields({ registrationNumber: e.target.value }) }
          />
        </div>
        <div className="flex flex-col">
          <label>Incorporation Date</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            required
            type="date"
            value={ incorporationDate }
            onChange={ (e) => updateFields({ incorporationDate: e.target.value }) }
          />
        </div>
      </div>
    </FormWrapper>
  );
}
