import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => twMerge(clsx(args));

export interface DockItemData {
  link: string;
  Icon: React.ReactNode;
  target?: string;
}

export interface AnimatedDockProps {
  className?: string;
  items: DockItemData[];
}

export const AnimatedDock = ({ className, items }: AnimatedDockProps) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn("flex h-12 items-end gap-3 px-1 pb-2", className)}
    >
      {items.map((item, index) => (
        <DockItem key={index} mouseX={mouseX}>
          <a
            href={item.link}
            target={item.target}
            className="flex items-center justify-center w-full h-full text-foreground"
          >
            {item.Icon}
          </a>
        </DockItem>
      ))}
    </motion.div>
  );
};

interface DockItemProps {
  mouseX: any;
  children: React.ReactNode;
}

const DockItem = ({ mouseX, children }: DockItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [32, 64, 32]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const iconScale = useTransform(width, [32, 64], [1, 1.5]);
  const iconSpring = useSpring(iconScale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-8 flex items-center justify-center"
    >
      <motion.div
        style={{ scale: iconSpring }}
        className="flex items-center justify-center w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 