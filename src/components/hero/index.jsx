import { Typography } from "@mui/material";

import Title from "src/components/title";
import Link from "src/components/link";

const Hero = ({ pageName }) => {

    return (
        <section 
            className="before-after-border bg-cover bg-center bg-no-repeat flex flex-col items-center 
            justify-center hero relative">
            <Title>About <span className="text-amber-600">us</span></Title>
            <div className="before:bg-white before:block info">
                <div className="flex items-center text-white uppercase">
                    <Link
                        className="text-amber-500"
                        href="/">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Typography>{ pageName }</Typography>
                </div>
            </div>
            <style jsx>
                {
                    `
                        .hero {
                            background-image: linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(/backgrounds/bg-banner.jpg);
                            height: 280px;
                        }

                        .info::before {
                            content: "" !important;
                            height: 3px;
                            margin: 2rem auto 1.2rem auto;
                            width: 80%;
                        }
                    `
                }
            </style>
        </section>
    );
};

export default Hero;