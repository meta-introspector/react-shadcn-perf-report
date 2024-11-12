
export class User {
  name!: string;
}

export class Organization {
  name!: string;
}

export class GitRepository {
  owner!: User|Organization;
  name!: string;
}

export type Owner = User|Organization;

export class GitHosting {
  name!:string;
  owners!: Owner[];
  repos!: GitRepository[];
}


