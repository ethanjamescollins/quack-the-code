import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

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
                <div className="flex bg-black text-white px-8 rounded text-sm">
                    HTML
                </div>
                <Flex gap="2">
                    <Link className="bg-black text-white rounded-full p-1 w-6 h-6" href={''}></Link>
                    <Link className="bg-black text-white rounded p-1" href={''}>
                        <AiOutlineMenu color="white" />
                    </Link>
                </Flex>
            </Flex>
        </nav>
    );
};

export default NavBar;
