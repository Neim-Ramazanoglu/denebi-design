import React, { Component } from 'react';
import 'html5-device-mockups/dist/device-mockups.min.css';
import { IPhone6Plus } from 'react-device-mockups';
import denebi from "../assets/denebi.png"
import navi from "../assets/Business decisions-amico.png"
import denebi3 from "../assets/denebi3.png"


export default class Deneme extends Component {
    render() {
        return <>
            {/* <div style={{ margin: "auto", width: "50%" }}>
                <IPhone6Plus width={300} orientation='portrait' color='black' buttonProps={{
                    onClick: () => alert('Home Button Clicked!')
                }}>
                    <div style={{ backgroundColor: "white", width: '100%', height: '100%', margin: 0 }}>
                        <div style={{ paddingTop: "40px" }}>içerisine istediğimiz şeyi</div>
                        <div> ekleyebiliriz </div>
                        <div style={{ paddingTop: "40px" }}> {emo} </div>
                    </div>
                </IPhone6Plus >
            </div > */}

            <div className="left">
                <div className="svg-denebi">
                    <img style={{ maxWidth: "100%" }} src={denebi} />
                </div>

                <div >
                    <img style={{ maxWidth: "100%" }} src={navi} />
                </div>
            </div>
            <div className="right">
                <div className="header">
                    Seçim
                </div>
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

            </div>
        </>
    }
}
