import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';



export default function MayDrills() {
  return (
    <>
    <Head>
        <title>May Drills</title>
    </Head>
      <h1>May MMA Drills</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}