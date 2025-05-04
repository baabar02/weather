"use client";
import { useState } from "react";
import ContainerStep1 from "./ContainerStep1";
import ContainerStep2 from "./ContainerStep2";
import ContainerStep3 from "./ContainerStep3";
import ContainerStep4 from "./ContainerStep4";

const FormPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState({});
  const [formOne, setFormOne] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
    DateOfBirth: "",
    ProfileImage: "",
  });

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const valueChanger = (event) => {
    const { name, value, files } = event.target;
    setFormOne((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const [files, setFiles] = useState();
  const clearFiles = () => {
    setFormOne((prev) => ({ ...prev, ProfileImage: "" }));
  };

  // setFiles((prev) => ({
  //   ...prev,
  //   ProfileImage: files ? files[0] : value,
  // }));

  const totalSteps = [
    ContainerStep1,
    ContainerStep2,
    ContainerStep3,
    ContainerStep4,
  ];

  const Stepper = totalSteps[currentStep];
  return (
    <div>
      {/* {JSON.stringify(formOne)} */}
      <Stepper
        // isVisible={true} // Set to true for the active step
        onPrevious={handlePrevious}
        valueChanger={valueChanger}
        formOne={formOne}
        error={error}
        setError={setError}
        currentStep={currentStep}
        totalSteps={totalSteps}
        setCurrentStep={setCurrentStep}
        setFiles={setFiles}
        clearFiles={clearFiles}
      />
    </div>
  );
};

export default FormPage;

// "use client";
// import { useState } from "react";
// import ContainerStep1 from "./ContainerStep1";
// import ContainerStep2 from "./ContainerStep2";
// import ContainerStep3 from "./ContainerStep3";
// import ContainerStep4 from "./ContainerStep4";

// const FormPage = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [error, setError] = useState({});
//   const [formOne, setFormOne] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     Email: "",
//     PhoneNumber: "",
//     Password: "",
//     ConfirmPassword: "",
//     DateOfBirth: "",
//     ProfileImage: "",
//   });

//   const handlePrevious = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   // const handleNext = () => {
//   //   if (formOne.event.target.value.trim() === "") {
//   //     setError();
//   //     return;
//   //   }
//   //   // } else if (formOne.Email.trim() === "" && currentStep == 1) {
//   //   //   alert("adsad");
//   //   //   if (event.target.value === "") setError();
//   //   //   return;

//   //   if (currentStep < totalSteps.length) {
//   //     setCurrentStep(currentStep + 1);
//   //   }
//   // };

//   const valueChanger = (event) => {
//     const { name, value } = event.target;
//     setFormOne((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   console.log(formOne, "formOne");

//   const totalSteps = [
//     ContainerStep1,
//     ContainerStep2,
//     ContainerStep3,
//     ContainerStep4,
//   ];

//   const Stepper = totalSteps[currentStep];

//   return (
//     <div>
//       {JSON.stringify(formOne)}
//       <Stepper
//         // onNext={handleNext}
//         onPrevious={handlePrevious}
//         valueChanger={valueChanger}
//         formOne={formOne}
//         error={error}
//         setError={setError}
//         currentStep={currentStep}
//         totalSteps={totalSteps}
//         setCurrentStep={setCurrentStep}
//         isVisible={true}
//       />
//     </div>
//   );
// };

// export default FormPage;

// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [userName, setUserName] = useState("");

// const valueChanger =(event) =>{
// if(event.target.name === "First name") {
//   setFirstName(event.target.value)
// } else if (event.target.name === "Last name") {
// setLastName(event.target.value)
// } else if( event.target.name === "User name") {
//   setUserName(event.target.value)
// }
// };

// const valueChanger = (event) => {
//   if (event.target.name.trim() === "First name") {
//     console.log(event.target.name.trim("Firstname"));

//     setFormOne((prev) => {
//       return { ...prev, firstName: event.target.value };
//     });
//   } else if (event.target.name === "Last name") {
//     setFormOne((prev) => {
//       return { ...prev, lastName: event.target.value };
//     });
//   } else if (event.target.name === "User name") {
//     setFormOne((prev) => {
//       return { ...prev, userName: event.target.value };
//     });
//   }
//   if (event.target.name === "Email") {
//     setFormTwo((prev) => {
//       return { ...prev, Email: event.target.value };
//     });
//     console.log(event.target.name);
//   } else if (event.target.name === "Phone number") {
//     setFormTwo((prev) => {
//       return { ...prev, PhoneNumber: event.target.value };
//     });
//   } else if (event.target.name === "Password") {
//     setFormTwo((prev) => {
//       return { ...prev, Password: event.target.value };
//     });
//   } else if (event.target.name === "ConfirmPassword") {
//     setFormTwo((prev) => {
//       return { ...prev, ConfirmPassword: event.target.value };
//     });
//   } else if (event.target.name.trim() === "Date of birth") {
//     setFormThree((prev) => {
//       return { ...prev, DateOfBirth: event.target.value };
//     });
//   } else if (event.target.name.trim() === "Profile image") {
//     setFormThree((prev) => {
//       return { ...prev, ProfileImage: event.target.value };
//     });
//   }
// };

// console.log(firstName,"firsname");
// console.log(lastName,"lastname");
// console.log(userName,"username");

// <div>
//   {currentStep === 1 && (
//     <ContainerStep1
//       isVisible={currentStep === 1}
//       onNext={handleNext}
//       step={`Continue ${currentStep} of ${totalSteps}`}
//     />
//   )}
//
//
// </div>
