import { AnimatePresence, motion } from "motion/react";
import type { JSX } from "react";

interface Props {
    children: JSX.Element;
}

const AnimateZoom = ({ children }: Props) => {
    return (
        <AnimatePresence mode="wait" initial={true}>
            {children ? (
                <motion.div
                    whileHover={{
                        scale: 0.95,
                    }}
                    whileTap={{ scale: 1 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        bounce: 0,
                    }}
                    whileInView={{ scale: 1 }}
                >
                    {children}
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default AnimateZoom;
