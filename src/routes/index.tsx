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
import AdminDasboard from "../pages/admin-dashboard";
import AdminProfile from "../pages/admin-profile";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/loyalty" component={Loyalty} />
<<<<<<< HEAD
=======
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/cardpayment" component={PaymentWithCard} />
        <Route path="/cardpayment" component={PaymentWithCashback} />
>>>>>>> 3cdbd86e02ced23f4c383a77157ee4994cf02012
        <Route exact path="/admin-dashboard" component={AdminDasboard} />
        <Route exact path="/admin-profile" component={AdminProfile} />
        <Route path="/dashboard" component={UserDashboard} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
