import Image from "next/image";
import 증명사진 from "/public/images/증명사진.jpg";

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
                  width="150px"
                  height="150px"
                  layout="fixed"
                  objectFit="cover"
                  quality={100}
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full leading-relaxed text-black dark:text-white font-bold">
              ABOUT ME
              <br />
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-medium mt-5">
                프론트엔드 개발자를 꿈꾸는 정상태입니다.
              </p>
              <br />
              <div className="lg:w-1/2 w-full leading-relaxed text-black dark:text-white font-bold mt-5">
                CERTIFICATE
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-medium mt-5">
                정보처리기사 (2019.10)
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-gray-600/20 dark:bg-slate-600/50 mb-10"></div>

          <div className="text-gray-400 bg-white dark:bg-slate-800 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1
                  className="sm:text-3xl text-2xl font-medium title-font mb-4
                text-black dark:text-white"
                >
                  SKILL
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl mt-10 font-bold">
                  FRONT-END
                </p>

                <div className="flex flex-wrap -m-2">
                  <div className="p-2 lg:w-1/3 md:w-1/2 w-full mt-10">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <Image
                        alt="team"
                        className="flex-shrink-0  mr-4"
                        layout="fixed"
                        width="64px"
                        height="64px"
                        src="/images/html.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">
                          HTML5
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 lg:w-1/3 md:w-1/2 w-full mt-10">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <Image
                        alt="team"
                        className=""
                        layout="fixed"
                        width="64px"
                        height="64px"
                        src="/images/css.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">
                          CSS3
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 lg:w-1/3 md:w-1/2 w-full mt-10">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <Image
                        alt="team"
                        className=""
                        layout="fixed"
                        width="64px"
                        height="64px"
                        src="/images/css.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">
                          JavaScript
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl mt-10 font-bold">
                  BACK-END
                </p>

                <div className="flex flex-wrap -m-2">
                  <div className="p-2 lg:w-1/3 md:w-1/2 w-full mt-10">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <Image
                        alt="team"
                        className=""
                        layout="fixed"
                        width="64px"
                        height="64px"
                        src="/images/css.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">
                          CSS3
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 lg:w-1/3 md:w-1/2 w-full mt-10">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <Image
                        alt="team"
                        className=""
                        layout="fixed"
                        width="64px"
                        height="64px"
                        src="/images/css.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">
                          CSS3
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 lg:w-1/3 md:w-1/2 w-full mt-10">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <Image
                        alt="team"
                        className=""
                        layout="fixed"
                        width="64px"
                        height="64px"
                        src="/images/css.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">
                          CSS3
                        </h2>
                      </div>
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
