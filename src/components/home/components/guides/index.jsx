import classNames from "classnames";

import Card from "./components/card";

const GuidesContainer = () => (
    <div className="bg-neutral-900 px-5">
        <div className={classNames("bg-neutral-800 py-8 px-3")}>
            <Card 
                description="Get it on PC or Mobile to create, send and receive bitcoins."
                title="Download Bitcoin Wallet"
            />
            <Card 
                description="Add bitcoins you've created or exchanged via credit card."
                title="Add coins to your Wallet"
            />
            <Card 
                description="Enter receiver's address, specify the amount and send."
                title="Buy/Sell with Wallet"
            />
        </div>
    </div>
);

export default GuidesContainer;