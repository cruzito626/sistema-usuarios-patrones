async function pause() {
	await inquirer.prompt({
		type: "input",
		name: "pause",
		message: "Presiona ENTER para continuar...",
	});
}


import inquirer from "inquirer";
import { RegisterCommand } from "./commands/register-command";
import { LoginCommand } from "./commands/login-command";
import { Command } from "./commands/command";
import { User } from "./models/user.model";
import { LogoutCommand } from "./commands/logout-command";
import { ChangePasswordCommand } from "./commands/change-password-command";
import { DeactivateAccountCommand } from "./commands/deactivate-command";
import { ViewPermissionsCommand } from "./commands/view-permission-command";

const commandsMap: Record<string, Command<User | null>> = {
	"1. Registrar usuario": new RegisterCommand(),
	"2. Iniciar sesión": new LoginCommand(),
	"3. Cerrar sesión": new LogoutCommand(),
	"4. Cambiar contraseña": new ChangePasswordCommand(),
	"5. Ver roles y permisos": new ViewPermissionsCommand(),
	"6. Eliminar/Desactivar cuenta": new DeactivateAccountCommand(),

};

async function mainMenu() {
	let currentUser: User | null = null;

	while (true) {
		console.clear();
		console.log("=== SISTEMA DE USUARIOS ===");
		console.log(currentUser ? `🟢 Sesión: ${currentUser}` : "🔴 No hay sesión activa");

		const { action } = await inquirer.prompt([
			{
				type: "list",
				name: "action",
				message: "Selecciona una acción:",
				choices: Object.keys(commandsMap).concat("Salir"),
			},
		]);

		if (action === "Salir") {
			console.log("👋 Hasta pronto.");
			break;
		}

		const command = commandsMap[action];
		if (command) {
			currentUser = await command.execute(currentUser);
		}

		await pause();
	}
}

mainMenu();
