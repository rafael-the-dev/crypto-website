
import Link from "../link";
import Title from "./components/title";
import ListItem from "./components/list-item";
import { Typography } from "@mui/material";

const Footer = () => (
    <footer className="bg-neutral-900 pt-6 pb-12 px-5">
        <div>
            <div>
                <div>
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
                <div className="mt-6">
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
                <div className="mt-6">
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
    </footer>
);

export default Footer;