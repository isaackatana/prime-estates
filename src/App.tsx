import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      <FloatingContact />
    </>
  );
}

export default App;