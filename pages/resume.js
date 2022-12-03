import Layout from "../components/layout";
import Head from "next/head";

export default function Resume() {
  return (
    <Layout>
      <div className="lg:w-full flex flex-col">
        <Head>
          <title>정상태 - 포트폴리오</title>
          <meta name="description" content="노력하는 개발자" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <a>ABOUT ME</a>
        <br className="border-t-2 border-white" />
        <a>CERTIFICATE</a>
        <br className="border-t-2 border-white" />
        <a className="">SKILL</a>
      </div>
    </Layout>
  );
}
