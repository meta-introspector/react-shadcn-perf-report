"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function AccountList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "account_type",
		title: 'Account type',
		type: 'Account',
		values: ["Bank", "Telephone", "Power", "Bitcoin", "Mina", "bittensor", 
			"github",
		  "gitlab", "sourceforce", "escrow",
		  "abstract",
		  "cloud",
		  "vercel","huggingface","azure","gcp",
		  "aws", "google","netlify"
		],
		generic_target: setGenericState
	}} default='Mina'></GenericListDefinitionSelector>;
}
