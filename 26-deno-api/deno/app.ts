import { Application } from 'http://deno.land/x/oak/mod.ts';

import todosRoutes from './routes/todos.ts';

const app = new Application();

app.use((ctx, next) => {
	console.log('Middleware');
	next();
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 3000 });
