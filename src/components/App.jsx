import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png";
import swordSwg from "../images/sword.svg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hello there!</h1>
        </section>
        <img src={sword} alt="sword" width="250" />
        <img src={swordSwg} alt="sword" width="250" />
        <Recipes />
      </main>
    </>
  );
};

export default App;
