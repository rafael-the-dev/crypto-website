import { useCallback, useEffect, useRef } from "react"
import { Button, IconButton, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "src/styles/home.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Link from "src/components/link";
import Hero from "src/components/home-carousel"

const Home = () => {
    return (
        <main>
            <Hero />
        </main>
    );
};

export default Home;