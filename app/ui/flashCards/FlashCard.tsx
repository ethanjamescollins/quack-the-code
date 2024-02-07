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
            <Card
                id={id}
                className={`cursor-pointer h-[520px] w-[100%] ${
                    flipped ? `${styles.flip}` : `${styles.flipBack}`
                }`}
                style={{
                    background: '#000310',
                }}
            >
                <div
                    className={`h-[450px] border border-white`}
                    onClick={() => setCardFlip(!flipped)}
                >
                    {/* container for any future items, could be a grid instead */}
                    <Flex className="p-4" direction="column" align="center">
                        <p className={`absolute pt-[15%] text-center text-gray-300  ${flipped ? `${styles.flip}` : ''}`}>
                            {flipped ? answer : question}
                        </p>
                    </Flex>
                </div>
                {flipped ? (
                    <Flex
                        justify="center"
                        className={`${flipped ? `${styles.flip}` : ''}`}
                    >
                        <RatingButtons dataId={parseInt(id)} />
                    </Flex>
                ) : null}
            </Card>
        </>
    );
};

export default FlashCard;
