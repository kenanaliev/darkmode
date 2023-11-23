import "./App.css";

import useDarkMode from "./hook/useDarkMode";

function App() {
  const changer = useDarkMode()
  return(
    <div>
      <h1></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, praesentium sed quod nemo voluptate vero eaque quos laudantium nihil. Aliquid illum provident molestiae! Soluta, placeat? Exercitationem tenetur laudantium quasi eum?</p>
    <hr />
    <div className="card">
      <ul>
        <li>un</li>
        <li>1.4</li>
        <button onClick={changer}>add to basket
        </button>
      </ul>
    </div>
    </div>
  );
}
export default App;
