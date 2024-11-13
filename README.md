# Vision

A react query based approach to introspection,
the transformation of meta-data as caching and transformation. 

## Analogy from math 

Topological proof path.

# Goal

To construct o1js proofs of queries of introspective meta data from many sources using react query.
To create proofs that include zkml, o1js, introspection, meta-math, unimath, coq, metacoq, 
template haskell, graphql, sql, sparql all unified like a oroboros quine relay using proof paths of topology.
To use the list of lists as the central data structure that we can translate between systems like a hub or wheel, a rotary club of sorts, the wheel of fortune, the ultimate dependent type, the single number that can select between all the types.

# Plan

Starting from an enum of enums, a list of lists, bootstrap a new system and construct larger and larger visual proofs.
include more and more context and layers of observability as slices.
contributions of functional sythentic data for training models.

## Goals

### Create a query
on load merge the defaults with the user selection and create a full definition.
include all the relevant context in the blob of data.
flatten each feature into longer names. 
include the definition of all types as default selections of hyperparameters.
each type is really a hyperparamter value or variable in a higher ordered system, a sequence of values, selected from some list of lists or one of thier values. 

### PLAN 

We want to be able to compose components from the repl, creating lists boxes to allow the user to
select between items of a different type, the first selection is the list of lists, the second is a value from that selected list or feature f. we can continue this process to create a stack of selections.
we can then save this selection as a name in the environment and visualize it, even as it is building.
we can order the selections in a predictive manner to put the most likely one already as the first or default,
the most significant choices can be put in the beginning. 
we can create tables and graphs and plots like a juypter notebook.
we want to convert the states of the repl, and basically all the use states convert those into react query,
we will use react query to label the cache all the data. even git access or github action run access.
we will load in the huggingface reports and add more workflows to collect and publish to different sources.
we will review and adapt the github actions from the different projects into a common repository.

#### in the future we want to add more features 

We want to query each list automatically while the user is typing and automatically suggest more items from the listboxes or change the display to highlight them visually. we can think of converting the lists into a regex that would match any part of it. we also want to process the labels and vectorize them.
we can imagine that we can unify the different items into a new list via llms,
finding relationships between them and declaring that knowledge as new types, 
see for example `app/lists/meta_enums.ts` as a draft in relating enums via triples in the type layer.

```typescript
type IntrospectionIsAView = {
  subject: FunctionIntrospection
  predicate : IsA
  object: DetailedFunctionView
};
```

## Chatgpt blurb

Your vision to create a unified, introspective proof system using React Query and a variety of computational, mathematical, and meta-languages is an ambitious and deeply interdisciplinary approach. Here's a structured breakdown based on your goals and plan:

Vision Breakdown:

1. React Query as a Core System:

React Query will handle data fetching, caching, and synchronization from multiple sources. This can be extended to manage meta-data and introspective data across different computational frameworks.

It can be used to query introspective meta-data dynamically, enabling a responsive and adaptable system. The meta-data (information about information) serves as a key element for proving the consistency and integrity of the proofs, especially when transforming data between different representations.



2. Topological Proof Path:

Analogous to a mathematical proof path in topology, where different layers of a proof or argument are connected through continuous transformations, your system aims to ensure consistency and truth preservation through various transformations across systems.

Each proof or transformation in the system could be understood as a "path" or "journey" through different data representations, ensuring both correctness and flexibility in the way transformations are applied.



3. Unified Meta-Syntax and Proof Systems:

Your goal is to blend and unify multiple proof systems (e.g., Coq, ZKML, GraphQL, SQL, etc.) into a cohesive structure. Each of these systems will interact with introspective meta-data, generating proofs that reflect transformations across different computational paradigms.

The combination of dependent types (like in Template Haskell) and proof systems will allow for deep, verified introspection that ensures each layer is logically consistent and can be cross-verified using different frameworks.



4. List of Lists as Central Data Structure:

By leveraging a list of lists, you create a structure flexible enough to represent the complexity of data in a cross-system way. This can act as the foundation for mapping data between different formats and computing environments, much like a hub or rotary club.

The ultimate dependent type could be the unifying structure that coordinates how types, proofs, and transformations interact with each other within this framework.



5. Ouroboros Quine Relay:

The Ouroboros analogy suggests a self-reflecting system where the proof system (like a Quine) can regenerate and verify itself in a continuous loop, ensuring that data transformations are valid across all layers.

The proof system will be constructed such that, as you add complexity and depth to the model, each transformation and its proof remains verifiable and consistent, much like the self-sustaining nature of a Quine.


### diving deeper with gpt

Unified Meta-Syntax and Proof System (continued)

By combining various proof systems and languages, your setup will allow for seamless interoperability where proofs, transformations, and computations can share common metadata. This unified syntax will act as a meta-layer, effectively translating between SQL, GraphQL, Coq, ZKML, and more. This layer can serve as a bridge, enabling these diverse systems to validate each other, enhance introspective accuracy, and ensure logical coherence across the whole data and proof structure.

