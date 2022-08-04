import { Button, Typography } from "@mui/material";
import { useCallback, useMemo, useRef, useState } from "react";
import classNames from "classnames";

import classes from "./styles.module.css";

import Card from "./components/card";

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
                price: 100,
                title: "Get 0.007 btc"
            }
        },
        {
            buy: {
                price: 100,
                title: "Get 0.007 btc"
            },
            sell: {
                price: 100,
                title: "Get 0.007 btc"
            }
        },
        {
            buy: {
                price: 100,
                title: "Get 0.007 btc"
            },
            sell: {
                price: 100,
                title: "Get 0.007 btc"
            }
        },
        {
            buy: {
                price: 100,
                title: "Get 0.007 btc"
            },
            sell: {
                price: 100,
                title: "Get 0.007 btc"
            }
        }
    ])

    const clickHandler = useCallback(prop => () => setSelectedPackage(prop), []);

    const title = useMemo(() => (
        <Typography
            className={classNames(`font-bold text-white text-3xl uppercase md:text-4xl`)}
            component="h2">
            Affordable<br className="sm:hidden" /><span className="text-amber-600 sm:ml-3">packages</span>
        </Typography>
    ), [])

    const description = useMemo(() => (
        <Typography
            className={classNames(classes.description, `leading-8 mt-4 opacity-70 text-center text-white 
            uppercase before:bg-amber-600 after:bg-amber-600 md:flex md:items-center`)}>
            Purchase Bitcoin using credit card or with your linked bank account.
        </Typography>
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
        <section className="bg-neutral-900 flex flex-col items-center px-5 py-12">
            { title }
            { description }

            <div className={classNames(classes.buttonsContainer, 
                "border border-solid border-gray-400 flex items-stretch mt-12 relative",
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