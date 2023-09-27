import Image from "next/image";
import { useState } from "react";
import emailjs from "emailjs-com"; // Import Email.js

type Props = {};

const ContactUs = (props: Props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
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
                from:'jjpconstructioninc.com',
                to_name: "Jason P.", // Replace with recipient email
                from_name: email,
                from_email: email,
                subject: subject,
                message: message,
                reply_to: email,
            })
            .then(
                (response) => {
                    console.log("Email sent:", response);
                    setSuccessMessage("Email sent successfully!");

                    // Clear form fields upon successful submission
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");

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

    return (
        <div className="w-full flex columns-2  py-24">
            <div className="flex flex-col gap-5 lg:w-[60%] p-10">
                <div className="text-5xl lg:text-6xl font-bold font-poppins">
                    Contact Us
                </div>
                <div className="leading-loose font-poppins ">
                    We would be honored to help you while you make changes to your home.
                    Get in touch with us right now to start realizing your vision.
                </div>
                {successMessage && (
                    <div className="text-green-500">{successMessage}</div>
                )}
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
                    <div className="w-full flex flex-wrap gap-5">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Your Name"
                            className="flex-1 p-2.5 border"
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Your Email"
                            className="flex-1 p-2.5 border"
                        />
                    </div>
                    <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        placeholder="Subject"
                        className="flex-1 p-2.5 border"
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name=""
                        id=""
                        className="px-5 py-3 resize-none"
                        placeholder="Message"
                        cols={30}
                        rows={2}
                    ></textarea>
                    <button
                        type="submit"
                        className={`bg-black px-8 py-3 mt-10 self-start text-white ${isSubmitting ? "opacity-50 cursor-wait" : ""
                            }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>
            <div className="relative lg:block hidden w-[40%]">
                <Image src="/Icons/world.svg" fill alt="World Map" />
                <Image
                    className="absolute top-64 left-32"
                    src="/Icons/location-pointer.svg"
                    width={50}
                    height={50}
                    alt="World Map"
                />
            </div>
        </div>
    );
};

export default ContactUs;
