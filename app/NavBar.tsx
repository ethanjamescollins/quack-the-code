import { Badge, Flex, Switch } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa';
import DropDownMenu from './DropDownMenu';

const NavBar = () => {
    return (
        <nav className="p-3">
            <Flex justify="between" align="center">
                <Flex gap="2" align="center">
                    <Link href={''}>
                        {/* <Switch defaultChecked size='3'/> */}
                    </Link>
                    <div>
                        <DropDownMenu />
                    </div>
                    <Link href="/">
                        <Image
                            alt=""
                            className="md:w-10 md:h-10"
                            height={30}
                            src={'/images/qtc.svg'}
                            width={30}
                        />
                    </Link>
                </Flex>
                <Badge
                    className="rounded"
                    size="2"
                    style={{ background: 'black', color: 'white' }}
                >
                    HTML
                </Badge>
                <FaCircle className="md:w-7 md:h-7 fill-black w-6 h-6" />
            </Flex>
        </nav>
    );
};

export default NavBar;
