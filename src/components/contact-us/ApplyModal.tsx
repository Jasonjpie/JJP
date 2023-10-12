import Modal from 'react-modal'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Routes } from '../../../Routes'
import emailjs from "emailjs-com"; // Import Email.js

type Props = {
    isOpen: boolean,
    closeModal: () => void
}

const ApplyModal = ({ isOpen, closeModal }: Props) => {
    // const [index, setIndex] = useState(0)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    // const [number, setNumber] = useState("");
    // const [subject, setSubject] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [coverLatter, setCoverLatter] = useState("")
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state

    const serviceID = "service_1ewdayd"; // Replace with your Email.js service ID
    const userID = "D5maOIBS7PmgmBLyM"; // Replace with your Email.js user ID
    const templateID = "template_s1cnbtr"; // Replace with your Email.js template ID
    emailjs.init(userID); // Initialize Email.js with your user ID

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Set loading state to true while submitting
        setIsSubmitting(true);

        // Use Email.js to send the email
        emailjs
            .send(serviceID, templateID, {
                from: 'jjpconstructioninc.com',
                to_name: "Jason P.", // Replace with recipient email
                from_name: firstName + lastName,
                from_email: email,
                subject: "Applying for a Job",
                message: coverLatter,
                reply_to: email,
            })
            .then(
                (response) => {
                    console.log("Email sent:", response);
                    setSuccessMessage("Email sent successfully!");

                    // Clear form fields upon successful submission
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setCoverLatter("");

                    // Clear success message after 5 seconds (5000 milliseconds)
                    setTimeout(() => {
                        setSuccessMessage("");
                    }, 5000);
                },
                (error) => {
                    console.error("Error sending email:", error);
                    setErrorMessage("Failed to send email. Please try again later.");

                    // Clear error message after 5 seconds (5000 milliseconds)
                    setTimeout(() => {
                        setErrorMessage("");
                    }, 5000);
                }
            )
            .finally(() => {
                // Set loading state to false after submission (whether successful or not)
                setIsSubmitting(false);
            });
    };


    const modal = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (modal.current && !modal.current.contains(e.target as Node)) {
                closeModal()
            }

        }
        const handleKeyPress = (e: KeyboardEvent) => {
            console.log('here')
            if (e.key === 'Escape') {
                closeModal()
            }
        }

        document.addEventListener('click', handleClick)
        document.addEventListener('keypress', handleKeyPress)
        return () => {
            document.removeEventListener('click', handleClick)
            document.removeEventListener('keypress', handleKeyPress)
        }
    })

    return (
        <Modal className="flex justify-center h-[100vh] w-[100vw] items-center  p-5 bg-transparent" style={{ overlay: { zIndex: 1000 } }} isOpen={isOpen}>
            <div ref={modal} className="flex flex-col max-w-[1060px] h-fit px-5  mx-auto relative z-50 border-2 bg-white overflow-y-auto">
                <button className='absolute right-3 top-0 z-20' onClick={closeModal}><MdClose className='p-3' size={50} /></button>

                <div className="w-full space-y-5">
                    <div className="relative w-full h-fit">
                        <div className="flex flex-col gap-5 p-10">
                            <div className="text-5xl lg:text-6xl font-bold font-poppins">
                                Apply to Become a Member
                            </div>
                            <div className="leading-loose font-poppins">
                                We are excited to welcome new members to our team. Apply now and be a part of our journey as we make positive changes together.
                            </div>

                            {successMessage && (
                                <div className="text-green-500">{successMessage}</div>
                            )}
                            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                            <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
                                <div className="w-full flex flex-wrap gap-5">
                                    <input
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text"
                                        placeholder="First Name"
                                        className="flex-1 p-2.5 border"
                                    />
                                    <input
                                        value={
                                            lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text"
                                        placeholder="Last Name"
                                        className="flex-1 p-2.5 border"
                                    />
                                </div>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Your Email"
                                    className="flex-1 p-2.5 border"
                                />
                                {/* <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="flex-1 p-2.5 border"
                                /> */}
                                <textarea
                                    value={coverLatter}
                                    onChange={(e) => setCoverLatter(e.target.value)}
                                    name=""
                                    id=""
                                    className="px-5 py-3 resize-none text-xl border border-gray-300 rounded"
                                    placeholder="Cover Letter"
                                    cols={50}
                                    rows={10} // Adjust the number of rows as needed
                                ></textarea>
                                <button
                                    type="submit"
                                    className={`bg-black px-8 py-3 mt-10 self-start text-white ${isSubmitting ? "opacity-50 cursor-wait" : ""
                                        }`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "APPLYING..." : "APPLY"}
                                </button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default ApplyModal;