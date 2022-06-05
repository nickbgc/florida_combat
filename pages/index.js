import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <sdiv className={utilStyles.headingMd}>
        <p>
          Private Media App
        </p>
        <p>
          <a href="https://attrockledge.com">Our Public Page</a>
        </p>
      </sdiv>
    </Layout>
  );
}