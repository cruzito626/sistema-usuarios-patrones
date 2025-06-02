import inquirer from "inquirer";
import { UserRepository } from "../database/user.repository";
import type { User } from "../models/user.model";

export async function handleChangePassword(user: User) {
	const answers = await inquirer.prompt([
		{
			type: "password",
			name: "currentPassword",
			message: "Ingresa tu contraseña actual:",
			mask: "*",
		},
		{
			type: "password",
			name: "newPassword",
			message: "Ingresa tu nueva contraseña:",
			mask: "*",
		},
		{
			type: "password",
			name: "confirmNewPassword",
			message: "Confirma tu nueva contraseña:",
			mask: "*",
		},
	]);

	if (answers.currentPassword !== user?.password) {
		console.log("\n❌ La contraseña actual es incorrecta.\n");
		return;
	}

	if (answers.newPassword !== answers.confirmNewPassword) {
		console.log("\n❌ Las nuevas contraseñas no coinciden.\n");
		return;
	}

	console.log(
		UserRepository.updateUser(user.id, {
			password: answers.newPassword,
		} as User)
			? "Contraseña actualizada"
			: "Ocurrio error",
	);
}
