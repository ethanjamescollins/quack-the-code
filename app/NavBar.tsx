import { Box, Container, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <Flex justify='between'>
                <Image src='/nice.png' width={100} height={100} alt='logo'/>
            </Flex>
        </nav>
    );
};

export default NavBar;
