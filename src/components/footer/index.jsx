import { IconButton } from "@mui/material";
import Image from "next/image";

import AmercianExpress from "public/icons/payment/american-express.png";
import MasterCard from "public/icons/payment/mastercard.png";
import Visa from "public/icons/payment/visa.png";
import Paypal from "public/icons/payment/paypal.png";
import Maestro from "public/icons/payment/maestro.png"

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import Link from "../link";
import Title from "./components/title";
import ListItem from "./components/list-item";
import Hightlight from "./components/highlight";
import { Typography } from "@mui/material";

const Footer = () => (
    <footer className="bg-neutral-900 pt-6 pb-12 px-5 sm:px-[10%] md:px-5">
        <div className="info justify-between">
            <div className="grow justify-between md:flex">
                <div className="list-wrapper">
                    <Title>Our company</Title>
                    <ul className="flex flex-wrap mt-6">
                        <ListItem href="/">Home</ListItem>
                        <ListItem href="/">About</ListItem>
                        <ListItem href="/">Services</ListItem>
                        <ListItem href="/">Pricing</ListItem>
                        <ListItem href="/">Blog</ListItem>
                        <ListItem href="/">Contact</ListItem>
                    </ul>
                </div>
                <div className="list-wrapper mt-6 md:mt-0">
                    <Title>Help &amp; support</Title>
                    <ul className="flex flex-wrap mt-6">
                        <ListItem href="/">FAQ</ListItem>
                        <ListItem href="/">Terms of services</ListItem>
                        <ListItem href="/">404</ListItem>
                        <ListItem href="/">Register</ListItem>
                        <ListItem href="/">Login</ListItem>
                        <ListItem href="/">Coming soon</ListItem>
                    </ul>
                </div>
                <div className="list-wrapper mt-6 md:mt-0">
                    <Title>Contact us</Title>
                    <div className="opacity-90 text-white">
                        <Typography 
                            component="address"
                            className="leading-7 mt-6 text-sm uppercase">
                            CONTACT@WEBSITE.COM<br/>00216 21 184 010<br/>London, England
                        </Typography>
                        <Typography 
                            component="time"
                            className=" text-sm uppercase">
                            Mon-Sat 08Am ⇾ 05Pm
                        </Typography>
                    </div>
                    <ul className="flex mt-6">
                        <li className="mr-3">
                            <IconButton className="bg-neutral-800 text-white"><FacebookIcon /></IconButton>
                        </li>
                        <li className="mr-3">
                            <IconButton className="bg-neutral-800 text-white"><TwitterIcon /></IconButton>
                        </li>
                        <li>
                            <IconButton className="bg-neutral-800 text-white"><LinkedInIcon /></IconButton>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 payments-container">
                <div className="flex flex-wrap justify-between">
                    <Hightlight
                        description="Market cap"
                        title="$198.76B" 
                    />
                    <Hightlight
                        description="Daily transactions"
                        title="243K" 
                    />
                    <Hightlight
                        description="Active accounts"
                        title="369K" 
                    />
                    <Hightlight
                        description="Supported countries"
                        title="127" 
                    />
                </div>
                <div className="border-t border-solid border-stone-700 flex flex-col mt-3 pt-4">
                    <Typography
                        component="h2"
                        className="font-bold opacity-90 text-white text-lg uppercase">
                        Supported payment methods
                    </Typography>
                    <ul className="flex mt-4">
                        <li className="mr-2">
                            <Image alt="amercian express bank" src={AmercianExpress} />
                        </li>
                        <li className="mr-2">
                            <Image alt="master card" src={MasterCard} />
                        </li>
                        <li className="mr-2">
                            <Image alt="visa payment" src={Visa} />
                        </li>
                        <li className="mr-2">
                            <Image alt="paypal payment" src={Paypal} />
                        </li>
                        <li>
                            <Image alt="maestro payment" src={Maestro} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="border-t border-solid border-stone-700 mt-12 pt-4">
            <Typography className="opacity-80 text-white md:text-center">
                { new Date(Date.now()).getFullYear() }
            </Typography>
        </div>
        <style jsx>
            {
                `
                    @media screen and (min-width: 768px) {
                        .list-wrapper {
                            width: 31.33333%;
                        }
                    }

                    @media screen and (min-width: 990px) {
                        .info {
                            display: flex;
                        }

                        .payments-container {
                            margin-top: 0;
                        }
                    }

                    @media screen and (min-width: 1151px) {
                        .payments-container {
                            margin-left: 7%;
                            width: 40%;
                        }
                    }
                `
            }
        </style>
    </footer>
);

export default Footer;