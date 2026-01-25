import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingAnimation({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);

  const codeLines = [
    "import React from 'react';",
    "",
    "export function Hero() {",
    "  return (",
    "    <div className='hero'>",
    "      <h1>Frontend Developer</h1>",
    "      <p>Building amazing web experiences</p>",
    "    </div>",
    "  );",
    "}",
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(onComplete, 800);
      return () => clearTimeout(finalTimer);
    }
  }, [currentLine, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl w-full px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-[#333]"
        >
          <div className="bg-[#323233] px-4 py-2 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="flex-1 text-center text-[#999] text-sm">
              Hero.jsx
            </div>
          </div>

          <div className="p-6 font-mono text-sm">
            {codeLines.slice(0, currentLine).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="leading-7"
              >
                <span className="text-[#858585] select-none mr-4">
                  {index + 1}
                </span>
                {line.includes("import") && (
                  <span>
                    <span className="text-[#c586c0]">import </span>
                    <span className="text-[#4ec9b0]">React </span>
                    <span className="text-[#c586c0]">from </span>
                    <span className="text-[#ce9178]">'react'</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </span>
                )}
                {line.includes("export") && (
                  <span>
                    <span className="text-[#c586c0]">export </span>
                    <span className="text-[#c586c0]">function </span>
                    <span className="text-[#dcdcaa]">Hero</span>
                    <span className="text-[#d4d4d4]">() {"{"}</span>
                  </span>
                )}
                {line.includes("return") && (
                  <span>
                    <span className="text-[#d4d4d4]"> </span>
                    <span className="text-[#c586c0]">return </span>
                    <span className="text-[#d4d4d4]">(</span>
                  </span>
                )}
                {line.includes("<div") && (
                  <span>
                    <span className="text-[#d4d4d4]"> </span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">div </span>
                    <span className="text-[#9cdcfe]">className</span>
                    <span className="text-[#d4d4d4]">=</span>
                    <span className="text-[#ce9178]">'hero'</span>
                    <span className="text-[#808080]">&gt;</span>
                  </span>
                )}
                {line.includes("<h1>") && (
                  <span>
                    <span className="text-[#d4d4d4]"> </span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">h1</span>
                    <span className="text-[#808080]">&gt;</span>
                    <span className="text-[#d4d4d4]">Frontend Developer</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">h1</span>
                    <span className="text-[#808080]">&gt;</span>
                  </span>
                )}
                {line.includes("<p>") && (
                  <span>
                    <span className="text-[#d4d4d4]"> </span>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#4ec9b0]">p</span>
                    <span className="text-[#808080]">&gt;</span>
                    <span className="text-[#d4d4d4]">
                      Building amazing web experiences
                    </span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">p</span>
                    <span className="text-[#808080]">&gt;</span>
                  </span>
                )}
                {line.includes("</div>") && (
                  <span>
                    <span className="text-[#d4d4d4]"> </span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#4ec9b0]">div</span>
                    <span className="text-[#808080]">&gt;</span>
                  </span>
                )}
                {line.includes("  );") && (
                  <span>
                    <span className="text-[#d4d4d4]"> );</span>
                  </span>
                )}
                {line === "}" && <span className="text-[#d4d4d4]">{"}"}</span>}
                {line === "" && <span className="text-[#d4d4d4]">&nbsp;</span>}
              </motion.div>
            ))}
            {currentLine < codeLines.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-white ml-1"
              />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: currentLine >= codeLines.length ? 1 : 0 }}
          className="text-center mt-4 text-muted-foreground text-sm"
        >
          Compiling...
        </motion.div>
      </div>
    </motion.div>
  );
}
