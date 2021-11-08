import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AlertMsg from "./components/AlertMsg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPage from "./pages/DetailPage";
import PublicNavbar from "./components/PublicNavbar";
function App() {
  return (
    <Router>
      <PublicNavbar />
      <AlertMsg />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/product/:id" component={DetailPage} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
