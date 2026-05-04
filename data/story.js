// OAA Story Data
// Defines narrative Acts with prose summaries and date ranges.
// The story.html page auto-pulls anchor articles from articles.js
// using startDate / endDate to populate illustrated chapters.
//
// MAINTENANCE GUIDE:
//   — Edit `summary` prose when an Act opens, evolves, or closes.
//   — Set `status: "closed"` and fill `endDate` when an Act concludes.
//   — Add a new Act object when a new Act begins.
//   — Anchor articles auto-appear as chapters — no manual update needed.
//   — `startDate` / `endDate` use YYYY-MM-DD; `endDate: null` = ongoing.

window.oaStory = {

  title: "The Story So Far",
  subtitle: "A narrative account of ongoing events at the Office of Alternate Academia, arranged by institutional arc.",

  acts: [

    // ── PRE-SEASON (background context) ──────────────────────────────────────
    {
      id: "pre-season",
      number: null,
      label: "Previously",
      title: "Before the Letter",
      period: "January – March 2026",
      status: "closed",
      startDate: "2026-01-01",
      endDate:   "2026-03-31",
      summary: `<p>Before the accreditation review, the Office of Alternate Academia operated in a state of institutional equilibrium — which is to say, nothing was measurably wrong, because nothing was being measured. The Rector issued periodic decrees of visionary scope and limited specificity. Professor Calculon refined methodologies. Dean Bugsy maintained the filing system. Reviewer #2 rejected submissions. Clara Quark translated.</p>
<p>In January, the Rector published a paper on the Impactlessness Index, establishing a formal metric for the absence of measurable outcomes. The OAA scored 94.7 out of a possible 94.7. Reviewer #2 did not respond. This was interpreted as approval.</p>`
    },

    // ── ACT I ─────────────────────────────────────────────────────────────────
    {
      id: "act-1",
      number: "I",
      label: "Act I",
      title: "The Response",
      period: "April – June 2026",
      status: "ongoing",
      startDate: "2026-04-01",
      endDate:   null,
      summary: `<p>The story begins with a letter. The Global Academic Standards Consortium (GASC) initiated a comprehensive accreditation review of the Office of Alternate Academia — an event described by the institution's communications office as "an opportunity for structured external engagement with our processes." The Office responded with characteristic thoroughness: a 212-page Institutional Self-Assessment Report (ISAR), submitted eleven days ahead of the deadline, containing 47 graphs, no named research authors, and no use of the word "concern" — except in the glossary, where it is defined as "area of future opportunity."</p>
<p>To manage the review, the Emergency Standards Response Task Force (ESRTF) was convened. Professor Calculon presented a compliance gap analysis across 47 slides. The gap measured 94 units. The axis was unlabeled. One attendee left before slide ten. Max Afterparty, who had signed what he believed to be a coffee order in February, was confirmed as the non-voting student representative. He asked whether the gap was the whole thing. The question was recorded in the minutes. It was not answered.</p>
<p>The ISAR's research chapters had no authors. This was resolved by appointing Clara Quark — a student — as Student Research Volunteer Coordinator (Acting), via Post-it note. The position carries no compensation, no formal description, and does not appear in the institutional registry. Clara began data collection immediately. The institutional database required faculty credentials she did not have. The research laptop had been on administrative loan for fourteen months. She borrowed Max's. Professor Calculon arrived in person, sat in silence for forty-seven minutes, and announced that the research question required refinement. The database would need to be rebuilt from scratch. Clara opened a new spreadsheet and began writing column headers. Professor Calculon expressed satisfaction.</p>
<p>The research project was renamed the OAA Research Excellence Initiative (OREI) and assigned a new central question. Then another. The column headers in the working dataset did not change across any version. Dr. Felicity Cashburn arrived in the third week with a color-coded binder and a fundability matrix, and recommended a fourth refinement before June 15 to introduce what she called "productive ambiguity." In a memo she asked that this document not be shared with the student coordinator. The research question now has a horizon instead of a ceiling. The deadline for the first progress report has not changed.</p>
<p>Oliver Grant added "Co-Investigator, OREI" to his LinkedIn profile. He had attended zero meetings. Max Afterparty discovered, at 2:47 p.m. on a Tuesday, that Form 7.4.2-B — required for OREI access — needed his countersignature, and that he had been the ESRTF's non-voting student representative since January. The administrative office closed at noon. Meanwhile, the Communications Office issued a directive requiring all OREI-related external communications to be cleared through a new form — a form accessible only after submitting the form it was designed to authorize. No communications had been submitted. Prof. Victor Magnus sent a four-page memo documenting that the institution faced an identical situation in 1994. The memo has not been read. In 1994, he also sent a memo. That one was not read either.</p>`
    },

    // ── ACT II ────────────────────────────────────────────────────────────────
    {
      id: "act-2",
      number: "II",
      label: "Act II",
      title: "The Complications",
      period: "July – September 2026",
      status: "upcoming",
      startDate: "2026-07-01",
      endDate:   "2026-09-30",
      summary: ``
    },

    // ── ACT III ───────────────────────────────────────────────────────────────
    {
      id: "act-3",
      number: "III",
      label: "Act III",
      title: "The Resolution",
      period: "October – December 2026",
      status: "upcoming",
      startDate: "2026-10-01",
      endDate:   "2026-12-31",
      summary: ``
    }

  ]
};
