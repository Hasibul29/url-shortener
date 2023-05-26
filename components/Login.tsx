import { SetStateAction, useState } from "react";

const Login = ({
    submit,
}: {
    submit: (
        email: SetStateAction<string>,
        password: SetStateAction<string>,
    ) => Promise<void>;
}) => {
    const [email, setEmail] = useState<string>("");
    const [password, setpassword] = useState<string>("");

    const handleEmail = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setpassword(event.target.value);
    };
    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        submit(email, password);
        console.log(email);
        console.log(password);
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="icon.png"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700"
                        >
                            Email address
                        </label>

                        <div className="mt-2">
                            <input
                                onChange={handleEmail}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                             "
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            {/* <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot password?
                                </a>
                            </div> */}
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={handlePassword}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a
                        href="/signup"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Signup for Free?
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
