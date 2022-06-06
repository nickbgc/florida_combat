import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';




export default function Home() {
  return (
    <>
    <Head>
        <title>Muay Thai Drills</title>
    </Head>
    <body>
      <h1>Muay Thai Drills</h1>

      <div class="container"> 
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8vpj0ZQv5Ts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>4 Hit Combination with Counter</p>
      </div>

      <div class="container"> 

      <p>More Muay Thai techniques</p>
      </div>

    </body>
    <footer>
      <Link href="/">
          <a>Back to home</a>
      </Link>
    </footer>
    </>
  );
}