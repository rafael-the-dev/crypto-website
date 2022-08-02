import { Button, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image"

import aboutImage from "public/about-us.png"
import classes from "./styles.module.css";

import Link from "src/components/link";
import Content from "./components/content"

const AboutUsContainer = () => {

    return (
        <section className={classNames(classes.root, "bg-neutral-900 flex flex-col items-center px-5 py-14")}>
            <Typography
                className={classNames(`font-bold text-white text-3xl uppercase`)}
                component="h2">
                About <span className="text-amber-600">us</span>
            </Typography>
            <Typography
                className={classNames(`leading-8 mt-4 opacity-70 text-center text-white uppercase`)}>
                A commercial website that lists wallets, exchanges and others bitcoin related info.
            </Typography>
            <div className={classNames(classes.row, "items-stretch justify-center mt-10")}>
                <div className={classNames(classes.imageContainer, "flex items-center justify-center")}>
                    <Image 
                        alt=""
                        src={aboutImage}
                    />
                </div>
                <div className={classNames(classes.content, "mt-20")}>
                    <Typography
                        className={classNames(`font-bold text-white text-2xl uppercase`)}
                        component="h3">
                        We are BAYYA
                    </Typography>
                    <Typography
                        className={classNames(`leading-8 mt-4 opacity-70  text-white`)}>
                        A place for everyone who wants to simply buy and sell Bitcoins. Deposit funds 
                        using your Visa/MasterCard or bank transfer. Instant buy/sell of Bitcoins at fair 
                        price is guaranteed. Nothing extra. Join over 700,000 users from all over the world 
                        satisfied with our services.
                    </Typography>
                    <Content />
                    <Link className="inline-block mt-6" href="/">
                        <Button className="bg-amber-600 px-8 py-2 rounded-none text-white hover:bg-amber-700">
                            Read more
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUsContainer;