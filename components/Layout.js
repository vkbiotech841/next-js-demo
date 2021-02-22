
import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Meta from './Meta';
import Header from './Header';


const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>

            </div>
        </>
    )
}

export default Layout;


// Here children is a reserved keyword for rending dynamic child components.
// Here, children brings child of home page (pages/index.js) component (ArticleList, ArticleItem.js files), but it does not brings the children of other page like about page.

//  if you wish to have same pattern for about page, then you need to create an another layout page.
