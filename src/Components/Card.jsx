import headerImage from "../assets/images/illustration-sign-up-mobile.svg";
import headerImageLg from "../assets/images/illustration-sign-up-desktop.svg";

export const Card = () => {
  return (
    <>
      <div className="lg:p-5 bg-gray-500 min-h-screen lg:flex lg:justify-center lg:items-center">
        <div className="container  flex flex-col items-center lg:w-3/5 lg:flex-row lg:p-6  bg-white mx-auto lg:rounded-2xl lg:flex-row-reverse  lg:items-center ">
          <div className="imagen w-full ">
            <img src={headerImage} alt="" className="w-full lg:hidden" />
            <img
              src={headerImageLg}
              alt=""
              className="w-full hidden lg:block  "
            />
          </div>
          <div className="informacion w-full p-8 px-18 mx-auto lg:px-20 ">
            <h1 className="font-bold text-4xl my-4 lg:text-5xl">
              Stay Updated!
            </h1>
            <p className="text-lg mb-5 ">
              Join 60,000+ product managers receiving monthly updates on
            </p>
            <ul className="image-list px-7 gap-3 flex flex-col ">
              <li className="px-2">
                Product discovery and building what matters
              </li>
              <li className="px-2">
                Measuring to ensure updates are a success
              </li>
              <li className="px-2">And much more!</li>
            </ul>
            <form className="w-full mt-10">
              <p className="font-bold text-sm ">Email adress</p>
              <input
                type="email"
                placeholder="email@gompany.com"
                className="p-5 w-full rounded-xl border-slate-200 border-2 lg:p-4"
              />
              <button className="text-center bg-blue-950 p-5 mt-5 rounded-xl w-full text-white lg:p-4 lg:py-5">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
