import { CheckIcon, Cross2Icon, ReloadIcon } from '@radix-ui/react-icons';
import { Button, Flex } from '@radix-ui/themes';

interface Props {
    dataId: number
}

const RatingButtons = ({dataId}: Props) => {
    return (
        <Flex gap="1">
            <Button size="3" style={{ background: 'black', cursor: 'pointer' }}>
                <ReloadIcon />
            </Button>
            <Button size="3" style={{ background: 'black', cursor: 'pointer' }}>
                <Cross2Icon />
            </Button>
            <Button size="3" style={{ background: 'black', cursor: 'pointer' }}>
                <CheckIcon />
            </Button>
        </Flex>
    );
};

export default RatingButtons;
