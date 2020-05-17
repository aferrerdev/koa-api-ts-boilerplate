import { Middleware, Context } from 'koa';

const ExcludedRoutes = [
    "/",
];

export async function JwtValidation(ctx: Context, next: () => Promise<any>) {
    // Validate headers and check if JWT is valid
    await next();
};