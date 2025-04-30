"use client";
import { useState } from "react";
import ContainerStep1 from "./ContainerStep1";
import ContainerStep2 from "./ContainerStep2";
import ContainerStep3 from "./ContainerStep3";
import ContainerStep4 from "./ContainerStep4";
import { Input } from "postcss";
import { LogIn } from "lucide-react";

const FormPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < totalSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

const [formOne,setFormOne] = useState({
  firstName:"",
  lastName:"",
  userName:""
});

const [formTwo, setFormTwo] = useState({
  Email:"",
  PhoneNumber:"",
  Password:"",
  ConfirmPassword:""
});


const valueChanger =(event) =>{
if(event.target.name === "First name") {
  setFormOne((prev)=> {
return {...prev, firstName:event.target.value};
});

} else if (event.target.name === "Last name") {
setFormOne((prev)=>{
  return {...prev, lastName:event.target.value};
});
} else if( event.target.name === "User name") {
  setFormOne((prev)=> {
    return {...prev, userName: event.target.value};
  });
}
if(event.target.name === "Email") {
  setFormTwo((prev)=> {
    return {...prev, Email: event.target.value}
  })
  console.log(event.target.name);
  
} else if(event.target.name === "Phone number") {
  setFormTwo((prev)=> {
  return  {...prev, PhoneNumber: event.target.value};
  })
} else if(event.target.name === "Password") {
  setFormTwo((prev)=> {
  return  {...prev, Password: event.target.value};
  })
} else if(event.target.name === "ConfirmPassword") {
  setFormTwo((prev)=> {
  return  {...prev, ConfirmPassword: event.target.value};
  })

}

};

console.log(formTwo,"formTwo");
console.log(formOne,'formOne');



  const totalSteps = [
    ContainerStep1,
    ContainerStep2,
    ContainerStep3,
    ContainerStep4,
  ];

  const Stepper = totalSteps[currentStep];
  // const step = {` ${currentStep} of ${totalSteps}`}
  return (
    <div>
      <Stepper onNext={handleNext} onPrevious={handlePrevious} valueChanger={valueChanger} formOne={formOne} formTwo={formTwo}/>
    </div>
  );
};

export default FormPage;




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
