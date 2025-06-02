import { User } from "../models/user.model";

const users: { [key: string]: [value: User] } = {};

export const UserRepository = {
	addUser(user: User) {
		Reflect.set(users, user.id, user);
	},

	getUserByEmail(email: string): User | undefined {
		return this.getAllUsers().find((u) => u.email === email && u.isActive);
	},

	getAllUsers(): User[] {
		return Object.values(users) as unknown as User[];
	},

	updateUser(id: string, data: User): boolean {
		const user = Reflect.get(users, id);

		if (!user) return false;

		Reflect.set(users, id, {
			...user,
			...data,
		});

		return true;
	},
};
