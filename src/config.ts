export const appVersion = () => {
	return '0.071 config change';
}

export const siteMode = () => { 
	const url = String(window.location);
	return url.startsWith('http://localhost') ? 'development' : 'production';
}
