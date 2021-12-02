import React, { Component } from 'react';
import 'html5-device-mockups/dist/device-mockups.min.css';
import { IPhone6Plus } from 'react-device-mockups';
import emoji from "../assets/emoji.png"
import üzgün from "../assets/üzgün.png"
import mutlu from "../assets/mutlu.png"
import çokmutlu from "../assets/çokmutlu.png"
import { styled } from '@mui/material/styles';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { useState, useEffect } from 'react';

const PrettoSlider = styled(Slider)({
    color: '#524091',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#524091',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});
export default function KampanyaEkranı() {

    const [denebi, setDenebi] = useState(50)
    const handleChange = (event, newValue) => {
        setDenebi(newValue);
    };


    console.log(denebi);
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
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                defaultValue={20}
                            />

                            <span >Denebi Puanı</span>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                value={denebi}
                                onChange={handleChange}
                            />

                            <span>Kullanıcı Puanı</span>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                defaultValue={20}
                            />

                            <span>Görüntülenme Sayısı</span>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                defaultValue={20}
                            />

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
                                    <img className="emoji" src={(denebi < 21 ? üzgün : denebi < 41 ? mutlu : denebi < 61 ? çokmutlu : emoji)} />
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
