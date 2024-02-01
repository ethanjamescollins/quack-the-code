import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const DropDownMenu = () => {
    return (
        <>
            <div className="drawer drawer-end z-[100]">
                <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-4"
                        className="drawer-button cursor-pointer"
                    >
                        <AiOutlineMenu
                            className=" md:w-5 md:h-5"
                            color="white"
                        />
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-white text-black">
                        {/* Sidebar content here */}
                        <li>
                            <Link href={''}>Sidebar Item 1</Link>
                        </li>
                        <li>
                            <Link href={''}>Sidebar Item 2</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DropDownMenu;
