import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Loyalty from "../pages/Loyalty";
import SignUp from "../pages/Register";
import PaymentScreen from "../pages/PaymentScreen";
import UserDashboard from "../pages/UserDashboard";
import PaymentWithCard from "../pages/PaymentWithCard";
import PaymentWithCashback from "../pages/PaymentWithCashback";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/loyalty" component={Loyalty} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/cardpayment" component={PaymentWithCard} />
        <Route path="/cardpayment" component={PaymentWithCashback} />
        <Route path="/dashboard" component={UserDashboard} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
