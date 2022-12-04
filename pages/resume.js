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

        <div className="flex items-center font-bold text-2xl justify-center w-3/4 my-5 mt-24">
          <p className="">ABOUT ME</p>
        </div>
        <div className="h-px w-3/4 bg-slate-600/20"></div>

        <div className="flex items-center font-bold justify-center w-3/4 my-5">
          <p className="">CERTIFICATE</p>
        </div>
        <div className="h-px w-3/4 bg-slate-600/40"></div>

        <div className="flex items-center justify-center w-3/4 my-5">
          <p className="">SKILL</p>
        </div>
      </div>
    </Layout>
  );
}
