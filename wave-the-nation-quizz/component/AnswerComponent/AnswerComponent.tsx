"use client"
type ButtonProp = {
    text: string;
    onSelect:(name: string)=>void;
}
export default function AnswerComponent({text, onSelect}: ButtonProp) {
    return (
        <button className="
        text-center mt-3 
        border-blue-400 border-2 rounded-md 
        w-full
        lg:w-xl lg:text-2xl
        sm:w-full sm:text-xl
        hover:cursor-pointer
        hover:bg-blue-400
        active:bg-blue-400"
        onClick={()=> onSelect(text)}
            >{text}
        </button>
    );
}