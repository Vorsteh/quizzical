import React from "react";

const Auth = () => {
    return (
        <div className="relative h-full w-full bg-[url('/images/authbg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:opacity-50">
                <nav>
                    <h1 className="">Quizzical</h1>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-100 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full">
                        <h2 className="text-white font-semibold text-4xl">Sign In</h2>
                    </div>
                </div>
            </div> 
        </div> 
    )
}

export default Auth;