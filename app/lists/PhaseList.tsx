"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function getDescription() :GenericListDefinition {
  return {
    listName: "time_phase_type",
    title: 'Phase type',
    type: 'type unknown',
    //generic_target: setGenericState,
    values: ["Beginning", "Compile","Test","Deploy","Live","Middle", "End"]
  }
}
export function getDefault() :string {  return getDescription().values[0] }
export function GenericList(setGenericState: (description: GenericListDefinition, value: string) => void) {
  return <GenericListDefinitionSelector definition={{... getDescription(), generic_target:setGenericState }} default={getDefault()}></GenericListDefinitionSelector>;
}
