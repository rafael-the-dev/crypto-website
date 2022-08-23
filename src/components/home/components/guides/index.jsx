import classNames from "classnames";

import Card from "./components/card";

import classes from "./styles.module.css";

const GuidesContainer = () => (
    <div className={classNames(classes.container, "bg-neutral-900 px-5")}>
        <div className={classNames(classes.row, "bg-neutral-800 justify-between py-8 px-3 md:py-12 lg:py-16")}>
            <Card 
                description="Get it on PC or Mobile to create, send and receive bitcoins."
                title="Download Bitcoin Wallet"
                titleIcon={classes.download}
            />
            <Card 
                description="Add bitcoins you've created or exchanged via credit card."
                title="Add coins to your Wallet"
                titleIcon={classes.add}
            />
            <Card 
                description="Enter receiver's address, specify the amount and send."
                title="Buy/Sell with Wallet"
                titleIcon={classes.buySell}
            />
        </div>
    </div>
);

export default GuidesContainer;