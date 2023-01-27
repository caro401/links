import { builder } from "@netlify/functions";
import fetch from "node-fetch";


async function getMastodonAccount() {
  const mastodonAccount = 'https://fosstodon.org/api/v1/accounts/109365798296089021'

  const res = await fetch(mastodonAccount)
  const data = await res.json()

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          'followers': data?.followers_count,
          'following': data?.following_count,
          'posts': data?.statuses_count,
        }),
      ttl: 604800  // cache the result of this function for 1 week
    }
  } catch (err) {
    console.error(err)
    return { statusCode: 500 }
  }
}

export const handler = builder(getMastodonAccount)
