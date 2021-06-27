import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({children, common}) => {
  return (
    <>
      <Nav navigation={common.Navigation} />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
