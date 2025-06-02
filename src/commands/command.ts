import { User } from "../models/user.model";

export interface Command<TResponse> {
    execute(currentUser: User | null): Promise<TResponse>;
}
