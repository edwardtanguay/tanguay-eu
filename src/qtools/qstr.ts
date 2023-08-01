import * as qstr from './qstr';
import OutlineTextParser from "../classes/outlineTextParser";
import { marked } from 'marked';

/**
 * For multi-term searching, returns true if a text contains all terms in a google-like search teext
 * 
 * qstr.textContainsAllTerms('Build a Next.js site with app router, TypeScript, and Tailwind', 'next tailwind');
 * 
 * true
 */
export const textContainsAllTerms = (text: string, searchText: string) => {
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

export const buildOutlineHtml = (body: string) => {
	const lines = qstr.convertStringBlockToLines(body);
	if (qstr.isEmpty(body)) {
		return "";
	} else if (lines.length === 1) {
		const cleanedBody = qstr.chopLeft(body, "- ");
		return (
			'<div class="outline">' + qstr.parseMarkDown(cleanedBody) + "</div>"
		);
	} else {
		const outlineTextParser = new OutlineTextParser(body);
		outlineTextParser.parse();
		let html = outlineTextParser.displayParsed();
		return html;
	}
}

export const convertStringBlockToLines = (stringBlock: string, trimLines = true) => {
	let roughLines: string[] = [];

	if (qstr.isEmpty(stringBlock)) {
		return [];
	}
	roughLines = stringBlock.split('\n');
	if (trimLines) {
		roughLines = qstr.trimAllLinesInLinesArray(roughLines);
	}
	roughLines = qstr.trimLinesOfEndBlanks(roughLines);
	return roughLines;
}

/**
 * Check if a string is empty.
 *
 * qstr.isEmpty('');
 *
 * true
 */
export const isEmpty = (line: string) => {
	if (line === undefined || line === null) {
		return true;
	}
	line = line.toString();
	return line.trim() === '';
}

/**
 * Removes text from the end of a string.
 *
 * qstr.chopRight('book-001', '-001');
 *
 * 'book'
 */
export const chopRight = (main: string, textToChop: string) => {
	if (main.endsWith(textToChop)) {
		const len = textToChop.length;
		const mainLen = main.length;
		if (len <= mainLen) {
			return main.substring(0, mainLen - (len));
		}
	}
	return main;
};

export const chopLeft = (main: string, textToChop: string) => {
	if (main.startsWith(textToChop)) {
		const len = textToChop.length;
		const mainLen = main.length;
		if (len <= mainLen) {
			return main.substring(len, mainLen);
		}
	}
	return main;
};

export const parseMarkDown = (markdownText: string, options = { suppressParagraphMarks: false, suppressOrderedListElements: false }) => {
	let r = markdownText;

	// TODO: fix this in order to mask elements, not sure what that was actually
	// if (options.suppressOrderedListElements) {
	// 	r = qstr.maskText(r, '.');
	// }

	r = marked.parse(r);
	if (options.suppressParagraphMarks) {
		r = qstr.chopLeft(r, '<p>');
		r = qstr.chopRight(r, '</p>');
	}

	// make links open up new browser window
	r = qstr.replaceAll(r, 'href', 'target="_blank" href');

	// don't hyperlink github links
	r = qstr.replaceAll(r, '<a href="mailto:git@github.com">git@github.com</a>', 'git@github.com');

	// if (options.suppressOrderedListElements) {
	// 	r = qstr.unmaskText(r);
	// }

	// was getting </p> a the end of all output that didn't have a \n
	if (!r.startsWith('<p>') && r.endsWith('</p>\n')) {
		r = qstr.chopRight(r, '</p>\n');
	}

	return r;
}

export const encodeHtmlForDisplay = (html: string) => {
	return String(html).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * REPLACE ALL OCCURANCES IN A STRING:
 *
 * qstr.replaceAll("This is a tost.", "o", "e");
 *
 * "This is a test."
 */
export const replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};

export const getNumberOfPrecedingTabs = (text: string, forceRealTabs = false) => {
	let tempText = text;
	let numberOfPrecedingTabs = 0;
	let tab = qstr.TAB();
	if (forceRealTabs) {
		tab = '\t';
	}
	while (tempText.startsWith(tab)) {
		tempText = qstr.chopLeft(tempText, tab);
		numberOfPrecedingTabs += 1;
	}
	return numberOfPrecedingTabs;
}

export const linesContainCode = (lines: string[]) => {
	let rb = false;
	const codeIdentifyingTexts = [
		'Private Sub',
		'{',
		'}',
		'/&gt;',
		'&lt;/',
		'End Sub',
		'()',
		'CREATE TABLE',
		'Dim ',
		'console.log(',
		'guifont=',
		'print("',
		'window.title',
		'CreateObject',
		'def main()'
	];
	if (qstr.linesContainAnyOfThese(lines, codeIdentifyingTexts)) {
		rb = true;
	}
	if (lines.length === 1 && qstr.endsWith(lines[0], ';')) {
		rb = true;
	}
	return rb;
}

export const addPrecedingTabs = (text: string, numberOfPrecedingTabs: number) => {
	const tab = qstr.TAB();
	return tab.repeat(numberOfPrecedingTabs) + text;
}

// e.g. - im [intranet](http://intranet/index.php)
export const containsUrlMarkdown = (text: string) => {
	if (qstr.contains(text, '(') && qstr.contains(text, ')') && qstr.contains(text, '[') && qstr.contains(text, ']')) {
		return true;
	}
	return false;
}

export const trimAllLinesInLinesArray = (lines: string[]) => {
	const newLines: string[] = [];
	lines.forEach(function (line) {
		const newLine = line.trim();
		newLines.push(newLine);
	});
	return newLines;
}

// returns a lines array that has front and end blank strings, as one without these blanks
export const trimLinesOfEndBlanks = (lines: string[]) => {
	lines = qstr.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	lines = qstr.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	return lines;
}

export const TAB = (numberOfTabs: number = 1) => {
	const tab = "    "; // 4 spaces
	return tab.repeat(numberOfTabs);
}

export const linesContainAnyOfThese = function (lines: string[], codeIdentifyingTexts: string[]) {
	for (const line of lines) {
		for (const text of codeIdentifyingTexts) {
			if (line.includes(text)) {
				return true;
			}
		}
	}
	return false;
}

/**
 * Check if a string has another string at the end.
 *
 * qstr.contains("This is a test.", ".");
 *
 * true
 */
export const endsWith = (main: string, part: string) => {
	return main.endsWith(part);
}


/**
 * Check if a string is inside another string.
 *
 * qstr.contains("This is a test.", "test");
 *
 * true
 */
export const contains = (line: string, searchText: string) => String(line).includes(searchText);

// if first line of lines array is blank, it will remove it
// but don't remove any blank lines from middle or end
export const trimBeginningLinesOfBlanks = (lines: string[]) => {
	const newLines: string[] = [];
	let trimmingBlanks = true;
	lines.forEach(function (line) {
		const newLine = line;
		if (trimmingBlanks && line === '') {
			// skip it since it is a preceding blank item
		} else {
			newLines.push(newLine);
			trimmingBlanks = false;
		}
	});
	return newLines;
}

export const shortenUrlText = (url: string) => {
	// https://github.com/edwardtanguay/et002-nextjs-todo-app	
	const parts = qstr.breakIntoParts(url, '/');
	const index = parts.length - 1;
	return parts[index];
}

export const breakIntoParts = (main: string, delimiter: string = ',', maximumNumberOfParts: number = 0) => {
	const escapedDelimiter = `\\${delimiter}`;
	const mask = '@@@MASK@@@';
	if (qstr.isEmpty(main)) {
		return [];
	}

	const maskedMain: string = qstr.replaceAll(main, escapedDelimiter, mask);
	const roughParts: string[] = maskedMain.split(delimiter);
	let parts: string[] = [];
	roughParts.forEach((part: string) => {
		let newPart: string = part;
		newPart = newPart.trim();
		parts.push(newPart);
	});
	if (maximumNumberOfParts !== 0 && maximumNumberOfParts < parts.length) {
		const consolidatedParts: string[] = [];
		parts.forEach((part, index) => {
			if (index < maximumNumberOfParts - 1) {
				consolidatedParts.push(part);
			} else {
				const current: string = consolidatedParts[maximumNumberOfParts - 1];
				let prefix: string = '';
				if (current !== undefined) {
					prefix = `${current};`;
				}
				consolidatedParts[maximumNumberOfParts - 1] = prefix + part;
			}
		});
		parts = consolidatedParts;
	}

	// unmask
	const unmaskedParts = [];
	for (const part of parts) {
		const unmaskedPart = qstr.replaceAll(part, mask, delimiter);
		unmaskedParts.push(unmaskedPart);
	}
	parts = unmaskedParts;

	return parts;
}

export const getUrlOutOfString = (line: string) => {
	const regex = /(>https?:\/\/\S+)/;
	const match = line.match(regex);
	let r = match ? match[1] : null;
	r = r ? r : '';
	r = qstr.chopLeft(r, '>');
	const parts = qstr.breakIntoParts(r, '</a>');
	r = parts[0];
	return r;
}

export const extractDescriptionFromOutline = (outlineText: string) => {
	const lines = qstr.convertStringBlockToLines(outlineText);
	let lineCount = 1;
	const bits = [];
	for (const line of lines) {
		let r = qstr.chopLeft(line, '- ');
		r = qstr.replaceAll(r, '**', '');
		bits.push(r);
		lineCount++;
		if (lineCount > 10) {
			break;
		}
	}
	return bits.join(' - ');
}

export const smartPlural = (number: number, singularNoun: string, pluralNoun: string = '') => {
	let r = '';
	if (pluralNoun === '') pluralNoun = singularNoun + 's';
	r += number + ' ';
	r += number === 1 ? singularNoun : pluralNoun;
	return r;
}