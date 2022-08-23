import Hero from "src/components/home-carousel"
import AbousUs from "src/components/home/components/about-us";
import Guides from "src/components/home/components/guides";
import AppAdvantages from "src/components/home/components/app-advantages";
import Packages from "src/components/home/components/packages";
import Blogs from "src/components/home/components/blogs";
import OurExperts from "src/components/our-experts";
import Calculator from "src/components/home/components/calculator";

const Home = () => {
    return (
        <>
            <Hero />
            <Guides />
            <AbousUs />
            <AppAdvantages />
            <Packages />
            <Calculator />
            <OurExperts />
            <Blogs />
        </>
    );
};

export default Home;