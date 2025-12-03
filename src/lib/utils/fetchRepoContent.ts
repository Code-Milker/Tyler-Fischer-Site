// src/lib/utils/fetchRepoContent.ts
export async function fetchRepoContent(
  repo: string,
  branch: string,
  file: string
): Promise<string> {
  if (!file) return '';
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${repo}/${branch}/${file}`
    );
    if (response.ok) {
      return await response.text();
    }
    return `Failed to fetch ${file} from GitHub. It may not exist or the repo is private.`;
  } catch (e) {
    return 'Error fetching content: ' + (e as Error).message;
  }
}
