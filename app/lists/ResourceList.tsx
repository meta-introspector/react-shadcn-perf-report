"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function ResourceList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "allocation_type",
		title: 'Allocation type',
		type: 'allocation',
		generic_target: setGenericState,
		values: ["Resources", "Time", "Space", "Space-Storage", "Space-Memory", "Space-Cache", "Space-Register", "Space-Bit", "Space-Float", "Compute", "Compute-Multiply"]
	}} default='Compute'></GenericListDefinitionSelector>;
}
