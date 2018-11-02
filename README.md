# gatsby-source-mastodon

A Gatsby source plugin for fetching user toots from Mastodon. Currently only support a user's own toots.

## Usage

You will need to create an `Application` from your Mastodon instance (e.g. https://aus.social/settings/applications). At the very minimum you will need to grant `read` access.

Add the following block of configuration into your `gatsby-config.js`. Replace fields surrounded by `***` with the correct details.

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-mastodon',
      options: {
        api_url: '***MASTODON_INSTANCE_API_URL***',
        limit: 25,
        access_token: '***MASTODON_ACCESS_TOKEN***',
      },
  ],
}
```

### Field Definition

`api_url` - the api url of your mastodon instance (e.g https://aus.social/api/v1)
`limit` - number of toots to return
`access_token` - the access token for your mastodon application

## Query Mastodon Data

A sample of the query is included below, for all available field please check the graphl browser.

```graphql
{
  allToot {
    edges {
      node {
        id
        url
        reblogs_count
        favourites_count
        account {
          username
        }
      }
    }
  }
}
```
