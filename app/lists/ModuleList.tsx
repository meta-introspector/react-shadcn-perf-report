"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function ModuleList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
	  listName: "Module",
	  description: "Generic ideas of modules to interface with things, the ordering of the list matters, there is a hierarchy in there",
		title: 'Module',
		type: 'Module',
		generic_target: setGenericState,
	  values: [
	    "package-managers", "npm",
	    "os","linux","windows","osx",
	    "programming-langugages","rust",
	    "hardware/machine descriptions",
	    "node-frameworks","react","nextjs",
	    "cloud-hosting", "aws",
	    "protocols", "https",
	    "artifact-storage","archive.org",
	    "authentication","next-auth",	    
	    "open-knowledge","wikimedia",
	    "datasets","huggingface",
	    "storage","ipfs",
	    "vault","aws-ssm-parameter",
	    "others","etc"
	  ]
	}} default='rust'></GenericListDefinitionSelector>;
}
