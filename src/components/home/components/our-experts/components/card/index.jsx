import Image from "next/image";
import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const Card = ({ image, name, position }) => (
    <li className={classNames(classes.card, "bg-neutral-800 card mb-6")}> 
        <Image 
            alt={name}
            className="object-cover object-center"
            layout="fill"
            src={image}
        />
        <div className={classNames("info py-6 relative text-center text-white before:bg-amber-600")}>
            <Typography
                component="h2"
                className="font-bold relative uppercase">
                { name }
            </Typography> 
            <Typography
                component="p"
                className="capitalize font-italic mt-2 opacity-80">
                { position }
            </Typography>
        </div>
        <style jsx>
            {
                `
                    .info::before {
                        content: "" !important;
                        height: 3px;
                        left: 0;
                        position: absolute;
                        top: 0;
                        transition: height .6s ease-in;
                        width: 100%;
                    }

                    .card:hover .info::before {
                        height: 100%;
                    }
                `
            }
        </style>
    </li>
);

export default Card;