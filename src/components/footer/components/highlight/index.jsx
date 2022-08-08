import Typography from "@mui/material/Typography";

const Hightlight = ({ title, description }) => (
    <div className="container mb-4">
        <Typography
            component="h2"
            className="font-bold text-xl text-amber-600">
            { title }
        </Typography>
        <Typography
            className="mt-1 opacity-80 text-sm text-white uppercase">
            { description }
        </Typography>
        <style jsx>
            {
                `
                    .container {
                        width: 49%;
                    }
                `
            }
        </style>
    </div>
);

export default Hightlight;