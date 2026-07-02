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

### 6. Write for the reader, not the record.

This is the hardest to describe and the most important to feel.

The articles are not journalism. They are not academic papers made accessible. They are essays that start where the reader already is — with their own confusion, their own half-formed suspicion that something is off — and work through that confusion with them in real time.

**What this looks like in practice:**

Open with the reader's experience, not with a date or a historical claim. Not "On April 26, 2009, David Cameron gave a speech." Instead: something the reader has already lived through that doesn't quite add up. A puzzle they've carried without knowing what to call it.

Use "you" constantly. The reader is not a spectator. They are being spoken to directly, pulled into the reasoning as a participant.

Think out loud. The essay doesn't present a finished argument — it follows a question. "Wait." "But here's the problem." "I'm running ahead of myself." The reader watches you work something out, and they work it out alongside you. This is a completely different relationship than being lectured.

Build from the familiar. Start with the elevator button. The friend who owes you one. The thing the reader has already experienced without knowing it had a name. Then show them: that thing you already do is the concept. You already knew this. You just didn't know what to call it.

Validate the reader's instinct first. "The concept of money looks very weird, don't you think?" That question tells the reader: your sense that something is off is correct. We are going to pursue that.

Name the thing that's being hidden — and name it plainly. Not "there are power imbalances." *Force.* Not "there are structural inequalities." *Someone made a specific law that converted a specific commons into private property on a specific date.*

Build toward a question, not a conclusion. The tension that drives the reader forward is not "what is the answer" — it is "how can this be true." The article earns the right to name the mechanism by making the reader feel the impossibility of the official explanation first.

**The reference model for this voice:**

Read the Medium article "What is Money? A naive person's guide to money" (by Ajey Nagarkatti, January 2025) before writing any new article. That is the register to aim for. Not the citations, not the structure — the relationship to the reader. The sense that someone is working something out with you, not presenting findings to you.

---

### 7. The reader is American. The examples are American.

Over 80% of traffic comes from the US. When you name an example, make it American. When you name a reader, they live in the United States. When you reach for a number, reach for the US number — which is almost always larger and more dramatic than the European equivalent.

**The US examples are bigger:**

- Not "£350 billion in one week in March 2020" — the CARES Act was $2.2 trillion, signed 16 days after the WHO declared a pandemic. Total US COVID fiscal spending: approximately $5–6 trillion over one year.
- Not "the 2010 Greek bailout" — the Federal Reserve's total emergency commitments during 2008–2010 reached $7.77 trillion (Bloomberg, November 2011). TARP alone was $700 billion, authorized within days.
- Not "George Osborne" — Paul Ryan, Mitch McConnell, the Budget Control Act of 2011, sequestration.
- Not "the NHS" — Medicare, Medicaid, the VA, Social Security. The things Americans are told "we can't afford."

The European and global examples remain available and should be used where they are the best evidence (the Greek bailout creditor story is cleaner than any US equivalent). But the hook, the reader's frame of reference, and the "you've been told" moment should be American.

**The US contrast that drives the austerity argument:**

"We can't afford Medicare for All" ($3.2 trillion per year, critics say).
The Fed committed $7.77 trillion to rescuing banks in 2008.
The US found $5–6 trillion for COVID in twelve months.
The US spends $800+ billion per year on the military without a deficit conversation.

The deficit concern is applied selectively. The article's job is to make that selectivity visible and to name whose interests it consistently serves.

---

## The Argument Arc (What All These Articles Are Building)

Every article in the economics/politics cluster is a piece of one argument. A new session should understand this arc before writing or editing anything.

**The through-line:**

Money is not a neutral medium of exchange that markets naturally produced. It is a specific instrument of control, created and maintained by specific institutions through specific legal mechanisms, that determines who can access what. The market is not a natural thing that exists and then government interferes with. The market is built, expanded, and enforced — one enclosure at a time.

**The articles, and what each one establishes:**

1. **Barter myth** — The story that money replaced barter is fiction. There is no anthropological record of barter economies. What actually existed was gift exchange and credit — webs of mutual obligation. Money as we know it appears with states and armies, not with traders.

2. **Banks** — Banks don't lend your deposits. They create new money at the moment of lending. The Bank of England confirmed this in plain language in 2014. Private banks decide how much money exists and what it gets created for. For forty years, the answer has been: land. Not wages. Not hospitals. Land.

3. **Colonial taxation** — The hut tax wasn't about revenue. It was about forcing people who had everything they needed into the colonial wage economy. You can only pay taxes in colonial currency. Colonial currency is only available by working for colonial employers. This is how free people were converted into a dependent labor force. Tax is not a universal law — it is a specific mechanism to manufacture dependency.

4. **Austerity** — The money always existed. The question is what it gets created for. When banks needed rescuing in 2008, the Fed committed $7.77 trillion. When COVID hit, $5–6 trillion appeared in months. When the question is healthcare, schools, or wages: "we can't afford it." Austerity is the mechanism that enforces this: it cuts public services (things that exist outside the market) and replaces them with private debt (things that go through banks, at interest). Each cut expands the territory where a bank stands between you and something you need.

5. **Enclosure** (the "how did everything come to cost money" article — not yet written) — It didn't happen all at once. It happened in hundreds of legal moves, each one converting something that existed as a commons — land, seeds, water, medicine, time, mutual aid, education — into private property or professional monopoly. The need didn't disappear. You now had to pay. The mechanism is always the same: commons existed → legal act enclosed it → people paid → dependency deepened.

6. **Ruling class / media** — Who made these decisions, and how does the story of how markets "naturally" work get reproduced without anyone noticing it's a story?

**What the austerity article's core argument is:**

Austerity doesn't cut money. Money can't be saved at the government level — it's created when spent and destroyed when taxed. What austerity does is replace one kind of money with another: public money (which doesn't charge interest, doesn't require creditworthiness, exists outside the market) with private money (bank loans, at interest, requiring you to be creditworthy). Student loan debt went from $100 billion in 1993 to $1.7 trillion in 2024 — not because Americans got irresponsible, but because public university funding was cut and the need didn't disappear. The commons was enclosed one budget cut at a time.

**The "oh" moment every article should build toward:**

Each article should have a specific mechanism that makes the reader say "oh — now I understand why this keeps happening, and why it always will unless something structural changes." Not a vague sense that things are bad. A specific, named, mechanical understanding of how a specific conversion of commons to private market happened, who did it, when, and whose interests it served.

- Barter myth: "oh — money was never neutral, it was always a state instrument"
- Banks: "oh — there is always money. The question is who it gets created for"
- Colonizers: "oh — tax isn't a universal law, it's a specific tool to manufacture dependency"
- Austerity: "oh — public spending is being converted to private debt, one budget cut at a time, and the banks profit from every step of that conversion"
- Enclosure: "oh — every thing that costs me money today that didn't cost money before can be traced to a specific law, a specific lobby, a specific date"

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
