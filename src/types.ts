export interface IUser {
	id: string;
	name: string;
	email: string;
	password: string;
	role: string;
	isActive: boolean;
}

export enum CrudPermission {
	CREATE = 1 << 0, // 0001 => 1
	READ = 1 << 1, // 0010 => 2
	UPDATE = 1 << 2, // 0100 => 4
	DELETE = 1 << 3, // 1000 => 8
}

export type Resource = "post" | "user" | "comment";

export type PermissionsByResource = Record<Resource, number>;