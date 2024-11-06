"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function SizeList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "size_type",
		title: 'Size type',
		type: 'type unknown',
		generic_target: setGenericState,
		values: ["Big", "Small"]
	}} default='Big'></GenericListDefinitionSelector>;
}
