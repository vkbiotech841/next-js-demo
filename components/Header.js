import headerStyle from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>Music Notation</span> Collection
            </h1>
            <p className={headerStyle.description}>
                This is one of the website where you can get notations of an Indian Classical Music
                </p>
        </div>
    )
}

export default Header
