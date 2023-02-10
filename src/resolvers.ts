import type {Resolvers} from '../.mesh'

const resolvers: Resolvers = {
  Object1: {
    relation: {
      fragment: '{ relationId }',
      resolve: async (root, args, context, info) => {
        return context.Api2.Query.getObjectById({
          root,
          context,
          info,
          args: {
            id: root.relationId
          }
        }).then((data) => {
          console.log(data);
          return data;
        });
      }
    }
  }
};
export default resolvers;