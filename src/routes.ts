import { isAuthenticated } from "./api/auth/auth.service";
import { Router } from 'express';
import healthcheckRouter from "./api/healthcheck/healthcheck.routes";
import publicationsRouter from "./api/publications/publications.routes";
import registerRouter from "./api/register/register.routes";
import signUpRouter from "./api/sign-Up/sign-Up.routes";
import userRouter from "./api/users/users.routes";
import loginRouter from "./api/auth/local/local.routes";

const routes = Router();

routes.use('/sign-up', signUpRouter);
routes.use('/login', loginRouter);
routes.use('/healthcheck', healthcheckRouter);

routes.use('/posts', isAuthenticated, publicationsRouter);
routes.use('/register', isAuthenticated, registerRouter);
routes.use('/users', isAuthenticated, userRouter);


export default routes
