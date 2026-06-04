import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoDir = path.resolve(__dirname, "..");
const pagePath = path.join(repoDir, "english-quote-log/index.html");
const owner = "Yonge6";
const repo = "Design";
const remotePath = "english-quote-log/index.html";

function getGitHubToken() {
  const input = "protocol=https\nhost=github.com\n\n";
  const output = execFileSync("/usr/bin/git", ["credential", "fill"], {
    input,
    cwd: "/tmp",
    encoding: "utf8"
  });
  const tokenLine = output.split("\n").find((line) => line.startsWith("password="));
  const token = tokenLine?.slice("password=".length);
  if (!token) throw new Error("Could not read GitHub token from git credentials.");
  return token;
}

async function githubJson(url, token, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(data)}`);
  }
  return data;
}

async function publish() {
  const token = getGitHubToken();
  const encodedPath = remotePath.split("/").map(encodeURIComponent).join("/");
  const contentsUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}`;
  const current = await githubJson(`${contentsUrl}?ref=main`, token);
  const content = fs.readFileSync(pagePath);
  const encodedContent = content.toString("base64");

  await githubJson(contentsUrl, token, {
    method: "PUT",
    body: JSON.stringify({
      message: "Auto update English quote log",
      content: encodedContent,
      sha: current.sha,
      branch: "main"
    })
  });

  const backupPath = "/Users/yongyuan/Documents/New project/english-quote-log/index.html";
  fs.copyFileSync(pagePath, backupPath);
  console.log("English quote log published through GitHub API.");
}

publish().catch((error) => {
  console.error(error);
  process.exit(1);
});
