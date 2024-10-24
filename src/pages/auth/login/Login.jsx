import React from 'react';
import BannerImg from "../../../assets/images/BImg.png";
import Logo from "../../../assets/images/logo.svg";
import  {ReactComponent as InfoLogo} from "../../../assets/icons/info.svg";

const Login = () => {
    return (
        <div className="min-h-screen flex sm:flex-row flex-col items-center justify-center">
            {/* Left section - Login form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="max-w-md w-full">
                    <div className="text-center flex justify-center mb-6">
                        {/* Logo */}
                        <img src={Logo} style={{width:"200px" , height:"170px"}} />
                    </div>

                    <h2 className="text-2xl font-bold text-center text-[#D3A99C] mb-4">Log in</h2>

                    <form>
                        {/* Email Input */}
                        <div className="mb-4">
                            <input
                                id="email"
                                type="email"
                                className="w-full px-4 py-2 mt-2 border rounded-lg shadow-md focus:outline-none focus:ring focus:ring-[#D3A99C]"
                                placeholder="Email"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-6 ">
                            <input
                                id="password"
                                type="password"
                                className="w-full px-4 py-2 mt-2 border shadow-md rounded-lg focus:outline-none focus:ring focus:ring-[#D3A99C]"
                                placeholder="Password"
                                required
                            />
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end gap-1 items-center mb-6">
                            <a href="#" className="text-sm text-gray-400 hover:text-gray-500 ml-5">Forget Password</a>                   
                                <InfoLogo width="14" color="#D8942E" />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            style={{ background: "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)" }}
                            className="w-full py-3  text-white shadow-md rounded-lg hover:bg-[#D3A99C] transition-colors"
                        >
                            LOG IN
                        </button>
                    </form>
                </div>
            </div>

            {/* Right section - Images (hidden on mobile) */}
            <div className="w-full md:w-1/2  lg:flex hidden items-start justify-start">
                <div className='rounded-xl shadow-md relative' style={{ background: "linear-gradient(148.2deg, #434343 -2.01%, #000000 100%)" }}>
                    <img
                        src={BannerImg}
                        alt="Image 1"
                        className="rounded-xl h-[80vh]"
                    />
                </div>
            </div>
        </div>

    )
}

export default Login