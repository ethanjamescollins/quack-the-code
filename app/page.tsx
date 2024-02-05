import { Flex } from '@radix-ui/themes';
import FlashCards from './ui/flashCards/FlashCards';
import RatingButtons from './ui/flashCards/RatingButtons';

export default function Home() {
    return (
        <Flex direction="column" align="center">
            <FlashCards />
            <RatingButtons />
        </Flex>
    );
}
