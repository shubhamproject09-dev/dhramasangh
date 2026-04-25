import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;