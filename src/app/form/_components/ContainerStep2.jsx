
"use client";
import { motion } from "framer-motion";
import Inputs from "./Inputs";
import Button from "./Button";

const ContainerStep2 = ({
  isVisible,
  onPrevious,
  valueChanger,
  formOne,
  error,
  setError,
  setCurrentStep,
  currentStep,
  totalSteps,
}) => {
  const stepTwo = () => {
    const validationError = {};

    // Email validation
    if (!formOne.Email) {
      validationError.Email = "Та Емайл хаяг аа оруулна уу.";
    } 
    
    
    // else if (!/^\S+@\S+\.\S+$/.test(formOne.Email)) {
    //   validationError.Email = "Зөв Емайл хаяг оруулна уу.";
    // }

    // Phone number validation
    if (!formOne.PhoneNumber) {
      validationError.PhoneNumber = "Та утасны дугаараа оруулна уу.";
    }
    
    // else if (!/^\+?\d{8,}$/.test(formOne.PhoneNumber)) {
    //   validationError.PhoneNumber = " Та утасны дугаар оруулна уу.";
    // }

    // Password validation
    if (!formOne.Password) {
      validationError.Password = "Та нууц үгээ оруулна уу.";
    } 
    // else if (formOne.Password.length < 8) {
    //   validationError.Password = "Нууц үг хамгийн багадаа 8 тэмдэгт байх ёстой.";
    // }

    // Confirm password validation
    if (!formOne.ConfirmPassword) {
      validationError.ConfirmPassword = "Нууц үгээ дахин оруулна уу.";
    } 
    
    // else if (formOne.ConfirmPassword !== formOne.Password) {
    //   validationError.ConfirmPassword = "Нууц үг таарахгүй байна.";
    // }

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center w-full max-w-[480px] h-[650px] gap-2 border border-green-400 p-4 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 0 : 1, x: isVisible ? -50 : 0 }}
      // exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-start mt-[10px] gap-2 w-[416px]">
        <div className="w-[60px] h-[60px]">
          <img src="/Logo.png" alt="Logo" className="object-contain" />
        </div>
        <h1 className="text-[31px] font-bold">Join us! 😎</h1>
        <h2 className="text-gray-600">Please provide additional details.</h2>
      </div>
      <Inputs
        name="Email"
        text="Email"
        placeholder="Your Email"
        type="email"
        value={formOne.Email}
        valueChanger={valueChanger}
        error={error.Email}
      />
      <Inputs
        name="PhoneNumber"
        text="Phone number"
        placeholder="Your number"
        type="tel"
        value={formOne.PhoneNumber}
        valueChanger={valueChanger}
        error={error.PhoneNumber}
      />
      <Inputs
        name="Password"
        text="Password"
        placeholder="Your password"
        type="password"
        value={formOne.Password}
        valueChanger={valueChanger}
        error={error.Password}
      />
      <Inputs
        name="ConfirmPassword"
        text="Confirm password"
        placeholder="Confirm password"
        type="password"
        value={formOne.ConfirmPassword}
        valueChanger={valueChanger}
        error={error.ConfirmPassword}
      />
      <div className="flex w-[416px] gap-4">
        <Button
          onClick={onPrevious}
          backgroundColor="gray-500"
          color="white"
          // isVisible={isVisible}
          type="Back"
          text="Back"
          marginTop={10}
          width={128}
        />
        <Button
          onClick={stepTwo}
          backgroundColor="black"
          color="white"
          // isVisible={isVisible}
          text={`Continue ${currentStep + 1}/${totalSteps.length-1}`}
          type="Next"
          marginTop={10}
          width={280}
        />
      </div>
    </motion.div>
  );
};

export default ContainerStep2;


// "use client";
// import { motion } from "framer-motion";
// import Inputs from "./Inputs";
// import Button from "./Button";

// const ContainerStep2 = ({
//   isVisible,
//   onNext,
//   onPrevious,
//   valueChanger,
//   formOne,
//   setError,
//   setCurrentStep,
//   currentStep,
//   setCurrentStep
// }) => {

//   const stepTwo = () => {
// const validationError = {};
// if(!formOne.Email) {
//   validationError.Email = "Та Емайл хаяг аа оруулна уу."
// }
// if(!formOne.PhoneNumber) {
//   validationError.PhoneNumber = "Та утасны дугаараа оруулна уу."
// }
// if(!formOne.Password) {
//   validationError.Password = "Та нууц дугаараа оруулна уу."
// }

//   setError(validationError);

//     if (Object.keys(validationError).length === 0) {
//       setCurrentStep((prev) => prev + 1);
//     }

//   };
//   return (
//     <motion.div
//       className="flex flex-col items-center w-full max-w-[480px] h-[650px] gap-2 border border-green-400 p-4 bg-white rounded-lg shadow-lg"
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: isVisible ? 0 : 1, x: isVisible ? -50 : 0 }}
//       // exit={{ opacity: 0, x: -50 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="flex flex-col items-start mt-[10px] gap-2 w-[416px]">
//         <div className="w-[60px] h-[60px]">
//           <img src="/Logo.png" alt="Logo" className="object-contain" />
//         </div>
//         <h1 className="text-[31px] font-bold">Join us! 😎</h1>
//         <h2 className="text-gray-600">Please provide additional details.</h2>
//       </div>
//       <Inputs
//         name={"Email"}
//         text="Email"
//         placeholder="Your Email"
//         type="Email"
//         value={formOne.Email}
//         valueChanger={valueChanger}
//       />
//       <Inputs
//         name="PhoneNumber"
//         text="Phone number"
//         placeholder="Your number"
//         type="text"
//         value={formOne.PhoneNumber}
//         valueChanger={valueChanger}
//       />
//       <Inputs
//         name="Password"
//         text="Password"
//         placeholder="Your password"
//         type="password"
//         value={formOne.Password}
//         valueChanger={valueChanger}
//       />
//       <Inputs
//         name="ConfirmPassword"
//         text="Confirm password"
//         placeholder="Confirm password"
//         type="password"
//         value={formOne.ConfirmPassword}
//         valueChanger={valueChanger}
//       />
//       <div className="flex w-[416px]">
//         <Button
//           onClick={onPrevious}
//           backgroundColor="gray-500"
//           color="gray"
//           isVisible={isVisible}
//           type="Back"
//           text="Back"
//           marginTop={10}
//           width={128}
//         />
//         <Button
//           onClick={stepTwo}
//           backgroundColor="black"
//           color="white"
//           isVisible={isVisible}
//           text={`Continue ${currentStep + 1}/${totalSteps.length - 1}`}
//           type="Next"
//           marginTop={10}
//           width={280}
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default ContainerStep2;
