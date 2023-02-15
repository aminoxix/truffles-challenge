import { FormWrapper } from "./FormWrapper";

type BusinessData2 = {
  zip2: string;
  state2: string;
  city2: string;
  accountId2: string;
  companyName2: string;
  countryOfIncorporation2: string;
  countryOfOperation2: string;
  businessType2: string;
  companyAddress2: string;
  registrationNumber2: string;
  incorporationDate2: string;
};

type BusinessForm2Props = BusinessData2 & {
  updateFields: (fields: Partial<BusinessData2>) => void;
};

export function BusinessForm2({
  zip2,
  state2,
  city2,
  accountId2,
  companyName2,
  countryOfIncorporation2,
  countryOfOperation2,
  businessType2,
  companyAddress2,
  registrationNumber2,
  incorporationDate2,
  updateFields,
}: BusinessForm2Props)
{
  return (
    <FormWrapper
      title="Business Information 2"
      description="Use a permanent address where you can receive mail."
    >
      <div className="flex flex-col gap-9 pt-9">
        <div className="flex flex-col">
          <label>Account Id</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            type="text"
            value={ accountId2 }
            onChange={ (e) =>
              updateFields({ accountId2: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Company Name</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            type="text"
            value={ companyName2 }
            onChange={ (e) =>
              updateFields({ companyName2: e.target.value })
            }
          />
        </div>
        <div className="flex gap-4">
          <div className="flex w-1/2 flex-col">
            <label>Country of Incorporation Address</label>
            <select
              className="h-9 w-full border bg-white p-2 font-light text-gray-500"
              id="countryOfIncorporation" value={ countryOfIncorporation2 }
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
              id="countryOfOperation" value={ countryOfOperation2 }
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
            id="businessType" value={ businessType2 }
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
            type="text"
            value={ companyAddress2 }
            onChange={ (e) => updateFields({ companyAddress2: e.target.value }) }
          />
        </div>
        <div className="flex gap-4">
          <div className="flex w-1/3 flex-col">
            <label>ZIP / Postal</label>
            <input
              className="h-9 border bg-white p-2 font-light text-gray-500"
              id="zip"
              value={ zip2 }
              onChange={ (e) => updateFields({ zip2: e.target.value }) }
            />
          </div>
          <div className="flex w-1/3 flex-col">
            <label>State / Province</label>
            <input
              className="h-9 border p-2 font-light text-gray-500"
              autoFocus
              type="text"
              value={ state2 }
              onChange={ (e) => updateFields({ state2: e.target.value }) }
            />
          </div>
          <div className="flex w-1/3 flex-col">
            <label>City</label>
            <input
              className="h-9 border p-2 font-light text-gray-500"
              type="text"
              value={ city2 }
              onChange={ (e) => updateFields({ city2: e.target.value }) }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Registration Number</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            type="number"
            value={ registrationNumber2 }
            onChange={ (e) => updateFields({ registrationNumber2: e.target.value }) }
          />
        </div>
        <div className="flex flex-col">
          <label>Incorporation Date</label>
          <input
            className="h-9 border p-2 font-light text-gray-500"
            type="date"
            value={ incorporationDate2 }
            onChange={ (e) => updateFields({ incorporationDate2: e.target.value }) }
          />
        </div>
      </div>
    </FormWrapper>
  );
}
