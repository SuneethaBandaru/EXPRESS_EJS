import express from "express"
import  { musicals }  from '../data/data.js'

import * as path from "path"

const musicalRouter = express.Router();
const __dirname = path.resolve()

musicalRouter.get("/", (req, res) => {
    console.log(musicals)
    res.render(
        path.join(__dirname, "/views/pages/featured"),
        {
            pageTitle: "Annoying songs!!",
            subTitle: "Musicals are a stage performance",
            description: "Some people really love musicals and those people are wrong",
            className: "musicals",
            documentTitle: "Musicals!",
            pageType: "musicals",
            beatsPerBar: 4,
            musicalList: musicals
        }
    )
})

export default musicalRouter