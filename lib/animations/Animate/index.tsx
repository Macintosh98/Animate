import { AnimatePresence, motion } from "motion/react";
import type { JSX } from "react";

interface Props {
    children: JSX.Element;
    direction?: string;
}

const Animate = ({ children, direction = "left" }: Props) => {
    if (direction == "left")
        return (
            <AnimatePresence mode="wait" initial={true}>
                {children ? (
                    <motion.div
                        layout
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        // exit={{ x: -100, opacity: 0 }}
                        // transition={{ duration: 0.6 }}
                        // transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            bounce: 0,
                        }}
                    >
                        {children}
                    </motion.div>
                ) : null}
            </AnimatePresence>
        );
    else if (direction == "right") {
        return (
            <AnimatePresence mode="wait" initial={true}>
                {children ? (
                    <motion.div
                        layout
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        // exit={{ x: 100, opacity: 0 }}
                        // transition={{ duration: 0.6 }}
                        // transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            bounce: 0,
                        }}
                    >
                        {children}
                    </motion.div>
                ) : null}
            </AnimatePresence>
        );
    }
};

export default Animate;
