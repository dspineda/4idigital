import express from "express";
import connect from "./database";
import routes from './routes'


const app = express();
connect();

app.set("port", process.env.PORT || 8080);


app.use(express.json());
app.use(routes);

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
