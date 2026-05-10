import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

// import Navbar from "./components/Navbar";
// import LoginForm from "./components/LoginForm";
// import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
// import Loading from "./components/Loading";
// import ProductsTable from "./components/ProductsTable";
import NavBarDay2 from "./components/NavBarDay2";
import HeroSection from "./components/HeroSection";
import BodySection from "./components/BodySection";
import FooterDay2 from "./components/FooterDay2";

import ThemeProvider from "./utility/ThemeContext";

function App() {
  return (
    <>
      {/* <CssBaseline />

      <Navbar />

      <SearchBar />

      <Loading />

      <ProductsTable />

      <LoginForm />

      <Footer /> */}

      <ThemeProvider>
        <NavBarDay2 />

        <HeroSection />
        <BodySection />

        <FooterDay2 />
      </ThemeProvider>
    </>
  );
}

export default App;
