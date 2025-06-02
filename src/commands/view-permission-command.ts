import { Command } from "./command";
import { handlePermissions } from "../services/permission.service";
import { User } from "../models/user.model";

export class ViewPermissionsCommand implements Command<User | null> {
    async execute(currentUser: User | null): Promise<User | null> {
        if (!currentUser) {
            console.log("⚠️ Debes iniciar sesión primero.");
            return currentUser;
        }
        await handlePermissions(currentUser);
        return currentUser
    }
}