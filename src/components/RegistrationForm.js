// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SectiononeForm from "./SectiononeForm";
// import SectiontwoForm from "./SectiontwoForm";

// function RegistrationForm( {change}) {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="container mx-auto px-4 lg:px-0 bg-white z-1000">
//       {currentPage === 1 && <SectiononeForm onNext={handleNextPage} />}
//       {currentPage === 2 && <SectiontwoForm onPrevious={handlePreviousPage} />}

//       {/* Navigation Buttons */}
//       <div className="flex justify-between mt-4">
//         {currentPage > 1 && (
//           <button className="bg-gray-300 px-3 py-1 rounded" onClick={handlePreviousPage}>
//             &lt; Back
//           </button>
//         )}
//         {currentPage < 2 && (
//           <button className="bg-gray-300 px-3 py-1 rounded" onClick={handleNextPage}>
//             Next &gt;
//           </button>
//         )}
//       </div>

//       {/* Forward/Backward Arrows
//       {currentPage === 1 && (
//         <div className="fixed bottom-4 left-4">
//           <Link to={"/"}>
//             <button className="relative w-[368px] h-[55px] font-semibold text-white text-[16px] text-center tracking-[0] leading-[normal]">
//               Previous Page
//             </button>
//           </Link>
//         </div>
//       )}
//       {currentPage === 2 && (
//         <div className="fixed bottom-4 left-4">
//           <Link to={"/dashboard"}>
//             <button className="relative w-[368px] h-[55px] font-semibold text-white text-[16px] text-center tracking-[0] leading-[normal]">
//               Submit
//             </button>
//           </Link>
//         </div>
//       )} */}
//     </div>
//   );
// }

// export default RegistrationForm;
