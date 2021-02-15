import { Application } from 'http://deno.land/x/oak/mod.ts';

const app = new Application();

app.use((ctx) => {
	ctx.response.body = 'Hello World';
});

await app.listen({ port: 8000 });
