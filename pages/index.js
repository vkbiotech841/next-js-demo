import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  console.log("articles", articles);
  return (

    <div>
      <Head>
        <title>Music notations</title>
        <meta name='keywords' content='vikram, flute, notation, flute notation, online, classes' />
      </Head>

      <ArticleList articles={articles} />

    </div>

  )
}


export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}