import Router from "./config/router";
import { Provider } from "react-redux";

import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
