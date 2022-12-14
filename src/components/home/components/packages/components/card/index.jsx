import { Button, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const Title = ({ children }) => (
    <Typography
        component="h3"
        className="font-bold opacity-80 text-white uppercase text-xl">
        { children }
    </Typography>
);

const Price = ({ children }) => (
    <Typography
        component="h4"
        className="font-bold mt-8 text-white text-4xl sm:text-5xl lg:mt-10">
        { children }
    </Typography>
);

const OrderButton = () => (
    <Button className="bg-amber-600 mt-6 py-2 text-white w-full hover:bg-amber-700 lg:mt-12">
        Order now
    </Button>
);

const Card = ({ buy, sell, isSell }) => {
    return (
        <li className={classNames(classes.card, "mb-4")}>
            <div 
                className={classNames("h-full relative w-full", classes.subContainer, 
                { [classes.rotate]: isSell })}>
                <div className={classNames({ "z-10": !isSell },
                    "absolute bg-neutral-800 flex h-full flex-col items-center justify-center px-5 text-center w-full")}>
                    <Title>{ buy.title }</Title>
                    <Typography className="mt-3 opacity-80 text-white uppercase">for</Typography>
                    <Price>${ buy.price }</Price>
                    <OrderButton/>
                </div>
                <div className={classNames(classes.backCard, { "z-10": isSell },
                    "absolute bg-neutral-800 flex h-full flex-col items-center justify-center px-5 text-center w-full")}>
                    <Title>{ sell.title }</Title>
                    <Typography className="mt-3 opacity-80 text-white uppercase">for</Typography>
                    <Price>₿{ sell.price }</Price>
                    <OrderButton/>
                </div>
            </div>
        </li>
    );
};

export default Card;

/**
                <div className={classNames(classes.backCard, "absolute flex h-full flex-col text-center w-full")}>
                    <Title>{ sell.title }</Title>
                    <Typography className="opacity-80 text-white uppercase">for</Typography>
                    <Price>${ sell.price }</Price>
                    
                </div> */