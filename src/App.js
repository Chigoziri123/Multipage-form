// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SectiononeForm from "./components/SectiononeForm";
// import SectiontwoForm from "./components/SectiontwoForm";
// import RegistrationForm from "./components/RegistrationForm";
import {useState} from "react"
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { StepperContext } from "./contexts/StepperContext";
import StepOne from "./components/steps/StepOne";
import StepTwo from "./components/steps/StepTwo";
import StepThree from "./components/steps/StepThree";
import Final from "./components/steps/Final";
import StepFour from "./components/steps/StepFour"

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/sectionone" element={<SectiononeForm />} />
//         <Route path="/sectiontwo" element={<SectiontwoForm />} />
//         <Route path="/registration" element={<RegistrationForm />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


function App() {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState('')


  const steps = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Complete"
  ]

  const displayStep =(step) => {
    switch(step) {
      case 1:
        return <StepOne />
      case 2:
        return <StepTwo />
      case 3:
        return <StepThree />
      case 4:
        return <StepFour />
      case 5:
        return <Final />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;

    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      
      {/* Stepper */}
      <div className="container horizontal mt-2"> 
        <Stepper 
          steps={steps}
          currentStep={currentStep}
        />
      </div>
     
      {/* Display components */}
      <div className="my-2 p-6">
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>

      {/* Navigation controls */}
      {currentStep != steps.length &&
      <StepperControl 
      handleClick={handleClick}
      currentStep={currentStep}
      steps={steps}
      />
      }

    </div>
  )
}

export default App;