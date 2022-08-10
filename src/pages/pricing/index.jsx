import classes from "./styles.module.css";

import Hero from "src/components/hero";
import Title from "src/components/title";
import Description from "src/components/description";
import Card from "src/components/pricing-card";

const Container = () => {
    const cardsContent = [
        {
            buy: {
                price: 100,
                title: "Get 0.007 btc"
            },
            sell: {
                price: 0.2,
                title: "Get 100 usd"
            }
        },
        {
            buy: {
                price: 300,
                title: "Get 0.015 btc"
            },
            sell: {
                price: 0.5,
                title: "Get 1000 usd"
            }
        },
        {
            buy: {
                price: 500,
                title: "Get 0.031 btc"
            },
            sell: {
                price: 1,
                title: "Get 3000 usd"
            }
        },
        {
            buy: {
                price: 1000,
                title: "Get  0.081 btc"
            },
            sell: {
                price: 2,
                title: "Get 9000 usd"
            }
        }
    ];

    return (
        <>
            <Hero pageName="Pricing" title={<>Our <span className="text-amber-600">prices</span></>} />
            <section className="flex flex-col items-center px-5 py-16 ">
                <Title className={classes.title}>Buy bitcoins</Title>
                <Description>
                    Buy bitcoins with your credit card or cash here! Register to Bayya and get your bitcoins today.
                </Description>
                <ul className="flex-wrap justify-between w-full sm:flex mt-16">
                    {
                        cardsContent.map((item, index) => (
                            <li className="pricing-card" key={index}>
                                <Card { ...item.buy } />
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section className="flex flex-col items-center px-5 pt-12 pb-16">
                <Title className={classes.title}>Sell bitcoins</Title>
                <Description>
                    Sell easy, fast and secure Bitcoin. The money will be transferred to your PayPal or bank account.
                </Description>
                <ul className="flex-wrap justify-between w-full sm:flex mt-16">
                    {
                        cardsContent.map((item, index) => (
                            <li className="pricing-card" key={index}>
                                <Card isSell { ...item.sell } />
                            </li>
                        ))
                    }
                </ul>
            </section>
            <style jsx>
                {
                    `
                        .pricing-card {
                            height: 236px;
                            margin-bottom: 1.1rem;
                        }

                        @media screen and (min-width: 600px) {
                            .pricing-card {
                                height: 264px;
                                width: 48%;
                            }
                        }

                        @media screen and (min-width: 1024px) {
                            .pricing-card {
                                height: 284px;
                                width: 23.5%;
                            }
                        }
                    `
                }
            </style>
        </>
    );
};

export default Container;