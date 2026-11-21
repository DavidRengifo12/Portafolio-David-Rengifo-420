
"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
  timeZone: "America/Bogota",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  timeZone: "America/Bogota",
});

export default function HeroMetadata() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setNow(new Date());

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const date = now ? dateFormatter.format(now) : "--";
  const time = now ? timeFormatter.format(now) : "--:--:--";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-1 font-mono text-xs text-neutral-400"
    >
      <motion.p variants={itemVariants}>
        LOCAL TIME: {time}
      </motion.p>

      <motion.p variants={itemVariants}>
        DATE: {date}
      </motion.p>

      <motion.p variants={itemVariants}>
        LOCATION: CAUCA, COLOMBIA
      </motion.p>
    </motion.div>
  );
}
