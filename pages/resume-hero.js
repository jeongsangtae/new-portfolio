import Image from "next/image";
import 증명사진 from "/public/images/증명사진.jpg";

export default function ResumeHero() {
  return (
    <>
      <section className="text-gray-600 body-font w-full">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap w-full mb-16">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <div className="sm:text-3xl text-2xl font-medium title-font mb-2 text-center">
                <Image
                  className="rounded-full"
                  alt="cover image"
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
              <div className="text-black dark:text-white text-2xl mb-8">
                ABOUT ME
              </div>

              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-medium">
                안녕하세요. 저는 프론트엔드 개발자가 현재 목표이며, React
              </p>
              <br />
              <div className="lg:w-1/2 w-full leading-relaxed text-black dark:text-white font-bold mt-5">
                <div className="text-black dark:text-white text-2xl mb-8">
                  CERTIFICATE
                </div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-medium">
                정보처리기사 (2019)
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-gray-600/20 dark:bg-slate-600/50"></div>

          <div className="text-gray-400 bg-white dark:bg-slate-800 body-font">
            <div className="container px-5 mx-auto">
              <div className="flex flex-col text-center w-full">
                <h1
                  className="text-2xl sm:text-5xl font-bold title-font mt-20 mb-4
                text-black dark:text-white"
                >
                  SKILL
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl mt-10 mb-3 font-bold">
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
                        <h2 className="text-gray-900 title-font font-medium text-lg">
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
                        <h2 className="text-gray-900 title-font font-medium text-lg">
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
                        src="/images/tailwindcss.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium text-lg">
                          Tailwind CSS
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
                        src="/images/js.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium text-lg">
                          JavaScript
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
                        width="80px"
                        height="80px"
                        src="/images/typescript.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium text-lg">
                          TypeScript
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
                        width="72px"
                        height="72px"
                        src="/images/react.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium text-lg">
                          React
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
                        width="72px"
                        height="72px"
                        src="/images/nextjs.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium text-lg">
                          Next
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl mt-10 mb-3 font-bold">
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
                        src="/images/python.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium text-lg">
                          Python
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
                        src="/images/dj.png"
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium text-lg">
                          Django
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
