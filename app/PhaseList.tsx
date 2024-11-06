"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function PhaseList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "time_phase_type",
		title: 'Phase type',
		type: 'type unknown',
		generic_target: setGenericState,
		values: ["Beginning", "Middle", "End"]
	}} default='Middle'></GenericListDefinitionSelector>;
}
