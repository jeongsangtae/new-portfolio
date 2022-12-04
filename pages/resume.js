import Layout from "../components/layout";
import Head from "next/head";
import ResumeHero from "./resume-hero";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>정상태 - 포트폴리오</title>
        <meta name="description" content="노력하는 개발자" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <ResumeHero />
        </div>
      </div>
    </Layout>
  );
}
