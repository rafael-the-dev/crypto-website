import classes from "./styles.module.css"

import Hero from "src/components/hero";
import Card from "src/components/services-card";

const Container = () => {
    const cardsList = [
        {
            iconClassName: classes.bitcoinEscrow,
            title: "Bitcoin mining"
        },
        {
            iconClassName: classes.bitcoinMining,
            title: "Bitcoin escrow service"
        },
        {
            iconClassName: classes.softwareDevelopment,
            title: "Software development"
        },
        {
            iconClassName: classes.bitcoinTransaction,
            title: "Bitcoin transaction"
        },
        {
            iconClassName: classes.bitcoinExchange,
            title: "Bitcoin exchange"
        },
        {
            iconClassName: classes.bitcoinInvestment,
            title: "Bitcoin investment"
        }
    ];
    
    return (
        <>
            <Hero pageName="Services" title={<>Our <span className="text-amber-600">services</span></>} />
            <ul className="flex-wrap justify-between px-5 py-20 sm:px-[10%] md:flex md:px-5">
                {
                    cardsList.map((item, index) => <Card key={index} { ...item } /> )
                }
            </ul>
        </>
    );
};

export default Container;