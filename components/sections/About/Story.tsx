import {GlassCard} from "@/components/common/GlassCard";
import { aboutContent } from "@/content/about";

import styles from "./About.module.css";
export default function AboutStory() {
    return (
        <GlassCard className={`p-8 min-h-stretch ${styles.aboutStoryGlassCard}`}>
            <h3 className="text-2xl font-bold">
                My Story
            </h3>

            <div className="mt-6 space-y-5 text-muted-foreground leading-8">
                {aboutContent.story.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </GlassCard>
    );
}