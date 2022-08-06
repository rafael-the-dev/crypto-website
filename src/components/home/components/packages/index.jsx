import { Button, Typography } from "@mui/material";
import { useCallback, useMemo, useRef, useState } from "react";
import classNames from "classnames";

import classes from "./styles.module.css";

import Card from "./components/card";
import Description from "src/components/description";
import Title from "src/components/title";

const PackagesSection = () => {
    const packagesTypes = useRef({ buy: "BUY", sell: "SELL" })
    const [ selectedPackage, setSelectedPackage ] = useState(packagesTypes.current.buy);

    const cardsContent = useRef([
        {
            buy: {
                price: 100,
                title: "Get 0.007 btc"
            },
            sell: {
                price: 0.2,
                title: "Get 100 usd"
            }
        },
        {
            buy: {
                price: 300,
                title: "Get 0.015 btc"
            },
            sell: {
                price: 0.5,
                title: "Get 1000 usd"
            }
        },
        {
            buy: {
                price: 500,
                title: "Get 0.031 btc"
            },
            sell: {
                price: 1,
                title: "Get 3000 usd"
            }
        },
        {
            buy: {
                price: 1000,
                title: "Get  0.081 btc"
            },
            sell: {
                price: 2,
                title: "Get 9000 usd"
            }
        }
    ])

    const clickHandler = useCallback(prop => () => setSelectedPackage(prop), []);

    const title = useMemo(() => (
        <Title>
            Affordable<br className="sm:hidden" /><span className="text-amber-600 sm:ml-3">packages</span>
        </Title>
    ), [])

    const description = useMemo(() => (
        <Description hasBars>
            Purchase Bitcoin using credit card or with your linked bank account.
        </Description>
    ), []);

    const buttons = useMemo(() => (
        <>
            <Button 
                className={classes.toggleButton}
                onClick={clickHandler(packagesTypes.current.buy)}>
                Buy
            </Button>
            <Button 
                className={classes.toggleButton}
                onClick={clickHandler(packagesTypes.current.sell)}>
                Sell
            </Button>
        </>
    ), [ clickHandler ])

    return (
        <section className="bg-neutral-900 flex flex-col items-center px-5 py-12 md:pt-16 lg:pt-20 sm:pb-32">
            { title }
            { description }

            <div className={classNames(classes.buttonsContainer, 
                "border border-solid border-gray-500 flex items-stretch mt-12 relative",
                "before:absolute before:bg-amber-600",
                selectedPackage === packagesTypes.current.buy ? classes.buttonsContainerLeft : classes.buttonsContainerRight)}>
                { buttons }
            </div>
            <ul className="flex-wrap justify-between mt-16 w-full sm:flex">
                {
                    cardsContent.current.map((item, index) => (
                        <Card 
                            key={index} 
                            isSell={selectedPackage === packagesTypes.current.sell} 
                            { ...item} 
                        />
                    ))
                }
            </ul>
        </section>
    );
};

export default PackagesSection;