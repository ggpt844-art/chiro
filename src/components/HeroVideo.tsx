"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type Props = {
  src: string;
  poster: string;
  className?: string;
};

export default function HeroVideo({ src, poster, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      setReduced(mq.matches);
      if (mq.matches && videoRef.current) {
        videoRef.current.pause();
        setPlaying(false);
      }
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white ring-1 ring-white/15 hover:bg-black/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b73026]"
      >
        {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </button>
    </div>
  );
}
