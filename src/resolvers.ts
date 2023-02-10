import type {Resolvers} from '../.mesh'

const resolvers: Resolvers = {
  Object1: {
    relation: {
      fragment: '{ relationId }',
      resolve: async (root, args, context, info) => {
        return context.Api2.Query.getObjectsByIds({
          root,
          context,
          info,
          key: root.relationId,
          argsFromKeys: (keys) => ({ids: keys}),
        }).then((data) => {
          console.log(data);
          if (!data.anotherRelation.isActive) {
            return null;
          }
          return data;
        });
      }
    }
  }
};
export default resolvers;