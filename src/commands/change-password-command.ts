import { Command } from "./command";
import { handleChangePassword } from "../services/password.service";
import { User } from "../models/user.model";

export class ChangePasswordCommand implements Command {
    async execute(currentUser: User | null): Promise<User | null> {
        if (!currentUser) {
            console.log("⚠️ Debes iniciar sesión primero.");
            return currentUser;
        }
        await handleChangePassword(currentUser);
        return currentUser;
    }
}
