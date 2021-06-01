import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header";
import LogHome from "./components/LogHome";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StartPage from "./components/StartPage";

function App() {
      return (
            <Provider store={store}>
                  <Router>
                        <div className="container">
                              <Header />
                              <div className="content">
                                    <Route
                                          path="/"
                                          exact
                                          render={(props) => (
                                                <>
                                                      <StartPage />
                                                </>
                                          )}
                                    />
                                    <Route
                                          path="/login"
                                          render={(props) => (
                                                <>
                                                      <LogHome />
                                                </>
                                          )}
                                    />
                                    <Route path="/home" component={Home} />
                                    <Route path="/notify" component={Home} />
                                    <Route path="/newOwner" component={Home} />
                              </div>
                              <Footer />
                        </div>
                  </Router>
            </Provider>
      );
}

export default App;
