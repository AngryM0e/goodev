import { Link } from 'react-router-dom'
import './Navigation.scss'


export function Navigation() {

	return (
		<div className='header__navigation'>
			<nav>
				<ul>
					<li><Link to="Movies">Movies</Link></li>
					<li><Link to="TV-Series">TV-Series</Link></li>
				</ul>
			</nav>
		</div>
	)
}