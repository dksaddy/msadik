"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../helper/SectionHeader";
import EasyMethodMenu from "../helper/ContactMethods";

export default function ContactTerminal() {
  const terminalRef = useRef(null);
  const [lines, setLines] = useState(["1. Easy Method", "2. Terminal Contact"]);
  const [inputValue, setInputValue] = useState("");
  const [mode, setMode] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const [terminalFlowLines, setTerminalFlowLines] = useState([]);
  const [currentTerminalLine, setCurrentTerminalLine] = useState(0);
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    confirm: "",
  });

  // Scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [lines, terminalFlowLines, currentTerminalLine]);

  const handleClear = () => {
    setLines(["1. Easy Method", "2. Terminal Contact", "0. Clear Terminal"]);
    setInputValue("");
    setMode(null);
    setTerminalFlowLines([]);
    setCurrentTerminalLine(0);
    setInputFields({ name: "", email: "", subject: "", message: "", confirm: "" });
    setStatusMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = inputValue.trim();

      if (input === "0") {
        handleClear();
        return;
      }

      if (!input) return;

      if (!mode) {
        if (input === "1") {
          setMode("easy");
          setLines((prev) => [...prev, "Select a contact method:"]);
        } else if (input === "2") {
          setMode("terminal");
          setTerminalFlowLines([
            "Hey, I am Sadik. For reaching me submit your message or send direct mail.",
            "Your name: ",
            "Your email: ",
            "Subject: ",
            "Message: ",
            "Type 'okay' to send: ",
          ]);
          setCurrentTerminalLine(1);
        } else {
          setLines((prev) => [...prev, "❌ Invalid choice, type 1 or 2"]);
        }
      } else if (mode === "terminal") {
        const fieldKeys = ["name", "email", "subject", "message", "confirm"];
        const field = fieldKeys[currentTerminalLine - 1];
        if (field) setInputFields((prev) => ({ ...prev, [field]: input }));

        if (field === "confirm") {
          if (input.toLowerCase() === "okay") {
            handleClear();
            setStatusMessage("✅ Message sent successfully!");
          } else {
            setStatusMessage("❌ Type 'okay' to send!");
            return;
          }
        } else {
          setCurrentTerminalLine((prev) => prev + 1);
        }
      } else if (mode === "easy") {
        // If user typed the option in terminal input
        const option = [
          { name: "Phone", url: "tel:+8801875368551", info: "+8801875368551" },
          { name: "Mail", url: "mailto:msadik3086@gmail.com", info: "to msadik3086@gmail.com" },
          { name: "WhatsApp", url: "https://wa.me/+8801875368551", info: "Redirect" },
          { name: "Messenger", url: "https://m.me/md.sadik.9822924", info: "Redirect" },
        ].find(opt => opt.name.toLowerCase() === input.toLowerCase());

        if (option) {
          setLines(prev => [...prev, `You clicked: ${option.name +" "+ option.info}`]);
          window.open(option.url, "_blank", "noopener,noreferrer");
        } else {
          setLines(prev => [...prev, "❌ Invalid option"]);
        }
      }

      setInputValue("");
    }
  };

  return (
    <section id="contact" className="sm:min-h-screen py-15 bg-white overflow-hidden dark:bg-background">
      <div className="mx-auto">
        <SectionHeader header="Contact ME" tittle="Happy to Collaborate" />
        <div className="container mx-auto px-4 flex justify-center items-center">
          <motion.div
            className="w-full max-w-md sm:max-w-2xl shadow-lg overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between border-b border-gray-300 px-3 py-2 bg-gray-100 dark:bg-black">
              <span className="dark:text-foreground text-sm font-mono font-bold">SADDY Terminal</span>
              <button
                onClick={handleClear}
                className="w-6 h-6 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold rounded"
              >
                ×
              </button>
            </div>

            {/* Terminal body */}
            <div
              ref={terminalRef}
              className="p-3 font-mono dark:text-green-400 h-96 sm:h-[24rem] overflow-y-auto border-t border-gray-300 bg-gray-50 dark:bg-black"
            >
              {/* Lines above prompt */}
              {lines.map((line, idx) => (
                <div key={idx} className="break-words mb-1 text-sm sm:text-base">
                  {line}
                </div>
              ))}

              {/* Terminal form */}
              {mode === "terminal" && (
                <div>
                  {terminalFlowLines.slice(0, currentTerminalLine).map((line, idx) => {
                    let userInput = "";
                    const fieldKeys = ["name", "email", "subject", "message", "confirm"];
                    if (idx > 0) userInput = inputFields[fieldKeys[idx - 1]] || "";
                    return (
                      <div key={idx} className="mb-1 break-words text-sm sm:text-base">
                        {line} {userInput}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Easy buttons */}
              {mode === "easy" && (
                <EasyMethodMenu
                  logLine={(text) => setLines((prev) => [...prev, text])}
                />
              )}

              {/* Input prompt */}
              <div className="flex flex-col sm:flex-row mt-2">
                <span className="mr-1 mb-1 sm:mb-0 text-sm sm:text-base break-words">
                  {mode === null
                    ? "msadik/portfolio: Select Your Choice"
                    : mode === "easy"
                      ? "Type a contact option or click a button:"
                      : currentTerminalLine < terminalFlowLines.length
                        ? terminalFlowLines[currentTerminalLine]
                        : ""}
                </span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent dark:text-green-400 outline-none flex-1 text-sm sm:text-base px-2 w-full sm:w-auto"
                />
              </div>

              {/* Status */}
              {statusMessage && (
                <div className="mt-2 text-center dark:text-green-300 text-sm sm:text-base">
                  {statusMessage}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
