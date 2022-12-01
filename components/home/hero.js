import Animation from "./animation";
import Link from "next/link";
import { saveAs } from "file-saver";

export default function Hero() {
  const saveFile = () => {
    saveAs("정상태 이력서.pdf");
  };
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 정상태입니다.
          <br className="hidden lg:inline-block" />
          꾸준히 노력하는 개발자
        </h1>
        <p className="mb-8 leading-relaxed">
          새로운 것에 두려워하지않고 꾸준히 노력하고 탐구하는 개발자를 꿈꾸는
          정상태입니다.
        </p>
        <div className="flex justify-center">
          <Link legacyBehavior href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>

          <button className="btn-resume" onClick={saveFile}>
            이력서 다운로드
          </button>
        </div>
      </div>
    </>
  );
}
