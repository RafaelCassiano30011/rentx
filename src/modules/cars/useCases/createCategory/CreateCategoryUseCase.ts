import { iCategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: iCategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    console.log

    if (categoryAlreadyExists) {
      throw new Error("Category Already exists !");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
