import { AnimatePresence, motion } from "motion/react";
import { useId, type JSX } from "react";

interface Props {
    children: JSX.Element;
    mKey: string;
}

const AnimateItem = ({ children, mKey }: Props) => {
    // const isPresent = useIsPresent();
    const id = useId();
    return (
        <AnimatePresence mode="wait" initial={true}>
            {children ? (
                <motion.div
                    layout
                    whileInView={{ scale: 1, opacity: 1 }}
                    key={mKey + id}
                    // style={{ display: isPresent ? "visible" : "none" }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    // exit={{ scale: 0, opacity: 0 }}
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

export default AnimateItem;
