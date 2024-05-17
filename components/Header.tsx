//Next Image 
import Image from "next/image";

//Next Link
import Link from "next/link";

//components
import Socials from "./Socials";
const Header = () => {
  return <header className="absolute z-30
   w-full flex items-center px-16
   lg:h-[90px]">
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 
      py-8 ">
        {/* Logo */}
        
        <Link href={'/'} >
        <div className="flex gap-x-2">
          <h1 className="text-4xl font-bold">Heydar</h1>
          <h1 className="text-4xl font-bold">Saki</h1>
        </div>
        </Link>
        {/* Socials */}
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
