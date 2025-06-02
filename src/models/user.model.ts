import { IUser } from "../types";

export class User implements IUser {
	constructor(
		public id: string,
		public name: string,
		public email: string,
		public password: string,
		public role: "user" | "admin" = 'user',
		public isActive = true,
	) {}
}

export class AdminUser extends User {
	constructor(id: string, name: string, email: string, password: string) {
		super(id, name, email, password, "admin");
	}
}

export class RegularUser extends User {
	constructor(id: string, name: string, email: string, password: string) {
		super(id, name, email, password, "user");
	}
}
