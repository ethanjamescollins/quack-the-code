'use client';
import { Card, Flex } from '@radix-ui/themes';
import React, { useState } from 'react';
import RatingButtons from './RatingButtons';
import clsx from 'clsx';
import styles from './flashcard.module.css';

interface Props {
    id: string;
    question: string;
    answer: string;
}

const FlashCard = ({ id, question, answer }: Props) => {
    const [flipped, setCardFlip] = useState(false);

    return (
        <>
            {/* cards that work */}
            {/* <Card
                className="h-[420px]"
                style={{
                    background: 'white',
                    border: '5px solid black',
                }}
                id={id}
                onClick={() => (setCardFlip(!flip), console.log('click'))}
            >
                // container for any future items, could be a grid instead
                <Flex
                    className="py-4 text-center"
                    direction="column"
                    align="center"
                    justify="between"
                >
                    <p className="absolute">{flip ? answer : question}</p>
                </Flex>
                {children}
            </Card> */}
            {/* <Card
                className="h-[420px]"
                style={{
                    background: 'white',
                    border: '5px solid black',
                }}
                id={id}
            >
               // container for any future items, could be a grid instead 
                <Flex className="py-4 text-center" justify="center">
                    <p>{answer}</p>
                </Flex>
            </Card> 
            */}

            {/* cards that flip question answer but move at same time */}
            {/* <Card
                className="h-[420px]"
                style={{
                    background: 'white',
                    border: '5px solid black',
                }}
                id={id}
                onClick={() => (setCardFlip(!flip), console.log('click'))}
            >
                {/* container for any future items, could be a grid instead 
                <Flex
                    className="py-4 text-center"
                    direction="column"
                    align="center"
                    justify="between"
                >
                    <p className="absolute">{flip ? answer : question}</p>
                </Flex>
                {children}
            </Card> */}

            <div
                className={`${styles.wrapper} ${
                    flipped ? `${styles.flip}` : ''
                }`}
                onClick={() => setCardFlip(!flipped)}
            >
                <Card
                    id={id}
                    className={` ${styles.front} cursor-pointer h-[520px] ${
                        flipped ? `${styles.flip}` : ''
                    } border border-black`}
                >
                    <div
                        className={clsx('', {
                            'h-[380px]': flipped === true,
                        })}
                        onClick={() => setCardFlip(!flipped)}
                    >
                        {/* container for any future items, could be a grid instead */}
                        <Flex className="p-4" direction="column" align="center">
                            <p className="absolute pt-[15%] text-center">
                                {flipped ? answer : question}
                            </p>
                        </Flex>
                    </div>
                    {flipped ? (
                        <Flex justify="center">
                            <RatingButtons dataId={parseInt(id)} />
                        </Flex>
                    ) : null}
                </Card>
            </div>
        </>
    );
};

export default FlashCard;
