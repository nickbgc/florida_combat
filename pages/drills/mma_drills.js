import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';



export default function Home() {
  return (
    <>
    <Head>
        <title>Jujitsu Drills</title>
    </Head>
    <body>
      <h1>Jujitsu Drills</h1>

      <div class="container"> 
      <iframe width="560" height="315" src="https://www.youtube.com/embed/2SlZMwRbIx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Triangles</p>
      </div>

      <div class="container"> 
      <iframe width="560" height="315" src="https://www.youtube.com/embed/WJXyJdgHqdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Escapes Counter</p>
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