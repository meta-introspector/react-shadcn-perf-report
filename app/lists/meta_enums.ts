import { FunctionIntrospection, FunctionMetadata } from "./enums";

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
