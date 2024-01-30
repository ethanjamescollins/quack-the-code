import { Button, Card, Container, Flex } from '@radix-ui/themes';
import React from 'react';

const flashCard = () => {
    return (
        <Flex justify="center" direction='column' align='center'>
            <Card
                style={{
                    width: 250,
                    height: 344,
                    border: '5px solid black',
                }}
            >
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptas illum culpa minima exercitationem magnam
                    voluptates, vitae quis? Voluptatibus doloribus at soluta
                    eaque cumque animi deserunt inventore placeat mollitia
                </p>
            </Card>
        </Flex>
    );
};

export default flashCard;
