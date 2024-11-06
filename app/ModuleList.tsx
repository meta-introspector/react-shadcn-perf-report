"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function ModuleList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "Module",
		title: 'Module',
		type: 'Module',
		generic_target: setGenericState,
		values: ["npm", "os", "rust", "hw",
			"react", "next", "aws", "https", "archive.org",
			"wikimedia", "huggingface", "ipfs", "aws-ssm-parameter", "etc"]
	}} default='rust'></GenericListDefinitionSelector>;
}
