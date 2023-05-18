import { PostMaterialIMController } from '../controllers/post-material-im.controller';
import { PostMaterialIMRepository } from '../repository/post-material-im.repository';
import { PostMaterialIMUseCase } from '../usecases/post-material-im.usecase';

const postMaterialImRepository = new PostMaterialIMRepository();

const postMaterialIMUseCase = new PostMaterialIMUseCase(postMaterialImRepository);

const postMaterialIMController = new PostMaterialIMController(postMaterialIMUseCase);

export { postMaterialIMController };
