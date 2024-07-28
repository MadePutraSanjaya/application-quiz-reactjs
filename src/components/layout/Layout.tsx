import RoutesApp from '../../helpers/routes/Routes'
import Navbar from '../atom/navbar/Navbar'
import Footer from '../atom/footer/Footer'

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <RoutesApp />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout