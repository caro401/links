import { builder } from "@netlify/functions";
import fetch from "node-fetch";
import Parser from "rss-parser";

let parser = new Parser();

async function getBlogData() {
  const blogFeed = await parser.parseURL("https://www.caro.fyi/rss.xml");
  return { postCount: blogFeed?.items.length || 0 };
}

async function getNotesData() {
  const notesFeed = await parser.parseURL("https://notes.caro.fyi/rss.xml");
  return { notesCount: notesFeed?.items.length || 0 };
}


async function getMastodonData() {
  const mastodonAccount =
    "https://fosstodon.org/api/v1/accounts/109365798296089021";
  const res = await fetch(mastodonAccount);
  const mastodonData = await res.json();
  return {
    followers: mastodonData?.followers_count,
    following: mastodonData?.following_count,
    posts: mastodonData?.statuses_count,
  };
}

async function getGithubData() {
  const githubRes = await fetch("https://api.github.com/users/caro401/repos");
  const githubData = await githubRes.json();
  return {
    publicRepos: githubData?.length || 0,
  };
}

async function getData() {
  const blog = await getBlogData();
  const mastodon = await getMastodonData();
  const github = await getGithubData();
  const notes = await getNotesData()
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        mastodon,
        github,
        blog,
        notes,
      }),
      ttl: 604800, // cache the result of this function for 1 week
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500 };
  }
}

export const handler = builder(getData);
