import "./App.css";
import Tombol from "./components/Tombol";

const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<Tombol name='Indah' />
				<Tombol name='Mentari' />
				<Tombol name='Mentari nan Indah' />
			</header>
		</div>
	);
};

export default App;
