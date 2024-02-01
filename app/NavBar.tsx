import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaCircle } from 'react-icons/fa';
import DropDownMenu from './DropDownMenu';

const NavBar = () => {
    return (
        <nav className="p-3">
            <Flex justify="between" align="center">
                <Link href="/">
                    <Image
                        alt=""
                        className="md:w-10 md:h-10"
                        height={30}
                        src={'/images/qtc.svg'}
                        width={30}
                    />
                </Link>
                <div className="flex bg-black text-white px-8 py-1 rounded text-sm md:text-lg">
                    HTML
                </div>
                <Flex gap="2">
                    <Link href={''}>
                        <FaCircle className="md:w-7 md:h-7 fill-black w-6 h-6" />
                    </Link>
                    <Link className="bg-black text-white rounded p-1" href={''}>
                        <DropDownMenu />
                    </Link>
                </Flex>
            </Flex>
        </nav>
    );
};

export default NavBar;
