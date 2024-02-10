import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SectionOneForm({ onNext }) {
  // State variables for fields
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nin, setNIN] = useState("");
  const [selectedLga, setSelectedLga] = useState("");
  const [selectedState, setSelectedState] = useState("");
 
  // State variables for field errors
  const [fullNameError, setFullNameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [ninError, setNINError] = useState("");

  // Dropdown Variables
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [isLgaDropdownOpen, setIsLgaDropdownOpen] = useState(false);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);

 // Dropdown options
 const genderOptions = ["Male", "Female"];

 const handleBlur = (field, value) => {
   if (!value.trim()) {
     switch (field) {
       case "fullName":
         setFullNameError("*This is a required field.");
         break;
       case "dob":
         setDobError("*This is a required field.");
         break;
       case "gender":
         setGenderError("*This is a required field.");
         break;
       default:
         break;
       }
   }
   else {
     switch (field) {
       case "fullName":
         setFullNameError("");
         break;
       case "dob":
         setDobError("");
         break;
       case "gender":
         setGenderError("");
         break;
       default:
         break;
       }

   }
 }

 const handleGenderSelect = (gender) => {
   setSelectedGender(gender);
   setIsGenderDropdownOpen(false);
 };

 const handleLgaSelect = (lga) => {
   setSelectedLga(lga);
   setIsLgaDropdownOpen(false);
 };

 const handleStateSelect = (state) => {
   setSelectedState(state);
   setIsStateDropdownOpen(false);
 };

 
 const handleDobSelect = (value) => {
   setDob(value);
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
  
  
  // Handle form submission for this section
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic for full name
    if (!fullName.trim()) {
      setFullNameError("*This is a required field.");
      return;
    } else {
      setFullNameError("");
    }

    // Validation logic for date of birth
    if (!dob) {
      setDobError("*This is a required field.");
      return;
    } else {
      setDobError("");
    }

    // Validation logic for gender
    if (!selectedGender) {
      setGenderError("*This is a required field.");
      return;
    } else {
      setGenderError("");
    }

    // Validation logic for phone number
    if (!phoneNumber.trim() || phoneNumber.length !== 11 || isNaN(phoneNumber)) {
      setPhoneNumberError("Please enter a valid 11-digit phone number.");
      return;
    } else {
      setPhoneNumberError("");
    }

    // Validation logic for NIN
    if (!nin.trim() || nin.length !== 11 || isNaN(nin)) {
      setNINError("Please enter a valid 11-digit NIN.");
      return;
    } else {
      setNINError("");
    }

    // If all validations pass, proceed to the next section
    onNext();
  };

  return (
    <div className="container mx-auto px-4 lg:px-0 bg-white z-1000">
      {/* Registration Form */}
      <div className="max-w-2xl mx-auto ">
        <div className="text-green-700 text-center text-3xl font-bold mx-5 max-md:max-w-full max-md:mr-2.5">
          Let's get you registered.
        </div>

      {/* Full Name Section */}
      <div className="text-black font-semibold text-lg mt-2.5 max-md:max-w-full max-md:mt-10">
        Full Name (as it appears in your documents)
          <input className={`w-full items-center border flex shrink-0 h-[32px] py-2 flex-col max-md:max-w-full mt-2 pl-5 rounded-xl ${fullNameError ? 'border-red-500' : 'border-solid border-green-700'}`}
            type="text" 
            value={fullName} 
            onChange={(e)=> setFullName(e.target.value)}
            onBlur={() => handleBlur("fullName", fullName)}
            placeholder="Enter your full name"
          />
        {fullNameError && <p className="text-red-500 mt-1">{fullNameError}</p>}
      </div>
      
       {/* Date of Birth (DOB) & Gender Sections */}
      <div className="mt-2 max-md:max-w-full">
        <div className="gap-4 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-md:mt-2.5">
              <div className="text-black text-lg font-semibold max-md:max-w-full">Date of Birth</div>
              <div className="items-stretch border flex justify-between h-[32px] gap-0 mt-2 px-6 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="text-black text-lg grow">{}
                  <DatePicker selected={dob} onChange={handleDobSelect} placeholderText="MM/DD/YYYY"/>
                </div>
              </div> 
              {dobError && <p className="text-red-500 mt-1">{dobError}</p>}
            </div>
       
            <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-md:mt-2.5">
              <div className="text-black text-lg font-semibold max-md:max-w-full">Gender</div>
              <div 
                className="items-stretch border flex justify-between gap-0 mt-2 px-6 rounded-xl h-[32px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
                onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}>
                <div className="text-black text-lg grow">{selectedGender || "Specify"}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ce047be0e562e64bf8a16c54af587005b102e240974d41a4f1bfbdf3284720b?"
                  className="aspect-[2] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
                  onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}
                />
              </div>
              {isGenderDropdownOpen && (
                <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
                  {genderOptions.map((option) => (
                    <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleGenderSelect(option)}>
                      {option}
                    </div>
                  ))}
                </div>
              )}
              {genderError && <p className="text-red-500 mt-1">{genderError}</p>}
            </div>
        </div>
      </div>

      {/* Phone Number & NIN Section*/}
      <div className="mt-2.5 max-md:max-w-full">
        <div className="flex max-md:flex-col gap-4 max-md:items-stretch max-md:gap-0">
          <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-2.5 lg:w-1/2">
            <div className="text-black text-lg font-semibold max-md:max-w-full">Phone Number</div>
            <input 
              className={`text-black text-lg justify-center border mt-2 pl-6 rounded-xl h-[32px] border-solid ${
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

          <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-2.5 lg:w-1/2">
            <div className="text-black text-lg font-semibold max-md:max-w-full">NIN</div>
            <input className="text-black text-lg justify-center border mt-2 pl-6 rounded-xl h-[32px] border-solid border-green-700"
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

      {/* Address Section */}
      <div className="text-black text-lg font-semibold mt-2.5 max-md:max-w-full">
        Contact Address
      </div>
      <div className="items-stretch flex justify-between gap-5 mt-2 max-md:max-w-full max-md:flex-wrap">
        {/* Apartment Field */}
        <input className="text-black text-lg justify-center items-stretch border grow px-6 h-[32px] rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5"
          placeholder="Apartment"
          type="text">
        </input>

         {/* Street Name Field */}
        <input className="text-black text-lg justify-center items-stretch border grow px-6 h-[32px] rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5"
          placeholder="Street Name"
          type="text">
        </input>   
      </div>

       {/* City/Town Field */}
       <input 
          className="text-black text-lg w-full justify-center items-stretch border mt-2.5 px-6 h-[32px] rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5"
          type="text"
          placeholder="City/Town"> 
        </input>

       {/* LGA/State Field */}
      
      <div className="items-stretch flex justify-evenly gap-5 max-md:max-w-full mt-2 max-md:flex-wrap">

        <div className="flex items-stretch border justify-between h-[32px] mt-2 px-6 w-full rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap lg:w-1/2 max-md:px-5">
          <input 
            type="text"
            placeholder="LGA"
            className="text-black text-lg grow">
          </input>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64462fc9619791bf8b68c2def239fa154ee59f0442c07837798cfb86fe3dd443?"
            className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          />
        </div>
  
        <div className=" flex items-stretch border justify-between h-[32px] mt-2 px-6 w-full rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap lg:w-1/2 max-md:px-5">
          <input
              type="text"
              placeholder="State"
              className="text-black text-lg grow"></input>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64462fc9619791bf8b68c2def239fa154ee59f0442c07837798cfb86fe3dd443?"
            className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          />
        </div>
      </div>
    </div>
    <button className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-xl" onClick={handleSubmit}>Submit</button>
  </div>
  );
}

export default SectionOneForm;