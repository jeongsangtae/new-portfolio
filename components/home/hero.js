import Animation from "./animation";

export default function Hero() {
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
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
          <button className="ml-4 inline-flex text-white bg-sky-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            이력서 다운로드
          </button>
        </div>
      </div>
    </>
  );
}
