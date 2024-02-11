import {useState, useContext} from 'react'
import {StepperContext} from '../../contexts/StepperContext'

export default function StepFour () {
  const {userData, setUserData} = useContext(StepperContext);

  const [selectedHearAboutUs, setSelectedHearAboutUs] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const [isHearAboutUsDropdownOpen, setIsHearAboutUsDropdownOpen] = useState(false);

  const aboutusOptions = ["Social Media", "Internet Ad", "Friend/Colleague", "Other means"];

const handleChange =(e)=> {
  const { name, value } = e.target;
  setUserData({ ...userData, [name]: value});
};

const handleHearAboutUsSelect = (hearaboutus) => {
    setSelectedHearAboutUs(hearaboutus);
    setIsHearAboutUsDropdownOpen(false);
  };


return (
    <div>
         <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-sm:mb-2 max-md:max-w-full">How did you hear about us?</div>
      <div className="items-stretch border flex justify-between gap-0 h-[32px] px-6 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5" onClick={() => setIsHearAboutUsDropdownOpen(!isHearAboutUsDropdownOpen)}>
        <div className="text-black text-lg grow max-sm:text-xs max-sm:pt-2 max-md:max-w-full">{selectedHearAboutUs || "Select a channel." }</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c116a34fd5fd8ccbc3201e4339171848ff9d0550c7ac8c3c0cc9810c86f81d6d?"
          className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          onClick={() => setIsHearAboutUsDropdownOpen(!isHearAboutUsDropdownOpen)}
        />
      </div>

      {isHearAboutUsDropdownOpen && (
        <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
          {aboutusOptions.map((option) => (
            <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleHearAboutUsSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    
      <div className="flex justify-center text-black text-lg max-sm:text-xs max-sm:mt-2 font-light max-md:max-w-full">Information collected in this form will be used solely for the purpose of course enrollment.</div>

      {/* Terms and Conditions Section */}
      <div className="items-stretch flex pb-2 max-md:max-w-full max-md:flex-wrap">
        <input 
          type="checkbox"
          className={`border ${isTermsChecked ? 'bg-green-700' : 'bg-white'} flex w-[30px] shrink-0 h-[30px] flex-col my-auto border-solid border-green-700`}
          onClick={() => setIsTermsChecked(!isTermsChecked)} 
        />
        <p className="py-2 px-2 text-black text-lg max-sm:text-xs max-sm:mt-2 font-light grow max-md:max-w-full">
          I have read and agree to the terms and conditions.
        </p>
      </div>
    </div>
 
)

}