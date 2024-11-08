"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function AccountList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "account_type",
		title: 'Account type',
		type: 'Account',
		values: ["Traditional", "Bank", "Telephone", "Power", 
			"Crypto","bitcoin", "mina", "bittensor", 
			"Code","Sourceforge","savannah","github","gitlab", "codeberg", 
			"Financial","escrow",
			"Abstract",
			"Cloud",
		  	"vercel","huggingface","azure","gcp",
		  "aws", "google","netlify"
		],
		generic_target: setGenericState
	}} default='Mina'></GenericListDefinitionSelector>;
}
