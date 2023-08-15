export const appVersion = () => {
	return '0.070 haskell foray';
}

export const siteMode = () => { 
	const url = String(window.location);
	return url.startsWith('http://localhost') ? 'development' : 'production';
}
