// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SectiononeForm from "./components/SectiononeForm";
// import SectiontwoForm from "./components/SectiontwoForm";
// import RegistrationForm from "./components/RegistrationForm";
import {useState} from "react"
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { StepperContext } from "./contexts/StepperContext";
import Personal from "./components/steps/Personal";
import Education from "./components/steps/Education";
import CourseChoice from "./components/steps/CourseChoice";
import Final from "./components/steps/Final";


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
    "Personal Data",
    "Education",
    "Course Choice",
    "Complete"
  ]

  const displayStep =(step) => {
    switch(step) {
      case 1:
        return <Personal />
      case 2:
        return <Education />
      case 3:
        return <CourseChoice />
      case 4:
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
      <div className="container horizontal mt-5"> 
        <Stepper 
          steps={steps}
          currentStep={currentStep}
        />
      </div>
     
      {/* Display components */}
      <div className="my-10 p-10">
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>

      {/* Navigation Control */}
      <StepperControl 
      handleClick={handleClick}
      currentStep={currentStep}
      steps={steps}
      />

    </div>
  )
}

export default App;