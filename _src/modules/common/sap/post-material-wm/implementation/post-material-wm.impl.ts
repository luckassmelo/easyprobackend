import { PostMaterialWMController } from '../controller/post-material-wm.controller';
import { PostMaterialWMRepository } from '../repository/post-material-wm.repository';
import { PostMaterialWMUseCase } from '../usecase/post-material-wm.usecase';


const postMaterialRepository = new PostMaterialWMRepository();
const postMaterialUseCase = new PostMaterialWMUseCase(postMaterialRepository);
const postMaterialWMController = new PostMaterialWMController(postMaterialUseCase);


export { postMaterialWMController };
