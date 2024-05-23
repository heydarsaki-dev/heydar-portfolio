//Next Image 
import Image from "next/image";

//Next Link
import Link from "next/link";

//components
import Socials from "./Socials";
const Header = () => {
  return <header className="absolute z-30
   w-full flex items-center py-8">
    <div className="w-full mx-[10%]">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-y-2 
      ">
        {/* Logo */}
        
        <Link href={'/'} >
        <div className="flex flex-row-reverse gap-x-2">
          <h1 className="h4 font-bold">حیدر</h1>
          <h1 className="h4 font-bold">صاکی</h1>
        </div>
        </Link>
        {/* Socials */}
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
