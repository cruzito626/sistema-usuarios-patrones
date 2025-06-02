import inquirer from "inquirer";
import { CrudPermission } from "../types";
import { RolePermissions } from "../models/role-permission.model";
import { User } from "../models/user.model";

function checkPermission(role: string, permission: CrudPermission): boolean {
	const rolePermissionBits = RolePermissions[role];
	if (rolePermissionBits === undefined) return false;

	return (rolePermissionBits & permission) === permission;
}


export async function handlePermissions(user: User) {
	const { permisoSeleccionado: permissionSelected } = await inquirer.prompt([
		{
			type: "list",
			name: "permisoSeleccionado",
			message: "¿Qué permiso quieres verificar?",
			choices: [
				{ name: "Crear (CREATE)", value: CrudPermission.CREATE },
				{ name: "Leer (READ)", value: CrudPermission.READ },
				{ name: "Actualizar (UPDATE)", value: CrudPermission.UPDATE },
				{ name: "Eliminar (DELETE)", value: CrudPermission.DELETE },
			],
		},
	]);

	const hasPermission: boolean = checkPermission(user.role, permissionSelected);

	console.log(
		hasPermission
			? "✅ Tienes este permiso."
			: "❌ No tienes este permiso.",
	);
}