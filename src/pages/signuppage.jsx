import { useState } from "react";
function SignUpPage(props) {
  const [newsignupemail, setsignupemail] = useState("");
  const [newsignuppassword, setsignuppassword] = useState("");
  const [newsignupname, setsignupname] = useState("");
  function handlepasswordchange(event) {
    setsignuppassword(event.target.value);
  }
  function handleemailchange(event) {
    setsignupemail(event.target.value);
  }
  function handlenamechange(event) {
    setsignupname(event.target.value);
  }
  function signup(event) {
    event.preventDefault()
    props.signup(newsignupemail, newsignuppassword, newsignupname);
    setsignuppassword("");
    setsignupemail("");
    setsignupname("");
  }
  return (
    <div className="flex bg-white ">
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
        <div className="flex justify-center items-end ">
          <h1 className="ml-24 text-1xl italic font-sans text-gray-800">
            <span className="text-1xl italic font-sans text-gray-300">
              -------
            </span>{" "}
            Create Your Own Email
            <span className="text-1xl italic font-sans text-gray-300 ">
              -------
            </span>{" "}
          </h1>
        </div>
        <form onSubmit={signup}>
          <div>
            <label
              htmlFor="Username"
              class="ml-8 block text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              UserName
            </label>
            <input
              type="text"
              id="Username"
              onChange={handlenamechange}
              class="ml-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="RoundPanda_12"
              required
            />
            <br />
          </div>
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
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUpPage;
