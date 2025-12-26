import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TypewriterText({ texts, baseText, isRTL }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentFullText = baseText + texts[currentTextIndex];
    
    if (isTyping) {
      if (displayedText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting - only delete the dynamic part
      if (displayedText.length > baseText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentTextIndex, texts, baseText]);

  return (
    <div className="relative">
      <p className="text-white/70 text-lg md:text-xl leading-relaxed">
        {displayedText}
        <span className="typewriter-cursor" />
      </p>
    </div>
  );
}



