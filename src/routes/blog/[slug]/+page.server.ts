import { marked } from "marked";

export const load = async ({ fetch, params }) => {
  try {
    const slug = params['slug'];
    const res: Response = await fetch(`/${slug}.md`);
    if (res.status !== 200) {
      throw new Error();
    }
    console.log(res);
    const post = await res.text();

    return {
      slug,
      post: marked(post),
    };
  } catch (e) {
    throw e;
  }
};