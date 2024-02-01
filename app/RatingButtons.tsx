import { Button, Flex } from '@radix-ui/themes';
import { CheckIcon, Cross2Icon, ReloadIcon } from '@radix-ui/react-icons';

const RatingButtons = () => {
    return (
        <Flex gap="1">
            <Button>
              <CheckIcon/>  
            </Button>
            <Button>
              <Cross2Icon/>
            </Button>
            <Button>
              <ReloadIcon/>
            </Button>
        </Flex>
    );
};

export default RatingButtons;
