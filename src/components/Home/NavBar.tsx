/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Image from "next/image";
import Link from "next/link";

// Images
import TrufflesLogo from "../../assets/images/logo.svg";

// Icons
import UserIcon from "../../assets/icons/user.svg";
import Bell from "../../assets/icons/bell.svg";

const NavBar = () =>
{
  return (
    <nav className="flex basis-20 shrink-0 items-center">
      <div className="flex basis-64 shrink-0 items-center justify-center">
        <Image
          src={ TrufflesLogo }
          alt="Truffles Logo"
          width={ 150 }
          height={ 150 }
        />
      </div>
      <div className="flex flex-1 justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="shrink-0 flex gap-3 px-8 items-center">
          <Image src={ UserIcon } alt="User Icon" width={ 14 } height={ 14 } />
          <Link href="/user-information" className="">
            Evan Winter
          </Link>
          <Link href="/notifications" className="flex justify-center">
            <Image src={ Bell } alt="Bell Icon" width={ 15 } height={ 15 } />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
