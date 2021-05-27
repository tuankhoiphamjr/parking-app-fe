import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import LogHome from "./components/LogHome";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
      return (
            <Router>
                  <div className="container">
                        <Header />
                        <div className="content">
                              <Route
                                    path="/"
                                    exact
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
      );
}

export default App;
