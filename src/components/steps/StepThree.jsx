import {useState, useContext} from 'react'
import {StepperContext} from '../../contexts/StepperContext'

export default function StepThree () {
  const {userData, setUserData} = useContext(StepperContext);

  const [selectedAvailableIdCard, setSelectedAvailableIdCard] = useState("");
  const [isAvailableIdCardDropdownOpen, setIsAvailableIdCardDropdownOpen] = useState(false);
  const idCardOptions = ["Passport", "Driver's Licence", "National ID Card", "Permanent Voter's Card"];

  
  const [selectedPreferredCourse, setSelectedPreferredCourse] = useState("");
  const [isPreferredCourseDropdownOpen, setIsPreferredCourseDropdownOpen] = useState(false);
  const preferredCourseOptions = ["Software Development/Testing", "Data Analysis", "Digital Marketing", "UI/UX Design", "Machine Learning/Automation"];

const handleChange =(e)=> {
  const { name, value } = e.target;
  setUserData({ ...userData, [name]: value});
};


const handleAvailableCardSelect = (availableidcard) => {
  setSelectedAvailableIdCard(availableidcard);
  setIsAvailableIdCardDropdownOpen(false);
};

const handlePreferredCourseSelect = (preferredcourse) => {
  setSelectedPreferredCourse(preferredcourse);
  setIsPreferredCourseDropdownOpen(false);
};

return (
  <div className='flex flex-col'>
  <div className='w-full mx-2 flex-1'>

       {/* SUPPORTING DOCUMENTS SECTION */}
       <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">
        Supporting Documents
      </div>

      <div className="justify-between items-stretch border flex gap-0 px-6 rounded-xl h-[32px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5" onClick={() => setIsAvailableIdCardDropdownOpen(!isAvailableIdCardDropdownOpen)}>
        <div className="flex justify-start max-sm:text-xs max-sm:py-2 text-black text-lg grow max-md:max-w-full">{selectedAvailableIdCard || "Select Available ID Card"}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78983c65a313e2c3f761e3f4c9343affe4d4ffc117001d53e4b2bcb692b4555f?"
          className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          onClick={() => setIsAvailableIdCardDropdownOpen(!isAvailableIdCardDropdownOpen)}
        />
      </div>
      {isAvailableIdCardDropdownOpen && (
        <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
          {idCardOptions.map((option) => (
            <div key={option} className="p-2 cursor-pointer hover:bg-gray-200 max-sm:text-xs" onClick={() => handleAvailableCardSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}

      <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Upload ID Card</div>
      <div className="items-stretch border flex flex-col px-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5">
        <form>
          {/* Upload front of selected ID Card */}
          <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Upload front of selected ID Card</div>
          <div className="items-stretch border flex justify-between pl-1 py-1 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
            <input className="text-black text-start text-lg grow my-auto max-sm:text-xs max-md:max-w-full" type="file" />
          </div>

          {/* Upload back of selected ID Card */}
          <div className="mb-2">
            <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Upload back of selected ID Card</div>
            <div className="items-stretch border flex justify-between pl-1 py-1 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
              <input className="text-black text-start text-lg grow my-auto max-sm:text-xs max-md:max-w-full" type="file" />
            </div>
          </div>
        </form>
      </div>
      {/* PREFERRED COURSE */}
      <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Preferred Course</div>
      <div className="justify-center border flex pl-6 pr-6 h-[32px] rounded-xl border-solid border-green-700 items-end max-md:max-w-full max-md:px-5" onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}>
        <div className="flex justify-start text-black text-lg grow max-sm:text-xs ma-sm: pb-2 max-md:max-w-full">{selectedPreferredCourse || "Select preferred course"}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1066169dc897401801692b8d9e53b82914772ef8949a81583d7ca1b2ff6b2e67?"
          className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}
        />
      </div>
      
      {isPreferredCourseDropdownOpen && (
        <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
          {preferredCourseOptions.map((option) => (
            <div key={option} className="p-2 cursor-pointer max-sm:text-xs hover:bg-gray-200" onClick={() => handlePreferredCourseSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
  </div>
</div>
)

}