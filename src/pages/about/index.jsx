import { Button, Hidden, Typography } from "@mui/material";
import classNames from 'classnames';
import Image from "next/image";

import ReportProblemIcon from '@mui/icons-material/ReportProblem';

import Hero from "src/components/hero";
import Title from "src/components/title";
import Description from "src/components/description";
import Link from "src/components/link";
import OurExperts from "src/components/our-experts";
import Highlight from "src/components/about/components/number-highlight";

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
        <div className="bg-neutral-900 items-stretch justify-center pt-16 pb-8 px-5 row sm:pb-12 md:pb-28">
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
        <section className="bg-cover bg-center bg-no-repeat numbers-root-container mt-16 mb-8 sm:mt-28 md:mb-16 sm:relative sm:bg-amber-600 sm:px-5">
            <div className="bg-neutral-800 numbers-container flex-col items-center justify-center py-12 
                px-5 sm:absolute sm:flex sm:py-0 md:py-20 ">
                <Title>Bayya <span className="text-amber-600">Numbers</span></Title>
                <Description>
                    Leading cryptocurrency exchange since day one of bitcoin distribuition
                </Description>
                <div className="flex-wrap justify-between mt-8 mb-4 w-full sm:flex lg:items-center lg:my-16">
                    <Highlight
                        description="Market cap"
                        title="$198.76B" 
                    />
                    <Hidden smDown><span className="separator"></span></Hidden>
                    <Highlight
                        description="Daily transactions"
                        title="243K" 
                    />
                    <Hidden lgDown><span className="separator"></span></Hidden>
                    <Highlight
                        description="Active accounts"
                        title="369K" 
                    />
                    <Hidden smDown><span className="separator"></span></Hidden>
                    <Highlight
                        description="Supported countries"
                        title="127" 
                    />
                </div>
                <div className="flex flex-col items-center mt-8 sm:flex-row">
                    <Link
                        className="w-full sm:w-auto" 
                        href="/">
                        <Button 
                            className="bg-transparent border-amber-600 py-2 rounded-none text-amber-600 w-full
                            hover:bg-amber-700 hover:text-white"
                            variant="outlined">
                            See pricing
                        </Button>
                    </Link>
                    <Typography
                        className={classNames(`my-4 sm:mx-6 sm:my-0 opacity-70  text-white`)}>
                        or
                    </Typography>
                    <Link
                        className="w-full sm:w-auto" 
                        href="/">
                        <Button 
                            className="bg-amber-600 py-2 rounded-none text-white
                            hover:bg-amber-700 w-full"
                            variant="contained">
                            Register now
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
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
                    
                    @media screen and (min-width: 600px) {
                        .numbers-root-container {
                            height: 380px;
                        }

                        .numbers-container {
                            height: 490px;
                            left: 50%;
                            position: absolute;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            width: 90%;
                            z-index: 9;
                        }

                        .separator {
                            background-color: #FFF;
                            height: 45%;
                            opacity: .2;
                            transform: rotate(24deg);
                            width: 1px;
                        }
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

                    @media screen and (min-width: 1024px) {
                        .separator {
                            height: 100%;
                        }
                    }
                `
            }
        </style>
    </>
);

export default Container;