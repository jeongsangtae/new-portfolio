import Image from "next/image";
import 증명사진 from "/public/증명사진.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="rounded-full"
          src={증명사진}
          alt="cover image"
          width="50%"
          height="50%"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center p-6 m-3">
          <div className="resume">
            <p className="mt-24">ABOUT ME</p>
          </div>
          <p className="">프론트엔드 개발자를 꿈꾸는 정상태입니다.</p>
          <div className="h-px w-3/4 bg-slate-600/20"></div>

          <div className="resume">
            <p className="">CERTIFICATE</p>
          </div>
          <p className="">정보처리기사 (2019.10)</p>
          <div className="h-px w-3/4 bg-slate-600/40"></div>

          <div className="resume">
            <p className="">SKILL</p>
          </div>
        </div>
      </div>
    </>
  );
}
