import { SystemConstant } from '@constants/system.constant';

export class ModalData<T> {
  action: string;
  data!: T;
  constructor() {
    this.action = SystemConstant.ACTION.VIEW;
  }
}
