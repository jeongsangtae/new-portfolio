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
          안녕하세요! 웹 개발자 정상태입니다.
          <br className="hidden lg:inline-block" />
          매일 한 걸음씩 성장 중입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          시작은 남들보다 조금 늦었지만 꾸준함과 성실함으로 한 걸음씩 성장하는
          중입니다. 프론트엔드 개발자로 시작해 최종적으로 풀 스택 개발자가 되는
          것, 꿈을 향해 달리는 주니어 개발자입니다. 아직은 프로젝트 경험이나
          에러 대처 능력이 부족하지만, 찾아보고 여러 가지 시도해보며 열정과
          끈기로 도전하고 있습니다.
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
