import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>정상태 - 포트폴리오</title>
        <meta name="description" content="노력하는 개발자" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">홈 입니다.</h1>
    </Layout>
  );
}
