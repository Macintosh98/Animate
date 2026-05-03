import { AnimatePresence, motion } from "motion/react";
import type { JSX } from "react";

interface Props {
    children: JSX.Element;
}

const AnimateFromTop = ({ children }: Props) => {
    return (
        <AnimatePresence mode="wait" initial={true}>
            {children ? (
                <motion.div
                    layout
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    // exit={{ y: -100, opacity: 0 }}
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
};

export default AnimateFromTop;
