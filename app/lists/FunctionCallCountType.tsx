"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

function FunctionCallCountType(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "count_type",
		title: 'Count type',
		default: "Self Only",
		type: 'type unknown',
		generic_target: setGenericState,
		values: ["Self Only", "With Children","probability distribution"]
	}} default='With Children'></GenericListDefinitionSelector>;
}
