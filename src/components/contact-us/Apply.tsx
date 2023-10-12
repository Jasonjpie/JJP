import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from '../common/Container';
import ApplyModal from './ApplyModal';
import { useInView } from 'react-intersection-observer';

type Props = {};

const Apply = (props: Props) => {
    const { ref, inView } = useInView({ triggerOnce: true })
    const [isOpen, setIsOpen] = useState(false)
    

    return (
        <>
            <div id="apply" className="w-full bg-[#ffffff]">
                <div className="flex flex-col items-center w-full lg:w-[60%] mx-auto gap-10 py-12   ">
                    <div className="text-center text-4xl font-semibold capitalize max-w-lg lg:text-4xl lg:max-w-2xl">
                        Apply here to become a member of our team.
                    </div>
                    <button 
                    ref={ref}
                    onClick={() => {
                        setIsOpen(true)
                    }}
                    className={`text-white bg-[#101C3D] px-5 py-3 rounded-lg `}
                        type="submit">
                        {"Apply Here"}
                    </button>
                </div>
            </div>
            <ApplyModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        </>
    );
};

export default Apply