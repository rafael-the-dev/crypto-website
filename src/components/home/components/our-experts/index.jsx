

import Description from "src/components/description";
import Title from "src/components/title";
import Card from "./components/card";

const OurExpertsContainer = () => (
    <section className="bg-neutral-900 flex flex-col items-center px-5 py-12">
        <Title>
            Our<br className="sm:hidden" /><span className="text-amber-600 sm:ml-3">experts</span>
        </Title>
        <Description hasBars>
            A talented team of cryptocurrency based in london
        </Description>
    </section>
);

export default OurExpertsContainer;