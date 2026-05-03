import { AnimatePresence, motion } from "motion/react";
import type { JSX } from "react";

interface Props {
    children: JSX.Element;
}

const AnimateOnScroll = ({ children }: Props) => {
    return (
        <AnimatePresence mode="wait" initial={true}>
            {children ? (
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    <motion.div
                        variants={{
                            offscreen: {
                                y: 100,
                                opacity: 0,
                            },
                            onscreen: {
                                y: 0,
                                opacity: 1,
                                // transition: {
                                //         type: "spring",
                                //         stiffness: 100,
                                //         damping: 20,
                                // },
                            },
                        }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            bounce: 0,
                        }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default AnimateOnScroll;
