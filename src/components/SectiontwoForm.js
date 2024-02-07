// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function SectiontwoForm({ onPrevious, onSubmit, change }) {
//   // State variables for fields
//   const [selectedAvailableIdCard, setSelectedAvailableIdCard] = useState("");
//   const [selectedHighestQualification, setSelectedHighestQualification] = useState("");
//   const [selectedEmploymentStatus, setSelectedEmploymentStatus] = useState("");
//   const [selectedPreferredCourse, setSelectedPreferredCourse] = useState("");
//   const [selectedHearAboutUs, setSelectedHearAboutUs] = useState("");
//   const [isTermsChecked, setIsTermsChecked] = useState(false);

//   // Dropdown Variables
//   const [isAvailableIdCardDropdownOpen, setIsAvailableIdCardDropdownOpen] = useState(false);
//   const [isHighestQualificationDropdownOpen, setIsHighestQualificationDropdownOpen] = useState(false);
//   const [isEmploymentStatusDropdownOpen, setIsEmploymentStatusDropdownOpen] = useState(false);
//   const [isPreferredCourseDropdownOpen, setIsPreferredCourseDropdownOpen] = useState(false);
//   const [isHearAboutUsDropdownOpen, setIsHearAboutUsDropdownOpen] = useState(false);
    
//   // Dropdown options
//   const idCardOptions = ["Passport", "Driver's Licence", "National ID Card", "Permanent Voter's Card"];
//   const eduQualificationOptions = ["SSCE", "Bachelor's Degree", "Master's Degree", "PhD"];
//   const employmentOptions = ["Unemployed", "Self-employed", "Under-employed", "Gainfully employed"];
//   const preferredCourseOptions = ["Software Development/Testing", "Data Analysis", "Digital Marketing", "UI/UX Design", "Machine Learning/Automation"];
//   const aboutusOptions = ["Social Media", "Internet Ad", "Friend/Colleague", "Other means"];

//   const handleAvailableCardSelect = (availableidcard) => {
//     setSelectedAvailableIdCard(availableidcard);
//     setIsAvailableIdCardDropdownOpen(false);
//   };

//   const handleHighestQualificationSelect = (highestqualification) => {
//     setSelectedHighestQualification(highestqualification);
//     setIsHighestQualificationDropdownOpen(false);
//   };

//   const handleEmploymentStatusSelect = (employmentstatus) => {
//     setSelectedEmploymentStatus(employmentstatus);
//     setIsEmploymentStatusDropdownOpen(false);
//   };

//   const handlePreferredCourseSelect = (preferredcourse) => {
//     setSelectedPreferredCourse(preferredcourse);
//     setIsPreferredCourseDropdownOpen(false);
//   };

//   const handleHearAboutUsSelect = (hearaboutus) => {
//     setSelectedHearAboutUs(hearaboutus);
//     setIsHearAboutUsDropdownOpen(false);
//   };

//   return (
//     <div>
//       {/* SUPPORTING DOCUMENTS SECTION */}
//       <div className="text-black text-lg font-semibold mt-2.5 max-md:max-w-full">
//         Supporting Documents
//       </div>

//       <div className="justify-between items-stretch border flex gap-0 px-6 rounded-xl h-[32px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5" onClick={() => setIsAvailableIdCardDropdownOpen(!isAvailableIdCardDropdownOpen)}>
//         <div className="flex justify-start text-black text-lg grow max-md:max-w-full">{selectedAvailableIdCard || "Select Available ID Card"}</div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/78983c65a313e2c3f761e3f4c9343affe4d4ffc117001d53e4b2bcb692b4555f?"
//           className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//           onClick={() => setIsAvailableIdCardDropdownOpen(!isAvailableIdCardDropdownOpen)}
//         />
//       </div>
//       {isAvailableIdCardDropdownOpen && (
//         <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//           {idCardOptions.map((option) => (
//             <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleAvailableCardSelect(option)}>
//               {option}
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="text-black text-lg font-semibold mt-2 max-md:max-w-full">Upload ID Card</div>
//       <div className="items-stretch border flex flex-col px-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5">
//         <form>
//           {/* Upload front of selected ID Card */}
//           <div className="text-black text-lg font-semibold mt-2 max-md:max-w-full">Upload front of selected ID Card</div>
//           <div className="items-stretch border flex justify-between pl-1 py-1 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
//             <input className="text-black text-center text-lg grow my-auto max-md:max-w-full" type="file" />
//           </div>

//           {/* Upload back of selected ID Card */}
//           <div className="mb-2">
//             <div className="text-black text-lg font-semibold mt-2 max-md:max-w-full">Upload back of selected ID Card</div>
//             <div className="items-stretch border flex justify-between pl-1 py-1 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
//               <input className="text-black text-center text-lg grow my-auto max-md:max-w-full" type="file" />
//             </div>
//           </div>
//         </form>
//       </div>

//       <div className="text-black text-lg font-semibold mt-2.5 max-md:max-w-full">Upload Passport Photograph</div>
//       <div className="items-stretch border flex flex-col justify-center px-2 py-7 rounded-xl h-[32px] border-solid border-green-700 max-md:max-w-full max-md:px-5">
//         <div className="items-stretch border flex justify-between pl-1 py-1 rounded-l border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
//           <input className="text-black text-center text-lg grow my-auto max-md:max-w-full" type="file" />
//         </div>
//       </div>

