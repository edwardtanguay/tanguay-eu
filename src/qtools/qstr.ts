/**
 * For multi-term searching, returns true if a text contains all terms in a google-like search teext
 * 
 * qstr.textContainsAllTerms('Build a Next.js site with app router, TypeScript, and Tailwind', 'next tailwind');
 * 
 * true
 */
export const textContainsAllTerms = (text: string, searchText:string) => {
	const terms = searchText.split(' ');
	for (const term of terms) {
		if (!text.toLowerCase().includes(term)) {
			return false;
		}
	}
	return true;
}
