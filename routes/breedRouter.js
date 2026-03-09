import express from "express"
import * as path from "path"
import { catBreeds } from '../data/data.js'

const breedRouter = express.Router();
const __dirname = path.resolve()

breedRouter.get("/", (req, res) => {
    res.render(
        path.join(__dirname, "/views/pages/featured"),
        {
            pageTitle: "Cat Page!!",
            subTitle: "Miaow miaow miaow",
            description: "There are at least 4 different breed of cat",
            className: "breeds",
            documentTitle: "Cats!",
            pageType: "cats",
            catArray: catBreeds
        }
    )
})

breedRouter.get("/kittens", (req, res) => {
    res.render(
        path.join(__dirname, "/views/pages/featured"),
        {
            pageTitle: "Kitten Page!!",
            subTitle: "Kittens are baby cats",
            description: "They love to play with balls of string",
            className: "kittens",
            documentTitle: "Kittens!",
            pageType: "cats"
        }
    )
})

export default breedRouter