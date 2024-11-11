export enum VisualizationType {
  RDF_GRAPH,
  TABLE,
  CHART,
}

export enum FileType {
  NOTEBOOK,
  SCRIPT,
  REPORT,
}

export enum StorageLocation {
  LOCAL,
  GITHUB,
  GITLAB,
  AWS_BATCH,
}

export enum ReportType {
  SUMMARY,
  DETAILED,
  VISUALIZATION,
}

export enum SchedulingType {
  ONE_TIME,
  RECURRING,
  CRON_JOB,
}

export enum FilterType {
  KEYWORD,
  TAG,
  DATE,
  AUTHOR,
}

export enum ClassificationType {
  CATEGORY,
  LABEL,
  PRIORITY,
}

export enum CodeProfileType {
  CPU,
  MEMORY,
  NETWORK,
}

export enum CodeTranslateType {
  NATIVE,
  INTERMEDIATE,
  HIGH_LEVEL,
}

export enum InstrumentationType {
  TIMER,
  COUNTER,
  LOGGER,
}

export enum PortConnectionType {
  BROWSER_WINDOW,
  APP,
  CHAT_WINDOW,
  LLM,
}

export enum LLMType {
  CODE_SNIPPET,
  TEXT_SUMMARY,
  CONVERSATION,
}

export enum CodeGenerationType {
  JAVASCRIPT,
  PYTHON,
  RUST,
}

export enum CodeTestingType {
  UNIT_TEST,
  INTEGRATION_TEST,
  END_TO_END_TEST,
}

export enum ViewType {
  CODE,
  REPORT,
  VISUALIZATION,
  PROFILE,
}

export enum Action {
  CREATE,
  READ,
  UPDATE,
  DELETE,
  COPY,
  PASTE,
  SEND,
  CONNECT,
}

export enum EntityType {
  FILE,
  REPORT,
  VISUALIZATION,
  CODE_SNIPPET,
  LLM,
}

