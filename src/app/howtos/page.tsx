import howtos from '../../data/itemtype_howtos.json';

export default function About() {
	return (
		<>
			<p className="mb-3">There are {howtos.length} howtos loaded.</p>
			{howtos.map((howto) => {
				return <div key={howto.id}>{howto.title}</div>;
			})}
		</>
	);
};
