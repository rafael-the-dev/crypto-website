import Image from "next/image";
import { IconButton, Typography } from "@mui/material";
import classNames from "classnames";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import classes from "./styles.module.css"

const Card = ({ image, name, position }) => (
    <li className={classNames(classes.card, "bg-neutral-800 card mb-6")}> 
        <div className={classNames(classes.imageContainer, "relative")}>
            <Image 
                alt={name}
                className="object-cover object-center"
                layout="fill"
                src={image}
            />
            <div className="absolute flex items-center justify-center social-media">
                <IconButton className="text-white mr-3">
                    <FacebookIcon />
                </IconButton>
                <IconButton className="text-white mr-3">
                    <TwitterIcon />
                </IconButton>
                <IconButton className="text-white">
                    <LinkedInIcon />
                </IconButton>
            </div>
        </div>
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

                    .social-media {
                        background-color: rgba(0, 0, 0, 0);
                        height: 0;
                        left: 50%;
                        top: 50%;
                        transform: scale(0) translate(-50%, -50%);
                        transition: all .6s ease-in;
                        width: 0;
                        z-index: 9;
                    }

                    .card:hover .info::before {
                        height: 100%;
                    }

                    .card:hover .social-media {
                        transform: scale(1) translate(-50%, -50%);
                    }
                `
            }
        </style>
    </li>
);

export default Card;