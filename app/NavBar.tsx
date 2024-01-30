import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaCircle } from 'react-icons/fa';

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
                        className="md:w-10 md:h-10"
                    />
                </Link>
                <div className="flex bg-black text-white px-8 rounded text-sm md:text-lg">
                    HTML
                </div>
                <Flex gap="2">
                    <Link
                        
                        href={''}
                    >
                        <FaCircle className="md:w-7 md:h-7 fill-black w-6 h-6" />
                    </Link>
                    <Link className="bg-black text-white rounded p-1" href={''}>
                        <AiOutlineMenu
                            color="white"
                            className=" md:w-5 md:h-5"
                        />
                    </Link>
                </Flex>
            </Flex>
        </nav>
    );
};

export default NavBar;
