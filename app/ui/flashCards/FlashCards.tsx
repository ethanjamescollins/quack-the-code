import { Card, Flex } from '@radix-ui/themes';
import cardsDummyData from '@/app/lib/placeholder-data';

interface FlashCard {
    id: number;
    question: string;
    answer: string;
}

const flashCardData: FlashCard[] = cardsDummyData;

const FlashCards = () => {
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

        // Layered cards with grid and buttons underneath
        // <div className="mt-[20vh]">
        //     <Flex justify="center">
        //         <div className="grid grid-cols-10 grid-rows-10 p-5 h-[400px] max-w-[390px]">
        //             <Card
        //                 style={{
        //                     border: '5px solid black',
        //                     background: 'white',
        //                 }}
        //                 className="col-start-1 col-end-7 row-start-3 row-end-9 z-[9]"
        //             >
        //                 <p>{htmlFlashCards[0].question}</p>
        //             </Card>
        //             <Card
        //                 style={{
        //                     border: '5px solid black',
        //                     background: 'white',
        //                 }}
        //                 className="col-start-6 col-end-11 row-start-3 row-end-9 z-20"
        //             >
        //                 <p>{htmlFlashCards[0].question}</p>
        //             </Card>
        //             <Card
        //                 style={{
        //                     border: '5px solid black',
        //                     background: 'white',
        //                 }}
        //                 className="col-start-2 col-end-8 row-start-2 row-end-10 z-40"
        //             >
        //                 <p>{htmlFlashCards[0].question}</p>
        //             </Card>
        //             <Card
        //                 style={{
        //                     border: '5px solid black',
        //                     background: 'white',
        //                 }}
        //                 className="col-start-3 col-end-9 row-start-1 row-end-12 row-span-2 z-50"
        //             >
        //                 <p>{htmlFlashCards[0].question}</p>
        //             </Card>
        //             <Card
        //                 style={{
        //                     border: '5px solid black',
        //                     background: 'white',
        //                 }}
        //                 className="col-start-5 col-end-10 row-start-2 row-end-10 z-30"
        //             >
        //                 <p>{htmlFlashCards[0].question}</p>
        //             </Card>
        //         </div>
        //     </Flex>
        // </div>

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
                        <p></p>
                    </Card>
                    <Card
                        style={{
                            border: '5px solid black',
                            background: 'white',
                        }}
                        className="col-start-6 col-end-11 row-start-3 row-end-9 z-20"
                    >
                        <p></p>
                    </Card>
                    <Card
                        style={{
                            border: '5px solid black',
                            background: 'white',
                        }}
                        className="col-start-2 col-end-8 row-start-2 row-end-10 z-40"
                    >
                        <p></p>
                    </Card>
                    <Card
                        style={{
                            border: '5px solid black',
                            background: 'white',
                        }}
                        className="col-start-3 col-end-9 row-start-1 row-end-12 row-span-2 z-50"
                    >
                        <p></p>
                    </Card>
                    <Card
                        style={{
                            border: '5px solid black',
                            background: 'white',
                        }}
                        className="col-start-5 col-end-10 row-start-2 row-end-10 z-30"
                    >
                        <p></p>
                    </Card>
                </div>
            </Flex>
        </div>
    );
};

export default FlashCards;
