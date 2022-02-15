import React from "react";
import WebConnect from "../../Resources/Images/WebConnect.png";
import MobileConnect from "../../Resources/Images/MobileConnect.png";

function Connect() {
    const getImageMap = () => {
        if (window.innerWidth > 660) {
            return (
                <section>
                    <img src={WebConnect} usemap="#image-map" />

                    <map name="image-map">
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://www.facebook.com/amidha12"
                            coords="106,90,69"
                            shape="circle"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://wa.me/919855191119"
                            coords="192,234,87"
                            shape="circle"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://github.com/armaan-midha"
                            coords="92,407,56"
                            shape="circle"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://mail.google.com/mail/u/?authuser=armaanmidha8@gmail.com"
                            coords="305,81,399,157"
                            shape="rect"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://www.linkedin.com/in/armaan-midha/"
                            coords="277,329,366,416"
                            shape="rect"
                        ></area>
                        <area
                            target=""
                            alt=""
                            title=""
                            href=""
                            coords="420,165,608,355"
                            shape="rect"
                        ></area>
                        <area
                            target=""
                            alt=""
                            title=""
                            href=""
                            coords="420,165,608,355"
                            shape="rect"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://github.com/armaan-midha"
                            coords="677,101,79"
                            shape="circle"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://mail.google.com/mail/u/?authuser=armaanmidha8@gmail.com"
                            coords="652,332,804,449"
                            shape="rect"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://www.facebook.com/amidha12"
                            coords="880,224,102"
                            shape="circle"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://www.linkedin.com/in/armaan-midha/"
                            coords="1030,39,1177,180"
                            shape="rect"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href=""
                            coords="994,318,1130,449"
                            shape="rect"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://wa.me/919855191119"
                            coords="1231,278,64"
                            shape="circle"
                        ></area>
                    </map>
                </section>
            )
        }
        return (
            <section>
                <img src={MobileConnect} usemap="#image-map" />
                <map name="image-map">
                    <area target="_blank" alt="" title="" href="https://www.facebook.com/amidha12" coords="25,22,14" shape="circle"></area>
                    <area target="_blank" alt="" title="" href="https://mail.google.com/mail/u/?authuser=armaanmidha8@gmail.com" coords="72,18,100,40" shape="rect"></area>
                    <area target="_blank" alt="" title="" href="https://wa.me/919855191119" coords="48,56,18" shape="circle"></area>
                    <area target="_blank" alt="" title="" href="https://github.com/armaan-midha" coords="21,98,14" shape="circle"></area>
                    <area target="_blank" alt="" title="" href="https://www.linkedin.com/in/armaan-midha/" coords="69,82,90,101" shape="rect"></area>
                    <area target="_blank" alt="" title="" href="tel:+91-9855191119"coords="241,78,276,109" shape="rect"></area>
                </map>
            </section>
        )
    }
    return (
        <div id="portfolio-connect-with-me">
            <h1>Connect with me</h1>
            <p>By clicking on the corresponding icon</p>
            {getImageMap()}
        </div>
    );
}

export default Connect;
