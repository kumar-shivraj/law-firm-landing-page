import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Introduction from "./components/Introduction/Introduction";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import AreaOfPractice from "./components/AreaOfPractice/AreaOfPractice";
import ClintReviews from "./components/ClintReviews/ClintReviews";
import Team from "./components/Team/Team";
import FAQ from "./components/FAQ/FAQ";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className={styles.container_fluid}>
        <div className={styles.container}>
          <Navbar />
          <Banner />
        </div>
      </div>

      <div className={styles.container_fluid_1}>
        <div className={styles.container_1}>
          <Introduction />
        </div>
      </div>

      <div className={styles.container_fluid_1}>
        <div className={styles.container_1}>
          <WhyChooseUs />
        </div>
      </div>

      <div className={styles.container_fluid_1}>
        <div className={styles.container_1}>
          <AreaOfPractice />
        </div>
      </div>


      {/* ====== left and right arraw should be work like a carousel ========= */}
      {/* <ClintReviews /> */}
      <div className={styles.container_fluid_1}>
        <div className={styles.container_1}>
          <Team />
        </div>
      </div>

      {/* ============= + Icon should work as a accordian =============== */}
      {/* <FAQ /> */}

      <div className={styles.container_fluid_1}>
        <div className={styles.container_1}>
          <Subscribe />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
