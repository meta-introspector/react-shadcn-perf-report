"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function FunctionCategories(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "category",
		title: 'Category',
		type: 'type unknown',
		generic_target: setGenericState,
		values: ["Network", "HTML", "Crypto","Pure","Type","Introspection"]
	}} default='Crypto'></GenericListDefinitionSelector>;
}
