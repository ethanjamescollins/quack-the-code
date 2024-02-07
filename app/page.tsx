import { Flex } from '@radix-ui/themes';
import FlashCards from './ui/flashCards/FlashCards';
import Prototypes from './ui/prototypes/prototype';

export default function Home() {
    return (
        <Flex direction="column" align="center">
            <FlashCards />
            {/* <Prototypes /> */}
        </Flex>
    );
}
