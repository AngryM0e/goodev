import { Routes, Route } from 'react-router-dom';
import { Header } from './layout/header/header';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import './styles/index';


export function App() {
	return (
		<div className='page-container'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='Movies' element={<Movies />} />
			</Routes>
		</div>
	)
}