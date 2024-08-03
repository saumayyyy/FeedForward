import { useSelector } from "react-redux";
import { NavbarLinks } from "../../assets/data/navbar-links"
import logo from "../../assets/vite.svg"
import { Link, useLocation, matchPath } from "react-router-dom"
import ProfileDropDown from "../Auth/ProfileDropDown";

function Navbar(){

    const {token} = useSelector((state)=>state.auth);
    const {user} = useSelector((state)=>state.profile);



    const location  = useLocation();
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }
    return (
        <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 bg-richblack-600">
            <div className="flex w-11/12 max-w-maxContent items-center justify-between">
                <Link to="/">
                    <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" width={50} height={24} loading="lazy"/>
                    <span className="text-white text-md lg:3xl font-extrabold">Feed Forward</span>
                    </div>
                </Link>

                {/* {navlinks} */}
                <nav>
                    <ul className="flex gap-x-6 text-richblack-25">
                        {NavbarLinks.map((link,index)=>(
                            <li key={index}>
                                <Link to={link?.path}>
                                    <p
                                    className={`font-semibold transition duration-300 ${
                                        matchRoute(link?.path)
                                        ? "text-pink-200 bg-richblack-800 text-center p-[15px]"
                                        : "text-richblack-25 text-center p-[15px]"
                                    }`}
                                    >
                                    {link.title}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* {Login/signup/profile} */}
                <div className="hidden items-center gap-x-4 md:flex">
                        {
                            token===null && (
                                <Link to={"/login"}>
                                    <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-25 font-bold">Log in</button>
                                </Link>
                            )
                        }
                        {
                            token===null && (
                                <Link to={"/signup"}>
                                    <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-25 font-bold">Sign up</button>
                                </Link>
                            )
                        }
                        {
                            token!==null && (
                                <ProfileDropDown/>
                            )
                        }


                </div>
            </div>
        </div>
    )
}

export default Navbar