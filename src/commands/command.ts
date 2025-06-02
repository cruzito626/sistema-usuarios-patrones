import { User } from "../models/user.model";

export interface Command {
    execute(currentUser: User | null): Promise<User | null>;
}
