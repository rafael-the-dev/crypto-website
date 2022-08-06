
import Title from "src/components/title";
import Description from "src/components/description";
import Textfield from "./components/textfield";

const Calculator = () => (
    <section>
        <div className="bg-neutral-800 py-12 px-5">
            <Title>
                <span className="text-amber-600">Bitcoin</span> calculator
            </Title>
            <Description>
                Find out the current Bitcoin value with our easy-to-use converter
            </Description>
            <div className="flex flex-col items-center mt-8">
                <Textfield label="₿" />
                <label className="my-3 text-gray-300 text-3xl">=</label>
                <Textfield label="USD" />
            </div>
        </div>
    </section>
);

export default Calculator;