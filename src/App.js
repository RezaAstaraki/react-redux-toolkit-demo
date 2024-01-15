import "./App.css";
import IceCreamView from "./features/icecream/IceCreamView";
import CakeView from "./features/cake/CakeView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <div className="App">
      <IceCreamView></IceCreamView>
      <CakeView></CakeView>
      <UserView></UserView>
    </div>
  );
}

export default App;
