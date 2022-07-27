import { NextApiRequest, NextApiResponse } from "next";
import getViews from "../../../helpers/getViews";
import registerView from "../../../helpers/registerView";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const slug = req.query.slug.toString();

    if (!slug) {
        res.status(400).json({ message: "invalid slug" })
    }

    if (req.method == 'POST') {
        await registerView(slug);
    }

    const count = await getViews(slug);
    res.status(200).json({ count: count });
}