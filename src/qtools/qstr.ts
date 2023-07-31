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
		if (!text.toLowerCase().includes(term.toLowerCase())) {
			return false;
		}
	}
	return true;
}

/**
 * Encloses search words in a class so that they can be shown as highlighted
 * 
 * qstr.wrapFoundSearchWordsWithClassElement('Build a Next.js site with app router, TypeScript, and Tailwind', 'next tailwind');
 * 
 * Build a <span class="searchHighlight">Next.js</span> site with app router, TypeScript, and Tailwind
 */
export const wrapFoundSearchWordsWithClassElement = (text: string, searchText: string, minimum: number = 3, className: string = 'searchHighlight') => {
	// searchText = "regex vue"
	// regexString = "(regex)|(vue)"
	// regexReplaceString = "$1$2";
	const escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|]/g, "\\$&");
	const searchWords = escapedSearchText.split(' ').filter(word => word.length >= minimum);
	if (searchWords.length > 0) {
		const regexSearchString = searchWords.map(word => `(${word})`).join('|');
		const regexReplaceString = searchWords.map((_m, i) => '$' + String(i + 1)).join('');
		const re = new RegExp(regexSearchString, "ig");
		const result = text.replace(re, `<span class="${className}">${regexReplaceString}</span>`)
		return result === undefined ? text : result;
	} else {
		return text;
	}
}

