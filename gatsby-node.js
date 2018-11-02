const Masto = require("mastodon");

const { tootType } = require("./schema");

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }, configOptions) => {
  const { createNode } = actions;

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  var M = new Masto({
    access_token: configOptions.access_token,
    timeout_ms: 60 * 1000,
    api_url: configOptions.api_url
  });

  const createNodes = toots => {
    toots.forEach(toot => {
      const nodeId = createNodeId(`toot-${toot.id}`);
      const nodeContent = JSON.stringify(toot);

      const nodeData = Object.assign({}, toot, {
        id: nodeId,
        parent: `__SOURCE__`,
        children: [],
        internal: {
          type: `Toot`,
          content: nodeContent,
          contentDigest: createContentDigest(toot)
        }
      });

      createNode(nodeData);
    });
  };

  return M.get("accounts/verify_credentials").then(resp1 => {
    const { id } = resp1.data;
    return M.get(`accounts/${id}/statuses`, {
      exclude_replies: true,
      limit: configOptions.limit
    }).then(resp2 => {
      createNodes(resp2.data);
    });
  });
};

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name !== `Toot`) {
    return {};
  }
  return tootType;
};