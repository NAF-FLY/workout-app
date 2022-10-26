import Header from './Header/Header'

import styles from './Layout.module.scss'

const Layout = ({ children, bgImage, height = '350px' }) => {
	return (
		<div className={styles.wrapper} style={{ height, backgroundImage: `url(${bgImage})` }}>
			<Header />
			{children}
		</div>
	)
}

export default Layout
