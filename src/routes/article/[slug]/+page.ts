// src/routes/article/[slug]/+page.ts
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { articlesList } from '$lib/articles';
import { fetchRepoContent } from '$lib/utils/fetchRepoContent';

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;
  let article = articlesList.find((a) => a.slug === slug);
  if (!article) {
    throw error(404, 'Article not found');
  }

  // Clone to avoid mutating the shared list
  article = { ...article };

  // Only fetch for RepoArticle
  if ('repo' in article) {
    const repoArticle = article;
    if (repoArticle.fullContent === undefined) {
      repoArticle.fullContent = await fetchRepoContent(
        repoArticle.repo,
        repoArticle.branch,
        repoArticle.file
      );
    }
    if (repoArticle.interactiveFile && repoArticle.interactiveContent === undefined) {
      repoArticle.interactiveContent = await fetchRepoContent(
        repoArticle.repo,
        repoArticle.branch,
        repoArticle.interactiveFile
      );
    }
  }

  return { article };
};
