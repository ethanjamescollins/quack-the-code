'use client';
import { Card, Flex } from '@radix-ui/themes';
import React, { useState } from 'react';
import RatingButtons from './RatingButtons';
import styles from './flashcard.module.css';
import clsx from 'clsx';

interface Props {
    id: string;
    question: string;
    answer: string;
}

const FlashCard = ({ id, question, answer }: Props) => {
    const [flipped, setCardFlip] = useState(false);

    return (
        <>
            {flipped ? (
                <>
                    <Card>
                        <div
                            className={`h-[352px] cursor-pointer ${
                                styles.back
                            }  ${flipped ? '' : 'flip'}`}
                            onClick={() => setCardFlip(!flipped)}
                        >
                            {/* container for any future items, could be a grid instead */}
                            <Flex
                                className="p-4"
                                direction="column"
                                align="center"
                            >
                                <p className="absolute pt-[15%] text-center">
                                    {answer}
                                </p>
                            </Flex>
                        </div>
                        <Flex justify="center" className="mb-1">
                            <RatingButtons dataId={parseInt(id)} />
                        </Flex>
                    </Card>
                </>
            ) : (
                <Card
                    className={`h-[420px] cursor-pointer ${styles.front} ${
                        flipped ? 'flip' : ''
                    }`}
                    onClick={() => setCardFlip(!flipped)}
                >
                    {/* container for any future items, could be a grid instead */}
                    <Flex className="p-4" direction="column" align="center">
                        <p className="absolute pt-[15%] text-center">
                            {question}
                        </p>
                    </Flex>
                </Card>
            )}
        </>
    );
};

export default FlashCard;
