import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { BOOKS } from "../data/reading";

export function BookshelfPage() {
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
            Reading log
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Bookshelf
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-fg-muted sm:text-base">
            Books I have read, am reading, or want to remember.
          </p>
        </header>

        <ul className="space-y-5">
          {BOOKS.map((book) => (
            <li key={`${book.title}-${book.author}`} className="flex items-start gap-3">
              <span className="mt-0.5 text-link">•</span>
              <p className="leading-relaxed">
                <span className="font-medium text-link underline-offset-4 hover:underline">
                  {book.title}
                </span>{" "}
                <span className="text-fg-muted">by {book.author}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
