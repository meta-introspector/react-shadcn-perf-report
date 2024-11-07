"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function SourceList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "data_source",
		title: 'Data Source',
		generic_target: setGenericState,
		type: 'Source',
		values: ["Local", "Browser", "Node", "Docker",
			"Github Action Artifacts",
			"Github Action Run Logs",
			"Github Action Source Definition",
		  "Github Api",
		  "Local Storage Server",
		  "Android Termux Server",
		  "Local Lab Linux Server",
		  "NPM Package",
		  "env variable",
		  "secret store",
		  "browser localdb",
		  "browser local service process",
		  "couchdb",
		  "wallet",
		  "cloud server wasmer",
		  "Gitlab Runner", "aws s3", "https", "archive.org",
		  "wikimedia",
		  "huggingface dataset",
		  "ipfs",
		  "aws ssm parameter"]
	}} default='Local'></GenericListDefinitionSelector>;
}