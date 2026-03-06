"use client";

import { useState } from "react";
import CopyButton from "./CopyButton";

export default function PromptBlock({ prompt }: { prompt: string }) {
  const [expanded, setExpanded] = useState(false);

  const lineCount = prompt.split("\n").length;

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            {expanded ? "Collapse" : "Expand"} prompt ({lineCount} lines)
          </button>
        </div>
        <CopyButton text={prompt} />
      </div>
      {expanded && (
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed text-neutral-700 bg-white max-h-[600px] overflow-y-auto">
          <code>{prompt}</code>
        </pre>
      )}
    </div>
  );
}
