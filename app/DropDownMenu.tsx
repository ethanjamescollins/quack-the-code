import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const DropDownMenu = () => {
    return (
        <>
            <div className="drawer drawer-end z-[100]">
                <input
                    className="drawer-toggle"
                    id="my-drawer-4"
                    type="checkbox"
                />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label
                        className="drawer-button cursor-pointer"
                        htmlFor="my-drawer-4"
                    >
                        <AiOutlineMenu
                            className=" md:w-5 md:h-5"
                            color="white"
                        />
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        aria-label="close sidebar"
                        className="drawer-overlay"
                        htmlFor="my-drawer-4"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-white text-black">
                        {/* Sidebar content here */}
                        <li>
                            <Link
                                className="hover:bg-slate-300 text-red-800"
                                href={''}
                            >
                                HTML
                            </Link>
                        </li>
                        <li>
                            <Link href={''} className="hover:bg-slate-300">
                                CSS
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DropDownMenu;
