import { Elysia } from "elysia";
import { app } from "./modules/app";

import cors from "@elysiajs/cors";


const server = new Elysia()
.get("/", () => "Hello Elysia")
.use(
  cors({
    origin: [
      "http://localhost:3001",
      "127.0.0.1:3001",
      "https://honesto-rho.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
)
.use(app)

export default server