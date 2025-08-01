'use client';
import Image from "next/image";
import CardFront from "@/components/card/card_front";
import CardBack from "@/components/card/card_back";
import CardForm from "@/components/form";

export default function Home() {
  return (
    <section className="h-[100vh] flex flex-col justify-between bg-gray-100 pb-2.5 md:pb-0 md:flex-row w-max-[1440px]">
      <div className="h-2/6 bg-[url('/images/bg-main-desktop.png')] bg-cover bg-center w-full relative md:h-full md:w-[30%]">

        <div className="absolute top-6 right-4 md:top-130 md:-right-50">
          <CardBack />
        </div>

        <div className="absolute right-14 top-31 md:-right-20 md:top-80">
          <CardFront />
        </div>
      </div>

      <div className="h-4/6 p-5 mt-40 md:mt-0 overflow-scroll md:h-full md:w-[70%] flex items-center justify-center md:overflow-hidden">
        <div className="w-[70%] md:w-[40%]">
          <CardForm />

        </div>
      </div>

    </section>
  );
}
