import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { BLOGS } from "../data/reading";

export function BlogsPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-12 text-fg sm:px-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <FiArrowLeft aria-hidden /> Back to portfolio
        </Link>

        <header className="mb-12 mt-16 border-b border-border pb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-fg-subtle">
            Notes & findings
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Blogs
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-fg-muted sm:text-base">
            Technical writing, experiments, and things worth sharing.
          </p>
        </header>

        <ul className="space-y-5">
          {BLOGS.map((blog) => (
            <li key={blog.url} className="flex items-start gap-3">
              <span className="mt-0.5 text-link">•</span>
              <p className="leading-relaxed">
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-link underline-offset-4 hover:underline"
                >
                  {blog.title}
                </a>{" "}
                <span className="text-fg-muted">
                  — {blog.source}, {blog.date}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
