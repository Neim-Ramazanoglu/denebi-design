import React, { Component } from 'react';
import 'html5-device-mockups/dist/device-mockups.min.css';
import { IPhone6Plus } from 'react-device-mockups';
import denebi from "../assets/denebi.png"
import friendly from "../assets/Friendly handshake-amico.png"
import denebi3 from "../assets/denebi3.png"
import { NavLink } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default class Sayfa1 extends Component {
    render() {
        return <>
            <div className="row">
                <div className="col-sm-12 col-md-4 left" >
                    <div className="col-sm-12 col-md-9 img-container" >
                        <div className="row denebi-logo"  >
                            <img src={denebi} className="" />
                        </div>
                        <div className="row friendly-logo">
                            <img src={friendly} className="" />
                        </div>
                        <div id="section04" className="demo">
                            <a href="#main-page"><span></span>Kaydır</a>
                        </div>

                    </div>
                </div>
                <div className="col-sm-12 col-md-8 right" id="main-page">
                    <div className="header text-center">
                        Merhaba
                    </div>
                    <div className="sub-title text-center">
                        Seni burada gördüğümüz için çok sevindik
                    </div>
                    <div className="text-center mx-5 main-text">
                        Hey merhaba, seni aramızda görmekten çok mutlu olduk.
                        Sana hemen kendimizi tanıtmak istiyoruz.
                        Yeni nesil bir dijital reklam ağı olarak senin için
                        özel olarak tasarlandım. Sana veya fiziksel mağazana
                        müşteri getirmek istiyorsan doğru yerdesin.
                    </div>

                    <div className="button-container1" >
                        <NavLink to="/secim" style={{ textDecoration: "none", color: "white" }}>
                            <AwesomeButton type="primary" style={{ display: "flex" }}>
                                Hemen Başla
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
