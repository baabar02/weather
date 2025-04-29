"use client";
import { motion } from "framer-motion";
import Inputs from "./Inputs";
import Button from "./Button";

const ContainerStep1 = ({ isVisible, onNext, marginBottom, step }) => {
  return (
    <motion.div
      className="flex flex-col items-center w-full max-w-[480px] h-[650px] gap-2 border border-green-400 p-4 bg-white rounded-lg shadow-md rgba(0, 0, 1, 2)"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 0 : 1, x: isVisible ? -50 : 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col mt-[10px] items-start mt-5 gap-2 w-[416px]">
        <div className="w-[60px] h-[60px]">
          <img src="/Logo.png" alt="Logo" className="object-contain" />
        </div>
        <h1 className="text-[31px] font-bold">Join us! 😎</h1>
        <h2 className="text-gray-600">
          Please provide all current information accurately.
        </h2>
      </div>
      <div className="gap-[4px]">
        <Inputs text="First name" placeholder={"Your first name"} type="text" />
        <Inputs text="Last name" placeholder={"Your last name"} type="text" />
        <Inputs text="User name" placeholder={"Your user name"} type="text" />
      </div>
      <Button
        onClick={onNext}
        backgroundColor="black"
        color="white"
        isVisible={isVisible}
        text="Continue"
        marginTop="130px"
        width="416px"
      />
    </motion.div>
  );
};

export default ContainerStep1;

// "use client";
// import { motion } from "framer-motion/dist/framer-motion";
// import Inputs from "./Inputs";
// import Button from "./Button";

// const ContainerStep1 = ({ isVisible, onNext, step }) => {
//   return (
//     <motion.div
//       className="flex flex-col items-center w-full max-w-[480px] h-[650px] gap-2 border border-green-400 p-4 bg-white rounded-lg shadow-md"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
//       exit={{ opacity: 0, x: 50 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="flex flex-col items-start mt-5 gap-2 w-[416px]">
//         <div className="w-[60px] h-[60px]">
//           <img src="/Logo.png" alt="Logo" className="object-contain" />
//         </div>
//         <h1 className="text-[31px] font-bold">Join us! 😎</h1>
//         <h2 className="text-gray-600">
//           Please provide all current information accurately.
//         </h2>
//       </div>
//       <Inputs text="First name*" />
//       <Inputs text="Last name*" />
//       <Inputs text="Phone number*" />
//       <Button
//         onClick={onNext}
//         backgroundColor="gray"
//         color="white"
//         isVisible={isVisible}
//         text={step} // Displays "Continue 1 of 3"
//       />
//     </motion.div>
//   );
// };

// export default ContainerStep1;
