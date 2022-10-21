import express from "express";
import connect from "./database";
import routes from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import { options } from "./swagger"


const app = express();
connect();

app.set("port", process.env.PORT || 8080);
const spec = swaggerJsDoc(options)

app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));




app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
  console.log(`Swagger docs running on http://localhost:${app.get("port")}/api-docs`);

});

export default app;
