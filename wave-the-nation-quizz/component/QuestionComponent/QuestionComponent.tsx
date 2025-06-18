'use client';

import Image from 'next/image';
import AnswerComponent from '../AnswerComponent/AnswerComponent';
import { Country } from '@/types/Country';

type QuestionProps = {
  current: Country;               // lá cờ + tên đáp án đúng
  options: string[];              // 4 đáp án (đã xáo trộn)
  onSelect: (name: string) => void; // callback khi bấm đáp án
};

export default function QuestionComponent({
    current,
  options,
  onSelect,
}: QuestionProps) {
  return (
    <div>
    <div className="text-center border-2 border-amber-400 rounded-2xl bg-amber-100 ">
        <h2 className='font-bold pb-3'
        >What country is it?</h2>
      <Image
        src={current.flag}
        alt={`Flag of ${current.name}`}
        width={150}
        height={100}
        className="mx-auto border rounded lg:w-lg sm:w-sm md:w-md pb-5"
      />
      </div>
       <div className="grid grid-cols-2 gap-2 place-items-center">
         {options.map((opt)=>(
            <AnswerComponent key={opt} text={opt} onSelect={onSelect}/>
         ))}
         
     </div>
    </div>
  );
}
