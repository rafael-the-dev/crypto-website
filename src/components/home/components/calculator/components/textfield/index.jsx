import { forwardRef, useId } from "react"

const Textfield = forwardRef(({ label, onChange }, ref) => {
    const id = useId();

    return (
        <div className="flex items-stretch root text-center">
            <input
                className="bg-neutral-900 border-0 grow outline-none text-center text-gray-400" 
                id={id}
                onChange={onChange}
                ref={ref}
            />
            <label 
                className="bg-amber-600 input-label py-4 text-white rounded-none"
                htmlFor={id}>
                { label }
            </label>
            <style jsx>
                {
                    `
                        .input-label {
                            width: 90px;
                        }

                        @media screen and (min-width: 480px) {
                            .input-label {
                                padding-bottom: 1.2rem;
                                padding-top: 1.2rem;
                            }
                        }

                        @media screen and (min-width: 600px) {
                            .input-label {
                                width: 110px;
                            }
                        }

                        @media screen and (min-width: 880px) {
                            .root {
                                width: 305px;
                            }
                        }

                        @media screen and (min-width: 1100px) {
                            .root {
                                width: 400px;
                            }
                        }
                    `
                }
            </style>
        </div>
    );
});

export default Textfield;