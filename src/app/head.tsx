export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;
	return (
		<>
			<title>Info Site - Info</title>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
         <meta property="og:title" content="Edward's Tech Site" />
			<meta property="og:type" content="site" />
			<meta
				property="og:description"
				content="This is where I keep all my tech code and information."
			/>
			<meta
				property="og:image"
				content="https://et001-nextjs-usecontext.tanguay.eu/images/info-page.png"
			/>
			<meta property="og:url" content="https://starters.tanguay.eu" />
		</>
	);
	return <p>{id}</p>;
}
