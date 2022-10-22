import { BaseState } from '../../../base/BaseState';
import { StateEnum } from '../../../enums/StateEnum';
export class PageTestState extends BaseState {
  constructor(
    stateEnum: StateEnum = StateEnum.idel,
    public readonly count: number = 0,
    error?: Object
  ) {
    super(stateEnum, error);
  }
  copyWith({
    stateEnum,
    count,
    error,
  }: {
    stateEnum?: StateEnum | undefined;
    count?: number;
    error?: Object | undefined;
  }): PageTestState {
    return new PageTestState(
      stateEnum ?? this.stateEnum,
      count ?? this.count,
      error ?? this.error
    );
  }
}
