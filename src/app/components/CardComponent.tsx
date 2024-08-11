import React from 'react'
import Image from 'next/image'

interface CardComponentProps {
    title?: string
    description?: string
    responsibilities?: string[]
    ideal_candidate?: {
        age?: string
        gender?: string
        traits?: string[]
    }
    when_where?: string;
    about?: {
        posted_on?: string;
        deadline?: string;
        location?: string;
        start_date?: string;
        end_date?: string;
        categories?: string[];
        required_skills?: string[];
    },
    company?: string
    image?: string
}


interface fieldsValue {
    fields: CardComponentProps
    index: number
}[]



const CardComponent: React.FC<fieldsValue> = ( {fields, index}) => {
    const cat_colors = ["#feb835","#4640DE" ]
    return (
        <div className="w-full p-6 bg-white rounded-[26px] border border-[#d6ddeb] justify-between items-center flex hover:transition duration-200 ease-in-out transform hover:scale-105">
            <div className="justify-start items-start gap-6 flex">
                <Image
                    className="w-[66px] h-[59px]"
                    src={`https://avatar.iran.liara.run/username?username=${fields.company}`}
                    alt={fields.title || "Social Media Assistant"}
                    width={66}
                    height={59}
                />
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-[#25324b] text-xl font-semibold font-['Epilogue'] leading-normal">
                        {fields.title}
                    </div>
                    <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                        <div className="text-[#7c8493] text-base font-normal font-['Epilogue'] leading-relaxed">
                            {fields.company}
                        </div>
                        <div className="w-1 h-1 bg-[#7c8493] rounded-full" />
                        <div className="text-[#7c8493] text-base font-normal font-['Epilogue'] leading-relaxed">
                            {fields.about?.location}
                        </div>
                    </div>
                    <div className="text-[#25324b] font-normal font-['Epilogue'] leading-relaxed flex-wrap">
                        {fields.description}
                    </div>
                    <div className="justify-start items-start gap-3 inline-flex">
                        <div className="px-5 py-2 bg-[#56cdad]/10 justify-center items-center gap-2 flex rounded-[80px]">
                            <div className="text-[#56cdad] text-xs font-semibold font-['Epilogue'] leading-tight">
                                In Person
                            </div>
                        </div>
                        <div className="w-px self-stretch bg-[#d6ddeb]" />
                        {fields.about?.categories?.map((category, index) => (
                            <div
                                key={index}
                                className="px-5 py-2 justify-center items-center gap-2 flex border  border-[${cat_colors[0]}] rounded-[80px]"
                                style={{ borderColor: cat_colors[index], color: cat_colors[index] }}
                            >
                                <div
                                    className="text-[${cat_colors[0]}] text-xs font-semibold font-['Epilogue'] leading-tight"
                                    style={{ borderColor: cat_colors[index], color: cat_colors[index] }}
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

export default CardComponent
