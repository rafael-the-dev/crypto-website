
import Card from "./components/card"

const AppAdvantagesContainer = () => {
    const list = [
        {
            description: "Protection agains DDoS attacks, full data encryption",
            title: "Strong security",
            titleIcon: ""
        },
        {
            description: "Providing services in 99% countries around all the globe",
            title: "World coverage",
            titleIcon: ""
        },
        {
            description: "Popular methods: Visa, Master Card, bank transfer, cryptocurrency",
            title: "Payment options",
            titleIcon: ""
        },
        {
            description: "Trading via our Mobile App, Available in Play Store & App Store",
            title: "Mobile app",
            titleIcon: ""
        },
        {
            description: "Reasonable trading fees for takers and all market makers",
            title: "Cost efficiency",
            titleIcon: ""
        },
        {
            description: "Fast access to high liquidity orderbook for top currency pairs",
            title: "High liquidity",
            titleIcon: ""
        }
    ];


    return (
        <section>
            <ul className="bg-neutral-800 py-12 px-5">
                {
                    list.map((item, index) => <Card key={index} { ...item } />)
                }
            </ul>
        </section>
    );
};

export default AppAdvantagesContainer;