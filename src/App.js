// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SectiononeForm from "./components/SectiononeForm";
// import SectiontwoForm from "./components/SectiontwoForm";
// import RegistrationForm from "./components/RegistrationForm";

import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";

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
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      
      {/* Stepper */}
      <div className="container horizontal mt-5"> 
      <Stepper />
      </div>
     

      {/* Navigation Control */}
      <StepperControl />

    </div>
  )
}

export default App;