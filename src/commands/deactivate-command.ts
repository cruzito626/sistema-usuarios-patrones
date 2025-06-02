// src/commands/DeactivateAccountCommand.ts
import { Command } from "./command";
import { handleDeactivateAccount } from "../services/deactivate.service";
import { User } from "../models/user.model";

export class DeactivateAccountCommand implements Command {
    async execute(currentUser: User | null): Promise<null> {
        if (!currentUser) {
            console.log("⚠️ Debes iniciar sesión primero.");
            return currentUser;
        }
        await handleDeactivateAccount(currentUser);
        return null;
    }
}
