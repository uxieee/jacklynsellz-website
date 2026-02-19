# JacklynSellz GHL System — Design Exploration

*Date: 2026-02-19*

## Context

Building a GHL-based affiliate network system on a fresh account. Jackie is the public face; experienced operator mentors behind the scenes. Primary channels: Facebook groups/Messenger, Telegram, email. Immediate goal: organize contacts and recruit affiliates for 713.

---

## Approach 1: **Lean MVP** ⭐ Recommended

Build only what's needed to start capturing and organizing contacts TODAY.

**What gets built:**
- ✅ Affiliate Pipeline (7 stages from spec)
- ✅ Basic contact capture form (name, email, phone, platform, niche)
- ✅ Auto-tagging (Affiliate vs Advertiser)
- ✅ Welcome email automation per type
- ✅ Manual stage-move triggers (Jackie controls the pace)
- ❌ Advertiser Pipeline (deferred — affiliates are priority)
- ❌ Partner Opportunities Pipeline (deferred)
- ❌ Complex multi-step nurture sequences (deferred)

**Pros:** Fast to deliver, low complexity, Jackie learns GHL gradually
**Cons:** No advertiser flow yet, limited automation
**Timeline:** 1-2 days
**Best for:** Getting Jackie active immediately

---

## Approach 2: **Full Spec Build**

Build everything in the PDF spec — all three pipelines, automations, and landing page.

**What gets built:**
- ✅ Affiliate Pipeline (7 stages)
- ✅ Advertiser Pipeline (7 stages)
- ✅ Partner Opportunities Pipeline (6 stages)
- ✅ Contact capture forms with segmentation
- ✅ Welcome + follow-up automations for each pipeline
- ✅ Stage-transition email triggers
- ✅ Stale contact re-engagement workflows

**Pros:** Complete system from day one, no rework later
**Cons:** Takes longer, Jackie may not use all features immediately, higher risk of over-building
**Timeline:** 3-5 days
**Best for:** If Jackie is ready to work all three pipelines simultaneously

---

## Approach 3: **Hybrid — Phased Rollout**

Build the full Affiliate Pipeline with rich automation, stub the other two pipelines for later.

**What gets built:**
- ✅ Affiliate Pipeline — FULL (7 stages + automations + nurture sequences)
- ✅ Advertiser Pipeline — STRUCTURE ONLY (stages created, no automations)
- ✅ Partner Pipeline — STRUCTURE ONLY
- ✅ Contact segmentation and tagging
- ✅ Welcome + vetting workflow for affiliates
- ✅ FB Messenger integration setup (if available)
- ⏳ Advertiser automations (Phase 2)
- ⏳ Partner automations (Phase 3)

**Pros:** Affiliate flow is production-ready, other pipelines are ready to activate when needed
**Cons:** Slightly more upfront work than Approach 1
**Timeline:** 2-3 days
**Best for:** Balanced — affiliate-first but future-ready

---

## Recommendation

**Approach 1 (Lean MVP)** given the $150 budget, "need it right away" timeline, and the fact that Jackie is just starting to network. She needs a system to capture contacts NOW, not a fully automated machine. The Advertiser and Partner pipelines can be added once the affiliate base has traction.

### Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Primary pipeline** | Affiliate only (for now) | Email says affiliates are the immediate priority |
| **Automation depth** | Welcome email + manual vetting | Jackie needs to learn the space; over-automation too early removes her personal touch |
| **Contact source** | Manual entry + form | Jackie is sourcing from FB/Telegram conversations — she'll manually add or share a form link |
| **Segmentation** | Tag-based (Affiliate / Advertiser / Partner) | Simple, flexible, can add custom fields later |
| **Stage transitions** | Manual (Jackie drags contacts) | Keeps her in control while learning |

---

## Pipeline Design: Affiliate Pipeline

```
New Contact → Vetting → Qualified → Approved → Active → Scaling → VIP
```

| Stage | Trigger | Action |
|-------|---------|--------|
| **New Contact** | Form submission or manual add | Auto-send welcome email, tag as "Affiliate" |
| **Vetting** | Jackie moves manually | Internal task: review their niche, experience, platforms |
| **Qualified** | Jackie moves after vetting | Send "next steps" email with expectations |
| **Approved** | Jackie approves | Send onboarding info, add to active affiliate list |
| **Active** | Partner is running traffic | Track performance, periodic check-in emails |
| **Scaling** | High performer | Personal outreach from Jackie, VIP treatment |
| **VIP** | Top-tier partner | Priority access, exclusive offers, direct line to Jackie |

---

## Custom Fields Needed

| Field | Type | Purpose |
|-------|------|---------|
| Contact Type | Dropdown: Affiliate / Advertiser / Partner | Segmentation |
| Platform | Dropdown: Facebook / Telegram / Email / Other | Where Jackie found them |
| Niche | Text | What vertical they work in |
| Experience Level | Dropdown: Beginner / Intermediate / Expert | Vetting criteria |
| Notes | Text Area | Jackie's personal notes from conversations |
| Source Group | Text | Which FB group or Telegram channel |

---

## Automations Needed

### 1. New Affiliate Welcome
- **Trigger:** Contact enters "New Contact" stage in Affiliate Pipeline
- **Actions:**
  - Wait 2 min
  - Send welcome email (introduces Jackie, sets expectations)
  - Internal notification to Jackie (email or Slack)

### 2. Qualified Notification
- **Trigger:** Contact moved to "Qualified" stage
- **Actions:**
  - Send email: "You've been qualified — here's what's next"
  - Create task for Jackie to follow up within 24h

### 3. Stale Contact Reminder
- **Trigger:** Contact sits in "Vetting" or "New Contact" for 7+ days
- **Actions:**
  - Internal notification to Jackie: "Don't forget about [Name]"

---

## What's NOT Included (Phase 2+)

- Advertiser Pipeline automations
- Partner Opportunities Pipeline automations
- Multi-step email nurture sequences
- Landing page (Step 8 in our plan)
- FB Messenger GHL integration
- Reporting dashboards
