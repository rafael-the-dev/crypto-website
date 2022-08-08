import { Button } from "@mui/material";

import Title from "src/components/title";
import Description from "src/components/description";
import Link from "src/components/link";

const GetStartedContainer = () => (
    <section className="bg-cover bg-center bg-no-repeat get-started-container flex flex-col items-center 
        justify-center relative">
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

                    @media screen and (min-width: 600px) {
                        .get-started-container::before, .get-started-container::after {
                            bottom: 0;
                            border-bottom: 30px solid #171717;
                            content: "";
                            height: 15px;
                            position: absolute;
                            width: 50%;
                        }

                        .get-started-container::before {
                            border-right: 125px solid transparent;
                            left: 0;
                        }

                        .get-started-container::after {
                            border-left: 125px solid transparent;
                            right: 0;
                        }
                    }
                `
            }
        </style>
    </section>
);

export default GetStartedContainer;