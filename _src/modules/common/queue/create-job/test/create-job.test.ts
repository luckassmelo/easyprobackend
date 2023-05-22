import { CustomError } from '../../../../../domain/errors/custom.error';
import { pgBossConnection } from '../../../../../infra/pgboss/adapter/pgboss.adapter';
import { CreateJobController } from '../controller/create-job.controller';
import { CreateJob } from '../models/create-job.model';
import { CreateJobRepository } from '../repository/create-job.repository';
import { CreateJobUseCase } from '../usecase/create-job.usecase';


describe('Create job in queue (pgboss)', () => {
  const TIMEOUT_IN_MILLISECONDS = 10000;
  const createJobRepository = new CreateJobRepository(pgBossConnection);
  const createJobUseCase = new CreateJobUseCase(createJobRepository);
  const createJobController = new CreateJobController(createJobUseCase);


  afterAll(async () => {

    await pgBossConnection.start();
    await pgBossConnection.deleteQueue('test-job');
    await pgBossConnection.close();

  }, TIMEOUT_IN_MILLISECONDS);

  test('Should create a job in queue', async () => {

    const job = await createJobUseCase.execute(new CreateJob({
      jobName: 'test-job',
      data: {
        test: 'test'
      }
    }));

    expect(job.id).not.toBeNull();

  }, TIMEOUT_IN_MILLISECONDS);


  test('Should throw an error when jobName is not provided', async () => {

    try {
      await createJobController.handle({
        jobName: '',
        data: {
          test: 'test'
        }
      });
      fail('Expected an error to be thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.message).toBe('Parameter jobName not found');
    }

  }, TIMEOUT_IN_MILLISECONDS);

  test('Should throw an error when data is not provided', async () => {

    try {
      await createJobController.handle({
        jobName: 'test',
        data: null
      });
      fail('Expected an error to be thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.message).toBe('Parameter data not found');
    }

  }, TIMEOUT_IN_MILLISECONDS);

});
