import Link from "next/link";

import {
    ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type ProjectActionsProps = {
    live: string;
    // github: string;
    projectName: string;
};

export default function ProjectActions({
    live,
    // github,
    projectName,
}: ProjectActionsProps) {
    return (
        <div className="mt-10 flex flex-wrap gap-4">

            <Button
                asChild
            >
                <Link
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${projectName} live demo`}
                >
                    Live Demo

                    <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>

            {/* <Button
                variant="outline"
                asChild
            >
                <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${projectName} GitHub repository`}
                >
                    GitHub

                    <GitBranch className="ml-2 h-4 w-4" />
                </Link>
            </Button> */}

        </div>
    );
}