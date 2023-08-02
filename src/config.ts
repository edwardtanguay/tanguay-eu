export const appVersion = () => {
	return '0.067 added siteMode'
}

export const siteMode = () => {
	const url = 'nnn'; // = String(window.location);
	return url.startsWith('http://localhost') ? 'development' : 'production';
}
