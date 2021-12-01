import React, { Component } from 'react';
import 'html5-device-mockups/dist/device-mockups.min.css';
import { IPhone6Plus } from 'react-device-mockups';
import denebi from "../assets/denebi.png"
import navi from "../assets/Business decisions-amico.png"
import denebi3 from "../assets/denebi3.png"
import { NavLink } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default class Deneme extends Component {
    render() {
        return <>
            <div className="row">
                <div className="col-4 left" >
                    <div className="col-9" style={{ marginLeft: "8vh" }}>
                        <div className="row" style={{ height: "40vh" }} >
                            <img src={denebi} />
                        </div>
                        <div className="row">
                            <img src={navi} />
                        </div>
                    </div>
                </div>
                <div className="col-8 right " >
                    <div className="header text-center">
                        Seçim
                    </div>
                    <div className="sub-title text-center">
                        İşletmen için en iyi kampanya stratejisini seçelim
                    </div>
                    <div className="button-container">
                        <AwesomeButton type="primary" size="large" style={{ display: "flex" }}>
                            <NavLink to="/kampanyalar" style={{ textDecoration: "none", color: "white" }}>
                                Kampanyalar
                            </NavLink>
                        </AwesomeButton>
                        <AwesomeButton type="primary" size="large" style={{ display: "flex", marginTop: "1vh" }}>
                            <NavLink to="/ilanlar" style={{ textDecoration: "none", color: "white" }}>
                                El İlanları
                            </NavLink>
                        </AwesomeButton>
                        <AwesomeButton type="primary" size="large" style={{ display: "flex", marginTop: "1vh" }}>
                            <NavLink to="/cekilis" style={{ textDecoration: "none", color: "white" }}>
                                Çekilişler
                            </NavLink>
                        </AwesomeButton>
                        <AwesomeButton type="primary" size="large" style={{ display: "flex", marginTop: "1vh" }}>
                            <NavLink to="/test" style={{ textDecoration: "none", color: "white" }}>
                                Test Ürünleri
                            </NavLink>
                        </AwesomeButton>
                    </div>
                    <div className="text-center">
                        <img className="footer " src={denebi3} />
                    </div>
                </div>
            </div>


















            {/*            
            <div className="right">
                
                <div className="sub-title">
                    İşletmen için en iyi kampanya stratejisini seçelim
                </div>
                <div className="button-container">
                    <div className="button">
                        <span className="dot-l" />
                        <div className="button-text">
                            Kampanyalar
                        </div>
                        <span className="dot-r" />
                    </div>
                    <div className="button">
                        <span className="dot-l" />
                        <div className="button-text">
                            El İlanları
                        </div>
                        <span className="dot-r" />
                    </div>
                    <div className="button">
                        <span className="dot-l" />
                        <div className="button-text">
                            Çekilişler
                        </div>
                        <span className="dot-r" />
                    </div>
                    <div className="button">
                        <span className="dot-l" />
                        <div className="button-text">
                            Test Ürünleri
                        </div>
                        <span className="dot-r" />
                    </div>
                </div>

                <img className="footer" src={denebi3} />

            </div> */}
        </>
    }
}
