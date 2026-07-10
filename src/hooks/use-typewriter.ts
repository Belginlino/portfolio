import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 90, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}
