import { Flex } from '@radix-ui/themes';
import FlashCards from './ui/flashCards/FlashCards';

export default function Home() {
    return (
        <Flex direction="column" align="center" justify='center'>
            <FlashCards />
        </Flex>
    );
}
