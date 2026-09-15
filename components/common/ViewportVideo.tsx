"use client";

import { useEffect, useRef } from "react";

interface ViewportVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function ViewportVideo({
  src,
  poster,
  className,
}: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay may be blocked by the browser.
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      playsInline
      loop
      preload="metadata"
      className={className}
    />
  );
}