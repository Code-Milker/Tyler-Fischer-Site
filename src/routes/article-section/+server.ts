import { json } from '@sveltejs/kit'

import type { ContentPreviewType } from '$lib/types.ts';
import Bip from '$lib/images/bip-39.png';
export function GET() {
  const articles: ContentPreviewType[] = [
    {
      title: 'Spiral Dynamics and its pragmatic use cases',
      image: Bip,
      description: '',
      url: ''
    },
    {
      title: '5 starter improvements for you developer workflow',
      image: Bip,
      description:
        ' alskdjfl asldjkflkdsjf lkdjfdlkfjdlkfjdlkfj dlfkjd flkdjfd lkjd flkdj fldk jfldk jfdlkjf dlk fjdlkj fdlk jflkdj fldkjf ldkjf dlk jflk djfdlk jfdlk jfdlkjf dlkzjfda;lkjdf;alskjf;aslkjfas;ljfa;sldkjfasd; lfjas;lasj d;lkjasd  f;lsad:',
      url: ''
    }
  ];
  return json(articles)
}
