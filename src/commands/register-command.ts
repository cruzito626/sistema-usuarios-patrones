import { Command } from "./command";
import { handleRegister } from "../services/register.service";

export class RegisterCommand implements Command {
    async execute(): Promise<null> {
        await handleRegister();
        return null;
    }
}
