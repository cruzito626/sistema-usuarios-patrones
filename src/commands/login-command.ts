import { Command } from "./command";
import { handleLogin } from "../services/login.service";
import { User } from "../models/user.model";

export class LoginCommand implements Command {
    async execute(): Promise<User | null> {
        return await handleLogin();
    }
}
