import { Context } from "koa";
import * as Router from "koa-router";

/**
 * Authentication controller v1
 */
export class AuthController {

    /**
     * Initialize controller actions
     * @param {Router} router 
     */
    constructor(router: Router) {
        router.get('/v1/login', this.login);
        router.get('/v1/logout', this.logout);
        router.get('/v1/refresh', this.refresh);
    }

    /**
     * Login action
     * @param {Context} ctx 
     * @param next 
     */
    async login(ctx: Context, next: () => Promise<any>) {
        ctx.body = { message: "This is your Login route" };
        await next();
    };

    /**
     * Logout action
     * @param {Context} ctx 
     * @param next 
     */
    async logout(ctx: Context, next: () => Promise<any>) {
        ctx.body = { message: "This is your Logout route" };
        await next();
    }

    /**
     * Refresh token action
     * @param {Context} ctx 
     * @param next 
     */
    async refresh(ctx: Context, next: () => Promise<any>) {
        ctx.body = { message: "This is your refresh route" };
        await next();
    }

}