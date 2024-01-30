import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

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
                <div className="flex bg-black text-white ps-9 pe-1 rounded">
                    HTML
                    <button>
                        <MdOutlineArrowRightAlt className='ms-5' />
                    </button>
                </div>
                <Flex gap="2">
                    <button className="bg-black text-white rounded-full p-1 w-6 h-6"></button>
                    <button className="bg-black text-white rounded p-1">
                        <AiOutlineMenu color="white" />
                    </button>
                </Flex>
            </Flex>
        </nav>
    );
};

export default NavBar;
