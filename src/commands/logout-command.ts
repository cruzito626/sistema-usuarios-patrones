import { Command } from "./command";

export class LogoutCommand implements Command {
    async execute(): Promise<null> {
        console.log("👋 Sesión cerrada con éxito.");
        return null;
    }
}