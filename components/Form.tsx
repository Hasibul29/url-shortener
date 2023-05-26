import { SetStateAction, useState } from "react";
function CreateUrl({
    submit,
}: {
    submit: (data: SetStateAction<string>) => void;
}) {
    const [first, setfirst] = useState("");
    const handleClick = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        submit(first);
    };
    const handleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setfirst(event.target.value);
    };
    return (
        <form className="flex items-center mt-4">
            <input
                onChange={handleChange}
                type="url"
                className="form_input"
                placeholder="Enter the link here"
                required
            />
            <button
                onClick={handleClick}
                type="submit"
                className="rounded-full border border-blue bg-gradient-to-r from-blue-600 to-cyan-400 py-2 px-10 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter whitespace-nowrap"
            >
                Shorten Url
            </button>
        </form>
    );
}

export default CreateUrl;
