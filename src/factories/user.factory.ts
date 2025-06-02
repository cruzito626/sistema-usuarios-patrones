import { v4 as uuidv4 } from "uuid";
import { AdminUser, RegularUser, type User } from "../models/user.model";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class UserFactory {
	static createUser(
		name: string,
		email: string,
		role: string,
		password: string,
	): User {
		const id = uuidv4();
		switch (role.toLowerCase()) {
			case "admin":
				return new AdminUser(id, name, email, password);
			// biome-ignore lint/complexity/noUselessSwitchCase: <explanation>
			case "user":
			default:
				return new RegularUser(id, name, email, password);
		}
	}
}
