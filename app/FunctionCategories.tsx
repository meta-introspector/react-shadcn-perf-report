"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function FunctionCategories(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "category",
		title: 'Category',
		type: 'type unknown',
		generic_target: setGenericState,
		values: ["Network", "HTML", "Crypto"]
	}} default='Crypto'></GenericListDefinitionSelector>;
}
