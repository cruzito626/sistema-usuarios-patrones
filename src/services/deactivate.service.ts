import { UserRepository } from "../database/user.repository";
import type { User } from "../models/user.model";

export async function handleDeactivateAccount(user: User) {
	console.log(
		UserRepository.updateUser(user.id, {
			isActive: false,
		} as User)
			? "Cuenta desactivada"
			: "Ocurrio error",
	);
}
