import "./AdminWrapper.css";
import Chart from "../Charts/Chart";
import hello from "../../assets/avatar/avatar.jfif";

const AdminWrapper = () => {
      return (
            <main>
                  <div className="main__container">
                        <div className="main__title">
                              <img src={hello} alt="hello" />
                              <div className="main__greeting">
                                    <h1>Admin</h1>
                                    <p>Welcome to admin dashboard</p>
                              </div>
                        </div>

                        <div className="main__cards">
                              <div className="card">
                                    <i className="fas fa-users fa-2x text-lightblue"></i>
                                    <div className="card__inner">
                                          <p className="text-primary-p">
                                                Number of user
                                          </p>
                                          <span className="font-bold text-title">
                                                57,238
                                          </span>
                                    </div>
                              </div>
                              <div className="card">
                                    <i className="fas fa-user-tie fa-2x text-red"></i>
                                    <div className="card__inner">
                                          <p className="text-primary-p">
                                                Number of Owner
                                          </p>
                                          <span className="font-bold text-title">
                                                2467
                                          </span>
                                    </div>
                              </div>
                              <div className="card">
                                    <i className="fas fa-parking fa-2x text-yellow"></i>
                                    <div className="card__inner">
                                          <p className="text-primary-p">
                                                Number of Parking
                                          </p>
                                          <span className="font-bold text-title">
                                                340
                                          </span>
                                    </div>
                              </div>
                              <div className="card">
                                    <i className="fa fa-thumbs-up fa-2x text-green"></i>
                                    <div className="card__inner">
                                          <p className="text-primary-p">
                                                New Owner
                                          </p>
                                          <span className="font-bold text-title">
                                                645
                                          </span>
                                    </div>
                              </div>
                        </div>
                        <div className="charts">
                              <div className="charts__left">
                                    <div className="charts__left__title">
                                          <div>
                                                <h1>Daily reports</h1>
                                                <p>Vietnam</p>
                                          </div>
                                          <i className="fa fa-usd"></i>
                                    </div>
                                    <Chart />
                              </div>
                              {/* <div className="charts__right">
                                    <div className="charts__right__title">
                                          <div>
                                                <h1>Stats reports</h1>
                                                <p>Vietnam</p>
                                          </div>
                                          <i className="fa fa-usd"></i>
                                    </div>
                                    <div className="charts__right__cards">
                                          <div className="card1">
                                                <h1>Income</h1>
                                                <p>$75,300</p>
                                          </div>
                                          <div className="card2">
                                                <h1>Sales</h1>
                                                <p>$124,300</p>
                                          </div>
                                          <div className="card3">
                                                <h1>Users</h1>
                                                <p>$45,300</p>
                                          </div>
                                          <div className="card4">
                                                <h1>Orders</h1>
                                                <p>$7501</p>
                                          </div>
                                    </div>
                              </div> */}
                        </div>
                  </div>
            </main>
      );
};

export default AdminWrapper;