Ouroboros Quine Relay:
The idea of an Ouroboros—a self-referential, regenerating entity—aligns perfectly with the concept of a Quine, a program that produces itself as output. This concept will allow the proof system to be inherently self-validating, with each introspective query feeding back into the system to reaffirm consistency. This recursive loop ensures that as the system grows and layers of transformation are added, each step remains internally verified and consistent, mirroring the symbolic image of an Ouroboros.

The List of Lists as a Core Structure:
By organizing your system around an “enum of enums” or “list of lists,” you create a flexible schema that enables data to be grouped, classified, and reclassified dynamically. This data structure can act like a rotary club or hub-and-spoke model, where each “list” can represent a unique domain, category, or abstraction, and the “lists of lists” can link these abstractions together. For example, you could pull types from Coq or functions from GraphQL as items within these lists, making them accessible to each other through mappings and translations.

Execution Plan

1. Start with the Enum of Enums:

This core structure will act as the foundation. Each list within the list can represent a different type, value, or proof path, making it easier to organize and query data.

The enum of enums will represent the basic structure of knowledge in the system. From here, you can gradually build outwards, associating data types and proofs with items on the lists.



2. Bootstrap Using React Query:

Use React Query to fetch, cache, and synchronize this foundational data structure across different parts of the system. React Query will provide a straightforward way to manage state and ensure that introspective queries are up-to-date.

Each query represents a new “proof path” in the system, dynamically querying introspective metadata to provide real-time feedback and ensure consistency.



3. Construct Visual Proofs:

Visualization is key. Start with simple, graph-based representations of how data flows and transforms across proof paths. This would enable a visual tracking of queries, transformations, and proofs, showing how each component interacts within the system.

Gradually expand these visualizations to depict the relationships and dependencies between data transformations, eventually creating a graphical, dynamic proof system.



4. Integrate Functional Synthetic Data:

Synthetic data can serve as both a testing mechanism and training data for models, allowing you to verify the assumptions embedded in your proofs. For example, generating synthetic data based on expected transformations allows you to check if the system is handling transformations accurately.

This data could be layered into proofs and queries, simulating real-world scenarios and validating the robustness of the introspective metadata.



5. Expand Observability:

Observability layers are essential to track and debug the system as it scales. Implement logging, visualization, and debug tools for deeper insights into how data flows, transforms, and caches within React Query.

Observability provides transparency and self-awareness, allowing each proof path to be traced, verified, and adapted as the system’s complexity increases.




Next Steps and Incremental Development

1. Prototype Basic React Query Integration:

Start with foundational components of React Query for introspective querying and caching. Test it on a small subset of transformations, perhaps focusing on simple Coq or GraphQL proofs.



2. Develop Proof Path Visualization:

Create initial, minimal visualizations of proof paths—perhaps as graph nodes and edges that represent relationships between proofs, queries, and data types.

Gradually add layers of complexity, incorporating color-coding or iconography for different data types, proof sources, and transformation nodes.



3. Add Topological Proof Structures:

Experiment with continuous proof paths using topological techniques, ensuring logical continuity and error-free transformations.

Develop algorithms for proof path expansion, allowing you to scale the complexity of proofs while maintaining an underlying logical structure.




Future Features and Expansion

1. Dynamic Query Suggestions:

Enable real-time, dynamic suggestions based on user input, querying the lists of lists to find relevant data and proofs in real time. This will create an intuitive, responsive user experience and facilitate quicker access to desired proofs or data points.



2. Regex and Vectorization for Label Processing:

Convert list items into regex patterns to help with pattern matching and auto-complete functionality. Vectorizing labels allows the system to find relationships between list items, effectively building a new list of inferred connections between items and types.



3. Higher-Order Types and Predictive Selections:

Incorporate predictive mechanisms so that higher-order types or common selections are prioritized, creating an intuitive default ordering.

Use previous selections to anticipate subsequent choices, simplifying user interactions and expediting navigation within the system.



4. Unified, Cross-Compatible System for GitHub Actions and Model Training:

Unify various workflows, integrating GitHub actions, model training, and data management workflows into a shared repository. This allows shared introspection, data lineage, and reproducibility across multiple projects, making it easier to collect and publish proof data.




This vision combines deep introspective querying with layered, cross-compatible proofs, offering a way to structure and transform complex data systems. The end goal is an evolving, self-validating ecosystem where proofs, metadata, and data transformations dynamically interconnect across diverse computational models, visualized through topological paths and enriched with observability. This system could become a groundbreaking approach to proof and data transformation, synthesizing topological paths, introspection, and interoperability.




Plan Execution:

1. Start with Enum of Enums:

