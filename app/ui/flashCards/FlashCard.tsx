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
    const [flipped, setFlipped] = useState(false);

    return (
        <>
            {/* flip with state only */}
            {/* <div
                id={id}
                className={`card cursor-pointer bg-black h-[520px] w-[100%] ${
                    flipped ? `${styles.flip}` : `${styles.flipBack}`
                }`}
            >
                <div
                    className={`h-[450px] border border-white`}
                    onClick={() => setCardFlip(!flipped)}
                >
                    {/* container for any future items, could be a grid instead
                    <Flex className="p-4" direction="column" align="center">
                        <p
                            className={`absolute pt-[15%] text-center text-gray-300  ${
                                flipped ? `${styles.flip}` : ''
                            }`}
                        >
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
            </div> */}
            <div
                id={id}
                className={`${styles.card} ${flipped ? `${styles.flip}` : ''}`}
                onClick={() => setFlipped(!flipped)}
            >
                {/* container for any future items, could be a grid instead */}
                <div
                    className={`transition-all ${styles.front} ${
                        flipped ? `${styles.hidden}` : ''
                    } `}
                >
                    <p>{question}</p>
                </div>

                <div className={`${styles.back} transition-all mt-44`}>
                    <p className="text-center">{answer}</p>
                    <div className={`flex justify-center mt-36`}>
                        <RatingButtons dataId={parseInt(id)} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlashCard;
