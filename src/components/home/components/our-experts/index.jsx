

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
        <ul className="flex-wrap justify-between mt-12 w-full sm:flex ">
            <Card
                image="/team/member1.jpg" 
                name="Lina Marzouki"
                position="Ceo founder"
            />
            <Card
                image="/team/member2.jpg" 
                name="Marco Verrati"
                position="Director"
            />
            <Card
                image="/team/member3.jpg" 
                name="Emilia Bella"
                position="Bitcoin consultant"
            />
            <Card
                image="/team/member4.jpg" 
                name="Antonio Conte"
                position="Bitcoin developer"
            />
        </ul>
    </section>
);

export default OurExpertsContainer;