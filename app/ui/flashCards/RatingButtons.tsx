import { CheckIcon, Cross2Icon, ReloadIcon } from '@radix-ui/react-icons';
import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';

interface Props {
    dataId: string;
}

const RatingButtons = ({ dataId }: Props) => {
    return (
        <Flex gap="1">
            {/* May have to become client component for sending score data */}
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
