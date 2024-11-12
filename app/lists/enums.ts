
export enum ContextField {
  Type,
  Key,
  Value,
  Metadata,
  Introspection,
  Scope,
  Relationship
}

export enum TypeField {
  SurroundingKeys,
  Values,
  Metadata
}

export enum KeyField {
  Keys,
  Values,
  Metadata
}

export enum ValueField {
  String,
  Number,
  Boolean,
  Object,
  Array
}

export enum MetadataField {
  KeyMetadata,
  ValueMetadata,
  ContextMetadata
}

export enum IntrospectionField {
  KeysIntrospection,
  ValuesIntrospection,
  MetadataIntrospection
}

export enum ScopeField {
  Local,
  Global,
  Nested
}

export enum RelationshipField {
  KeyRelationship,
  ValueRelationship,
  MetadataRelationship
}

export enum EnvironmentType {
  MultiLanguage,
  OpenSource
}

export enum Framework {
  NextJS,
  React
}

export enum Language {
  TypeScript
}

export enum Feature {
  SelfDescribing,
  ContentAddressable,
  PerformanceReport
}

export enum PerformanceReportFeature {
  LoadTime,
  RenderTime,
  MemoryUsage,
  ErrorRate,
  RequestCount,
  ResponseTime,
  CacheHits,
  CacheMisses
}

export enum MetricUnit {
  Milliseconds,
  Bytes,
  Count,
  Percentage
}

export enum MetricType {
  Time,
  Size,
  Rate,
  Count
}

// Define a Metric enum that combines the metric type and unit
export enum Metric {
  LoadTimeMilliseconds,// = "Load Time (ms)",
  RenderTimeMilliseconds,// = "Render Time (ms)",
  MemoryUsageBytes, // =Memory Usage (bytes)",
  ErrorRatePercentage, // =Error Rate (%)",
  RequestCount, // =Request Count",
  ResponseTimeMilliseconds, // =Response Time (ms)",
  CacheHitsCount, // =Cache Hits",
  CacheMissesCount, // =Cache Misses"
}

// Define an enum for each field in the Performance Report
export enum LoadTimeMetric {
  Fast, // =Fast",
  Average, // =Average",
  Slow, // =Slow"
}

export enum RenderTimeMetric {
  Fast, // =Fast",
  Average, // =Average",
  Slow, // =Slow"
}

export enum MemoryUsageMetric {
  Low, // =Low",
  Average, // =Average",
  High, // =High"
}

export enum ErrorRateMetric {
  Low, // =Low",
  Average, // =Average",
  High, // =High"
}

export enum RequestCountMetric {
  Low, // =Low",
  Average, // =Average",
  High, // =High"
}

export enum ResponseTimeMetric {
  ResponseTimeFast, // =Fast",
  ResponseTimeAverage, // =Average",
  ResponseTimeSlow, // =Slow"
}

export enum CacheHitsMetric {
  CacheHitsMetricLow, // =Low",
  CacheHitsMetricAverage, // =Average",
  CacheHitsMetricHigh, // =High"
}

export enum CacheMissesMetric {
  CacheMissesLow, // =Low",
  CacheMissesAverage, // =Average",
  CacheMissesHigh, // =High"
}

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

