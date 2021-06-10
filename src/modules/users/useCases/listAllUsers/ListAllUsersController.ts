import { Request, Response } from "express";

import { ListAllUsersUseCase, IRequest } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.headers;

        if (Array.isArray(user_id)) {
            throw new Error("Id must be a string and not an array");
        }
        try {
            const all = this.listAllUsersUseCase.execute({ user_id });

            return response.status(201).send(all);
        } catch (error) {
            return response.status(400).send({ error: error.message });
        }
    }
}
export { ListAllUsersController };
