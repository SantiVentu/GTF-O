import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeConteiner from "./Components/HomeConteiner/HomeConteiner"
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import NavBar from "./Components/NavBar/NavBar";
import CheckoutConteiner from "./Components/CheckcoutConteiner/CheckoutConteiner";
import ItemDetailContainer from "./Components/ItemDitailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

            <Route path= '/checkout'>
              <CheckoutConteiner/>
            </Route>

            <Route path='/item/:paramId'>
              <ItemDetailContainer />
            </Route>

            <Route path= '/productos'>
              <ItemListConteiner />
            </Route>

            <Route path= '/'>
              <HomeConteiner />
            </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
