'use client'
import { useRouter } from "next/navigation"

type ButtonProp = {
    text: string
    onClick?:()=>void;
}
export default function ButtonSubmitComponent({ text, onClick }: ButtonProp) {
    const router = useRouter();
    return (
        <button
            className=
            "hover:cursor-pointer rounded-md bg-blue-500 px-5 py-2 text-lg font-semibold text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 "
            onClick={onClick}>
            {text}
        </button>
    );
}