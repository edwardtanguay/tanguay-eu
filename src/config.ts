export const appVersion = () => {
	return '0.068 has edit'
}

export const siteMode = () => { 
	const url = String(window.location);
	return url.startsWith('http://localhost') ? 'development' : 'production';
}
