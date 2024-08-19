import { proxy, useSnapshot } from 'valtio';

const list = proxy([{ title: 'foshan' }]);
const state = proxy({
	count: 0,
	list,
});
function App() {
	const stateSnap = useSnapshot(state);

	return (
		<div>
			<button type='button'>click me {stateSnap.count} times</button>
			<button
				type='button'
				onClick={() => {
					state.list = [];
				}}
			>
				reset
			</button>
			<button
				type='button'
				onClick={() => {
					state.list.push({
						title: `${Date.now()}`,
					});
				}}
			>
				add item
			</button>
			<ul>
				{stateSnap.list.map((i, index) => {
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					return <li key={index}>{i.title}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
