import React, { Component } from 'react';
import 'html5-device-mockups/dist/device-mockups.min.css';
import { IPhone6Plus } from 'react-device-mockups';
import emoji from "../assets/emoji.png"


export default class KampanyaEkranı extends Component {
    render() {
        return <>
            <div style={{ height: "100vh" }}>
                <div className="header text-center">
                    Merhaba
                </div>
                <div className="sub-title text-center">
                    Seni burada gördüğümüz için çok sevindik
                </div>
                <div className="row ">
                    <div className="col-4" style={{ display: "flex" }}>
                        <div className="phone">
                            <div className="text-center" style={{ fontSize: "5vh" }}>Başlık</div>
                            <div className="container">
                                <span>Kaç Gün</span>
                                <div className="progress mt-2 mb-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#524091", borderRadius: "5vh" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span>Bütçe</span>
                                <div className="progress mt-2 mb-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#524091", borderRadius: "5vh" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span>Bütçe</span>
                                <div className="progress mt-2 mb-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#524091", borderRadius: "5vh" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span>Bütçe</span>
                                <div className="progress mt-2 mb-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#524091", borderRadius: "5vh" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 " style={{ display: "flex" }}>
                        <div style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>
                            <IPhone6Plus width={300} orientation='portrait' color='black' buttonProps={{
                                onClick: () => alert('Home Button Clicked!')
                            }}>
                                <div style={{ backgroundColor: "white", height: "100%", color: "black" }}>
                                    <div className="text-center">
                                        <img className="emoji" src={emoji} />
                                    </div>
                                    <div className="text-center" style={{ fontSize: "5vh" }}>2500</div>
                                    <div className="text-center" style={{ fontSize: "2vh", color: "grey" }}>Potansiyel Satış</div>

                                </div>
                            </IPhone6Plus>
                        </div>
                    </div>
                    <div className="col-4" style={{ display: "flex" }}>

                        <div className="phone">
                            <div className="container" style={{ marginTop: "5vh" }}>
                                <span >Toplam Görüntülenme</span>
                                <div className="mb-2" style={{ color: "black", fontSize: "3vh" }}>15780</div>
                                <span>Toplam Tıklanma</span>
                                <div className="mb-2" style={{ color: "black", fontSize: "3vh" }}>15780</div>
                                <span >Satış</span>
                                <div className="mb-2" style={{ color: "black", fontSize: "3vh" }}>15780</div>
                                <span >Aksiyon alan kullanıcı</span>
                                <div className="mb-2" style={{ color: "black", fontSize: "3vh" }}>15780</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    }
}
