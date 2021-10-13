import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./styles.css";
import "./styles/tailwind-pre-build.css";
import IngredientsList from './screens/IngredientsList';
import IngredientDetails from './screens/IngredientDetails';

export default function App() {

  return (
    <Router>
      <div className="App pt-4">
        <Switch>
          <Route exact path="/" children={<IngredientsList />} />
          <Route exact path="/:id" children={<IngredientDetails />} />
        </Switch>
      </div>
    </Router>
  );
}
