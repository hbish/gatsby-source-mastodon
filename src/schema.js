const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLList,
} = require(`gatsby/graphql`)

const ApplicationType = new GraphQLObjectType({
  name: 'MastodonApplication',
  fields: {
    name: { type: GraphQLString },
    website: { type: GraphQLString },
  },
})

const AccountType = new GraphQLObjectType({
  name: 'MastodonUser',
  fields: {
    id: { type: GraphQLFloat },
    username: { type: GraphQLString },
    acct: { type: GraphQLString },
    display_name: { type: GraphQLString },
    locked: { type: GraphQLBoolean },
    bot: { type: GraphQLBoolean },
    created_at: { type: GraphQLString },
    note: { type: GraphQLString },
    url: { type: GraphQLString },
    avatar: { type: GraphQLString },
    avatar_static: { type: GraphQLString },
    header: { type: GraphQLString },
    header_static: { type: GraphQLString },
    followers_count: { type: GraphQLInt },
    following_count: { type: GraphQLInt },
    statuses_count: { type: GraphQLInt },
  },
})

exports.tootType = {
  created_at: {
    type: GraphQLString,
  },
  content: {
    type: GraphQLString,
  },
  url: {
    type: GraphQLString,
  },
  reblogs_count: {
    type: GraphQLInt,
  },
  favourites_count: {
    type: GraphQLInt,
  },
  replies_count: {
    type: GraphQLInt,
  },
  visibility: {
    type: GraphQLString,
  },
  sensitive: {
    type: GraphQLBoolean,
  },
  favourited: {
    type: GraphQLBoolean,
  },
  reblogged: {
    type: GraphQLBoolean,
  },
  muted: {
    type: GraphQLBoolean,
  },
  account: {
    type: AccountType,
  },
  application: {
    type: ApplicationType,
  },
}
