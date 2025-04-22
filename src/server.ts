import express from "express";
import  router  from "./routes/routes-tasks";

const port = 3000;
const app = express();

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
    console.log(`Estamos rodando na port ${port}`);
});
