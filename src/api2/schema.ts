import {makeExecutableSchema} from '@graphql-tools/schema'

const fs = require('fs');
const path = require('path');

let typeDefs = fs.readFileSync(path.resolve(__dirname, 'schema.graphql'), 'utf8')

export default makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      getObjectById: () => {
        throw new Error('test');
      },
      getObjectsByIds: () => {
        return [
          {
            id: 1,
            anotherRelation: {
              id: 5,
              isActive: true
            }
          }
        ]
      }
    }
  }
});
