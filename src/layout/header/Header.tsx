import { Navigation } from './Navigation/Navigation';
import logo from '../../assets/images/logo.png';
import './Header.scss';


export function Header() {

	return (
		<div className='header'>
			<div className='header__logo'>
				<a href="#"><img src={logo} alt="" /></a>
			</div>
			<Navigation />
		</div>
	)
}