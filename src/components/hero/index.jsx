import { Typography } from "@mui/material";

import Title from "src/components/title";
import Link from "src/components/link";

const Hero = ({ pageName, title  }) => {

    return (
        <section 
            className="before-after-border bg-cover bg-center bg-no-repeat flex flex-col items-center 
            justify-center hero relative">
            <Title>{ title }</Title>
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
                            height: 2px;
                            margin: 2rem auto 1.2rem auto;
                            opacity: .9;
                            width: 80%;
                        }

                        @media screen and (min-width: 768px) {
                            .hero {
                                height: 350px;
                            }
                        }
                    `
                }
            </style>
        </section>
    );
};

export default Hero;