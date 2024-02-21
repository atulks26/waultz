import React from "react";
import "./Plans.css";

function Plans() {
    return (
        <div className="plans">
            <div className="pricing-section">
                <div className="plans-header">Pricing Details</div>

                <div className="plan-cards-container">
                    <div className="plan-card">
                        <div className="plan-card-details">
                            <p className="plan-card-head">Monthly</p>
                            <p className="plan-card-info">
                                <ul>
                                    <li>
                                        Up to 20 GB -{" "}
                                        <span className="plan-info-subclass">
                                            Rs 300
                                        </span>
                                    </li>
                                    <li>
                                        Up to 50 GB -{" "}
                                        <span className="plan-info-subclass">
                                            Rs 750
                                        </span>
                                    </li>
                                    <li>
                                        Up to 100 GB -{" "}
                                        <span className="plan-info-subclass">
                                            Rs 1500
                                        </span>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="plan-card">
                        <div className="plan-card-details">
                            <p className="plan-card-head">Quarterly</p>
                            <p className="plan-card-info">
                                <ul>
                                    <li>
                                        Up to 20 GB -{" "}
                                        <span className="plan-info-subclass">
                                            Rs 1,100
                                        </span>
                                    </li>
                                    <li>
                                        Up to 50 GB -{" "}
                                        <span className="plan-info-subclass">
                                            Rs 2,100
                                        </span>
                                    </li>
                                    <li>
                                        Up to 100 GB -{" "}
                                        <span className="plan-info-subclass">
                                            Rs 4,200
                                        </span>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="plan-card">
                        <div className="plan-card-details">
                            <p className="plan-card-head">Annually</p>
                            <p className="plan-card-info">
                                <ul>
                                    <li>
                                        Up to 20 GB -{" "}
                                        <span className="plan-info-subclass">
                                            Rs 3,000
                                        </span>
                                    </li>
                                    <li>
                                        Up to 50 GB -{" "}
                                        <span className="plan-info-subclass">
                                            Rs 7,500
                                        </span>
                                    </li>
                                    <li>
                                        Up to 100 GB -{" "}
                                        <span className="plan-info-subclass">
                                            Rs 15,000
                                        </span>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="plan-choose"></div>
        </div>
    );
}

export default Plans;
