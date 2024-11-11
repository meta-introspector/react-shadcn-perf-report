"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

import { getDescription as PhaseList } from "./PhaseList";
import { getDescription as LanguageList } from "./LanguageList";

export function createGenericListFunctions(def: GenericListDefinition) {
  function getDescription() :GenericListDefinition {
    return def
  }

  function getDefault() :string {  return getDescription().values[0] }
  function GenericList(setGenericState: (description: GenericListDefinition, value: string) => void) {
    return <GenericListDefinitionSelector definition={{... getDescription(), generic_target:setGenericState }} default={getDefault()}></GenericListDefinitionSelector>;
  }
  return {
    getDescription,
    getDefault,
    GenericList
  }
}

