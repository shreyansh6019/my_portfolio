import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiRedux,
    SiJest,
    SiAntdesign,
    SiHtml5,
} from "react-icons/si";

import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";

const tech = [
    { icon: SiReact, label: "React" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: TbBrandJavascript, label: "JavaScript" },
    {
        label: "HTML5",
        icon: SiHtml5,
    },
    {
        label: "CSS3",
        icon: IoLogoCss3,
    },
    { icon: SiAntdesign, label: "Ant Design" },
    { icon: SiTailwindcss, label: "Tailwind CSS" },
    { icon: SiRedux, label: "Redux Toolkit" },
    { icon: SiJest, label: "Jest" },
];

export default function HeroTechStack() {
    return (
        <div className="mt-14 flex flex-wrap justify-center gap-4">

            {tech.map(({ icon: Icon, label }) => (

                <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border bg-background/70 px-5 py-3 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
                >
                    <Icon className="h-5 w-5" />

                    <span>{label}</span>

                </div>

            ))}

        </div>
    );
}