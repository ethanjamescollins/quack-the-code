import {
    Box,
    Button,
    Container,
    Flex,
    IconButton,
    Text,
} from '@radix-ui/themes';
import { HamburgerMenuIcon, ValueIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className="p-3">
            <Flex justify="between" align="center">
                <Link href="/">
                    <Image
                        src={'/images/qtc.svg'}
                        alt=""
                        width={30}
                        height={30}
                    />
                </Link>
                <button className='bg-black text-white px-3 rounded'>
                    HTML
                </button>
                <Flex>
                    <button>
                    <AiOutlineMenu />
                    </button>
                </Flex>
            </Flex>
        </nav>
    );
};

export default NavBar;
