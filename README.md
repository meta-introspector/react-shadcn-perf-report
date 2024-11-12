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
