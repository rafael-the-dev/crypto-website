import Image from "next/image";
import classNames from "classnames";

import Card from "./components/card";

import classes from "./styles.module.css";
import videoBg from "public/backgrounds/bg-video.jpg"

const AppAdvantagesContainer = () => {
    const list = [
        {
            description: <>Protection agains DDoS attacks,<br/>full data encryption</>,
            title: "Strong security",
            titleIcon: classes.strongSecurity
        },
        {
            description: <>Providing services in 99% countries<br/>around all the globe</>,
            title: "World coverage",
            titleIcon: classes.worldCoverage
        },
        {
            description: <>Popular methods: Visa, Master Card,<br/>bank transfer, cryptocurrency</>,
            title: "Payment options",
            titleIcon: classes.paymentOptions
        },
        {
            description: <>Trading via our Mobile App, Available<br/>in Play Store &amp; App Store</>,
            title: "Mobile app",
            titleIcon: classes.mobileApp
        },
        {
            description: <>Reasonable trading fees for takers<br/>and all market makers</>,
            title: "Cost efficiency",
            titleIcon: classes.costEfficiency
        },
        {
            description: <>Fast access to high liquidity orderbook<br/>for top currency pairs</>,
            title: "High liquidity",
            titleIcon: classes.highLiquidity
        }
    ];


    return (
        <section>
            <ul className="bg-neutral-800 flex-wrap justify-between py-12 px-5 sm:px-[10%] md:px-5 md:flex">
                {
                    list.map((item, index) => <Card key={index} { ...item } />)
                }
            </ul>
            <div className={classNames(classes.imageContainer, `relative mb-12`)}>
                <Image 
                    alt=""
                    className="object-cover object-center"
                    layout="fill"
                    src="/backgrounds/bg-video.jpg"
                />
            </div>
        </section>
    );
};

export default AppAdvantagesContainer;