import React from 'react';
import Image from 'next/image';

interface MotionPresProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const MotionPres: React.FC<MotionPresProps> = ({ title, description, image, link }) => {
    return (
        <div className="flex flex-row even:flex-row-reverse justify-center items-center gap-12 p-8">
            <div className="w-1/2">
                <a href={link} target="_blank" rel="noreferrer">
                    <Image 
                        src={image} 
                        alt={title} 
                        width={600} 
                        height={600} 
                        className="object-cover w-full max-h-[800px] shadow-md rounded-[5vw]"
                    />
                </a>
            </div>
            <div className="w-1/2">
                <h3 className="mb-6 text-black self-start uppercase">{title}</h3>
                <p className="text-black whitespace-pre-line leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default MotionPres;