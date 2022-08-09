import { Button } from "@mui/material";

import Title from "src/components/title";
import Description from "src/components/description";
import Link from "src/components/link";

const GetStartedContainer = () => (
    <section className="bg-cover bg-center bg-no-repeat get-started-container flex flex-col items-center 
        justify-center relative before-after-border">
        <Title>Get started today with Bitcoin</Title>
        <Description opacityClassname="op">Open account for free and start trading Bitcoins!</Description>
        <Link 
            className="mt-8"
            href="/">
            <Button
                className="bg-amber-600 py-2 px-8 rounded-none text-white hover:bg-amber-700"
                variant="contained">
                Register now
            </Button>
        </Link>
        <style jsx>
            {
                `
                    .get-started-container {
                        background-image: linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .5)), url(/backgrounds/call-to-action-bg.jpg);
                        height: 360px;
                    }
                `
            }
        </style>
    </section>
);

export default GetStartedContainer;