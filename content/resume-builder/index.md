---
name: Resume Builder
description: Interactive resume coach that teaches WHY and guides you through building a targeted resume.
category: skill
---

## The problem

You send 50 applications with the same resume and hear nothing back. A single job posting gets **200-700+ applicants**. ~75% get auto-filtered by software before a human ever sees them. Recruiters spend **5-7 seconds** on the ones that survive. Out of 300 applicants, maybe **10-20** actually reach the hiring manager.

Most people build resumes from memory — what they're proud of, a nice template, one version for every job. That's how you end up in the 280 that get filtered out.

## The skill

An interactive coaching session that teaches you the *system* behind resumes that get callbacks. Based on a paid course by a recruiter with 20+ years of experience (including Amazon, where he searched a 1M+ resume database).

It doesn't write your resume for you. It teaches you why resumes work the way they do, then coaches you through building yours — so you can customize for any job in 15 minutes, for the rest of your career.

By the end you'll have:
- A parent resume built from real job market data
- A bullet point bank organized by competency
- The knowledge to customize for any role fast
- A system, not a document

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
