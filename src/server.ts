import express from "express";
import router from "./routes/routes-tasks";
import authRouter from "./routes/auth-routes";


const port = 3000;
const app = express();

app.use(express.json());

app.use("/", router);
app.use("/", authRouter);


app.listen(port, () => {
    console.log(`Estamos rodando na port ${port}`);
});
