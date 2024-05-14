import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import {
    Typography,
    IconButton,
    Collapse,
} from "@material-tailwind/react";

function HeaderComp() {
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 mx-3 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-right text-white md:text-left"
            >
                <a className="flex items-center cursor-pointer" onClick={() => navigate('/gallery')}>
                    Galery
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-right text-white md:text-left"
            >
                <a className="flex items-center cursor-pointer" onClick={() => navigate('/about-us')}>
                    About Us
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-right text-white md:text-left"
            >
                <a className="flex items-center cursor-pointer" >
                    Contact
                </a>
            </Typography>
        </ul>
    );

    return (
        <div className="w-full">
            <div className="border-0 fixed top-0 z-50 bg-black/10 w-full px-4 py-2 lg:px-8 lg:py-4 ">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="flex cursor-pointer" onClick={() => navigate('/')}>
                        <Typography
                            className="mr-1 py-1.5 font-medium text-red-500"
                        >
                            Budaya
                        </Typography>
                        <Typography
                            className="py-1.5 font-medium text-white"
                        >
                            Nusantara
                        </Typography>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav} className="absolute bg-blue-gray-300 w-full -mx-4 lg:-mx-8">{navList}</Collapse>
            </div>
        </div>
    );
}

export default HeaderComp;