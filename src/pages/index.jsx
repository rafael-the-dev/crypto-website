import { useCallback, useEffect, useRef } from "react"
import { Button, IconButton, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image"

import classes from "src/styles/home.module.css";
import aboutImage from "public/about-us.png"

import Link from "src/components/link";
import Hero from "src/components/home-carousel"
import AbousUs from "src/components/home/components/about-us";
import Guides from "src/components/home/components/guides";
import AppAdvantages from "src/components/home/components/app-advantages";

const Home = () => {
    return (
        <main>
            <Hero />
            <Guides />
            <AbousUs />
            <AppAdvantages />
        </main>
    );
};

export default Home;