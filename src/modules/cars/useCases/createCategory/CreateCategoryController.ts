import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from "tsyringe";

class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createCategoryUserCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUserCase.execute({ name, description });

    return res.status(201).send("");
  }
}

export { CreateCategoryController };
