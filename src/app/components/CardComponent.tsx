import React from 'react'
import Image from 'next/image'
import { opportunities } from '../../../type' // Ensure this path is correct
import { useGetJobsQuery } from '../service/apiSlice';


const CardComponent = ({id}:{id: number}) => {
    const {data, error, isLoading} = useGetJobsQuery();
    const fields = data?.data[id]
    const cat_colors = ["#feb835", "#4640DE"];

    return (
        <div className="w-full p-6 bg-white rounded-[26px] border border-[#d6ddeb] justify-between items-center flex hover:transition duration-200 ease-in-out transform hover:scale-105">
            <div className="justify-start items-start gap-6 flex">
                <Image
                    className="w-[66px] h-[59px]"
                    src={fields?.logoUrl || "http://via.placeholder.com/66x59"}
                    alt={fields?.title || "Social Media Assistant"}
                    width={66}
                    height={59}
                />
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-[#25324b] text-xl font-semibold font-['Epilogue'] leading-normal">
                        {fields?.title}
                    </div>
                    <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                        <div className="text-[#7c8493] text-base font-normal font-['Epilogue'] leading-relaxed">
                            {fields?.orgName}
                        </div>
                        <div className="w-1 h-1 bg-[#7c8493] rounded-full" />
                        <div className="text-[#7c8493] text-base font-normal font-['Epilogue'] leading-relaxed">
                            {fields?.location.map((location, locIndex) => 
                                <div key={locIndex}> {location} </div>
                            )}
                        </div>
                    </div>
                    <div className="text-[#25324b] font-normal font-['Epilogue'] leading-relaxed flex-wrap">
                        {fields?.description}
                    </div>
                    <div className="justify-start items-start gap-3 inline-flex">
                        <div className="px-5 py-2 bg-[#56cdad]/10 justify-center items-center gap-2 flex rounded-[80px]">
                            <div className="text-[#56cdad] text-xs font-semibold font-['Epilogue'] leading-tight">
                                {fields?.opType}
                            </div>
                        </div>
                        <div className="w-px self-stretch bg-[#d6ddeb]" />
                        {fields?.categories?.map((category, catIndex) => (
                            <div
                                key={catIndex}
                                className="px-5 py-2 justify-center items-center gap-2 flex border rounded-[80px]"
                                style={{ borderColor: cat_colors[catIndex % cat_colors.length], color: cat_colors[catIndex % cat_colors.length] }}
                            >
                                <div
                                    className="text-xs font-semibold font-['Epilogue'] leading-tight"
                                    style={{ color: cat_colors[catIndex % cat_colors.length] }}
                                >
                                    {category}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;
