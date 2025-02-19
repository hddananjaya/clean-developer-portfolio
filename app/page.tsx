import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Youtube,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen w-full max-w-2xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center space-y-8">
        <Image
          src="https://avatars.githubusercontent.com/u/19330397?v=4"
          alt="Profile photo"
          width={100}
          height={100}
          className="rounded-full"
          priority
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Hi, I'm Akila!</h1>
          <p className="text-lg text-muted-foreground">
            I'm a Software Engineer from Sri Lanka.
          </p>
        </div>

        <p className="max-w-[600px] text-muted-foreground">
          My passion for technology began in childhood when I was fascinated by
          a notorious Sri Lankan computer virus called "Mahasona" and wanted to
          recreate it. Now, I have over five years of experience in software
          development and work as a <strong>Lead Full Stack Engineer</strong> at{" "}
          <Link
            className="text-blue-500 hover:underline"
            href="https://www.skillful.ly/"
            target="_blank"
          >
            Skillfully
          </Link>
          .
        </p>

        <p className="text-muted-foreground">
          Beyond coding, I enjoy art, literature, watching documentaries, and a
          good chicken curry.
        </p>

        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/hddananjaya" target="_blank">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://lk.linkedin.com/in/hd-dananjaya"
              target="_blank"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://www.youtube.com/@akilacodes/videos"
              target="_blank"
            >
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://hddananjaya.wordpress.com/" target="_blank">
              <BookOpen className="h-4 w-4" />
              <span className="sr-only">Blog</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="mailto:akiladananjaya79@gmail.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>

        <section className="w-full space-y-6 pt-8">
          <h2 className="text-2xl font-bold">Current Projects</h2>

          <div className="grid gap-4">
            {[
              {
                title: "HiredNow",
                description:
                  "An AI powered platform that enables employers to assess candidate skills through customizable simulations, streamlining the hiring process.",
                href: "https://hirednow.ai/",
              },
              {
                title: "Gencode",
                description:
                  "An upcoming platform that offers a comprehensive coding assessment environment for technical interviews — like Vercel, but for interviewing.",
                href: "https://gencode-interview.hirednow.ai/",
              },
            ].map((project, index) => (
              <Link key={index} href={project.href} className="block group">
                <div className="rounded-lg border p-4 transition-colors hover:bg-muted/50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{project.title}</h3>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground text-left mt-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="w-full space-y-6 pt-8">
          <h2 className="text-2xl font-bold">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "PostgreSQL",
              "AWS",
              "Docker",
              "REST APIs",
              "GraphQL",
              "TailwindCSS",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
        <div className="pt-8">
          <Button asChild>
            <Link href="mailto:hello@example.com">Get in touch</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
