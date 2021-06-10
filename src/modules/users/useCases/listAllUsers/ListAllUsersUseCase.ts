import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        console.log(user_id);

        const IsAdmin = this.usersRepository.findById(user_id);

        if (!IsAdmin) {
            throw new Error("User not Exists");
        }

        if (!IsAdmin.admin) {
            throw new Error("Resource only available for admin user");
        }

        const users = this.usersRepository.list();

        return users;
    }
}

export { ListAllUsersUseCase, IRequest };
