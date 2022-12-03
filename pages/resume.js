import Layout from "../components/layout";
import Head from "next/head";

export default function Resume() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-6 m-3">
        <Head>
          <title>정상태 - 포트폴리오</title>
          <meta name="description" content="노력하는 개발자" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex items-center w-3/4 my-5 mt-24">
          <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
          <p className="text-center ml-5 mr-1">ABOUT</p>
          <p className="text-center mr-5 ml-1">ME</p>
          <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
        </div>

        <div className="flex items-center w-3/4 my-5">
          <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
          <p className="text-center mx-5">CERTIFICATE</p>
          <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
        </div>

        <div className="flex items-center w-3/4 my-5">
          <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
          <p className="text-center mx-5">SKILL</p>
          <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
        </div>
      </div>
    </Layout>
  );
}
