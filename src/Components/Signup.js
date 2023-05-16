function signup()
{
    return(
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Favicon */}
  <link href="assets/images/favicon.png" rel="icon" type="image/png" />
  {/* Basic Page Needs
    ================================================== */}
  <title>Instello Sharing Photos</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="Instello - Sharing Photos platform HTML Template"
  />
  {/* icons
    ================================================== */}
  <link rel="stylesheet" href="assets/css/icons.css" />
  {/* CSS 
    ================================================== */}
  <link rel="stylesheet" href="assets/css/uikit.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/tailwind.css" />
  <div id="wrapper" className="flex flex-col justify-between h-screen">
    {/* header*/}
    <div className="bg-white py-4 shadow dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center lg:justify-between justify-around">
          <a href="trending.html">
            <img src="assets/images/logo.png" alt="" className="w-32" />
          </a>
          <div className="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
            <a href="form-login.html" className="py-3 px-4">
              Login
            </a>
            <a
              href="form-register.html"
              className="bg-pink-500 pink-500 px-6 py-3 rounded-md shadow text-white"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Content*/}
    <div>
      <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
        <h1 className="lg:text-3xl text-xl font-semibold mb-6"> Sign in</h1>
        <p className="mb-2 text-black text-lg">
          {" "}
          Register to manage your account{" "}
        </p>
        <form action="">
          <div className="flex lg:flex-row flex-col lg:space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
              style={{ border: "1px solid #d3d5d8 !important" }}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
              style={{ border: "1px solid #d3d5d8 !important" }}
            />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
            style={{ border: "1px solid #d3d5d8 !important" }}
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
            style={{ border: "1px solid #d3d5d8 !important" }}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
            style={{ border: "1px solid #d3d5d8 !important" }}
          />
          <div className="flex justify-start my-4 space-x-1">
            <div className="checkbox">
              <input type="checkbox" id="chekcbox1" defaultChecked="" />
              <label htmlFor="chekcbox1">
                <span className="checkbox-icon" /> I Agree
              </label>
            </div>
            <a href="#"> Terms and Conditions</a>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full"
          >
            Login
          </button>
          <div className="text-center mt-5 space-x-2">
            <p className="text-base">
              {" "}
              Do you have an account? <a href="form-login.html"> Login </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    {/* Footer */}
    <div className="lg:mb-5 py-3 uk-link-reset">
      <div className="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
        <div className="flex space-x-2 text-gray-700 uppercase">
          <a href="#"> About</a>
          <a href="#"> Help</a>
          <a href="#"> Terms</a>
          <a href="#"> Privacy</a>
        </div>
        <p className="capitalize"> © copyright 2020 by Instello</p>
      </div>
    </div>
  </div>
  {/* Scripts
    ================================================== */}
</>

    )
}
export default signup;