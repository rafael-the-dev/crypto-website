
import Link from "../link";
import Title from "./components/title";
import ListItem from "./components/list-item";
import { Typography } from "@mui/material";

const Footer = () => (
    <footer className="bg-neutral-900 pt-6 pb-12 px-5 sm:px-[10%] md:px-5">
        <div>
            <div className="justify-between md:flex">
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
                            className="leading-7 mt-6 uppercase">
                            CONTACT@WEBSITE.COM<br/>00216 21 184 010<br/>London, England
                        </Typography>
                        <Typography 
                            component="time"
                            className="uppercase">
                            Mon-Sat 08Am ⇾ 05Pm
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>
            {
                `
                    @media screen and (min-width: 768px) {
                        .list-wrapper {
                            width: 31.33333%;
                        }
                    }
                `
            }
        </style>
    </footer>
);

export default Footer;