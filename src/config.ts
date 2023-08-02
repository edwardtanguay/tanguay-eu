export const appVersion = () => {
	return '0.067 added siteMode'
}

export const siteMode = () => {
	const url = String(window.location);
	return url.startsWith('http://localhost') ? 'development' : 'production';
}
