'use client';
import { useState } from 'react';
import styles from './prototype.module.css';

const Prototypes = () => {
    const [flipped, setCardFlip] = useState(false);
    const flashcard = { question: 'a quezzy', answer: 'a answer' };

    return (
        <div
            onClick={() => setCardFlip(!flipped)}
            className={`${styles.card} ${flipped ? `${styles.flip}` : ''} text-white`}
        >
            <div className={styles.front}>{flashcard.question}</div>
            <div className={styles.back}>{flashcard.answer}</div>
        </div>
    );
};

export default Prototypes;
