// import "reflect-metadata";
// import path from "node:path";
// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import { buildSchema } from "type-graphql";
// //import { RecipeResolver } from "./recipe.resolver";

// //@Resolver(Profile)
// class ProfileResolver {
//   // dependency injection
//   //  constructor(private profileService: ProfileService) {}

//   //  @Query(returns => [Profile])
//   //profiles() {
//   //    return this.profileService.findAll();
//   //}

// }

// async function bootstrap() {
//   // Build TypeGraphQL executable schema
//   const schema = await buildSchema({
//     // Array of resolvers
//     resolvers: [ProfileResolver],
//     // Create 'schema.graphql' file with schema definition in current directory
//     emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
//   });

//   // Create GraphQL server
//   const server = new ApolloServer({ schema });

//   // Start server
//   const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
//   console.log(`GraphQL server ready at ${url}`);
// }

// bootstrap().catch(console.error);
