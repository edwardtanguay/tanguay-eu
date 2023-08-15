export const appVersion = () => {
	return '0.072 change 444';
}

export const siteMode = () => { 
	const url = String(window.location);
	return url.startsWith('http://localhost') ? 'development' : 'production';
}
