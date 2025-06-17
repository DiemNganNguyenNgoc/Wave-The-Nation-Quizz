'use client';

import { useRouter } from "next/navigation";
import ButtonComponent from "@/component/ButtonComponent/buttonComponent";
export default function HomePage() {
  const router= useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* div chứa h1 và button để kẻ khung */}
      <div className="flex flex-col items-center gap-4 rounded-md border-3 border-dashed border-orange-300 p-10">
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-blue-500 font-['Poppins']">
          WAVE&nbsp;THE&nbsp;NATION
        </h1>

        {/* Nút start */}
       <ButtonComponent text="Start"></ButtonComponent>
      </div>
    </div>
  );
}
