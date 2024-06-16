"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";

import FamilyButton from "./family-button";
import { Button } from "../ui/button";
import Link from "next/link";

export function ContactButton() {
    return (
            <div className="fixed z-40 bottom-4 right-4 ">
                <FamilyButton>
                    <OgImageSection />
                </FamilyButton>
            </div>
    );
}

let tabs = [
    { id: 0, label: "Github" },
    { id: 1, label: "Email" },
    {id:2, label:"Linkedin"}
];

export function OgImageSection() {
    const [activeTab, setActiveTab] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [ref, bounds] = useMeasure();

    const content = useMemo(() => {
        switch (activeTab) {
            case 0:
                return (
                    <Link href={"https://github.com/omraval18"}>
                        <div className="flex items-center justify-center">
                            <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                    fill="#fff"
                                />
                            </svg>
                        </div>
                    </Link>
                );
            case 1:
                return (
                    <Link href={"mailto:omrawal111@gmail.com"}>
                        <div className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="96px"
                                height="96px"
                            >
                                <path
                                    fill="#4caf50"
                                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                                />
                                <path
                                    fill="#1e88e5"
                                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                                />
                                <polygon
                                    fill="#e53935"
                                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                                />
                                <path
                                    fill="#c62828"
                                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                                />
                                <path
                                    fill="#fbc02d"
                                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                                />
                            </svg>
                        </div>
                    </Link>
                );
            case 2:
                return (
                    <Link href={"https://www.linkedin.com/in/om-raval-dev"}>
                        <div className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="96px"
                                height="96px"
                            >
                                <path
                                    fill="#0078d4"
                                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                                />
                                <path
                                    d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                                    opacity=".05"
                                />
                                <path
                                    d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                                    opacity=".07"
                                />
                                <path
                                    fill="#fff"
                                    d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                                />
                            </svg>
                        </div>
                    </Link>
                );
            default:
                return null;
        }
    }, [activeTab]);

    const handleTabClick = (newTabId: number) => {
        if (newTabId !== activeTab && !isAnimating) {
            const newDirection = newTabId > activeTab ? 1 : -1;
            setDirection(newDirection);
            setActiveTab(newTabId);
        }
    };

    const variants = {
        initial: (direction: number) => ({
            x: 300 * direction,
            opacity: 0,
            filter: "blur(4px)",
        }),
        active: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
        },
        exit: (direction: number) => ({
            x: -300 * direction,
            opacity: 0,
            filter: "blur(4px)",
        }),
    };

    return (
        <div className="flex flex-col items-center pt-4 ">
            <div className="flex space-x-1 border border-none rounded-[8px] cursor-pointer bg-neutral-700  px-[3px] py-[3.2px] shadow-inner-shadow">
                {tabs.map((tab, i) => (
                    <Button
                        variant={"ghost"}
                        key={`${tab.id}-i-${i}`}
                        onClick={() => handleTabClick(tab.id)}
                        className={`${
                            activeTab === tab.id ? "text-white " : "hover:text-neutral-300/60"
                        } relative rounded-[5px] px-3 py-1.5 text-xs sm:text-sm font-medium text-white  transition focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-blue-light focus-visible:outline-none`}
                        style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="family-bubble"
                                className="absolute inset-0 z-10 bg-neutral-800  mix-blend-difference  shadow-inner-shadow"
                                style={{ borderRadius: 5 }}
                                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
                            />
                        )}
                        {tab.label}
                    </Button>
                ))}
            </div>
            <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}>
                <motion.div
                    className="relative mx-auto my-[10px] w-[60px] md:w-[150px] overflow-hidden"
                    initial={false}
                    animate={{ height: bounds.height }}
                >
                    <div className="md:p-6 p-2" ref={ref}>
                        <AnimatePresence
                            custom={direction}
                            mode="popLayout"
                            onExitComplete={() => setIsAnimating(false)}
                        >
                            <motion.div
                                key={activeTab}
                                variants={variants}
                                initial="initial"
                                animate="active"
                                exit="exit"
                                custom={direction}
                                onAnimationStart={() => setIsAnimating(true)}
                                onAnimationComplete={() => setIsAnimating(false)}
                            >
                                {content}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </MotionConfig>
        </div>
    );
}
