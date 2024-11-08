"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function getDescription() :GenericListDefinition {
  return {
    listName: "language_type",
    title: 'Language type',
    type: 'language type',
    //    generic_target: setGenericState,
    values: ["lisp", "prolog", "rust", "ocaml", "typescript", "javascript"]
  }
}

export function getDefault() :string {  return getDescription().values[0] }
export function GenericList(setGenericState: (description: GenericListDefinition, value: string) => void) {
  return <GenericListDefinitionSelector definition={{... getDescription(), generic_target:setGenericState }} default={getDefault()}></GenericListDefinitionSelector>;
}
