"use client";

import ReactMarkdown from "react-markdown";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h3: ({ children }) => (
          <h3 className="text-lg font-medium mt-6 mb-2 text-neutral-900">
            {children}
          </h3>
        ),
        p: ({ children }) => <p className="my-2">{children}</p>,
        strong: ({ children }) => (
          <strong className="text-neutral-900">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="space-y-1 my-3 ml-4 list-disc">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="space-y-1 my-3 ml-4 list-decimal">{children}</ol>
        ),
        li: ({ children }) => <li>{children}</li>,
        code: ({ children }) => (
          <code className="inline-code">{children}</code>
        ),
        pre: ({ children }) => (
          <pre className="bg-[#191918] text-[#d4d0c8] rounded-md p-4 my-3 overflow-x-auto text-sm font-mono">
            {children}
          </pre>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
