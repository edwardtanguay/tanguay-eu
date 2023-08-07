export const appVersion = () => {
	return '0.068 added environment vars'
}

export const siteMode = () => { 
	const url = String(window.location);
	return url.startsWith('http://localhost') ? 'development' : 'production';
}
