import { Application, Router } from "express";

export interface Route {

    routes: Array<Router>;

    setup(): void;

}

export abstract class BaseRoute implements Route {

    public app: Application;
    public routes: Array<Router>;

    constructor(app: Application) {
        this.app = app;
        this.routes = new Array<Router>();

        console.log("BaseRoute.constructor");

        this.setup();
        this.register();
    }

    public abstract setup(): void;

    private register(): void {

        this.routes.forEach(route => this.app.use(route));

    }

}