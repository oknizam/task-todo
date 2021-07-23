import logo from "./logo.svg";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Routes from "./routing/routing";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
