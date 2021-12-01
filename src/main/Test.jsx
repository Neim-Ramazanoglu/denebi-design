import React, { Component } from 'react';
import 'html5-device-mockups/dist/device-mockups.min.css';
import { IPhone6Plus } from 'react-device-mockups';
import denebi from "../assets/denebi.png"
import navi from "../assets/Business decisions-amico.png"
import denebi3 from "../assets/denebi3.png"
import { NavLink } from 'react-router-dom';


export default class Test extends Component {
    render() {
        return <>
            <div className="row">
                <div className="col-3 left" >
                    <div className="row">
                        <img src={denebi} />
                    </div>
                    <div className="row">
                        <img src={navi} />
                    </div>
                </div>
                <div className="col-9 right " >
                    <div className="header text-center">
                        Test Ürünleri
                    </div>
                    <div className="sub-title text-center">
                        İşletmen için en iyi kampanya stratejisini seçelim
                    </div>
                    <div className="text-center mx-5" style={{ fontSize: "3vh", height: "43vh" }}>
                        Hey merhaba, seni aramızda görmekten çok mutlu olduk.
                        Sana hemen kendimizi tanıtmak istiyoruz.
                        Yeni nesil bir dijital reklam ağı olarak senin için
                        özel olarak tasarlandım. Sana veya fiziksel mağazana
                        müşteri getirmek istiyorsan doğru yerdesin.
                    </div>

                    <div className="single-button text-center" >
                        <NavLink to="/secim" style={{ textDecoration: "none", color: "white" }}>
                            Başka bir seçim dene
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
