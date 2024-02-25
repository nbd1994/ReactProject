import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import "../components/modal.css"
import { useLocation, useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activiteTab, setActiveTab] = useState("visa");

  //handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  //direct to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleOrderConfirm = () => {
    alert("Your Order is Placed Successfully!")
    localStorage.removeItem("cart");
    navigate(from, {replace: true})
  }

  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activiteTab === "visa" ? "active" : ""
                      }`}
                      id='visa-tab'
                      data-toggle='tab'
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activiteTab==='visa'}
                      onClick={()=>handleTabChange("visa")}
                      href="#visa"
                    >
                      <img
                        src="https://i.imgur.com/sB4jftM.png"
                        alt=""
                        width="80"
                      />
                    </a>
                  </li>
                  {/* paypal */}
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activiteTab === "paypal" ? "active" : ""
                      }`}
                      id='paypal-tab'
                      data-toggle='tab'
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activiteTab==='paypal'}
                      onClick={()=>handleTabChange("paypal")}
                      href="#paypal"
                    >
                      <img
                        src="https://i.imgur.com/yK7EDD1.png"
                        alt=""
                        width="80"
                      />
                    </a>
                  </li>
                </ul>

                {/* contents */}
                <div className="tab-content" id="myTabContent">
                    {/* visaContent */}
                    <div className={`tab-pane fade ${activiteTab==="visa"? "show active" : " s"}`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa_tab"
                    >
                        {/* visa tab content */}
                        <div className="mt-4 mx-4">
                            <div className="text-center">
                                <h5>Credit Card</h5>
                            </div>
                            <div className="form">
                                <div className="inputbox">
                                    <input type="text" name="name" id="name" className="form-control" required/>
                                    <span>Cardholder Name</span>
                                </div>
                                <div className="inputbox">
                                    <input type="text" name="number" id="number" className="form-control" min='1' max='999' required/>
                                    <span>Card Number</span>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="inputbox">
                                        <input type="text" name="number" id="number" className="form-control" min='1' max='999' required/>
                                        <span>Expiration Date</span>
                                    </div>
                                    <div className="inputbox">
                                        <input type="text" name="number" id="number" className="form-control" min='1' max='999' required/>
                                        <span>CVV</span>
                                    </div>
                                </div>

                                <div className="px-5 pay">
                                    <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>Order Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* paypalContent */}

                    <div className={`tab-pane fade ${activiteTab==="paypal"? "show active" : " s"}`}
                    id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal_tab"
                    >
                     <div className="mt-4 mx-4">
                            <div className="text-center">
                                <h5>Paypal Account Info</h5>
                            </div>
                            <div className="form mt-3">
                                <div className="inputbox">
                                    <input type="text" name="name" id="name" className="form-control" required/>
                                    <span>Enter your email</span>
                                </div>
                                <div className="inputbox">
                                    <input type="text" name="number" id="number" className="form-control" min='1' max='999' required/>
                                    <span>Your Name</span>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="inputbox">
                                        <input type="text" name="number" id="number" className="form-control" min='1' max='999' required/>
                                        <span>Extra Info</span>
                                    </div>
                                    <div className="inputbox">
                                        <input type="text" name="number" id="number" className="form-control" min='1' max='999' required/>
                                        <span></span>
                                    </div>

                                </div>
                                <div className="px-5 pay">
                                    <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>Add Paypal</button>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>

                {/* payment desclaimer */}
                <p className="mt-3 px-4 p-Disclaimer">
                    <em>Payment disclaimer: </em> In no event shall payment or partial payment by Owner for any material or service.
                </p>

              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
