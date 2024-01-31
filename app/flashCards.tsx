import { Card, Flex } from '@radix-ui/themes';

interface FlashCard {
    id: number;
    question: string;
    answer: string;
}

const htmlFlashCards: FlashCard[] = [
    {
        id: 1,
        question: 'What does HTML stand for?',
        answer: 'Hypertext Markup Language',
    },
    {
        id: 2,
        question: 'What is the purpose of the <head> element in HTML?',
        answer: 'It contains meta-information about the HTML document, such as the title, character set, etc.',
    },
    {
        id: 3,
        question: 'What does the <a> element represent?',
        answer: 'It represents a hyperlink, allowing users to navigate to another page or resource.',
    },
    {
        id: 4,
        question: 'How do you create an ordered list in HTML?',
        answer: '<ol> element is used for creating ordered lists.',
    },
    {
        id: 5,
        question:
            'What is the purpose of the alt attribute in the <img> element?',
        answer: 'It provides alternative text for browsers to display if the image cannot be loaded.',
    },
    {
        id: 6,
        question: 'Explain the difference between <div> and <span> elements.',
        answer: '<div> is a block-level element, and <span> is an inline element. They are used for grouping content.',
    },
    {
        id: 7,
        question: 'How do you create a hyperlink that opens in a new tab?',
        answer: 'Use the target="_blank" attribute in the <a> element: <a href="url" target="_blank">Link</a>',
    },
    {
        id: 8,
        question: 'What is the purpose of the <form> element in HTML?',
        answer: 'It is used to create an HTML form for user input, such as text fields, buttons, checkboxes, etc.',
    },
];

const flashCards = () => {
    return (
        // Master card
        // <div className="mt-[20vh]">
        //     <Flex justify="center" direction="column" align="center">
        //         <Card
        //             style={{
        //                 width: 250,
        //                 height: 344,
        //                 border: '5px solid black',
        //             }}
        //         >
        //             <p>
        //                 {htmlFlashCards[0].question}
        //             </p>
        //         </Card>
        //     </Flex>
        // </div>
        // static flash cards layered
        <div className="mt-[20vh]">
            <Flex justify="center">
                <div className="grid grid-cols-10 grid-rows-10 p-5 h-[400px] max-w-[390px]">
                    <Card
                        style={{
                            border: '5px solid black',
                            background: 'white',
                        }}
                        className="col-start-1 col-end-7 row-start-3 row-end-9 z-[9]"
                    >
                        <p>{htmlFlashCards[0].question}</p>
                    </Card>
                    <Card
                        style={{
                            border: '5px solid black',
                            background: 'white',
                        }}
                        className="col-start-6 col-end-11 row-start-3 row-end-9 z-20"
                    >
                        <p>{htmlFlashCards[0].question}</p>
                    </Card>
                    <Card
                        style={{
                            border: '5px solid black',
                            background: 'white',
                        }}
                        className="col-start-2 col-end-8 row-start-2 row-end-10 z-40"
                    >
                        <p>{htmlFlashCards[0].question}</p>
                    </Card>
                    <Card
                        style={{
                            border: '5px solid black',
                            background: 'white',
                        }}
                        className="col-start-3 col-end-9 row-start-1 row-end-12 row-span-2 z-50"
                    >
                        <p>{htmlFlashCards[0].question}</p>
                    </Card>
                    <Card
                        style={{
                            border: '5px solid black',
                            background: 'white',
                        }}
                        className="col-start-5 col-end-10 row-start-2 row-end-10 z-30"
                    >
                        <p>{htmlFlashCards[0].question}</p>
                    </Card>
                </div>
            </Flex>
        </div>
    );
};

export default flashCards;
