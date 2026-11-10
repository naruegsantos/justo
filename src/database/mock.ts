const mockedTodo = [
  {
    title: "routes", 
    completed: false,
    description: [
      { title: "routes anatomy", completed: true },
      { title: "routes with params", completed: false},
      { title: "routes with query", completed: false},
      { title: "routes with body + types", completed: false},
      { title: "routes + functions", completed: false},
    ]
  },
  {
    title: "validation", 
    completed: false,
    description: [
      { title: "validation anatomy", completed: false },
      { title: "login", completed: false},
    ]
  },
  {
    title: "database", 
    completed: false,
    description: [
      { title: "connection", completed: false },
      { title: "crud", completed: false },
      { title: "modeling:", completed: false },
      /*
      src/
        ├── index.ts
        ├── app.ts
        │
        ├── config/
        │   └── env.ts
        │
        ├── database/
        │   ├── client.ts
        │   └── schema.ts
        │
        ├── plugins/
        │   ├── auth.ts
        │   └── context.ts
        │
        └── modules/
            ├── user/
            │   ├── user.controller.ts
            │   ├── user.service.ts
            │   └── user.repository.ts
            │
            └── auth/
                ├── auth.controller.ts
                ├── auth.service.ts
                └── auth.plugin.ts
      */
      { title: "login", completed: false},
    ]
  },
]

export async function getMockedTodo(): Promise<any[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockedTodo);
        }, 500);
    });
}