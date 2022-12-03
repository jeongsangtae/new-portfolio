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
        <p>ABOUT ME</p>
        <br className="border-t-2 border-slate-400" />
        <p>CERTIFICATE</p>
        <br className="border-t-2 border-slate-400" />
        <p className="">SKILL</p>
      </div>
    </Layout>
  );
}
