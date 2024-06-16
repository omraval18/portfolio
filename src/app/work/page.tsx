import { BentoCard, BentoGrid } from "@/components/global/bento-grid";
import Footer from "@/components/global/footer";
import { BellIcon, CalendarIcon, ChatBubbleIcon, DashboardIcon, FileIcon, FileTextIcon, GlobeIcon, InputIcon, MagicWandIcon, MixIcon } from "@radix-ui/react-icons";
import { Code, Globe, Icon, Keyboard } from "lucide-react";

const features = [
    {
        Icon: DashboardIcon,
        name: "Realtime IoT Dashboard",
        description:
            "Freelance Project to Manage and View IoT Devices Info in Realtime, Currently Used By Companies",
        href: "/work/iot",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: ChatBubbleIcon,
        name: "Vaaksya AI",
        description: "An LLM App Built With Llama-3 and Next.JS",
        href: "/work/vaaksya",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: FileTextIcon,
        name: "Blackhole",
        description: "A File Sharing App built with ExpressJS, MongoDB, and EJS",
        href: "/work/blackhole",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: MixIcon,
        name: "AI Agentic Workflow",
        description:
            "A Freelance Project to Automate Workflows and Tasks using various AI Agents, Currently Used By Companies to Scrape,Research,Summarize and Perform Various Tasks.",
        href: "/work/agents",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: FileIcon,
        name: "Plux",
        description: "A SaaS App to Talk to PDFs.",
        href: "/work/plux",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
    {
        Icon: MagicWandIcon,
        name: "Lakshya Fest Website",
        description: "A Website for a National Level Technology Festival",
        href: "/work/lakshya",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-5",
        
    },
    {
        Icon: Code,   
        name: "Cabin",
        description: "A Online Coding Playground",
        href: "/work/cabin",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-5",
    }
];

export default function Work() {
    return (
        <div className="w-screen flex justify-center min-h-screen md:max-w-[200vh] items-center md:overflow-hidden">
            <div className="mt-10 mb-24 h-full w-[300px] md:mb-24 md:w-5/6">
                <BentoGrid className="lg:grid-rows-3">
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
}
