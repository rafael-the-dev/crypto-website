import classNames from "classnames";

const Hero = ({ children }) => {

    return (
        <section 
            className="before-after-border bg-cover bg-center bg-no-repeat flex flex-col items-center 
            justify-center hero relative">
            { children }
            <style jsx>
                {
                    `
                        .hero {
                            background-image: linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(/backgrounds/bg-banner.jpg);
                            height: 280px;
                        }
                    `
                }
            </style>
        </section>
    );
};

export default Hero;