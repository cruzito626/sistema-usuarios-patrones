import inquirer from "inquirer";
import { UserRepository } from "../database/user.repository";
import { UserFactory } from "../factories/user.factory";

const questions = [
	{
		type: "input" as const,
		name: "name" as const,
		message: "Nombre completo:",
	},
	{
		type: "input" as const,
		name: "email" as const,
		message: "Correo electrónico:",
	},
	{
		type: "password" as const,
		name: "password" as const,
		message: "Contraseña:",
		mask: "*",
	},
	{
		type: "list" as const,
		name: "role" as const,
		message: "Rol del usuario:",
		choices: ["user", "admin"],
	},
];

type Answers = {
	name: string;
	email: string;
	password: string;
	role: "user" | "admin";
};

export async function handleRegister() {
	const answers = await inquirer.prompt<Answers>(questions);

	const existing = UserRepository.getUserByEmail(answers.email);
	if (existing) {
		console.log("❌ Ya existe un usuario con ese email.");
		return;
	}

	const newUser = UserFactory.createUser(
		answers.name,
		answers.email,
		answers.role,
		answers.password,
	);
	UserRepository.addUser(newUser);

	console.log(
		`✅ Usuario ${newUser.name} registrado exitosamente como ${newUser.role}`,
	);
}
