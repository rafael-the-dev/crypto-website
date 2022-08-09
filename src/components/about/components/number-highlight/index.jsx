import Typography from "@mui/material/Typography";

const Hightlight = ({ title, description }) => (
    <div className="container mb-6 relative text-center text-white uppercase lg:mb-0">
        <Typography
            component="h3"
            className="font-bold text-2xl sm:text-3xl">
            { title }
        </Typography>
        <Typography
            className="mt-1 opacity-80 text-sm">
            { description }
        </Typography>
        <style jsx>
            {
                `
                    @media screen and (min-width: 600px) {
                        .container {
                            width: 48%;
                        }
                    }

                    @media screen and (min-width: 1024px) {
                        .container {
                            width: 23%;
                        }
                    }
                `
            }
        </style>
    </div>
);

export default Hightlight;