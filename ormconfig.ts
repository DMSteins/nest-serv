import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "root123456",
	database: "nestDemo",
	logging: true,
	entities: [
		"src/**/*.entity{.ts,.js}"
	],
})

AppDataSource.initialize()
	.then(() => {
		console.log("Data Source has been initialized!")
	})
	.catch((err) => {
		console.error("Error during Data Source initialization", err)
	})
