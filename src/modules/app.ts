import { Elysia } from "elysia";
import { editionsController } from "./edition/editions.controller";
import { activitiesController } from "./activity/activities.controller";

export const app = new Elysia()
.get("/", () => "Hello Elysiaaaaa")
.use(editionsController)
.use(activitiesController)