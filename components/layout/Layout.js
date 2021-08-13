import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="App">
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}
