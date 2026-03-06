---
name: Resume Builder
description: Interactive resume coach that teaches WHY and guides you through building a targeted resume.
category: skill
---

## The problem

You send 50 applications with the same resume and hear nothing back. A single job posting gets **200-700+ applicants**. ~75% get auto-filtered by software before a human ever sees them. Recruiters spend **5-7 seconds** on the ones that survive. Out of 300 applicants, maybe **10-20** actually reach the hiring manager.

Most people build resumes from memory — what they're proud of, a nice template, one version for every job. That's how you end up in the 280 that get filtered out.

## The skill

This isn't another "paste your resume and I'll rewrite it" AI tool. Those hallucinate, flatter you, and spit out generic bullets that sound like everyone else's.

This is a coaching session. It teaches you the *system* — then walks you through building your resume yourself. You stay in control. The AI handles the structure, the frameworks, and the accountability.

**What's inside:** ATS keyword strategy, ghost posting detection, H1B red flag signals, competency frequency mapping across your target job descriptions, the parent-child resume system, and the bullet formula that enterprise recruiters actually respond to. Built from methodology used to evaluate candidates in ATS databases with 1M+ resumes.

By the end you'll have:
- A parent resume built from real job market data — not from memory
- A bullet point bank organized by competency
- The ability to customize for any role in 15 minutes
- A system you own, not a document you rented from AI

## How to use it

### Prerequisites

1. **Claude Code** — Anthropic's CLI tool. Install it:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
   (Requires a Claude Pro or API subscription)

### Install the skill

2. Create the commands directory if it doesn't exist:
   ```
   mkdir -p ~/.claude/commands
   ```

3. Copy the prompt below and save it as `resume-builder.md` in that directory:
   ```
   ~/.claude/commands/resume-builder.md
   ```

### Run it

4. Open a terminal and start Claude Code:
   ```
   claude
   ```

5. Run the skill:
   ```
   /resume-builder
   ```

6. Follow the coach. It'll walk you through everything.

**Optional:** If you already have a resume file, pass it as an argument:
```
/resume-builder ~/path/to/your-resume.pdf
```

### Tips

- **Don't rush the overview.** It takes 5-10 minutes and changes how you think about resumes forever.
- **Have 3-5 job postings ready** for the JD analysis phase. Find real postings for roles you'd actually want.
- **You write, the coach sharpens.** It won't write your resume for you — it'll teach you to write one that works.
- **One conversation, one resume.** The full process takes 1-3 hours depending on your experience level.
