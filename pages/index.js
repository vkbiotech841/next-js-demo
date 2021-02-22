import ArticleList from '../components/ArticleList';
import { server } from '../config/index';

export default function Home({ articles }) {
  console.log("articles", articles);
  return (

    <div>
      <ArticleList articles={articles} />
    </div>

  )
}

/////////////// Fetching data from using an api but data is store in root directory ////////////
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}


//////////////// Fetching data Direct from api end point ///////////////////////////////////

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }