const hasLowerCase = (str) => /[a-z]/.test(str);
module.exports = {
  rules: {
    "constant-capitalization": {
      meta: {
        type: "suggestion",
        docs: {
          description: "disallow lowercase alphabets in constants declaration",
        },
      },
      create: function (context) {
        return {
          VariableDeclarator: function (node) {
            if (
              node.parent.kind === "const" &&
              hasLowerCase(node.id.name) &&
              node.init.type === "Literal"
            ) {
              context.report(
                node,
                "Please use capitalized casing for constants"
              );
            }
          },
        };
      },
    },
  },
};
