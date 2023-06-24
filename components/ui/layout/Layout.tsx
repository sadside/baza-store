import Footer from './footer/Footer'
import styles from './Layout.module.scss'
import Menu from './menu/Menu'

type Props = { children?: React.ReactNode }

const Layout = ({children}) => {
	return (
		<div className={styles.wrapper}>
			<Menu/>
			<div className={styles.outlet}>
				{children}
			</div>
			<div className={styles.footer}>
				<Footer/>
			</div>
		</div>
	)
}

export default Layout
