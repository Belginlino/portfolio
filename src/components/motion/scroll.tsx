import { ReactNode, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionProps,
  type Variants,
} from "framer-motion";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/**
 * Phones / touch devices get lightweight animations: animated blur filters, 3D transforms and
 * scroll-linked springs force expensive repaints that make mobile scrolling stutter.
 */
export const isLowPower =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;

/** Props for a card that flips up out of the page with a blur as it scrolls into view. */
export function revealCard(index = 0, from: "up" | "left" | "right" = "up"): MotionProps {
  if (isLowPower) {
    return {
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-40px" },
      transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: (index % 2) * 0.08 },
    };
  }

  const offset = {
    up: { y: 60, x: 0, rotateX: 18, rotateY: 0 },
    left: { y: 20, x: -80, rotateX: 0, rotateY: 14 },
    right: { y: 20, x: 80, rotateX: 0, rotateY: -14 },
  }[from];

  return {
    initial: { opacity: 0, scale: 0.92, filter: "blur(10px)", ...offset },
    whileInView: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transitionEnd: { filter: "none" },
    },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.9, ease: EASE_OUT_EXPO, delay: (index % 4) * 0.1 },
    style: { transformPerspective: 1000 },
  };
}

const wordContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const wordItem: Variants = {
  hidden: { y: "110%", rotate: 4, opacity: 0 },
  visible: { y: "0%", rotate: 0, opacity: 1, transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
};

/** Splits plain-text / <span> children into words that slide up from a mask, one after another. */
export function SplitReveal({ children }: { children: ReactNode }) {
  const words: ReactNode[] = [];

  const collect = (node: ReactNode, className?: string) => {
    if (typeof node === "string") {
      node
        .split(/\s+/)
        .filter(Boolean)
        .forEach((w) => words.push(<span className={className}>{w}</span>));
    } else if (Array.isArray(node)) {
      node.forEach((n) => collect(n, className));
    } else if (node && typeof node === "object" && "props" in node) {
      const el = node as { props: { children?: ReactNode; className?: string } };
      collect(el.props.children, el.props.className ?? className);
    }
  };
  collect(children);

  return (
    <motion.span
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="inline"
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span variants={wordItem} className="inline-block origin-bottom-left">
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}

/** Huge outlined text that drifts sideways as its section scrolls past. */
export function ParallaxMarquee({ text }: { text: string }) {
  return isLowPower ? null : <MarqueeTrack text={text} />;
}

function MarqueeTrack({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], ["15%", "-35%"]), {
    stiffness: 80,
    damping: 25,
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-6 sm:top-10 -z-10 select-none overflow-hidden"
    >
      <motion.div
        style={{ x, WebkitTextStroke: "1px rgba(255,106,26,0.12)" }}
        className="whitespace-nowrap font-hero text-[18vw] font-extrabold uppercase leading-none tracking-tighter text-transparent"
      >
        {text} · {text}
      </motion.div>
    </div>
  );
}
