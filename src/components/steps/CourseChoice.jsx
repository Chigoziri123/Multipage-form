import {useState, useContext} from 'react'
import {StepperContext} from '../../contexts/StepperContext'

export default function CourseChoice () {
  const {userData, setUserData} = useContext(StepperContext);

  const [selectedPreferredCourse, setSelectedPreferredCourse] = useState("");
  const [isPreferredCourseDropdownOpen, setIsPreferredCourseDropdownOpen] = useState(false);
  const preferredCourseOptions = ["Software Development/Testing", "Data Analysis", "Digital Marketing", "UI/UX Design", "Machine Learning/Automation"];

const handleChange =(e)=> {
  const { name, value } = e.target;
  setUserData({ ...userData, [name]: value});
};

const handlePreferredCourseSelect = (preferredcourse) => {
  setSelectedPreferredCourse(preferredcourse);
  setIsPreferredCourseDropdownOpen(false);
};

return (
  <div className='flex flex-col'>
  <div className='w-full mx-2 flex-1'>
      {/* PREFERRED COURSE */}
      <div className="text-black text-lg font-semibold mt-2.5 max-md:max-w-full">Preferred Course</div>
      <div className="justify-center border flex pl-6 pr-6 h-[32px] rounded-xl border-solid border-green-700 items-end max-md:max-w-full max-md:px-5" onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}>
        <div className="flex justify-start text-black text-lg grow max-md:max-w-full">{selectedPreferredCourse || "Select preferred course"}</div>
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
            <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handlePreferredCourseSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
  </div>
</div>
)

}