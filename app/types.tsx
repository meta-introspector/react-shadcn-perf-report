import { FC } from "react";
export type Scope={
    name: string    
};
export type Value=string;
export type LinesT = LineT[];
export type EvalCodeFunction = (code: string) => Promise<void>;
export type ReactReplPropsT = {
  title?: string;
  stealFocus?: boolean;
  tabs?: string[];
  selectedTab?: string;
  onChangeTab?: (tab: string) => void;
  onClear?: () => void;
  onSubmit?: (input: string) => void;
  submitCodeRef?: React.MutableRefObject<EvalCodeFunction|undefined|null>;
  lines?: LinesT|undefined;
  initialLines?: LinesT | (() => LinesT);
  initiallyExecute?: string[];
  height?: number;
};

export interface LineT {
    type: 'input' | 'output' | 'error';
    value: string;
}

export type FCReactReplPropsT = FC<ReactReplPropsT>;

