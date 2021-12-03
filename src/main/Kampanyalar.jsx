import React, { Component } from 'react';
import 'html5-device-mockups/dist/device-mockups.min.css';
import { IPhone6Plus } from 'react-device-mockups';
import denebi from "../assets/denebi.png"
import navi from "../assets/Business decisions-amico.png"
import denebi3 from "../assets/denebi3.png"
import { NavLink } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default class Kampanyalar extends Component {
    render() {
        return <>
            <div className="row">
                <div className="col-4 left mobil-left" >
                    <div className="col-9 img-container">
                        <div className="row denebi-logo">
                            <img src={denebi} />
                        </div>
                        <div className="row navi-logo">
                            <img src={navi} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 right mobil-right" >
                    <div className="header text-center">
                        Kampanyalar
                    </div>
                    <div className="sub-title text-center">
                        İşletmen için en iyi kampanya stratejisini seçelim
                    </div>
                    <div className="text-center text-content" >
                        Hey merhaba, seni aramızda görmekten çok mutlu olduk.
                        Sana hemen kendimizi tanıtmak istiyoruz.
                        Yeni nesil bir dijital reklam ağı olarak senin için
                        özel olarak tasarlandım. Sana veya fiziksel mağazana
                        müşteri getirmek istiyorsan doğru yerdesin.
                    </div>

                    <div className="button-container1" >
                        <NavLink to="/secim" style={{ textDecoration: "none", color: "white" }}>
                            <AwesomeButton type="primary" style={{ display: "flex", marginTop: "1vh", width: "100%" }}>
                                Başka bir seçim dene
                            </AwesomeButton>
                        </NavLink>
                        <NavLink to="/kampanya" style={{ textDecoration: "none", color: "white" }}>
                            <AwesomeButton type="primary" style={{ display: "flex", marginTop: "1vh", width: "100%" }}>
                                Kampanya Oluştur
                            </AwesomeButton>
                        </NavLink>
                    </div>
                    <div className="text-center">
                        <img className="footer " src={denebi3} />
                    </div>
                </div>
            </div>
        </>
    }
}
