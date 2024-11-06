"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

function FunctionCallCountType(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "count_type",
		title: 'Count type',
		type: 'type unknown',
		generic_target: setGenericState,
		values: ["Self Only", "With Children"]
	}} default='With Children'></GenericListDefinitionSelector>;
}
