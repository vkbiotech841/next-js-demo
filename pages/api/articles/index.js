// call database api here

// Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

import { articles } from '../../../data';

export default function handler(req, res) {
    res.status(200).json(articles)
}


