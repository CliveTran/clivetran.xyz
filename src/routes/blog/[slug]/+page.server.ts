import { marked } from "marked";

export const load = async ({ fetch, params }) => {
  const slug = params['slug'];
  const res: Response = await fetch(`/${slug}.md`);
  if (res.status !== 200) {
    throw new Error();
  }
  console.log(res);
  const post = await res.text();
  const title = convertSlugToText(slug);
  return {
    title,
    slug,
    post: marked(post),
  };
};

function convertSlugToText(text: string): string {
  const words = text.split('-');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const finalText = capitalizedWords.join(' ');

  return finalText;
}