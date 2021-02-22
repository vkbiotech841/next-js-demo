import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}


Meta.defaultProps = {
    title: 'Online music notation',
    keywords: 'flute, indian, classical, music, vikram, kumar, flut player, best flute',
    description: 'Get the notation of Indian classical music or raaga.',
}

export default Meta
