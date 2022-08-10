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
            <Hero pageName="Services" />
            <ul className="px-5 py-12">
                {
                    cardsList.map((item, index) => <Card key={index} { ...item } /> )
                }
            </ul>
        </>
    );
};

export default Container;