import React from 'react';
import Image from 'next/image';

interface VisualPresProps {
    title: string;
    description: string;
    image: string;
}

const VisualPres: React.FC<VisualPresProps> = ({ title, description, image }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 p-8">
            <h3 className="mb-6 text-white self-start uppercase">{title}</h3>
            <p className="text-white whitespace-pre-line leading-relaxed">
                {description}
            </p>
            <Image 
                src={image} 
                alt={title} 
                width={800} 
                height={1000} 
                className="object-cover w-full max-h-[1600px] shadow-md rounded-[5vw] bg-dGrayTrans backdrop-filter backdrop-blur-[8px]"
            />
        </div>
    );
};

export default VisualPres;