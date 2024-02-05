import { Flex } from '@radix-ui/themes';
import FlashCards from './ui/flashCards/FlashCards';
import Link from 'next/link';

export default function Home() {
    return (
        <Flex direction="column" align="center">
            <FlashCards />
        </Flex>
    );
}
