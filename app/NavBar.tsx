import { Box, Button, Container, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="p-3">
            <Flex justify='between'>
                <Link href='/'>
                    <Image
                        src={'/images/qtc.png'}
                        alt=""
                        width={30}
                        height={30}
                    />
                </Link>
                <Button size="3" variant="soft">
                    HTML
                </Button>
            </Flex>
        </nav>
    );
};

export default NavBar;
