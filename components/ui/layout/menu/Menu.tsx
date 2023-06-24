import Link from "next/link";
import SvgSelector from '../../../../utils/SvgSelector'
import MenuLinks from '../../../menuLinks/MenuLinks'

import styles from './Menu.module.scss'

type Props = {}

const Menu = ({}: Props) => {
	return (
		<div className={styles.wrapper}>
			<Link className={styles.logo} href='/'>
				<SvgSelector id='logo'/>
			</Link>
			<div className={styles.nav}>
				<MenuLinks/>
			</div>
			<div className={styles.additional}>
				<Link className={styles.userIcon} href='auth'>
					<SvgSelector id='user'/>
				</Link>
				<div className={styles.userIcon}>
					<SvgSelector id='cart'/>
				</div>
			</div>
		</div>
	)
}

export default Menu
