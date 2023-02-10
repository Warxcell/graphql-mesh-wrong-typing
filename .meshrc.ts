import {Config} from "@graphql-mesh/types/typings/config";

const config: Config = {
  "serve": {
    "fork": 1,
    "browser": false,
    "playground": true,
    "cors": {
      "origin": "*",
      "credentials": true
    },
  },
  "sources": [
    {
      "name": "Api1",
      "handler": {
        "graphql": {
          "source": "src/api1/schema.ts",
          "batch": false
        }
      },
    },
    {
      "name": "Api2",
      "handler": {
        "graphql": {
          "source": "src/api2/schema.ts",
          "batch": false
        }
      },
    }
  ],
  "additionalTypeDefs": [
    "./src/schema.graphql"
  ],
  "additionalResolvers": [
    "./src/resolvers.ts"
  ],
};

export default config;
