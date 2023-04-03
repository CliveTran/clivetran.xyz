import { posts } from './data';

export function load() {
	return {
		posts: posts.map((post: { slug: string; title: string; date: string }) => ({
			slug: post.slug,
			title: post.title,
			date: post.date
		}))
	};
}