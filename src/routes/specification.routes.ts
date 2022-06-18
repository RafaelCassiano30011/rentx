import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationUseCase(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

export { specificationRoutes };
