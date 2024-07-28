import RoutesApp from "../../helpers/routes/Routes";
import Navbar from "../atom/navbar/Navbar";
import Footer from "../atom/footer/Footer";
import { useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <>
      {!isLoginPage && (
        <header>
          <Navbar />
        </header>
      )}
      <main>
        <RoutesApp />
      </main>
      {!isLoginPage && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Layout;
