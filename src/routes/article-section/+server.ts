import { json } from '@sveltejs/kit'
import img from '$lib/images/moomoo.jpeg';
import { GITHUB_TOKEN } from '$env/static/private'
export async function GET() {
  const getArticleTitles = async () => {
    const apiUrl = `https://api.github.com/repos/Milk-Maven/obsidian/contents/Articles`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `token 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`,
      }
    })

    const files = await response.json()
    // @ts-ignore
    return files.map(f => f.name)
  }

  const getFile = async (fileName: string) => {
    const apiUrl = `https://api.github.com/repos/Milk-Maven/obsidian/contents/Articles/${fileName}`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,

      }

    })
    let a: any = await response.json()
    return { image: img, title: fileName, description: Buffer.from(a.content, 'base64').toString('utf-8') }
  }


  const files = await getArticleTitles()
  const articles = await Promise.all(files.map((f: any) => {
    return getFile(f)
  }))
  // // @ts-ignore
  // const fileContent = Buffer.from(response.content, 'base64').toString('utf-8');
  return json(articles)
}
