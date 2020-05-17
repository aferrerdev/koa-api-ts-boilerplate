import * as Koa from "koa";
import * as Router from "koa-router";
import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";

// API Controllers
import { AuthController } from "./controllers/v1/auth.controller";

// Custom middlewares
import { JwtValidation } from "./middleware/jwt.middleware";

const app = new Koa();
const PORT = 3000;
export const router = new Router();

/** Middlewares */
app.use(JwtValidation);
app.use(json());
app.use(logger());
app.use(bodyParser());

/** Routes */
app.use(router.routes()).use(router.allowedMethods());

/**
 * Base route
 */
router.get('/', async (ctx: Koa.Context, next: () => Promise<any>) => {
    ctx.body = { message: "Server is running" };
    await next();
});

/**
 * Initialize controllers
 */
new AuthController(router);

app.listen(PORT, () => console.log("Server started."));