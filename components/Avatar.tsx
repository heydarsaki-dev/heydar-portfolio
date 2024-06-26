'use client'

//Next Image
import Image from "next/image";


const Avatar = ({className}:{className:string}) => {
  return <div className={`${className} hidden lg:flex lg:max-w-none size-full`}>
    <Image src={'/avatar.png'} width={737} height={678} alt=""
      className="translate-z-0" />
  </div>;
};

export default Avatar;
