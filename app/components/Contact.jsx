"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../helper/SectionHeader";

export default function ContactTerminal() {
    const [currentLine, setCurrentLine] = useState(0);
    const [displayed, setDisplayed] = useState([]);
    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        confirm: "",
    });
    const [statusMessage, setStatusMessage] = useState("Message not sent yet");
    const terminalRef = useRef(null);

    const lines = [
        { text: "Hey, I am Sadik. For reaching me submit your message", field: null },
        { text: "Your name: ", field: "name" },
        { text: "Your email: ", field: "email" },
        { text: "Subject: ", field: "subject" },
        { text: "Message: ", field: "message" },
        { text: "Type 'okay' to send: ", field: "confirm" },
    ];

    // Typing animation
    useEffect(() => {
        if (currentLine < lines.length) {
            const line = lines[currentLine];
            let i = 0;

            const typing = setInterval(() => {
                setDisplayed((prev) => {
                    const newLines = [...prev];
                    if (!newLines[currentLine]) newLines[currentLine] = "";
                    newLines[currentLine] = line.text.slice(0, i + 1);
                    return newLines;
                });
                i++;
                if (i === line.text.length) {
                    clearInterval(typing);
                    if (!line.field) {
                        setTimeout(() => setCurrentLine((prev) => prev + 1), 500);
                    }
                }
            }, 40);

            return () => clearInterval(typing);
        }
    }, [currentLine]);

    // Scroll to bottom whenever currentLine changes
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTo({
                top: terminalRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [currentLine, displayed, statusMessage]);

    const handleKeyDown = (e, field) => {
        if (e.key === "Enter" && inputValues[field].trim() !== "") {
            if (field === "confirm") {
                if (inputValues.confirm.toLowerCase() === "okay") {
                    setStatusMessage("✅ Message sent successfully!");
                    console.log("Form Data:", inputValues);
                } else {
                    setStatusMessage("❌ Type 'okay' to send!");
                    return;
                }
            }
            setCurrentLine((prev) => prev + 1);
        }
    };

    const handleChange = (e, field) => {
        setInputValues({ ...inputValues, [field]: e.target.value });
    };

    const handleClear = () => {
        setInputValues({
            name: "",
            email: "",
            subject: "",
            message: "",
            confirm: "",
        });
        setStatusMessage("Message not sent yet");
        setCurrentLine(1);
        setDisplayed(lines.slice(0, 1).map((l) => l.text));
    };

    return (
        <section id="contact" className="py-10 bg-white overflow-hidden">
            <SectionHeader header="Contact ME" tittle="Happy to collaborate" />
            <div className="container mx-auto px-6 flex justify-center items-center">
                <motion.div
                    className="w-full max-w-2xl rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2}}
                >
                    {/* Terminal header */}
                    <div className="flex items-center justify-between bg-black px-3 py-1">
                        <span className="text-white text-sm font-mono">SADDY Terminal</span>
                        <button
                            onClick={handleClear}
                            className="w-5 h-5 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded text-white font-bold leading-none"
                        >
                            ×
                        </button>
                    </div>

                    {/* Terminal body */}
                    <div
                        ref={terminalRef}
                        className="p-3 font-mono text-green-400 h-96 overflow-y-auto flex flex-col space-y-1"
                        style={{
                            backgroundImage: "url('/stack.gif')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {lines.map((line, index) => (
                            <div
                                key={index}
                                className="flex items-center flex-nowrap whitespace-nowrap w-full"
                            >
                                <span className="flex-shrink-0">{displayed[index]}</span>

                                {line.field &&
                                    index === currentLine &&
                                    displayed[index] === line.text && (
                                        <>
                                            <input
                                                type="text"
                                                value={inputValues[line.field]}
                                                onChange={(e) => handleChange(e, line.field)}
                                                onKeyDown={(e) => handleKeyDown(e, line.field)}
                                                className="bg-transparent text-green-400 outline-none flex-shrink min-w-[80px]"
                                                autoFocus
                                            />
                                            <span className="animate-pulse">_</span>
                                        </>
                                    )}

                                {line.field && index < currentLine && (
                                    <span className="flex-shrink-0">{inputValues[line.field]}</span>
                                )}
                            </div>
                        ))}

                        <div className="mt-4 text-green-300 font-mono">{statusMessage}</div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
