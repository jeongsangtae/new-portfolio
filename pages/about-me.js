import Image from "next/image";
import 증명사진 from "/public/증명사진.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-row lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="rounded-full"
          src={증명사진}
          alt="cover image"
          width="150px"
          height="150px"
          layout="fixed"
          objectFit="cover"
          quality={100}
        />

        <div className="lg:flex md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <div className="items-between">
            <div className="items-center font-bold text-2xl justify-between w-3/4 my-5">
              <p className="">ABOUT ME</p>
            </div>
            <p className="">프론트엔드 개발자를 꿈꾸는 정상태입니다.</p>
            <div className="h-px w-3/4 bg-slate-600/20"></div>
          </div>
          <div className="flex flex-row items-center font-bold text-2xl justify-between w-3/4 my-5">
            <p className="">CERTIFICATE</p>
          </div>
          <p className="">정보처리기사 (2019.10)</p>
          <div className="h-px w-3/4 bg-slate-600/40"></div>

          <div className="flex items-center font-bold text-2xl justify-between w-3/4 my-5">
            <p className="">SKILL</p>
          </div>
        </div>
      </div>
    </>
  );
}
