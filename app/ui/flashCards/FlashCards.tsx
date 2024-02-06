import cardsDummyData from '@/app/lib/placeholder-data';
import FlashCard from './FlashCard';

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

        // Unstacked cards
        // <div className="bg-slate-100 carousel carousel-center gap-10 mt-[20vh] p-4 rounded-box w-[315px] md:w-[75vw] md:max-w-[900px] md:space-x-0">
        //     {/* <div className='w-[50%] carousel-item'></div> */}
        //     {flashCardData.map(data => (
        //         <>
        //             {/* container for any future items, could be a grid instead */}
        //             <Card
        //                 className="carousel-item w-[100%] "
        //                 key={data.id}
        //                 style={{
        //                     background: 'white',
        //                     border: '5px solid black',
        //                 }}
        //                 id={data.id.toString()}
        //             >
        //                 <Flex
        //                     className="py-4 text-center"
        //                     direction="column"
        //                     align="center"
        //                     justify="between"
        //                 >
        //                     <p className="absolute">{data.question}</p>
        //                 </Flex>
        //                 <Flex className="mt-[300px]" justify="center">
        //                     <RatingButtons dataId={data.id} />
        //                 </Flex>
        //             </Card>
        //         </>
        //     ))}
        // </div>

        // stacked cards
        // <div className="bg-slate-100 carousel carousel-center gap-10 mt-[20vh] p-4 rounded-box w-[315px] md:w-[75vw] md:max-w-[900px] md:space-x-0">
        //     {/* <div className='w-[50%] carousel-item'></div> */}
        //     {flashCardData.map(data => (
        //         <div
        //             className="stack carousel-item w-[100%] h-[100%]"
        //             key={data.id}
        //         >
        //             <Card
        //                 className="h-[420px]"
        //                 style={{
        //                     background: 'white',
        //                     border: '5px solid black',
        //                 }}
        //                 id={data.id.toString()}
        //             >
        //                 {/* container for any future items, could be a grid instead */}
        //                 <Flex
        //                     className="py-4 text-center"
        //                     direction="column"
        //                     align="center"
        //                     justify="between"
        //                 >
        //                     <p className="absolute">{data.question}</p>
        //                 </Flex>
        //                 <Flex className="mt-[300px]" justify="center">
        //                     <RatingButtons dataId={data.id} />
        //                 </Flex>
        //             </Card>
        //             <Card
        //                 className="h-[420px]"
        //                 style={{
        //                     background: 'white',
        //                     border: '5px solid black',
        //                 }}
        //                 id={data.id.toString()}
        //             >
        //                 {/* container for any future items, could be a grid instead */}
        //                 <Flex className="py-4 text-center" justify="center">
        //                     <p>{data.answer}</p>
        //                 </Flex>
        //             </Card>
        //         </div>
        //     ))}
        // </div>

        // Cards that flip and move along carousel at same time
        // <div className="bg-slate-100 carousel carousel-center gap-10 mt-[20vh] p-4 rounded-box w-[315px] md:w-[75vw] md:max-w-[900px] md:space-x-0">
        //     {/* <div className='w-[50%] carousel-item'></div> */}
        //     {flashCardData.map(data => (
        //         <div
        //             className="stack carousel-item w-[100%] h-[100%]"
        //             key={data.id}
        //         >
        //             <FlashCard
        //                 id={data.id.toString()}
        //                 question={data.question}
        //                 answer={data.answer}
        //             >
        //                 <Flex className="mt-[300px]" justify="center">
        //                     <RatingButtons dataId={data.id} />
        //                 </Flex>
        //             </FlashCard>
        //         </div>
        //     ))}
        // </div>

        <div className="bg-yellow-400 carousel carousel-center gap-10 mt-[15vh] p-4 rounded-box w-[315px] md:w-[75vw] md:max-w-[900px] md:space-x-0">
            {flashCardData.map(data => (
                <div className="carousel-item w-[100%] h-[100%]" key={data.id}>
                    <FlashCard
                        id={data.id.toString()}
                        question={data.question}
                        answer={data.answer}
                    />
                </div>
            ))}
        </div>
    );
};

export default FlashCards;