//       {/* HIGHEST QUALIFICATION SECTION */}
//       <div className="text-black text-lg font-semibold mt-2.5 max-md:max-w-full">Highest Educational Qualification</div>

//       <div className="justify-between items-stretch border flex gap-0 px-6 h-[32px] rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5" onClick={() => setIsHighestQualificationDropdownOpen(!isHighestQualificationDropdownOpen)}>
//         <div className="flex justify-start text-black text-lg grow max-md:max-w-full">{selectedHighestQualification || "Select most recent qualification"}</div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4035bd7c4c31a69d81d69f1b668cbec517add3e495421449b948b0d2d0baf315?"
//           className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//           onClick={() => setIsHighestQualificationDropdownOpen(!isHighestQualificationDropdownOpen)}
//         />
//       </div>

//       {isHighestQualificationDropdownOpen && (
//         <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//           {eduQualificationOptions.map((option) => (
//             <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleHighestQualificationSelect(option)}>
//               {option}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* EMPLOYMENT STATUS */}
//       <div className="text-black text-lg font-semibold mt-2.5 max-md:max-w-full">Employment Status</div>
//       <div className="justify-between items-stretch border flex gap-0 px-6 rounded-xl h-[32px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5" onClick={() => setIsEmploymentStatusDropdownOpen(!isEmploymentStatusDropdownOpen)}>
//         <div className="flex justify-start text-black text-lg grow max-md:max-w-full">{selectedEmploymentStatus || "Select employment status"}</div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9a63222cecbfa03295f3268842b57cbec0a4ecbfbb20c1d6f16fa6a6f699f1?"
//           className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//           onClick={() => setIsEmploymentStatusDropdownOpen(!isEmploymentStatusDropdownOpen)}
//         />
//       </div>
//       {isEmploymentStatusDropdownOpen && (
//         <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//           {employmentOptions.map((option) => (
//             <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleEmploymentStatusSelect(option)}>
//               {option}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* PREFERRED COURSE */}
//       <div className="text-black text-lg font-semibold mt-2.5 max-md:max-w-full">Preferred Course</div>
//       <div className="justify-center border flex pl-6 pr-6 h-[32px] rounded-xl border-solid border-green-700 items-end max-md:max-w-full max-md:px-5" onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}>
//         <div className="flex justify-start text-black text-lg grow max-md:max-w-full">{selectedPreferredCourse || "Select preferred course"}</div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/1066169dc897401801692b8d9e53b82914772ef8949a81583d7ca1b2ff6b2e67?"
//           className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//           onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}
//         />
//       </div>
      
//       {isPreferredCourseDropdownOpen && (
//         <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//           {preferredCourseOptions.map((option) => (
//             <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handlePreferredCourseSelect(option)}>
//               {option}
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="text-black text-lg font-semibold mt-2.5 max-md:max-w-full">Why choose preferred course?</div>
//       <input className="text-black text-lg items-stretch border mt-2 pb-20 px-6 rounded-xl w-full border-solid border-green-700 max-md:max-w-full max-md:pb-10 max-md:px-5" placeholder="Why have you chosen this course?" type="text" />

//       <div className="text-black text-lg font-semibold mt-2.5 max-md:max-w-full">How did you hear about us?</div>
//       <div className="items-stretch border flex justify-between gap-0 h-[32px] px-6 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5" onClick={() => setIsHearAboutUsDropdownOpen(!isHearAboutUsDropdownOpen)}>
//         <div className="text-black text-lg grow max-md:max-w-full">{selectedHearAboutUs || "Select a channel." }</div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/c116a34fd5fd8ccbc3201e4339171848ff9d0550c7ac8c3c0cc9810c86f81d6d?"
//           className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//           onClick={() => setIsHearAboutUsDropdownOpen(!isHearAboutUsDropdownOpen)}
//         />
//       </div>

//       {isHearAboutUsDropdownOpen && (
//         <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//           {aboutusOptions.map((option) => (
//             <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleHearAboutUsSelect(option)}>
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
    
//       <div className="justify-center text-black text-lg font-light max-md:max-w-full">Information collected in this form will be used solely for the purpose of course enrollment.</div>

//       {/* Terms and Conditions Section */}
//       <div className="items-stretch flex pb-2.5 max-md:max-w-full max-md:flex-wrap">
//         <input 
//           type="checkbox"
//           className={`border ${isTermsChecked ? 'bg-green-700' : 'bg-white'} flex w-[30px] shrink-0 h-[30px] flex-col my-auto border-solid border-green-700`}
//           onClick={() => setIsTermsChecked(!isTermsChecked)} 
//         />
//         <p className="py-2 px-2 text-black text-lg font-light grow max-md:max-w-full">
//           I have read and agree to the terms and conditions.
//         </p>
//       </div>

//       {/* Submit Button */}
//       <div className="flex justify-center">
//         <Link to="/successfulreg">
//           <button onClick={change} className="text-white text-center text-xl justify-center items-center bg-[green-700] self-center w-[200px] max-w-full px-8 py-2 rounded-xl max-md:px-5 cursor-pointer">
//             Submit
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default SectiontwoForm;
