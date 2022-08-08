import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUserCase = container.resolve(ListCategoriesUseCase);

    const list = await listCategoriesUserCase.execute();

    return response.json(list);
  }
}

export { ListCategoriesController };
