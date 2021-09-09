import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes />
      <Toaster />
    </div>
  );
};

export default App;
