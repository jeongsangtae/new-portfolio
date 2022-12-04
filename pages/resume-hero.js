import Image from "next/image";
import 증명사진 from "/public/증명사진.jpg";

export default function ResumeHero() {
  return (
    <>
      <section className="text-gray-600 body-font w-full">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <div className="sm:text-3xl text-2xl font-medium title-font mb-2 text-center">
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
              </div>
            </div>
            <div className="lg:w-1/2 w-full leading-relaxed text-white font-bold">
              ABOUT ME
              <br />
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-medium mt-5">
                프론트엔드 개발자를 꿈꾸는 정상태입니다.
              </p>
              <br />
              <div className="lg:w-1/2 w-full leading-relaxed text-white font-bold mt-5">
                CERTIFICATE
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-medium mt-5">
                정보처리기사 (2019.10)
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-slate-600 mb-10"></div>

          <div class="text-gray-400 bg-slate-800 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  SKILL
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base mt-10 font-bold">
                  FRONT-END
                </p>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="https://dummyimage.com/100x90"
                    />
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-medium">
                        Atticus Finch
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
