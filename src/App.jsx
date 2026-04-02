import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    </div>
  )
}
