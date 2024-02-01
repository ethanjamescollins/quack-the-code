import { Flex } from '@radix-ui/themes';
import FlashCards from './FlashCards';
import RatingButtons from './RatingButtons';

export default function Home() {
    return (
        <Flex direction="column" align="center">
            <FlashCards />
            <RatingButtons />
        </Flex>
    );
}
