import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "A little more about Mahin's product-building practice.",
};

export default function AboutPage() {
  return (
    <article className="about-page shell">
      <p className="eyebrow">ABOUT / THE PERSON BEHIND THE WORK</p>
      <div className="about-page-grid">
        <div className="about-page-copy">
          <h1>Clarity over noise.<span className="hero-serif">Progress over polish.</span></h1>
          <p className="about-page-lead">I&apos;m A. Mahin — an independent product builder from Bangladesh.</p>
          <p>I work across product thinking, interface design, and software engineering. I like the part where a vague idea becomes a clear problem, a useful interface, and eventually a working product.</p>
          <p>My design background makes me attentive to how software feels. Engineering gives me the tools to make those ideas real. I want to own the full process — from the first product decision through implementation and release — while staying honest about what each project actually needs.</p>
          <p>I value resilience, adaptability, and autonomy. They are not slogans; they are reminders to keep learning, adjust when the evidence changes, and take responsibility for the result.</p>
          <a className="button button-primary" href={`mailto:${site.email}`}>Get in touch ↗</a>
        </div>
        <div className="about-page-photo">
          <Image alt="Portrait of A. Mahin" src="/images/mahin-portrait.webp" width={720} height={864} sizes="(max-width: 760px) 100vw, 430px" />
        </div>
      </div>
      <Link className="text-link about-page-back" href="/">← Back to home</Link>
    </article>
  );
}
