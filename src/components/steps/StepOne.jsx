import { useState, useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function StepOne() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");

  // State variables for field errors
  const [fullNameError, setFullNameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");

  // Dropdown Variables
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);

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
    } else {
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
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setIsGenderDropdownOpen(false);
  };

  const handleDobSelect = (value) => {
    setDob(value);
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

    // If all validations pass, proceed to the next section
    // onNext();
  };

  return (
    <div className='flex flex-col'>
      <div className="container mx-auto px-4 lg:px-0 bg-white">
        {/* Registration Form */}
        <div className="max-w-2xl mx-auto ">
          {/* Full Name Section */}
          <div className="text-black font-semibold text-lg max-md:max-w-full max-md:mt-2 max-sm:text-xs max-sm:mt-1">
            Full Name (as it appears in your documents)
            <input
              className={`w-full items-center border flex shrink-0 h-[32px] py-2 flex-col max-md:max-w-full mt-2 pl-5 rounded-xl ${fullNameError ? 'border-red-500' : 'border-solid border-green-700'}`}
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => handleBlur("fullName", fullName)}
              placeholder="Enter your full name"
            />
            {fullNameError && <p className="text-red-500 sm:text-xs mt-1">{fullNameError}</p>}
          </div>


          {/* Date of Birth (DOB) & Gender Sections */}
          <div className="mt-2 max-sm:mt-1 max-md:max-w-full ">
            <div className="gap-4 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
              <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-md:mt-2 max-sm:mt-1">
                <div className="text-black text-lg font-semibold max-md:max-w-full  max-sm:text-xs">Date of Birth</div>
                <div className="items-stretch border flex justify-between h-[32px] gap-0 mt-2 px-6 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                  <div className="max-sm:pt-2 text-black text-lg grow max-sm:text-xs">{}
                    <DatePicker selected={dob} onChange={handleDobSelect} placeholderText="MM/DD/YYYY" />
                  </div>
                </div>
                {dobError && <p className="text-red-500 mt-1">{dobError}</p>}
              </div>

              <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-sm:mt-1 max-md:mt-2">
                <div className="text-black text-lg font-semibold max-md:max-w-full max-sm:text-xs">Gender</div>
                <div
                  className="items-stretch border flex justify-between gap-0 mt-2 px-6 rounded-xl h-[32px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
                  onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}>
                  <div className="max-sm:pt-2 text-black text-lg grow  max-sm:text-xs">{selectedGender || "Specify"}</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ce047be0e562e64bf8a16c54af587005b102e240974d41a4f1bfbdf3284720b?"
                    className="aspect-[2] object-contain object-center w-[22px] fill-black shrink-0 my-auto  "
                    onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}
                  />
                </div>
                {isGenderDropdownOpen && (
                  <div className="flex flex-col mt-2 max-sm:mt-1 border border-solid border-green-700 rounded-md">
                    {genderOptions.map((option) => (
                      <div key={option} className="p-2 cursor-pointer hover:bg-gray-200 max-sm:text-xs" onClick={() => handleGenderSelect(option)}>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                {genderError && <p className="text-red-500 mt-1 max-sm:text-xs">{genderError}</p>}
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="text-black text-lg max-sm:mt-1 font-semibold max-sm:text-xs mt-2 max-md:max-w-full">
            Contact Address
          </div>
          <div className="items-stretch flex justify-between gap-5 mt-2 max-sm:mt-1 max-md:max-w-full max-md:flex-wrap">
            {/* Apartment Field */}
            <input className="text-black text-lg justify-center max-sm:text-xs items-stretch border grow px-6 h-[32px] rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5"
              placeholder="Home Address"
              type="text">
            </input>
          </div>

          {/* LGA/State Field */}
          <div className="items-stretch max-sm:mt-1 flex justify-evenly gap-1.5 max-md:max-w-full mt-2 max-md:flex-wrap">

            <div className="flex items-stretch border max-sm:mt-1 justify-between max-sm:text-xs h-[32px] mt-2 px-6 w-full rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap lg:w-1/2 max-md:px-5">
              <input
                type="text"
                placeholder="LGA"
                className="text-black max-sm:text-xs text-lg grow">
              </input>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64462fc9619791bf8b68c2def239fa154ee59f0442c07837798cfb86fe3dd443?"
                className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
              />
            </div>

            <div className="flex items-stretch border max-sm:mt-1 justify-between max-sm:text-xs h-[32px] mt-2 px-6 w-full rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap lg:w-1/2 max-md:px-5">
              <input
                type="text"
                placeholder="State"
                className="text-black max-sm:text-xs text-lg grow"></input>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64462fc9619791bf8b68c2def239fa154ee59f0442c07837798cfb86fe3dd443?"
                className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
