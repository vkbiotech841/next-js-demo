import { useRouter } from 'next/router';
import Link from 'next/link';
import { server } from '../../../config/index';
import Meta from '../../../components/Meta';


const article = ({ article }) => {
    // const router = useRouter();
    // const { id } = router.query;

    return (
        < >
            <Meta title={article.title} description={article.excerpt} />
            <div className="container">
                <h1 >{article.title}</h1>
                <p >{article.body}</p>
                <span >This is an article {article.id}</span>
                <br />

                <h4 className="mt-3">Bootstrap Grid system</h4>
                <div className="row text-center mt-3">
                    <div className="col-12 col-md-3 col-sm-3 bg-primary">
                        Grid one
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 bg-secondary">
                        Grid two
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 bg-success">
                        Grid third
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 bg-danger">
                        Grid four
                    </div>
                </div>

                <h4 className="mt-3">Bootstrap flex system</h4>
                <div className="row d-flex justify-content-between mt-3">
                    <div className="bg-primary">flex 0ne</div>
                    <div className="bg-info">flex two</div>
                    <div className="bg-success">flex three</div>
                </div>

                <div className="mt-5 float-right">
                    <Link href='/' >Go Back</Link>
                </div>
            </div>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article: article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles/`);
    const articles = await res.json();
    const ids = articles.map(article => article.id);
    const paths = ids.map(id => (
        {
            params: { id: id.toString() }
        }
    ))

    return {
        paths,
        fallback: false
    }
}

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const articles = await res.json();
//     const ids = articles.map(article => article.id);
//     const paths = ids.map(id => (
//         {
//             params: { id: id.toString() }
//         }
//     ))

//     return {
//         paths,
//         fallback: false
//     }
// }

export default article;
