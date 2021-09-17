import { Switch } from "react-router-dom";
import { Route } from "./Route";
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
        <Route path="/user-profile" isPrivate component={UserProfile} />
        <Route path="/user-data" isPrivate component={UserData} />
        <Route path="/payment" isPrivate component={PaymentScreen} />
        <Route path="/cardpayment" isPrivate component={PaymentWithCard} />
        <Route
          path="/cashbackpayment"
          isPrivate
          component={PaymentWithCashback}
        />
        <Route path="/credit-cards" isPrivate component={CreditCard} />
        <Route
          exact
          path="/admin-dashboard"
          isPrivate
          component={AdminDasboard}
        />
        <Route exact path="/admin-profile" isPrivate component={AdminProfile} />
        <Route path="/dashboard" isPrivate component={UserDashboard} />
        <Route path="/transactions" isPrivate component={Transactions} />
        <Route path="/store/:storeId" isPrivate component={Store} />
        <Route path="/icash" isPrivate component={Icash} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
