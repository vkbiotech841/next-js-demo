import ArticleList from '../components/ArticleList';
import { server } from '../config/index';
import Image from 'next/image';

export default function Home({ articles }) {
  console.log("articles", articles);
  return (

    <div>
      <ArticleList articles={articles} />
      <Image src="/images/vikram.jpg" height='100' width='120' layout="responsive" />
    </div>

  )
}


// getStaticProps : (Static Generation): Fetch data at build time.
/////////////// Fetching data from using an api but data is store in root directory ////////////

// Generally, we use this method for loading data during build time those are not specific to a particular user. Means, common data that can be seen by all the users.

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles: articles
    },
  }
}


//////////////// Fetching data Direct from api end point ///////////////////////////////////
// getStaticProps: (Static Generation): Specify dynamic routes to pre-render pages based on data.

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }