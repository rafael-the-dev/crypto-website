
import Title from "src/components/title";
import Description from "src/components/description";
import Textfield from "./components/textfield";

const Calculator = () => (
    <section className="bg-cover bg-center bg-no-repeat calculator-root-container sm:relative sm:px-5">
        <div className="bg-neutral-800 calculator-container flex-col items-center justify-center py-12 px-5 sm:absolute sm:flex sm:py-0 md:py-20 ">
            <Title>
                <span className="text-amber-600">Bitcoin</span> calculator
            </Title>
            <Description>
                Find out the current Bitcoin value with our easy-to-use converter
            </Description>
            <div className="calculator-form flex flex-col items-stretch justify-between mt-8 w-full
                md:flex-row md:items-center">
                <Textfield label="₿" />
                <label className="calculator-form__label my-3 text-center text-gray-300 text-3xl">=</label>
                <Textfield label="USD" />
            </div>
        </div>

        <style jsx>
            {
                `
                    @media screen and (min-width: 600px) {
                        .calculator-root-container {
                            background-attachment: fixed;
                            background-image: linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .4)), url(/backgrounds/bg-calculator.jpg);
                            height: 300px;
                        }

                        .calculator-container {
                            height: 420px;
                            left: 50%;
                            position: absolute;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            width: 90%;
                            z-index: 9;
                        }
                    }

                    @media screen and (min-width: 768px) {
                        .calculator-root-container {
                            height: 250px;
                        }

                        .calculator-container {
                            height: 320px;
                        }
                    }

                    @media screen and (min-width: 900px) {
                        .calculator-form {
                            justify-content: center;
                        }

                        .calculator-form__label {
                            margin: 0 1.5rem;
                        }
                    }

                    @media screen and (min-width: 1100px) {
                        .calculator-form__label {
                            margin: 0 2rem;
                        }
                    }
                `
            }
        </style>
    </section>
);

export default Calculator;