import React from 'react';
import Button from '../button/button';

interface Types {
    title?: string;
    description: string;
    buttonName: string;
}

const VacanciesCard: React.FC<Types> = ({ title, description, buttonName }) => {
    return (
        <div className="rounded-xl shadow-lg bg-[#B9B9C9] p-6">
            {title && (
                <h3 className="text-xl font-bold text-[#9C0B35] mb-4 text-center">{title}</h3>
            )}
            <p className="text-md font-bold text-slate-900 mb-5 text-center">{description}</p>
            <div className='px-16'>
            <Button title={buttonName} />
            </div>
        </div>
    );
};

export default VacanciesCard;
