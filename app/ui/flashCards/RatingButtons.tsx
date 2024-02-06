import { CheckIcon, Cross2Icon, ReloadIcon } from '@radix-ui/react-icons';
import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';

interface Props {
    dataId: number;
}

const RatingButtons = ({ dataId }: Props) => {
    return (
        <Flex gap="1">
            {/* May have to become client component for sending score data */}
            <Link href={`#${dataId + 1}`}>
                <Button
                    size="3"
                    className="hover:bg-opacity-90 bg-yellow-400 cursor-pointer border-2 "
                    onClick={() => console.log('score 4')}
                >
                    <ReloadIcon style={{ color: 'black' }} />
                </Button>
            </Link>
            <Link href={`#${dataId + 1}`}>
                <Button
                    size="3"
                    className="hover:bg-opacity-90 bg-yellow-400 cursor-pointer"
                >
                    <Cross2Icon style={{ color: 'black' }} />
                </Button>
            </Link>
            <Link href={`#${dataId + 1}`}>
                <Button
                    size="3"
                    className="hover:bg-opacity-90 bg-yellow-400 cursor-pointer"
                >
                    <CheckIcon style={{ color: 'black' }} />
                </Button>
            </Link>
        </Flex>
    );
};

export default RatingButtons;
