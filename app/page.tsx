import { Flex } from '@radix-ui/themes';
import FlashCards from './flashCards';
import RatingButtons from './ratingButtons';

export default function Home() {
    return (
        <Flex direction='column' align='center'>
            <FlashCards />
            <RatingButtons />
        </Flex>
    );
}
