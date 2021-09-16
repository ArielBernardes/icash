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
import UserProfile from "../pages/UserProfile";
import CreditCard from "../pages/CreditCard";
import AdminDasboard from "../pages/admin-dashboard";
import AdminProfile from "../pages/admin-profile";
import UserData from "../pages/UserData";
import Transactions from "../pages/Transactions";
import Store from "../pages/Store";
import Icash from "../pages/iCash";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/loyalty" component={Loyalty} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/user-data" component={UserData} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/cardpayment" component={PaymentWithCard} />
        <Route path="/cashbackpayment" component={PaymentWithCashback} />
        <Route path="/credit-cards" component={CreditCard} />
        <Route exact path="/admin-dashboard" component={AdminDasboard} />
        <Route exact path="/admin-profile" component={AdminProfile} />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/store/:storeId" component={Store} />
        <Route path="/icash" component={Icash} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
