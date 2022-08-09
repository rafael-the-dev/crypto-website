import { Typography } from "@mui/material";

import Hero from "src/components/hero";
import Title from "src/components/title";
import Link from "src/components/link";
import OurExperts from "src/components/our-experts";

const Container = () => (
    <>
        <Hero>
            <Title>About <span className="text-amber-600">us</span></Title>
            <div className="before:bg-white before:block info">
                <div className="flex items-center text-white uppercase">
                    <Link
                        className="text-amber-500"
                        href="/">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Typography>About</Typography>
                </div>
            </div>
        </Hero>
        <OurExperts />
        <style jsx>
            {
                `
                    .info::before {
                        content: "" !important;
                        height: 3px;
                        margin: 2rem auto 1.2rem auto;
                        width: 80%;
                    }
                `
            }
        </style>
    </>
);

export default Container;