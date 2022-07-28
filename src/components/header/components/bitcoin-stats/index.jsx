import Typography from "@mui/material/Typography"

const BitcoinStats = () => {
    const list = [
        { value: "9,450 USD", description: "Last trade price" },
        { value: "+5.26%", description: "24 hour price" },
        { value: "12.820 BTC", description: "24 hour volume" },
        { value: "2,231,775", description: "active traders" },
        { value: "$23182.85", description: "Live Bitcoin price" }
    ];

    return (
        <ul className="flex flex-wrap justify-between w-full md:mt-6 md:justify-center lg:mt-0 lg:ml-6 lg:w-auto lg:grow">
            {
                list.map((item, index) => (
                    <Typography component="li" className="flex flex-col items-center md:mr-6 md:last:mr-0" key={index}>
                        <span className="font-bold text-sm text-slate-100">{ item.value }</span>
                        <span className="text-xs text-slate-200">{ item.description }</span>
                    </Typography>
                ))
            }
        </ul>
    );
};

export default BitcoinStats;