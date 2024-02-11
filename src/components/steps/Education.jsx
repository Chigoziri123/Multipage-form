import {useState, useContext} from 'react'
import {StepperContext} from '../../contexts/StepperContext'

export default function Education () {
  const {userData, setUserData} = useContext(StepperContext);

  const [selectedHighestQualification, setSelectedHighestQualification] = useState("");
  const [isHighestQualificationDropdownOpen, setIsHighestQualificationDropdownOpen] = useState(false);
  const eduQualificationOptions = ["SSCE", "Bachelor's Degree", "Master's Degree", "PhD"];

const handleChange =(e)=> {
  const { name, value } = e.target;
  setUserData({ ...userData, [name]: value});
};


const handleHighestQualificationSelect = (highestqualification) => {
  setSelectedHighestQualification(highestqualification);
  setIsHighestQualificationDropdownOpen(false);
};


return (
  <div className='flex flex-col'>
  <div className='w-full mx-2 flex-1'>
     
      {/* HIGHEST QUALIFICATION SECTION */}
      <div className="text-black text-lg font-semibold mt-2.5 max-md:max-w-full">Highest Educational Qualification</div>

      <div className="justify-between items-stretch border flex gap-0 px-6 h-[32px] rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5" onClick={() => setIsHighestQualificationDropdownOpen(!isHighestQualificationDropdownOpen)}>
        <div className="flex justify-start text-black text-lg grow max-md:max-w-full">{selectedHighestQualification || "Select most recent qualification"}</div>
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
  </div>
</div>
)

}