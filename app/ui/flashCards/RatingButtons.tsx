import { CheckIcon, Cross2Icon, ReloadIcon } from '@radix-ui/react-icons';
import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import { AiOutlineConsoleSql } from 'react-icons/ai';

interface Props {
    dataId: number;
}

const RatingButtons = ({ dataId }: Props) => {
    return (
        // Master buttons
        // <Flex gap="1">
        //     <Button size="3" style={{ background: 'black', cursor: 'pointer' }}>
        //         <ReloadIcon />
        //     </Button>
        //     <Button size="3" style={{ background: 'black', cursor: 'pointer' }}>
        //         <Cross2Icon />
        //     </Button>
        //     <Button size="3" style={{ background: 'black', cursor: 'pointer' }}>
        //         <CheckIcon />
        //     </Button>
        // </Flex>

        <Flex gap="1">
            {/* Buttons may have to become seperate client components for data fetching */}
            <Link href={`#${dataId + 1}`}>
                <Button
                    size="3"
                    style={{ background: 'black', cursor: 'pointer' }}
                >
                    <ReloadIcon />
                </Button>
            </Link>
            <Link href={`#${dataId + 1}`}>
                <Button
                    size="3"
                    style={{ background: 'black', cursor: 'pointer' }}
                >
                    <Cross2Icon />
                </Button>
            </Link>
            <Link href={`#${dataId + 1}`}>
                <Button
                    size="3"
                    style={{ background: 'black', cursor: 'pointer' }}
                >
                    <CheckIcon />
                </Button>
            </Link>
        </Flex>
    );
};

export default RatingButtons;
