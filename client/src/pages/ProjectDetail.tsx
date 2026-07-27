import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { projects } from "@/data/portfolioData";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 py-4 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </header>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 max-w-4xl"
      >
        <div className="aspect-video w-full overflow-hidden rounded-3xl bg-muted mb-10 border border-border/50">
          <img
            src={
              project.imageUrl ||
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"
            }
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          {project.title}
        </h1>

        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {(project.projectUrl || project.repoUrl) && (
          <div className="flex flex-wrap gap-3 mb-10">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Project
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-secondary/80 transition-colors border border-border/40"
              >
                <Github className="w-4 h-4" />
                View Source Code
              </a>
            )}
          </div>
        )}

        {!project.projectUrl && !project.repoUrl && (
          <p className="text-sm text-muted-foreground mb-10 px-4 py-3 rounded-xl bg-secondary/40 border border-border/50 w-fit">
            This project doesn't have a public demo or repository link yet —
            here's a closer look at what it does.
          </p>
        )}

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {project.longDescription
            ? project.longDescription.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed text-lg mb-6"
                >
                  {paragraph}
                </p>
              ))
            : (
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {project.description}
                </p>
              )}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.highlights.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.article>
    </div>
  );
}
