import classNames from "classnames";
import { Button, Typography } from "@mui/material";

const PricingCard = ({ className, isSell, price, title }) => (
    <div className={classNames(className, 
        "bg-neutral-800 flex h-full flex-col items-center justify-center px-5 text-center w-full")}>
        <Typography
            component="h3"
            className="font-bold opacity-80 text-white uppercase text-xl">
            { title }
        </Typography>
        <Typography className="mt-3 opacity-80 text-white uppercase">for</Typography>
        <Typography
            component="h4"
            className="font-bold mt-8 text-white text-4xl sm:text-5xl lg:mt-10">
            { isSell ? "₿" : "$" }{ price }
        </Typography>
        <Button className="bg-amber-600 mt-6 py-2 text-white w-full hover:bg-amber-700 lg:mt-12">
            Order now
        </Button>
    </div>
);

export default PricingCard;