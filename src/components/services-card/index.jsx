import { Typography } from "@mui/material";
import classNames from "classnames";

const Card = ({ iconClassName, title }) => {
    return (
        <li className={classNames(iconClassName, " relative service-card sm:text-left md:mb-4",
            "bg-neutral-800 before:bg-contain before:bg-no-repeat mb-6 px-5 py-12 text-white text-center")}>
            <Typography
                component="h3"
                className={classNames("capitalize font-bold text-xl")}>
                { title }
            </Typography>
            <Typography
                className="mt-4 opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </Typography>
            <style jsx>
                {
                    `
                        .service-card::before {
                            content: "" !important;
                            display: block;
                            height: 50px;
                            margin: 0 auto 1.4rem auto;
                            width: 50px;
                        }

                        @media screen and (min-width: 600px) {
                            .service-card::before {
                                left: 2rem;
                                position: absolute;
                                top: 3rem;
                            }

                            .service-card {
                                padding-left: 8rem;
                            }
                        }

                        @media screen and (min-width: 768px) {
                            .service-card {
                                width: 49%;
                            }
                        }
                    `
                }
            </style>
        </li>
    );
};

export default Card;