import { Card, Flex } from '@radix-ui/themes';

const flashCard = () => {
    return (
        <div className="mt-[20vh]">
            <Flex justify="center" direction="column" align="center">
                <Card
                    style={{
                        width: 250,
                        height: 344,
                        border: '5px solid black',
                    }}
                >
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptas illum culpa minima exercitationem magnam
                        voluptates, vitae quis? Voluptatibus doloribus at soluta
                        eaque cumque animi deserunt inventore placeat mollitia
                    </p>
                </Card>
            </Flex>
        </div>
    );
};

export default flashCard;
