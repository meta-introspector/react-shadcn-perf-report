"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function DataTypeList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "data_type",
		title: 'Data type',
		type: 'data_type',
		generic_target: setGenericState,
		values: ["integer", "float", "string", "vector", "array", "dict/map", "object"]
	}} default='integer'></GenericListDefinitionSelector>;
}
