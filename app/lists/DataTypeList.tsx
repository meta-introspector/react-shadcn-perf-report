"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function DataTypeList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "data_type",
		title: 'Data type',
		type: 'data_type',
		default:"integer",
		generic_target: setGenericState,
		values: ["integer", "float", "string", "vector", "array", "dict/map", "object","uu","types","typeclasses","monad"]
	}} default='integer'></GenericListDefinitionSelector>;
}
