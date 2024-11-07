"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function getDescription() :GenericListDefinition {
  return {
    listName: "time_phase_type",
    title: 'Phase type',
    type: 'type unknown',
    //generic_target: setGenericState,
    values: ["Beginning", "Middle", "End"]
  }
}
export function getDefault() :string {  return getDescription().values[0] }
export function GenericList(setGenericState: (description: GenericListDefinition, value: string) => void) {
  return <GenericListDefinitionSelector definition={{... getDescription(), generic_target:setGenericState }} default={getDefault()}></GenericListDefinitionSelector>;
}
