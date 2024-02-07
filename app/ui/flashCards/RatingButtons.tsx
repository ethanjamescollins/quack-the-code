import { CheckIcon, Cross2Icon, ReloadIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface Props {
    dataId: number;
}

const RatingButtons = ({ dataId }: Props) => {
    const iconStyle = { color: 'black' };

    return (
        <div className="flex space-x-2">
            <Link
                className="bg-yellow-300 hover:opacity-90 cursor-pointer border-none p-4 rounded-md"
                href={`#${dataId + 1}`}
                onClick={() => console.log('score 4')}
            >
                <ReloadIcon style={iconStyle} />
            </Link>
            <Link
                className="bg-yellow-300 hover:opacity-90 cursor-pointer border-none p-4 rounded-md"
                href={`#${dataId + 1}`}
                onClick={() => console.log('score 3')}
            >
                <Cross2Icon style={iconStyle} />
            </Link>
            <Link
                className="bg-yellow-300 hover:opacity-90 cursor-pointer border-none p-4 rounded-md"
                href={`#${dataId + 1}`}
                onClick={() => console.log('score 1')}
            >
                <CheckIcon style={iconStyle} />
            </Link>
        </div>
    );
};

export default RatingButtons;
