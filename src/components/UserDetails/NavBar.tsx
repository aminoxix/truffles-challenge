/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Image from "next/image";
import Link from "next/link";

// Images
import TrufflesLogo from "../../assets/images/logo.svg";

const NavBar = () =>
{
    return (
        <nav className="font-inter flex justify-between xl:py-[27px] xl:px-[45px]">
            <div className="flex xl:gap-24">
                <Link href="/">
                    <Image src={ TrufflesLogo } alt="Truffles Logo" width={ 150 } height={ 150 } />
                </Link>
            </div>
            <div>
                Having trouble? <a href="truffles.one" className="text-brand font-semibold">Get Help</a>
            </div>
        </nav>
    )
}

export default NavBar;
