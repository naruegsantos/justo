import { Elysia, t } from "elysia";
import { editionsService } from "./editions.service";
import { editions } from "@/database/schema";

export const editionsController = new Elysia({
    prefix: "/editions",
}) 
.get('/', () => editionsService.getEditions())
// .get('/:id', ({params}) => editionsService.getOneTodo(+params.id))
// .put("/:id", ({ params, body }) => editionsService.updateTodo(+params.id, body),
//     {
//         params: t.Object({ id: t.Numeric() }),
//         body: t.Any(),
//     },
// )
// .post("/create", ({body}) => editionsService.createTodo(body),
//     {
//         body: t.Any(),
//     },
// )
// .delete("/:id", ({params}) => editionsService.deleteTodo(+params.id),
//     {
//         params: t.Object({ id: t.Numeric() }),
//     },
// )