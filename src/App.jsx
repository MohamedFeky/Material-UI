import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import ProductsTable from "./components/ProductsTable";

function App() {
  return (
    <>
      <CssBaseline />

      <Navbar />

      <SearchBar />

      <Loading />

      <ProductsTable />

      <LoginForm />

      <Footer />
    </>
  );
}

export default App;
