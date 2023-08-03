import Benefits from "../components/Benefits/Benefits";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Heading from "../components/Heading/Heading";
import s from "./Page.module.scss";

function HomePage() {
  return (
    <div className={s.page}>
      <Header />
      <Heading />
      <Categories />
      <Benefits />
      <Footer />
    </div>
  );
}

export default HomePage;
