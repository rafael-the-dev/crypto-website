
import Link from "../link";
import Title from "./components/title";
import ListItem from "./components/list-item";

const Footer = () => (
    <footer className="bg-neutral-900 py-12 px-5">
        <div>
            <div>
                <div>
                    <Title>Our company</Title>
                    <ul className="flex flex-wrap">
                        <ListItem href="/">Home</ListItem>
                        <ListItem href="/">About</ListItem>
                        <ListItem href="/">Services</ListItem>
                        <ListItem href="/">Pricing</ListItem>
                        <ListItem href="/">Blog</ListItem>
                        <ListItem href="/">Contact</ListItem>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;