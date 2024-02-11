import {useState, useContext} from 'react'
import {StepperContext} from '../../contexts/StepperContext'

export default function StepTwo () {
  const {userData, setUserData} = useContext(StepperContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nin, setNIN] = useState("");

  const [selectedHighestQualification, setSelectedHighestQualification] = useState("");
  const [isHighestQualificationDropdownOpen, setIsHighestQualificationDropdownOpen] = useState(false);
  const eduQualificationOptions = ["SSCE", "Bachelor's Degree", "Master's Degree", "PhD"];
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [ninError, setNINError] = useState("");


  const handleChange =(e)=> {
  const { name, value } = e.target;
  setUserData({ ...userData, [name]: value});
};


const handleHighestQualificationSelect = (highestqualification) => {
  setSelectedHighestQualification(highestqualification);
  setIsHighestQualificationDropdownOpen(false);
};

const handlePhoneNumberChange = (e) => {
  const input = e.target.value;
  if (/^\d*$/.test(input) && input.length <= 11) {
    setPhoneNumber(input);
    setPhoneNumberError("");
  }
  else 
  {
    setPhoneNumberError("11 digits are required.");
  }
};

const handleNINChange = (e) => {
  const input = e.target.value;
  if (/^\d*$/.test(input) && input.length <= 11) {
    setNIN(input);
    setNINError("");
  }
  else
  {
    setNINError("11 digits are required.");
  }
};
 
 
//  // Validation logic for phone number
//  if (!phoneNumber.trim() || phoneNumber.length !== 11 || isNaN(phoneNumber)) {
//   setPhoneNumberError("Please enter a valid 11-digit phone number.");
//   return;
// } else {
//   setPhoneNumberError("");


// Validation logic for NIN
// if (!nin.trim() || nin.length !== 11 || isNaN(nin)) {
//   setNINError("Please enter a valid 11-digit NIN.");
//   return;
// } else {
//   setNINError("");
// }

return (
  <div className='flex flex-col'>
  <div className='w-full mx-2 flex-1'>

      {/* Phone Number & NIN Section*/}
      <div className="mt-2 max-md:max-w-full">
        <div className="flex max-md:flex-col gap-4 max-md:items-stretch max-md:gap-0">
          <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-2.5 lg:w-1/2">
            <div className="text-black text-lg font-semibold max-sm:text-xs max-md:max-w-full">Phone Number</div>
            <input 
              className={`text-black text-lg max-sm:text-xs justify-center border mt-2 pl-6 rounded-xl h-[32px] border-solid ${
              phoneNumberError ? "border-red-500" : " border-green-700"} items-start max-md:max-w-full max-md:px-5`}
              type="number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="08012345678"  
            />
            {phoneNumberError && (
              <p className="text-red-500 mt-1">{phoneNumberError}</p>
            )}
          </div>

          <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-2 lg:w-1/2">
            <div className="text-black text-lg font-semibold max-sm:text-xs max-md:max-w-full">NIN</div>
            <input className="text-black text-lg max-sm:text-xs justify-center border mt-2 max-sm:pr-6 pl-6 rounded-xl h-[32px] border-solid border-green-700"
              type="number"
              value={nin}
              onChange={handleNINChange}
              placeholder="Enter NIN"  
            />
            {ninError && (
              <p className="text-red-500 mt-1">{ninError}</p>
            )}
          </div>
        </div>
      </div>

     
      {/* HIGHEST QUALIFICATION SECTION */}
      <div className="text-black text-lg font-semibold mt-2 max-sm:pb-2 max-sm:text-xs max-md:max-w-full">Highest Educational Qualification</div>

      <div className="flex justify-between max-sm:pt-1.5 items-stretch border gap-0 px-6 h-[32px] rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5" onClick={() => setIsHighestQualificationDropdownOpen(!isHighestQualificationDropdownOpen)}>
        <div className="flex justify-start text-black text-lg max-sm:text-xs grow max-md:max-w-full">{selectedHighestQualification || "Select most recent qualification"}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4035bd7c4c31a69d81d69f1b668cbec517add3e495421449b948b0d2d0baf315?"
          className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          onClick={() => setIsHighestQualificationDropdownOpen(!isHighestQualificationDropdownOpen)}
        />
      </div>

      {isHighestQualificationDropdownOpen && (
        <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
          {eduQualificationOptions.map((option) => (
            <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleHighestQualificationSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}

       {/* Upload academic certificate */}
       <div className="text-black text-lg font-semibold max-sm:text-xs mt-2  max-sm:pb-2 max-md:max-w-full">Upload certificate</div>
          <div className="items-stretch border flex justify-between py-1 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
            <input className="text-black max-sm:text-xs text-start pl-2 text-lg grow my-auto max-md:max-w-full" type="file" />
          </div>
  </div>
</div>
)
}


