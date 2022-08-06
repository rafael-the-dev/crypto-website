import { forwardRef, useId } from "react"

const Textfield = forwardRef(({ label, onChange }, ref) => {
    const id = useId();

    return (
        <div className="flex items-stretch text-center">
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
                    `
                }
            </style>
        </div>
    );
});

export default Textfield;