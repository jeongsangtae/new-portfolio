import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>정상태 - 포트폴리오</title>
        <meta name="description" content="노력하는 개발자" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>홈 입니다.</h1>
    </Layout>
  );
}
