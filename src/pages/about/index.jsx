import { Button, Typography } from "@mui/material";
import classNames from 'classnames';
import Image from "next/image";

import ReportProblemIcon from '@mui/icons-material/ReportProblem';

import Hero from "src/components/hero";
import Title from "src/components/title";
import Link from "src/components/link";
import OurExperts from "src/components/our-experts";


import aboutImage from "public/about-us.png"

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
        <div className="bg-neutral-900 items-stretch justify-center pt-16 pb-8 px-5 row">
            <div className="flex items-center justify-center">
                <Image 
                    alt=""
                    src={aboutImage}
                />
            </div>
            <div className="row__content mt-20 text-center">
                <div>
                    <Typography
                        className={classNames(`font-bold text-white text-2xl uppercase`)}
                        component="h2">
                        We are BAYYA
                    </Typography>
                    <Typography
                        className={classNames(`leading-8 mt-4 opacity-70  text-white`)}>
                        A place for everyone who wants to simply buy and sell Bitcoins. Deposit funds 
                        using your Visa/MasterCard or bank transfer. Instant buy/sell of Bitcoins at fair 
                        price is guaranteed. Nothing extra. Join over 700,000 users from all over the world 
                        satisfied with our services.
                    </Typography>
                </div>
                <div className="mt-8">
                    <Typography
                        className={classNames(`flex items-center justify-center font-bold text-white text-2xl uppercase`)}
                        component="h2">
                        <ReportProblemIcon className="mr-2" /> Risk warning
                    </Typography>
                    <Typography
                        className={classNames(`leading-8 mt-4 opacity-70  text-white`)}>
                        Bitcoin is not legal tender and is not backed by any government. Accounts and value 
                        balances are not subject to any government backed deposit insurance or any other 
                        government protections.
                    </Typography>
                </div>
                <Link className="inline-block mt-6" href="/">
                    <Button className="bg-amber-600 px-8 py-2 rounded-none text-white hover:bg-amber-700">
                        Read more
                    </Button>
                </Link>
            </div>
        </div>
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

                    @media screen and (min-width: 990px) {    
                        .row {
                            display: flex;
                        }

                        .row__content {
                            margin-left: 5%;
                            margin-top: 0;
                            width: 55%;
                        }
                    }
                `
            }
        </style>
    </>
);

export default Container;