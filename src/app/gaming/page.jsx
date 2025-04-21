import { Left } from "./play/_components/Left";
import { Right } from "./play/_components/Right";
import { Smile } from "lucide-react";
const Gaming = () => {
  console.log("Gaming");

  return (

    <div className="flex h-screen justify-center items-center relative">
        <div class="flex h-screen w-screen">
          <div class="w-1/2 h-full bg-gray-100">
          </div>
           <div class="w-1/2 h-full bg-blue-800">
           </div>
             <div class="absolute 
                top-1/2 
                left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 
                w-300 h-300 
                rounded-full 
                bg-tranparent 
                border-1 
                border-green-400">
            </div>
             <div class="absolute 
                top-1/2 
                left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 
                w-200 h-200 
                rounded-full 
                bg-tranparent 
                border-1 
                border-green-400">
            </div>
             <div class="absolute 
                top-1/2 
                left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 
                w-100 h-100 
                rounded-full 
                bg-gray-100 
                border-1 
                border-green-400">
                <Smile  className="absolute
                top-1/2
                left-1/2
                transform -translate-x-1/2 -translate-y-1/2
                w-80 h-80"/>
            </div>
          </div>

  </div>
  );
};

export default Gaming;


// const sizes = [300, 200, 100];
// {sizes.map((size, index) => (
//   <div
//     key={size}
//     className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[${size}px] h-[${size}px] rounded-full ${index === sizes.length - 1 ? 'bg-gray-100' : 'bg-transparent'} border border-green-400 ${index === sizes.length - 1 ? 'flex justify-center items-center' : ''}`}
//   >
//     {index === sizes.length - 1 && <Smile />}
//   </div>
// ))}