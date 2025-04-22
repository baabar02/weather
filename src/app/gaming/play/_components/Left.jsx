
// import { format } from "date-fns";
// import { MapPin, Search } from "lucide-react";
// import { Heart } from "lucide-react";
// import { User } from "lucide-react";
// import { House } from "lucide-react";
// import { SearchInput } from "../_components/Search";

// export const Left =()=>{
// const date = new Date ();

// return(
//     <div
//     className="relative 
//   flex 
//   flex-col 
//   w-[414px] 
//   z-0
//   h-[828px] 
//   ml-[1300px] 
//   border 1 
//   border-green-400 
//   rounded-[8px] 
//   text-grey-300
//   bg-white-100
//   shadow-md md:shadow-lg lg:shadow-xl  
//   "
//   >
//     {/* <SearchInput/> */}
//     <div className="mt-[64px] ml-[48px]"> {format(date, "yyyy-MM-dd")} </div>
//     <div className="flex ml-[48px]">
//       <p>Ulaanbaatar</p>

//       <span className="ml-[10px]">
//         <MapPin />
//       </span>
//     </div>
//     <div className="w-[270px] h-[270px] mt-[40px] self-center  border border-green-400 rounded-full"></div>
//     <p className="text-[190px] ml-[48px] mt-[-10px]">7.1</p>
//     <p className="text-[24px] ml-[48px] mt-[-30px] ">rainy</p>
//     <div className="flex border mt-[50px] self-center justify-between w-[320px] h-[32px]">
//       <House />
//       <MapPin />
//       <Heart />
//       <User />
//     </div>
//     <div className="absolute bg-orange-500  w-[170px] h-[170px] mt-[-40px] mr-[400px] z-[-1] self-center  border border-green-400 rounded-full bg-gradient-to-t from-yellow-500 to-transparent"></div>
//   </div>
// )
// };
import { format } from "date-fns";
import { MapPin, House, Heart, User } from "lucide-react";
import { SearchInput } from "../_components/Search";
import Image from "next/image";

export const Left = () => {
  const date = new Date();

  return (
    <div
      className="relative ml-[180px] mt-[60px] flex flex-col w-[414px] h-[828px] bg-white border border-green-400 rounded-lg text-gray-300 shadow-md md:shadow-lg lg:shadow-xl"
    >
    
      <div className="mt-16 ml-12">{format(date, "MMMM d, yyyy")}</div>
      <div className="flex items-center ml-12">
        <p>Ulaanbaatar</p>
        <span className="ml-2">
          <MapPin aria-label="Location" />
        </span>
      </div>
      <div className="w-[270px] h-[270px] mt-10 self-center border border-green-400 rounded-full overflow-hidden"> <img src="/sun.png" alt="sun"/></div>
      <p className="text-[190px] ml-12 mt-[10px]">7.1</p>
      <p className="text-[24px] ml-12 mt-[-30px]">rainy</p>
      <div className="flex justify-between items-center mt-12 self-center w-[320px] h-8 border border-gray-300">
        <House aria-label="Home" />
        <MapPin aria-label="Location" />
        <Heart aria-label="Favorite" />
        <User aria-label="Profile" />
      </div>
      <div className="absolute bg-orange-500  w-[170px] h-[170px] mt-[-40px] mr-[400px] z-10 self-center  border border-green-400 rounded-full bg-gradient-to-t from-yellow-500 to-transparent"></div>
    </div>
  );
};