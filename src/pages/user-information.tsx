import Image from "next/image";
import Link from "next/link";

import { FormEvent, useState } from "react";

// Components
import { BusinessForm } from "../components/UserDetails/BusinessForm";
import { BusinessForm2 } from "../components/UserDetails/BusinessForm2";
import { UserForm } from "../components/UserDetails/UserForm";
import { useMultistepForm } from "../components/UserDetails/useMultistepForm";
import NavBar from "../components/UserDetails/NavBar";
import { UploadDocsForm } from "../components/UserDetails/UploadDocsForm";
import Stepper from "../components/UserDetails/Stepper";
import { Preview } from "../components/UserDetails/Preview";
import Registered from "../components/UserDetails/Registered";

type FormData = typeof INITIAL_DATA;

const INITIAL_DATA = {
  title: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  residentialAddress: "",
  postalCode: "",
  occupation: "",
  dob: "",
  zip: "",
  state: "",
  city: "",
  accountId: "",
  companyName: "",
  countryOfIncorporation: "",
  countryOfOperation: "",
  businessType: "",
  companyAddress: "",
  registrationNumber: "",
  incorporationDate: "",
  zip2: "",
  state2: "",
  city2: "",
  accountId2: "",
  companyName2: "",
  countryOfIncorporation2: "",
  countryOfOperation2: "",
  businessType2: "",
  companyAddress2: "",
  registrationNumber2: "",
  incorporationDate2: "",
  file: "",
};

function UserInformation()
{
  const [ data, setData ] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>)
  {
    setData((prev) =>
    {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm key={ 0 } { ...data } updateFields={ updateFields } />,
      <BusinessForm key={ 1 } { ...data } updateFields={ updateFields } />,
      <BusinessForm2 key={ 2 } { ...data } updateFields={ updateFields } />,
      <UploadDocsForm key={ 3 } { ...data } updateFields={ updateFields } />,
      <Preview key={ 4 } { ...data } />,
      <Registered key={ 5 } { ...data } />,
    ]);

  function onSubmit(e: FormEvent)
  {
    e.preventDefault();
    if (!isLastStep) return next();
  }

  return (
    <>
      <NavBar />
      <div className="ml-12 mr-24 mt-10 mb-20 flex justify-between font-inter">
        <div className="flex flex-col items-center">
          <Stepper currentStep={ currentStepIndex } />
        </div>
        <div className="relative max-w-max rounded bg-white p-4">
          <form onSubmit={ onSubmit }>
            { step }
            <div className="mt-16 flex justify-around gap-4">
              { isLastStep ? (
                <Link
                  className="rounded-md bg-brand py-2 px-8 font-bold text-white hover:bg-brand"
                  type="submit"
                  href="/"
                >
                  OK
                </Link>
              ) : (
                <>
                  { !isFirstStep && (
                    <button
                      type="button"
                      onClick={ back }
                      className="rounded-md bg-gray-300 py-2 px-8 font-bold text-gray-800 hover:bg-gray-400"
                    >
                      Back
                    </button>
                  ) }
                  <button
                    className="rounded-md bg-brand py-2 px-8 font-bold text-white hover:bg-brand"
                    type="button"
                    onClick={ next }
                  >
                    { steps.length - 2 == currentStepIndex ? "Finish" : "Next" }
                  </button>
                </>
              ) }
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserInformation;
