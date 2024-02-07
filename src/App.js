// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SectiononeForm from "./components/SectiononeForm";
// import SectiontwoForm from "./components/SectiontwoForm";
// import RegistrationForm from "./components/RegistrationForm";
import {useState} from "react"
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Personal from "./components/steps/Personal";
import Education from "./components/steps/Education";
import CourseChoice from "./components/steps/CourseChoice";
import Others from "./components/steps/Others";
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

  const [currentStep, setCuurrentStep] = useState(1);

  const steps = [
    "Personal Information",
    "Educational Qualifications",
    "Course Choice",
    "Document Upload",
    "Other Information",
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
        return <Others />
      case 5:
        return <Final />
      // case 6:
      //   return <Personal />
  }
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
     

      {/* Navigation Control */}
      <StepperControl />

    </div>
  )
}

export default App;