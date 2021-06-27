import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = ({navigation}) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {navigation.map(navItem => (
          <li key={navItem.ID}>
            <Link href={navItem.Link}>{navItem.MenuTitle}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
