import { H1, XLargeParagraph } from "../components/utils/typography";
import { NewPressButton } from "../components/utils/buttons";
import Image from "next/image";
import visual from "@/../public/Visual.png";

export default function Home() {
  return (
    <section className="bg-gradient-to-b flex from-brand-color-25 to-white h-screen bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="842"
          height="842"
          viewBox="0 0 842 842"
          fill="none"
          className="w-full h-full object-cover"
        >
          <path
            opacity="0.3"
            d="M631 1L736 1M631 1V106M631 1L526 1M736 1V106M736 1L841 1V106M736 106L631 106M736 106L841 106M736 106V211M631 106V211M631 106L526 106M841 106V211M736 211L631 211M736 211V316M736 211H841M631 211V316M631 211H526M736 316H631M736 316L736 421M736 316H841M631 316L631 421M631 316L526 316M736 421H631M736 421V526M736 421H841M631 421V526M631 421L526 421M736 526H631M736 526V631M736 526H841M631 526V631M631 526H526M736 631H631M736 631V736M736 631H841M631 631V736M631 631H526M736 736H631M736 736V841M736 736H841M631 736V841M631 736H526M736 841H631M736 841H841V736M631 841H526M841 211V316M841 316L841 421M841 421V526M841 526V631M841 631V736M1 106L1 1L106 1M1 106L106 106M1 106L1 211M106 1L106 106M106 1L211 1M106 106L211 106M106 106L106 211M211 1L211 106M211 1L316 1M211 106L316 106M211 106V211M316 1V106M316 1L421 1M316 106L421 106M316 106L316 211M421 1V106M421 1L526 1M421 106L526 106M421 106L421 211M526 1V106M526 106V211M1 211L1 316M1 211L106 211M1 316L1 421M1 316H106M1 421L1 526M1 421H106M1 526L1 631M1 526H106M1 631L1 736M1 631H106M1 736L1 841H106M1 736H106M106 211L106 316M106 211H211M106 316L106 421M106 316L211 316M106 421L106 526M106 421L211 421M106 526L106 631M106 526H211M106 631L106 736M106 631H211M106 736L106 841M106 736H211M106 841H211M211 211L211 316M211 211L316 211M211 316V421M211 316H316M211 421L211 526M211 421H316M211 526V631M211 526H316M211 631L211 736M211 631H316M211 736V841M211 736H316M211 841H316M316 211V316M316 211H421M316 316V421M316 316H421M316 421V526M316 421H421M316 526L316 631M316 526L421 526M316 631V736M316 631L421 631M316 736V841M316 736L421 736M316 841L421 841M421 211V316M421 211L526 211M421 316V421M421 316H526M421 421V526M421 421H526M421 526L421 631M421 526H526M421 631V736M421 631H526M421 736V841M421 736H526M421 841H526M526 211V316M526 316L526 421M526 421V526M526 526V631M526 631V736M526 736V841"
            stroke="url(#paint0_radial_87_741)"
            strokeOpacity="0.6"
            strokeWidth="2"
          />
          <defs>
            <radialGradient
              id="paint0_radial_87_741"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(421 421) rotate(90) scale(296.536 428.33)"
            >
              <stop stopColor="#121212" />
              <stop offset="1" stopColor="#121212" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Image
        src={visual}
        alt="Visual"
        className="object-cover absolute inset-0 overflow-hidden mx-auto my-auto -top-12"
      />
      <div className="mx-auto my-auto">
        <H1 className=" text-primary-color-primary stroke text-center drop-shadow-brand-shadow-1 font-bold">
          Belajar Pemrograman Jadi <br /> Menyenangkan dan Interaktif!
        </H1>
        <XLargeParagraph className="text-center text-dark-600 mt-3 max-w-3xl">
          Nikmati pengalaman belajar yang unik dengan latihan berbentuk puzzle,
          dirancang untuk mempermudah pemahaman dan meningkatkan keterampilan
          coding Anda.
        </XLargeParagraph>
        <div className="flex justify-center">
          <NewPressButton variant="primary" className="mt-12">
            Yuk Gabung !
          </NewPressButton>
        </div>
      </div>
    </section>
  );
}
