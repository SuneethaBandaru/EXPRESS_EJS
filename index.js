import express from "express";
import breedRouter from "./routes/breedRouter.js";
import musicalRouter from "./routes/musicalRouter.js";
import * as path from "path";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

const __dirname = path.resolve();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/index"), {
    pageTitle: "This is a Cat website",
    subTitle: "Here you can read about cats",
    documentTitle: "Cat website",
  });
});

app.use("/breeds", breedRouter);
app.use("/musicals", musicalRouter);

app.listen(port, () => console.log(`Comin' atcha from ${port}`));
