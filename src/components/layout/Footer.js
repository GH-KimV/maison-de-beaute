import React from 'react';

const Footer = () => {
    return (
        <div className='container footer'>
            <div class='row'>
                <div class='col-sm op-info-header'>
                    contact us
                    <div class='op-info-header'>
                        <a href='tel:626-464-7197'>626-464-7197</a>
                    </div>
                </div>
                <div class='col-sm op-info-header'>
                    hours
                    <div class='op-info'>10 am - 7 pm</div>
                </div>
                <div class='col-sm op-info-header'>
                    follow us
                    <div class='op-info'>instagram</div>
                </div>
            </div>
            <div className='address'>
                <a href='https://www.google.com/maps/place/Yolo+Studio/@34.1444454,-118.135074,17z/data=!4m13!1m7!3m6!1s0x80c2c35d0190a627:0x54ca0d29f0edb1cb!2s850+E+Green+St,+Pasadena,+CA+91101!3b1!8m2!3d34.144441!4d-118.1328853!3m4!1s0x80c2c3fde698ee5f:0x3a2976a91dbf1d62!8m2!3d34.144441!4d-118.1328853'>
                    850 E Green St, Pasadenam CA 91101
                </a>
            </div>
            <div className='copyright'>
                Ⓒ 2020 Maison De Beauté All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
