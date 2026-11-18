"use client";

import { useState } from "react";
import { SITE_URL } from "@/lib/resume";

export const AI_PROMPT = `Read ${SITE_URL}/llms.txt. It's Om Raval's resume, with his experience, projects, skills and contact details.

Answer my questions about Om using only that file. Be specific and name the role or project you're drawing on. If the file doesn't cover something, say so instead of guessing. If I'm hiring, tell me how his background fits the role I describe and point me to ${SITE_URL} to book a call.`;

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback for older browsers / non-secure contexts
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

export function CopyPrompt({ className = "" }: { className?: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  const onClick = async () => {
    setState((await copy(AI_PROMPT)) ? "copied" : "failed");
    setTimeout(() => setState("idle"), 2200);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      title={AI_PROMPT}
      className={`flex w-full items-center justify-between rounded-md border border-white/15 px-4 py-2.5 text-left text-sm text-neutral-300 transition-colors hover:border-white/40 hover:text-white ${className}`}
    >
      <span>Ask your AI about me</span>
      <span aria-live="polite" className="text-xs text-neutral-500">
        {state === "copied" ? (
          <span className="text-emerald-400">Copied ✓</span>
        ) : state === "failed" ? (
          <span className="text-red-400">Copy failed</span>
        ) : (
          "Copy prompt"
        )}
      </span>
    </button>
  );
}
