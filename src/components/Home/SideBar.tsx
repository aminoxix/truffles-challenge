/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

// Assets
import DashboardIcon from "../../assets/icons/dashboard.svg";
import InvoiceIcon from "../../assets/icons/invoice.svg";
import ProformaIcon from "../../assets/icons/proforma.svg";
import SwapIcon from "../../assets/icons/swap.svg";
import TransferIcon from "../../assets/icons/transfer.svg";
import ContactsIcon from "../../assets/icons/contacts.svg";

const SideBar = () =>
{
  const router = useRouter();

  const Menus = [
    { title: "Dashboard", src: DashboardIcon },
    { title: "Invoice", src: InvoiceIcon },
    { title: "Proforma", src: ProformaIcon },
    { title: "Swap", src: SwapIcon },
    { title: "Transfer", src: TransferIcon },
    { title: "Contacts", src: ContactsIcon },
  ];

  return (
    <div className="flex basis-64 shrink-0 bg-slate-100 px-10 pt-6 pb-4">
      <ul className="space-y-2 flex flex-col basis-60 gap-6">
        { Menus.map((menu, index) =>
        {
          return (
            <li key={ index }>
              <Link
                href={ `/${ menu.title.toLowerCase() }` }
                className="flex hover:bg-white rounded-md p-2 items-center font-normal"
              >
                <div
                  className={ menu.title.toLowerCase() == router.pathname.slice(1).toLowerCase() ? `flex h-8 w-8 justify-center bg-[linear-gradient(95.79deg,#A76FFF_10.21%,#7445F8_100%)] rounded-md shadow-xl` : `flex h-8 w-8 justify-center bg-white rounded-md shadow-xl` }
                >
                  <Image
                    src={ menu.src }
                    alt={ `${ menu.title } icon` }
                    className="mix-blend-normal"
                    width={ 15 }
                    height={ 15 }
                  />
                </div>
                <span className="ml-3">{ menu.title }</span>
              </Link>
            </li>
          )
        }) }
      </ul>
    </div>
  );
};

export default SideBar;
