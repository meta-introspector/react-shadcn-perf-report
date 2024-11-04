import { GitHosting } from "./Hosting";
import { LLMHosting } from "./LLMHosting";

export type Resource = GitHosting|LLMHosting;

export class Accounts{
  /* findGitHosting(name: string) :GitHosting {
    throw new Error('Method not implemented.');
  } */
  gitHostings!: GitHosting[];

 /*  find(arg0: string, name: string) : Resource {
    throw new Error('Method not implemented.');
  } */
}
