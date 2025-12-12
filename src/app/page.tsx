"use client";

import { useState, type FormEvent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const resumeMarkdown = `# Darwin Labiste
Software Engineer

---

## About Me
Enthusiastic and detail-oriented aspiring Software Engineer with a strong foundation in programming and problem-solving. Committed to continuous improvement and looking to leverage skills in a dynamic team environment. Seeking to apply knowledge of software development in real-world projects while growing and learning in the field.

---

## Key Competencies
- Proficient in programming languages such as Python and JavaScript.
- Strong understanding of web development frameworks.
- Familiar with database management and basic SQL.
- Effective collaboration and communication skills.
- Quick learner and adaptable to new technologies.

---

## Professional Experience
### Tech Innovations Inc.
Junior Software Developer  
January 2023 - Present  
- Developed and maintained web applications using React and Node.js, enhancing user experience.
- Collaborated with senior developers to debug and improve software functionality.
- Assisted in the migration of legacy applications to modern frameworks, reducing load times by 30%.
- Participated in code reviews to ensure code quality and adherence to best practices.

### Code Academy
Intern Software Developer  
June 2022 - December 2022  
- Contributed to the development of a mobile application, improving user engagement by 15%.
- Assisted in the creation of RESTful APIs, ensuring seamless interaction between client and server.
- Gained experience in version control systems, specifically Git, for project management.

---

## Tech Stacks / Core Skills
- JavaScript, Python, React, Node.js, SQL, Git

---

## Education
Bachelor of Science in Computer Science  
University of Technology  
Graduated: May 2022  

---`;

const jobDescriptionMarkdown = `### Job Title: Junior Software Engineer

**Company:** Innovative Tech Solutions  
**Location:** Remote  
**Job Type:** Full-Time  

#### Job Overview:
We are seeking a motivated Junior Software Engineer to join our talented engineering team. The ideal candidate should have a solid foundation in programming, a passion for technology, and a desire to grow within a collaborative environment. You will work alongside experienced developers to build, test, and maintain web and mobile applications.

#### Responsibilities:
- Develop high-quality software solutions following best practices in coding and design.
- Collaborate with cross-functional teams to gather requirements and transform them into technical specifications.
- Participate in code reviews and maintain code quality through automated testing.
- Troubleshoot and debug applications to optimize performance.
- Keep abreast with emerging technologies and industry trends to promote innovation within the team.

#### Qualifications:
- Bachelor's degree in Computer Science or a related field (or equivalent experience).
- Proficiency in at least one programming language (Java, Python, or similar).
- Familiarity with web development technologies (HTML, CSS, JavaScript).
- Basic understanding of databases and API interactions.
- Strong analytical and problem-solving skills.
- Excellent communication and teamwork abilities.

#### Benefits:
- Competitive salary.
- Comprehensive health benefits.
- Opportunities for professional development and career growth.
- Flexible working environment.

Join our team and start your journey to becoming a top-tier software engineer!`;

const placeholderMarkdown = `# Paste any markdown

- Resume, job description, or any custom content
- Headings, lists, bold/italic, and tables are supported`;

export default function Home() {
  const [markdownInput, setMarkdownInput] = useState(resumeMarkdown);
  const [renderedMarkdown, setRenderedMarkdown] = useState(resumeMarkdown);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRenderedMarkdown(markdownInput || placeholderMarkdown);
  };

  const handleReset = () => {
    setMarkdownInput("");
    setRenderedMarkdown("");
  };

  const handleQuickFill = (content: string) => {
    setMarkdownInput(content);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900">
      <main className="mx-auto flex items-start justify-start w-full flex-col gap-8 px-6 py-16 sm:px-10">
        <header className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">
            Markdown Renderer
          </p>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl">
            Render one markdown at a time
          </h1>
          <p className="max-w-2xl text-lg leading-7 text-zinc-600">
            Paste any markdown (resume, job description, or other content),
            submit, and see a single rendered preview below. Try again whenever
            you want to change it.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-4">
              <h2 className="text-xl font-semibold text-zinc-900">
                Markdown input
              </h2>
              <p className="text-sm text-zinc-600">
                Only one submission is rendered at a time.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 px-6 py-6"
            >
              <label className="text-sm font-medium text-zinc-800">
                Paste or edit your markdown
              </label>
              <textarea
                className="min-h-[320px] w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 font-mono text-sm text-zinc-800 shadow-inner focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                value={markdownInput}
                onChange={(event) => setMarkdownInput(event.target.value)}
                placeholder={placeholderMarkdown}
              />

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Render markdown
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-lg border border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  Try again
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFill(resumeMarkdown)}
                  className="rounded-lg border border-transparent bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-200"
                >
                  Load resume sample
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFill(jobDescriptionMarkdown)}
                  className="rounded-lg border border-transparent bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-200"
                >
                  Load job description sample
                </button>
              </div>
            </form>
          </section>

          <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-4">
              <h2 className="text-xl font-semibold text-zinc-900">Preview</h2>
              <p className="text-sm text-zinc-600">
                GitHub-flavored markdown rendering.
              </p>
            </div>
            <article className="markdown-body px-6 py-6 text-base leading-7 text-zinc-800">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {renderedMarkdown || placeholderMarkdown}
              </ReactMarkdown>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
