import { Entity } from '../../../../../domain/entity/Entity';

type CreateJobProps = {
  jobName: string;
  data: any;
}


export class CreateJob extends Entity<CreateJobProps>  {

  constructor(props: CreateJobProps, id?: string) {
    super(props, id);
  }

  get jobName(): string {
    return this.props.jobName;
  }

  get data(): any {
    return this.props.data;
  }
}
