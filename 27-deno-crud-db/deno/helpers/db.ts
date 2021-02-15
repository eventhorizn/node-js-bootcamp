import { MongoClient } from 'https://deno.land/x/mongo@v0.21.0/mod.ts';

let db: Database;

export function connect() {
	const client = new MongoClient();
	client.connectWithUri(
		'mongodb+srv://maximilian:D7oZa57WChezq026@cluster0-ntrwp.mongodb.net?retryWrites=true&w=majority'
	);

	db = client.database('todo-app');
}

export function getDb() {
	return db;
}
