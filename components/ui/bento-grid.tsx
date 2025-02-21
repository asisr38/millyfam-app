"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoGridItemProps {
  title: string;
  description: string;
  className?: string;
}

export function BentoGrid({
  items,
  className,
}: {
  items: BentoGridItemProps[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={cn(
            i === 0 && "md:col-span-2 md:row-span-2",
            i === 5 && "md:col-span-2",
            item.className
          )}
        />
      ))}
    </div>
  );
}

function BentoGridItem({
  title,
  description,
  className,
}: BentoGridItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 md:p-6 border border-border hover:border-primary/50 relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity" />
      <div className="relative z-10 h-full flex flex-col">
        <h3 className="font-bold text-lg md:text-xl text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-xs md:text-sm line-clamp-4 md:line-clamp-none flex-grow">{description}</p>
      </div>
    </motion.div>
  );
}
