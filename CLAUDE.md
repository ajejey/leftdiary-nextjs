# leftdiary-nextjs — Writing Philosophy

This file is read automatically by Claude Code at the start of every session. It defines how articles on this site are written. Apply these principles to every article you create or edit.

---

## Core Commitments

### 1. Evidence is the subject. The researcher is not.

State findings directly. Bracket the source.

**Never:**
> "David Graeber found that no documented barter economy has ever been observed."
> "The anthropologist spent decades studying gift economies before concluding..."

**Always:**
> "No documented example of a barter economy predating money has ever been found in the anthropological record. (Graeber, *Debt: The First 5,000 Years*, 2011)"

Remove all credential-building: titles ("the French economist"), institutional affiliations, years spent, famous-readers lists. Remove all section headers named after theorists ("What David Graeber Actually Found" → "What the Anthropological Record Shows").

**Exception — primary source documents:** A Bank of England policy paper, the Powell Memo, Lugard's *The Dual Mandate*, a CEO's public statement — these are persons speaking in their own voice about what they know or did. Block-quote those. Do not block-quote analysts, theorists, or academics; integrate their findings as prose with bracket citations.

**Citation format:**
```tsx
(Author,{' '}
<a href="URL" target="_blank" rel="noopener noreferrer"
  className="underline decoration-gray-400 hover:decoration-gray-600">
  <em>Title</em>
</a>
, Year)
```
Wrap in `<span className="text-sm text-gray-400 not-italic">`. Inline in brackets. Never footnotes, never endnotes.

---

### 2. Name the mechanism. Never the -ism.

**Never:** "Capitalism required a disciplined workforce." "Colonialism imposed..."

**Always:** who, what law, what institution, what year, whose interest was served.

The -ism forecloses inquiry. The mechanism is the argument. If you can't name the mechanism concretely, you haven't found it yet.

---

### 3. Apply the rigor all the way down.

This is the hardest rule and the most important.

When you dismantle a myth, you will reach for a replacement concept. Apply exactly the same interrogation to that replacement concept that you applied to the myth.

If you've just shown that "government-as-household" is a constructed story, and you then say "the real constraint is inflation" — stop. Ask:
- Who defined inflation as the binding constraint?
- By what institutional settlement, and when?
- Whose assets does inflation-targeting protect?
- Whose wages does it suppress?
- Who benefits from treating it as a natural ceiling rather than a political choice?

Technical-sounding economic concepts — *inflation, growth, efficiency, productivity, the market, the natural rate of unemployment* — feel like physics. They are politics. The technical register is how they evade interrogation. Apply the same rigor to them that you apply to anything else.

**The failure mode:** dismantle one myth, then quietly reinstall a new unquestioned authority using the same rhetorical move you just criticized.

---

### 4. Endings open up what else breaks down. Not what comes next.

The Act 4 callout box does not:
- Console the reader ("even so, there is hope...")
- Point to the next article ("the next piece takes up...")
- Summarize the series so far ("we have now established across six articles...")

It names what becomes unstable once you accept the current article's argument. Not what the reader should feel — what else, that seemed settled, is now visibly wobbling from this new vantage point.

That wobbling is the generative mechanism. Each article's implications reveal the next question. The reader doesn't need to know that. They just need to feel the ground shift.

**Wrong:**
> "This Is the First Article in an Ongoing Series"

**Wrong:**
> "And Because This Is True, Something Else Collapses — The next article takes up who owns the media."

**Right:**
> "If government spending is not constrained by revenue, then every politician who says 'we can't afford it' is making a choice, not stating a fact. The question is whose choice, made under what pressures, and whose interests it consistently serves."

---

### 5. No meta-references to the series.

No: "as we established in the previous article"
No: "the next piece takes up this question"
No: "this is the third in a series"
No: "that's the article that follows from this one"

Each article stands alone as an argument. Links are anchored to factual claims, not to the series relationship.

**Wrong:** "as we saw in the colonial taxation piece"
**Right:** "The English Enclosure Acts worked the same way — [link anchor on the factual claim]"

---

## Technical Stack

- **Framework:** Next.js 15 App Router, Server Components
- **Branch for active development:** `claude/article-clusters-keyword-strategy-stqtc6`

### Article Component System

```tsx
import {
  ArticleLayout,
  ArticleHeader,
  ArticleTOC,
  ArticleSection,
  ArticleFAQ,
  ArticleFurtherReading,
  ArticleCallout,
  ArticleSources,
  P,
  H2,
  H3,
  Blockquote,
} from '@/components/article'
```

Use `ArticleCallout` for Act 4 endings. Use `Blockquote` only for primary source documents (see rule 1).

### Citation Component Pattern

```tsx
<P>
  No documented example of a barter economy predating money has ever been found.{' '}
  <span className="text-sm text-gray-400 not-italic">
    (Graeber,{' '}
    <a
      href="https://en.wikipedia.org/wiki/Debt:_The_First_5000_Years"
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-gray-400 hover:decoration-gray-600"
    >
      <em>Debt: The First 5,000 Years</em>
    </a>
    , 2011)
  </span>
</P>
```

---

## Scope

- **Fix these:** all articles under `app/posts/` in the economics/politics cluster
- **Defer for now:** book summaries (`federici-caliban-witch-capitalism`, `marx-engels-false-consciousness`, `graeber-bullshit-jobs-summary`, `summary-of-bullshit-jobs-david-graeber`, `pedagogy-of-the-oppressed`, `feminism-is-for-everybody-bell-hooks`, `bell-hooks-essential-reads`, `Summary-Requiem-for-the-American-Dream`) and book lists (`beginner-leftist-books`, `beginner-feminist-books`, `10-must-read-noam-chomsky-books`, `beginner-leftist-novels`) — these follow a different format and will be addressed separately.

---

## Git Config (required before committing in this repo)

```bash
git config user.email noreply@anthropic.com
git config user.name Claude
```
