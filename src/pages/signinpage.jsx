import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
function SignInPage(props) {
  const [newsigninemail, setsigninemail] = useState("");
  const [newsigninpassword, setsigninpassword] = useState("");
  function handlepasswordchange(event) {
    setsigninpassword(event.target.value);
  }
  function handleemailchange(event) {
    setsigninemail(event.target.value);
  }
  function signin(event) {
    event.preventDefault()
    props.signin(newsigninemail, newsigninpassword);
    setsigninpassword("");
    setsigninemail("");
  }
  return (
    <div className="flex bg-white">
      <div className="h-3/6">
        {" "}
        <img
          className="h-screen"
          src="src/assets/img/Screenshot 2024-10-16 at 11.20.40 PM.png"
          alt="IMage"
        />
      </div>
      <div>
        <div className="flex justify-center items-end h-1/6">
          <h1 className="ml-32 text-4xl font-bold italic font-sans text-gray-800">
            Welcome
          </h1>
        </div>
        <div className="flex justify-center items-end ">
          <h1 className="ml-32 text-3xl italic font-sans text-gray-800">
            We Are{" "}
            <span className="text-3xl italic font-sans text-yellow-500">
              Happy
            </span>{" "}
            To See You
          </h1>
        </div>
        <div className="flex justify-center items-end mt-4">
          <button
            type="button"
            class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 ml-32 w-52"
          >
            <svg
              class="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Github
          </button>
          <button
            type="button"
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 ml-4 w-52"
          >
            <svg
              class="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
        <div className="flex justify-center items-end ">
          <h1 className="ml-24 text-1xl italic font-sans text-gray-800">
            <span className="text-1xl italic font-sans text-gray-300">
              -------
            </span>{" "}
            Use You Own Email
            <span className="text-1xl italic font-sans text-gray-300 ">
              -------
            </span>{" "}
          </h1>
        </div>
        <form onSubmit={signin}>
          <div>
            <label
              htmlFor="E-Mail Address"
              class="ml-8 block text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              E-Mail Address
            </label>
            <input
              type="text"
              id="E-Mail Address"
              onChange={handleemailchange}
              class="ml-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John@123.com"
              required
            />
            <br />
          </div>
          <div>
            <label
              htmlFor="Password"
              class="ml-8 block  text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              onChange={handlepasswordchange}
              class="ml-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe1232"
              required
            />
            <button
              type="submit"
              className="ml-20 bg-green-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-blue-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10"
            >
              SignIn
            </button>
          </div>
          <div className="flex justify-center items-end ">
            <h1 className="ml-24 text-1xl italic font-sans text-gray-800">
              <span className="text-1xl italic font-sans text-gray-300">
                -------
              </span>{" "}
              <Link to="/signup">Create An Account</Link>
              <span className="text-1xl italic font-sans text-gray-300 ">
                -------
              </span>{" "}
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignInPage;