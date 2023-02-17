/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type NextPage } from "next";
import Image from "next/image";

// Assets
import ExclamationCircleIcon from "../assets/icons/exclamation-circle.svg";
import CrossSvg from "../assets/icons/cross.svg";
import FiatSvg from "../assets/icons/fiat.svg";
import CryptoSvg from "../assets/icons/crypto.svg";
import ReceiveSvg from "../assets/icons/receive.svg";
import PaySvg from "../assets/icons/pay.svg";
import UpSvg from "../assets/icons/up.svg";
import DownSvg from "../assets/icons/down.svg";

// Components
import Page from "../components/layouts/Page";
import Calendar from "../components/Home/Calendar";
import Toast from "../components/Home/Toast";
import Chart from "../components/Home/Chart";
import Notification from "../components/Home/Notification";

const fiatBalance = "00,000";

const DashboardPage: NextPage = () =>
{

   return (
      <Page>
         <div className="flex h-full flex-col mt-4 w-auto mx-9">
            <div className="bg-brand rounded-lg text-white">
               <Toast
                  symbol={ ExclamationCircleIcon }
                  message="Please complete the KYC"
                  description="Please follow the instructions in the email to complete account verification. Make sure to check your promotions/spam as well."
                  show={ true }
                  closeSymbol={ CrossSvg }
               />
            </div>
            <div className="flex flex-1 pt-4 justify-center">
               <div className="flex justify-center gap-5">
                  <div className="flex flex-col flex-1 w-2/3 gap-4">
                     <div className="flex flex-col flex-wrap gap-4">
                        <div className="flex gap-4">
                           <div className="bg-white w-1/2 h-32 rounded-2xl">
                              <div className="flex p-7 justify-between">
                                 <div className="flex flex-col gap-4">
                                    <p className="font-light text-gray-500 text-md">Fiat Balance</p>
                                    <p className="font-extrabold text-3xl">${ fiatBalance }</p>
                                 </div>
                                 <div className="bg-[linear-gradient(95.79deg,#A76FFF_10.21%,#7445F8_100%)] rounded-lg shadow-xl">
                                    <Image
                                       src={ FiatSvg }
                                       width={ 40 }
                                       height={ 40 }
                                       alt="fiat"
                                       className="m-4"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="bg-white w-1/2 h-32 rounded-2xl">
                              <div className="flex p-7 justify-between">
                                 <div className="flex flex-col gap-4">
                                    <p className="font-light text-gray-500 text-md">Crypto Balance</p>
                                    <p className="font-extrabold text-3xl">${ fiatBalance }</p>
                                 </div>
                                 <div className="bg-[linear-gradient(95.79deg,#A76FFF_10.21%,#7445F8_100%)] rounded-lg shadow-xl">
                                    <Image
                                       src={ CryptoSvg }
                                       width={ 40 }
                                       height={ 40 }
                                       alt="fiat"
                                       className="m-4"
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <div className="bg-white w-1/2 h-32 rounded-2xl">
                              <div className="flex p-7 justify-between">
                                 <div className="flex flex-col gap-4">
                                    <p className="font-light text-gray-500 text-md">Receivables</p>
                                    <p className="font-extrabold text-3xl">${ fiatBalance }</p>
                                 </div>
                                 <div className="bg-[linear-gradient(95.79deg,#A76FFF_10.21%,#7445F8_100%)] rounded-lg shadow-xl">
                                    <Image
                                       src={ ReceiveSvg }
                                       width={ 40 }
                                       height={ 40 }
                                       alt="fiat"
                                       className="m-4"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="bg-white w-1/2 h-32 rounded-2xl">
                              <div className="flex p-7 justify-between">
                                 <div className="flex flex-col gap-4">
                                    <p className="font-light text-gray-500 text-md">Payables</p>
                                    <p className="font-extrabold text-3xl">${ fiatBalance }</p>
                                 </div>
                                 <div className="bg-[linear-gradient(95.79deg,#A76FFF_10.21%,#7445F8_100%)] rounded-lg shadow-xl">
                                    <Image
                                       src={ PaySvg }
                                       width={ 40 }
                                       height={ 40 }
                                       alt="fiat"
                                       className="m-4"
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="bg-white rounded-2xl shadow-xl pt-8">
                        <Chart />
                     </div>
                  </div>
                  <div className="flex w-auto flex-col">
                     <div className="w-[363.38px] bg-white rounded-2xl shadow-xl">
                        <Calendar />
                        <div className="border-b-4"></div>
                        <div className="flex flex-col gap-5 py-12">
                           <div>
                              <Notification
                                 sensex={ UpSvg }
                                 company="Quicksilver LLC"
                                 tfid="TFID: 8045780"
                                 price="$ 145,000.00"
                                 show={ true }
                              />
                           </div>
                           <div>
                              <Notification
                                 sensex={ DownSvg }
                                 company="Quicksilver LLC"
                                 tfid="TFID: 8045780"
                                 price="$ 145,000.00"
                                 show={ true }
                              />
                           </div>
                           <div>
                              <Notification
                                 sensex={ DownSvg }
                                 company="Quicksilver LLC"
                                 tfid="TFID: 8045780"
                                 price="$ 145,000.00"
                                 show={ true }
                              />
                           </div>
                           <div>
                              <Notification
                                 sensex={ UpSvg }
                                 company="Quicksilver LLC"
                                 tfid="TFID: 8045780"
                                 price="$ 145,000.00"
                                 show={ true }
                                 closeSymbol={""}
                              />
                           </div>
                           <div>
                              <Notification
                                 sensex={ DownSvg }
                                 company="Quicksilver LLC"
                                 tfid="TFID: 8045780"
                                 price="$ 145,000.00"
                                 show={ true }
                                 closeSymbol={CrossSvg}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Page>
   );
};

export default DashboardPage;
