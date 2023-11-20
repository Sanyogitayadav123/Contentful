import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className='container p-8'>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
