export const prerender = true;
export const csr = false;

export function load() {
	return { built_at: new Date() };
}