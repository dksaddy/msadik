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
  const [sent, setSent] = useState(false); // ✅ lock flag
  const [otp] = useState(() =>
    String(Math.floor(Math.random() * 10000)).padStart(4, "0")
  );
  const terminalRef = useRef(null);

  const lines = [
    { text: "Hello there, Greetings! follow the instruction >>>>>", field: null },
    { text: "Your name: ", field: "name" },
    { text: "Your email: ", field: "email" },
    { text: "Subject: ", field: "subject" },
    { text: "Message: ", field: "message" },
    { text: `Type ${otp} to send: `, field: "confirm" },
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

  // Auto scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [currentLine, displayed, statusMessage]);

  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (sent) return; // ✅ block typing after success

      if (field === "message" && !inputValues.message.includes("#100#")) {
        setStatusMessage("Type #100# at the end to finish your message");
        return;
      }

      if (field === "confirm") {
        if (inputValues.confirm === otp) {
          setStatusMessage("✅ Message sent successfully!");
          setSent(true); // ✅ lock inputs
          console.log("Form Data:", inputValues);
        } else {
          setStatusMessage(`❌ Wrong code, please type ${otp} to send!`);
        }
        return;
      }

      if (inputValues[field].trim() !== "") {
        setCurrentLine((prev) => prev + 1);
      }
    }
  };

  const handleChange = (e, field) => {
    if (sent) return; // ✅ block changes after success
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
    setSent(false); // reset
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-15 bg-white overflow-hidden dark:bg-background"
    >
      <div className="mx-auto">
        <SectionHeader header="Contact ME" tittle="Happy to Collaborate" />
        <div className="container mx-auto px-4 flex justify-center items-center">
          <motion.div
            className="w-full max-w-2xl rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between border-b border-gray-300 px-3 py-2 bg-gray-100 dark:bg-black">
              <span className="dark:text-foreground text-sm font-mono font-bold">
                SADDY Terminal
              </span>
              <button
                onClick={handleClear}
                className="w-5 h-5 flex items-center justify-center bg-red-600 
                                hover:bg-red-700 rounded text-white font-bold leading-none"
              >
                ×
              </button>
            </div>

            {/* Terminal body */}
            <div
              ref={terminalRef}
              className="p-3 font-mono h-96 overflow-y-auto border-t shadow-full dark:bg-black/10"
            >
              {lines.map((line, index) => (
                <div key={index} className="w-full mb-1 break-words">
                  <span>{displayed[index]}</span>

                  {line.field &&
                    index === currentLine &&
                    displayed[index] === line.text &&
                    !sent && ( // ✅ hide input if sent
                      <>
                        {line.field === "message" ? (
                          <textarea
                            value={inputValues[line.field]}
                            onChange={(e) => handleChange(e, line.field)}
                            onKeyDown={(e) => handleKeyDown(e, line.field)}
                            className="bg-transparent dark:text-yellow-400 outline-none w-full resize-none"
                            rows={5}
                            placeholder="Type your message and add #100# at the end"
                            autoFocus
                          />
                        ) : (
                          <input
                            type="text"
                            value={inputValues[line.field]}
                            onChange={(e) => handleChange(e, line.field)}
                            onKeyDown={(e) => handleKeyDown(e, line.field)}
                            className="bg-transparent dark:text-yellow-400 outline-none w-full"
                            autoFocus
                          />
                        )}
                        <span className="animate-pulse">_</span>
                      </>
                    )}

                  {line.field && index < currentLine && (
                    <span>{inputValues[line.field]}</span>
                  )}
                </div>
              ))}

              <div className="mt-4 dark:text-yellow-300 text-center font-mono">
                {statusMessage}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
