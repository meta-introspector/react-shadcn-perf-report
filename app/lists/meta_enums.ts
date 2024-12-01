import { CodeGenerationType, CodeTestingType, DataProcessingFunctionHierarchy, EntityType, EnvironmentType, Feature, FileType, Framework, FunctionIntrospection, FunctionMetadata, InstrumentationType, IntrospectionField, Language, MetricType, MetricUnit, Module, PerformanceReportFeature, RelationshipField, ReportType, SchedulingType, ScopeField, StorageLocation, VisualizationType } from "./enums";

// example of defining meta operations and relations on the type level
type FunctionMetadataMap = {
  [F in FunctionIntrospection]: {
    metadata: FunctionMetadata;
    // Other function properties
  };
};

type DetailedFunctionView = FunctionMetadataMap & {
  [FunctionIntrospection.Init_InitializeDatabase_LogStart]: {
    metadata: FunctionMetadata.Init_InitializeDatabase_Timestamp;
  };
  // Add more specific overrides here as needed
};

type IsA = {
  readonly relationship: 'parent_of' | 'child_of' | 'sibling_to';
  readonly description?: string;
}

type IntrospectionIsAView = {
  subject: FunctionIntrospection
  predicate : IsA
  object: DetailedFunctionView
};



interface Metric {
  metricType: MetricType;
  metricUnit: MetricUnit;
  metricValue: number;
}

interface PerformanceReport {
  reportType: ReportType;
  metrics: Metric[];
  profilingFeatures: PerformanceReportFeature[];
  introspection: IntrospectionField[];
  scope: ScopeField;
}


interface CodeGenerationProfile {
  language: Language;
  generationType: CodeGenerationType;
  testingTypes: CodeTestingType[];
  introspectionFields: IntrospectionField[];
  environmentType: EnvironmentType;
  framework: Framework;
}


interface DataProcessingJob {
  jobName: string;
  module: Module;
  dataFunctions: DataProcessingFunctionHierarchy[];
  schedule: SchedulingType;
  instrumentation: InstrumentationType[];
  storage: StorageLocation;
}


interface ContextAwareEntity {
  entityType: EntityType;
  features: Feature[];
  introspectionFields: IntrospectionField[];
  scope: ScopeField;
  relationships: RelationshipField[];
  //symbolicModifications: SymbolicSelfModification[];
}


interface VisualizationRecord {
  visualizationType: VisualizationType;
  feature: Feature;
  fileType: FileType;
  storageLocation: StorageLocation;
  framework: Framework;
}


const myPerformanceReport: PerformanceReport = {
  reportType: ReportType.DETAILED,
  metrics: [
    { metricType: MetricType.Time, metricUnit: MetricUnit.Milliseconds, metricValue: 120 },
    { metricType: MetricType.Size, metricUnit: MetricUnit.Bytes, metricValue: 5242880 },
  ],
  profilingFeatures: [
    PerformanceReportFeature.LoadTime,
    PerformanceReportFeature.MemoryUsage,
  ],
  introspection: [IntrospectionField.MetadataIntrospection],
  scope: ScopeField.Global,
};

const myCodeGenerationProfile: CodeGenerationProfile = {
  language: Language.TypeScript,
  generationType: CodeGenerationType.JAVASCRIPT,
  testingTypes: [
    CodeTestingType.UNIT_TEST,
    CodeTestingType.END_TO_END_TEST,
  ],
  introspectionFields: [IntrospectionField.KeysIntrospection],
  environmentType: EnvironmentType.MultiLanguage,
  framework: Framework.NextJS,
};
