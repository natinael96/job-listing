import { FaMapMarkerAlt, FaRegCalendarCheck } from "react-icons/fa";
import { LuCalendarClock, LuPlusCircle } from "react-icons/lu";
import { SlFire } from "react-icons/sl";

interface DescriptionProps {
    datePosted: string;
    deadline: string;
    startDate: string;
    endDate: string;
    categories: string[];
    requiredSkills: string[];
    location: string[];
}

const Description = ({ datePosted, deadline, startDate, endDate, categories, requiredSkills, location }: DescriptionProps) => {

    function formatDate(date: string) {
        const d = new Date(date);
        return d.toDateString();
    }

    return (
        <div className="px-28">
            <div>
                <h1 className='py-3 font-extrabold text-3xl text-black'>About</h1>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-3 items-center'>
                        <LuPlusCircle className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm' />
                        <div className='flex flex-col'>
                            <div className='font-light'>Posted On</div>
                            <div>{formatDate(datePosted)}</div>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <SlFire className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm' />
                        <div className='flex flex-col'>
                            <div className='font-light'>Deadline</div>
                            <div>{formatDate(deadline)}</div>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaMapMarkerAlt className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm' />
                        <div className='flex flex-col'>
                            <div className='font-light'>Location</div>
                            <div>{location.join(', ')}</div>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <LuCalendarClock className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm' />
                        <div className='flex flex-col'>
                            <div className='font-light'>Start Date</div>
                            <div>{formatDate(startDate)}</div>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center mb-5'>
                        <FaRegCalendarCheck className='text-blue-600 rounded-full p-2 border-2 h-[35px] w-[35px] shadow-sm' />
                        <div className='flex flex-col'>
                            <div className='font-light'>End Date</div>
                            <div>{formatDate(endDate)}</div>
                        </div>
                    </div>
                    <div className='border-b-2 font-light border-blue-200 w-full'></div>
                </div>
            </div>
            <div className='flex flex-col gap-3 mb-4'>
                <h1 className="py-3 font-extrabold text-2xl text-black">Categories</h1>
                <div className='flex flex-wrap gap-4'>
                    {categories.map((category, index) => (
                        <button key={index} className='border-2 py-1 px-3 text-sm bg-orange-100 rounded-full text-[#FFB836]'>
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className='border-b-2 font-light border-blue-200 w-full'></div>
            <div>
                <h1 className="py-3 font-extrabold text-3xl text-black">Required Skills</h1>
                <div className='flex flex-wrap gap-4'>
                    {requiredSkills.map((skill, index) => (
                        <button key={index} className='bg-[#F8F8FD] px-3 py-1 text-sm text-[#56CDAD] rounded-full'>
                            {skill}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Description;
