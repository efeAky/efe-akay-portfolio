"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Project } from "@/lib/types";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  const images = project.images || [];

  function next() {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }

  function prev() {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col xl:flex-row gap-stack-lg items-start"
    >
      {/* Left Column */}
      <aside className="w-full xl:w-[320px] 2xl:w-[380px] space-y-stack-md shrink-0 xl:-mt-10">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-label-md"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold text-on-surface">{project.title}</h1>

        <p className="text-body-lg text-on-surface-variant">
          {project.description}
        </p>

        {project.technologies && (
          <div className="space-y-2">
            <h2 className="text-label-md text-on-surface-variant uppercase tracking-widest">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant rounded text-label-sm border border-outline-variant/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-semibold py-4 px-6 rounded-xl hover:bg-primary/90 transition-all duration-200 text-label-md shadow-lg hover:scale-105 active:scale-95"
            >
              Live
            </a>
          )}

          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-semibold py-4 px-6 rounded-xl hover:bg-primary/90 transition-all duration-200 text-label-md shadow-lg hover:scale-105 active:scale-95"
            >
              GitHub
            </a>
          )}
        </div>
      </aside>

      {/* Right Column - Image Slider */}
      <section className="w-full xl:flex-grow space-y-4 xl:-mt-8">
        {images.length > 0 && (
          <>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_0_30px_rgba(192,193,255,0.2)] border border-primary/20">
              {/* Blurred background */}
              <Image
                src={images[currentImage].src}
                alt=""
                fill
                quality={20}
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover scale-110 blur-xl brightness-50"
                aria-hidden
              />

              {/* Main image */}
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].caption}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain relative"
              />
            </div>

            <p className="text-center text-on-surface-variant text-body-md">
              {images[currentImage].caption}
            </p>

            <div className="flex items-center justify-between">
              <button
                onClick={prev}
                className="bg-surface-container-high text-on-surface px-6 py-3 rounded-xl border border-outline-variant/30 hover:border-primary hover:text-primary transition-all"
              >
                ← Prev
              </button>

              <span className="text-on-surface-variant text-label-md">
                {currentImage + 1} of {images.length}
              </span>

              <button
                onClick={next}
                className="bg-surface-container-high text-on-surface px-6 py-3 rounded-xl border border-outline-variant/30 hover:border-primary hover:text-primary transition-all"
              >
                Next →
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage
                      ? "bg-primary w-4"
                      : "bg-outline-variant"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </motion.div>
  );
}
