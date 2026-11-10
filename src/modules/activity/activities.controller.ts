import { Elysia, t } from "elysia";
import { activitiesService } from "./activities.service";

export const activitiesController = new Elysia({
    prefix: "/activities",
}) 
.get('/', () => activitiesService.getActivities())

// .get('/:id', ({params}) => activitiesService.getOneTodo(+params.id))
// .put("/:id", ({ params, body }) => activitiesService.updateTodo(+params.id, body),
//     {
//         params: t.Object({ id: t.Numeric() }),
//         body: t.Any(),
//     },
// )
// .post("/create", ({body}) => activitiesService.createTodo(body),
//     {
//         body: t.Any(),
//     },
// )
// .delete("/:id", ({params}) => activitiesService.deleteTodo(+params.id),
//     {
//         params: t.Object({ id: t.Numeric() }),
//     },
// )