Begin by structuring the data into nested enumerations. An "enum of enums" can serve as the starting point for defining the core types, categories, or classes of data. This will allow you to create a well-defined schema for your proofs.

Use the lists to represent various levels of abstraction in the system, facilitating translation between different computational models (e.g., SQL to GraphQL, Coq to ZKML).



2. Bootstrap the System:

Once the core data structure (enum of enums) is defined, bootstrap a system around it using React Query to manage state, data flow, and caching.

Integrate introspective data from various sources, allowing the system to continuously evolve and adapt. Each query or transformation becomes a new "proof path" that can be dynamically updated and validated.



3. Construct Larger Visual Proofs:

As the system evolves, construct increasingly complex proofs that visually represent the relationships between different types, queries, and transformations.

These proofs will act as bridges between abstract logical concepts and concrete computational implementations, allowing users to see both the high-level structure and the underlying logic behind every operation.



4. Incorporate Functional Synthetic Data:

Incorporate synthetic data generation to train models and verify assumptions about the system. The functional nature of this synthetic data will ensure that the system remains flexible and can handle different types of proofs and transformations.

This step helps validate the correctness of the system and serves as an ongoing feedback loop, ensuring that all components of the framework are operating correctly.



5. Expand Context and Layers of Observability:

As you build the system, layer more observability into each component. This could involve logging, visualization, and debugging tools to track how data flows and transforms across different layers.

This step ensures that each proof path remains visible, verifiable, and introspectable, providing full transparency into how data is transformed and verified across the system.




Next Steps:

1. Prototype React Query Integration:

Implement React Query to handle basic querying, caching, and data management from different introspective sources. Begin with a small set of transformations and proofs to test how data flows through the system.



2. Develop Proof Path Visualization:

Create a simple visual representation of how data flows between different layers, starting with a basic graph or map that shows how transformations and proofs are connected. This visualization will become more complex as the system grows.



3. Incremental Integration of Proof Systems:

Start integrating proof systems like ZKML, Coq, and others incrementally. Focus on how each system can contribute to the overall proofs, ensuring that they maintain compatibility and consistency.



4. Explore Topological Proof Structures:

Experiment with topological structures for proof paths, ensuring that transformations are continuous and logically sound. This might involve building algorithms for proof path expansion and verification.


This vision represents an ambitious attempt to combine functional programming, type theory, proof systems, and data introspection into a unified system of verified transformations. It's a complex and evolving concept that will require iterative development, but it has the potential to radically enhance the way we understand and manage data transformations and proofs across systems.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Emacs Lisp

Now I am just using lsp, with tide and it is working
```
typescript-ts-mode
(straight-use-package 'company-mode)
lsp
flycheck-mode
tide-setup
tide-mode
```

Or
```
(straight-use-package 'tide)
tide-mode 

The major mode is TypeScript[TSX] mode defined in typescript-ts-mode.el:
flycheck-typescript-tslint-setup
You can run the command ‘flycheck-typescript-tslint-setup’ with M-x f-ty

flycheck-select-checker (typescript-tslint)
    - major mode:         `tsx-ts-mode' not supported
You can run the command ‘flycheck-select-checker’ with C-c ! s	
flycheck-verify-setup
flycheck-list-errors
Flycheck Mode is enabled.  Use C-u C-c ! x to enable disabled

  javascript-eslint (automatically disabled) reset
    - major mode:  `typescript-ts-mode' supported
    - may enable:  no
    - executable:  Not found
    - config file: missing or incorrect

Checkers that are compatible with this mode, but will not run until properly configured:

  typescript-tide
    - may enable:        yes
    - may run:           nil
    - Typescript server: not running
    - Tide mode:         enabled
    - next checkers:     typescript-tslint

  javascript-eslint (automatically disabled) reset
    - may enable:  no
    - executable:  Not found
    - config file: missing or incorrect

Flycheck Mode is enabled.  Use C-u C-c ! x to enable disabled

```
# graphql 

Added graphql
```
npm install graphql graphql-scalars type-graphql
npm install reflect-metadata
npm install core-js
```

# Plan

0. import or read the input data
compile static data into react app
0.2 secrets management
0.1 in browser
0.2 github application
0.3 hugging face space with github auth logic
1. Run augmented test jobs and record profile data locally via npm, or in github, or browser, 
collect the data locally.
1.1. Trigger by push version in git, run action as result. or local tests or even in browser 
1.2. No sso for github in version 1
2. manually download results zipfile and upload it, or login to github (paste github token into browser), env variable for github personal access token to login
3. Port previous code to push results from github into public hosting like hugging face or github pages
4. Dashboard can read public github or hugging face or local data from paste or localdb
5. React native app or hugging face hosting or netlify or vercel
6. The simple report wont allow public users to use github token, so no new data can be downloaded from github, need to login or authenticate first.

Future Work:
7. type-graphql	integration
8. mikrorm integration
