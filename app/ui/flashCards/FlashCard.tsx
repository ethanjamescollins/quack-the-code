'use client';
import { Card, Flex } from '@radix-ui/themes';
import React, { useState } from 'react';
import RatingButtons from './RatingButtons';
import clsx from 'clsx';

interface Props {
    id: string;
    question: string;
    answer: string;
}

const FlashCard = ({ id, question, answer }: Props) => {
    const [flip, setCardFlip] = useState(false);

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

            <Card
                // style={{
                //     background: 'white',
                //     border: '5px solid black',
                // }}
                id={id}
            >
                <div
                    className={clsx('h-[420px]', {
                        'h-[380px]': flip === true,
                    })}
                    onClick={() => setCardFlip(!flip)}
                >
                    {/* container for any future items, could be a grid instead */}
                    <Flex className="p-4" direction="column" align="center">
                        <p className="absolute pt-[15%] text-center">
                            {flip ? answer : question}
                        </p>
                    </Flex>
                </div>
                {flip ? (
                    <Flex justify="center">
                        <RatingButtons dataId={parseInt(id)} />
                    </Flex>
                ) : null}
            </Card>
        </>
    );
};

export default FlashCard;
