module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow @Injectable({ providedIn: 'root' })",
      category: "Best Practices",
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      Decorator(node) {
        if (node.expression.callee.name === "Injectable") {
          context.report({
            node,
            message: "@Injectable({ providedIn: 'root' }) is not allowed",
          });
        }
      },
    };
  },
};
