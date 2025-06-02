import inquirer from "inquirer";
import { UserRepository } from "../database/user.repository";

type LoginAnswers = {
	email: string;
	password: string;
};

export async function handleLogin() {
	const { email, password } = await inquirer.prompt<LoginAnswers>([
		{
			type: "input",
			name: "email",
			message: "Correo electrónico:",
		},
		{
			type: "password",
			name: "password",
			message: "Contraseña:",
			mask: "*",
		},
	]);

	const user = UserRepository.getUserByEmail(email);

	if (!user) {
		console.log("\n❌ Usuario no encontrado.\n");
		return null;
	}

	if (user.password !== password) {
		console.log("\n❌ Contraseña incorrecta.\n");
		return null;
	}

	console.log(`\n✅ Bienvenido ${user.name} (${user.role})\n`);
	return user;
}
