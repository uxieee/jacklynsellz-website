# JacklynSellz — Full Pipeline & Referral Program Design

*Using: `referral-program` skill | Date: 2026-02-19*

---

## 1. Affiliate Pipeline

```
New Contact → Vetting → Qualified → Approved → Active → Scaling → VIP
```

### Stage Details

| Stage | Entry Trigger | Exit Criteria | Automation |
|-------|--------------|---------------|------------|
| **New Contact** | Form submission, manual add, or FB import | Jackie reviews within 48h | Welcome email, internal alert, auto-tag "Affiliate" |
| **Vetting** | Jackie moves from New Contact | Niche verified, experience confirmed | Vetting checklist task created for Jackie |
| **Qualified** | Passes vetting criteria | Jackie decides to approve or reject | "You're Qualified" email with next steps |
| **Approved** | Jackie approves | Onboarding materials sent | Onboarding email sequence (3 emails over 5 days) |
| **Active** | Affiliate is running traffic/promoting | Ongoing performance | Monthly check-in email, performance tracking |
| **Scaling** | 5+ successful conversions driven, OR consistently active for 60+ days | Jackie's discretion — VIP potential | Personal email/DM from Jackie, priority offer access, first look at new advertisers |
| **VIP** | Top 10% performers, $25K+ monthly volume, trusted long-term partner | Lifetime relationship | Exclusive offers not available to regular affiliates, direct Jackie contact, potential rev-share upgrades |

### Vetting Criteria
- What niche/vertical do they work in?
- What platforms do they promote on? (FB, Google, email, native, etc.)
- How long have they been in affiliate marketing?
- Do they have references or a portfolio?
- Were they referred by someone in the network? (trust signal)

### Affiliate Custom Fields
| Field | Type | Options |
|-------|------|---------|
| Contact Type | Dropdown | Affiliate / Advertiser |

> **⚠️ Design Note:** "Partner" has been removed as a contact type. The Partner Opportunities Pipeline tracks **deals** (GHL Opportunities), not people. It is an internal tool Jackie uses to broker matches between affiliates and advertisers. People who act as both affiliates and advertisers are added manually to both pipelines.
| Affiliate Niche | Text | (free text) |
| Experience Level | Dropdown | Beginner / Intermediate / Advanced / Expert |
| Traffic Sources | Multi-select | Facebook Ads / Google Ads / Email / Native / SEO / Social / Other |
| Monthly Volume | Dropdown | Under $1K / $1K-$5K / $5K-$25K / $25K-$100K / $100K+ |
| Referred By | Text | (who introduced them) |
| Source Group | Text | (which FB group or Telegram channel) |
| Notes | Text Area | Jackie's personal notes |
| Vetting Status | Dropdown | Pending / Qualified / Approved / Rejected / On Hold |

---

## 2. Advertiser Pipeline

```
New Prospect → Intro → Review → Negotiation → Live → Scaling → Strategic
```

### Stage Details

| Stage | Entry Trigger | Exit Criteria | Automation |
|-------|--------------|---------------|------------|
| **New Prospect** | Inbound form, manual add, or referral | Jackie reviews within 48h | Welcome email, internal alert, auto-tag "Advertiser" |
| **Intro** | Jackie initiates conversation | Mutual interest confirmed | Intro email with JacklynSellz capabilities |
| **Review** | Advertiser shares offer details | Jackie reviews offer quality/fit | Task: Review offer terms, payout, landing pages |
| **Negotiation** | Offer looks good, terms being discussed | Terms agreed | Follow-up email: "Let's finalize terms" |
| **Live** | Deal signed, offer is live | Affiliates assigned | Notification to Jackie, offer shared with relevant affiliates |
| **Scaling** | Campaign driving consistent results — affiliates are active and converting | Jackie's discretion — Strategic potential | Monthly performance check-in, suggest optimizations (LP, payout, creative) |
| **Strategic** | Multi-campaign partner, long-term relationship, high priority | Lifetime relationship | Preferred advertiser status, first access to new affiliate talent, deeper partnership discussions |

### Advertiser Contact Fields (on the Contact record)
| Field | Type | Options | Why Contact |
|-------|------|---------|-------------|
| Company Name | Text | — | Stays the same across deals |

### Advertiser Opportunity Fields (on each Opportunity in the pipeline)
| Field | Type | Options | Why Opportunity |
|-------|------|---------|----------------|
| Offer Type | Dropdown | CPA / CPL / CPS / RevShare / Flat Fee | Changes per deal |
| Offer Vertical | Text | (e.g., Finance, Health, E-commerce) | Changes per offer |
| Payout Range | Text | (e.g., "$5-$20 per lead") | Changes per deal |
| GEO Targets | Text | (e.g., US, UK, CA) | Changes per deal |
| Exclusivity | Dropdown | Exclusive / Non-Exclusive | Per-deal terms |
| Contract Status | Dropdown | No Contract / In Negotiation / Signed | Per-deal state |
| Landing Page URL | Text | — | Per-offer LP |
| Deal Notes | Text Area | — | Per-deal notes |

---

## 3. Partner Opportunities Pipeline

```
Identified → Matching → Testing → Live → Scaling → Archived
```

### Stage Details

| Stage | Entry Trigger | Exit Criteria | Automation |
|-------|--------------|---------------|------------|
| **Identified** | Jackie spots an opportunity | Potential partner/deal identified | Internal alert: "New opportunity spotted" |
| **Matching** | Evaluating fit between affiliates & advertisers | Match found | Task: Identify best affiliate-advertiser pairing |
| **Testing** | Trial run initiated | Results measured | Reminder: Check results after 7 days |
| **Live** | Test successful, partnership formalized | — | Notification: "Partnership is live" |
| **Scaling** | Partnership delivering results | — | Monthly review reminder |
| **Archived** | Partnership ended or paused | — | Archive note email to Jackie |

### Partner Opportunity Fields (on each Opportunity in the pipeline — no contact fields needed)
| Field | Type | Options | Why Opportunity |
|-------|------|---------|----------------|
| Opportunity Name | Text | — | Describes this specific deal |
| Affiliate(s) Involved | Text | — | Specific to this deal |
| Advertiser Involved | Text | — | Specific to this deal |
| Deal Type | Dropdown | Media Buy / Lead Gen / Content / JV / Other | Varies per deal |
| Estimated Value | Text | — | Varies per deal |
| Start Date | Date | — | Per-deal timing |
| Status Notes | Text Area | — | Per-deal notes |

---

## 4. Incentive & Referral Structure

### For Affiliates (Referral Loop)
Jackie's network grows faster if existing affiliates bring in new ones.

**Referral incentive (future — when monetization starts):**
- Affiliate refers another affiliate → referrer gets bonus on first campaign payout
- Tiered: 1-2 referrals = Bronze, 3-5 = Silver, 6+ = Gold (priority access to offers)

**Current incentive (pre-monetization):**
- Priority access to best advertiser offers
- Featured in Jackie's network as a "trusted partner"
- Direct access to Jackie for support

### For Advertisers
- Advertisers who refer other advertisers → priority matching with top affiliates
- Volume discounts on network fees (when agency model launches)

### Fraud Prevention
- Manual vetting by Jackie (no auto-approve)
- Referral source tracked in custom fields
- Suspicious patterns flagged (multiple contacts from same IP, duplicate info)
- "Rejected" vetting status prevents pipeline re-entry

---

## 5. Tags System

| Tag | Applied When | Purpose |
|-----|-------------|---------|
| `affiliate` | Contact enters Affiliate Pipeline | Segmentation |
| `advertiser` | Contact enters Advertiser Pipeline | Segmentation |
| `partner` | Contact enters Partner Pipeline | Segmentation |
| `source-facebook` | Contact sourced from FB | Channel tracking |
| `source-telegram` | Contact sourced from Telegram | Channel tracking |
| `source-email` | Contact sourced from email | Channel tracking |
| `source-referral` | Contact was referred | Trust signal |
| `vip` | Contact reaches VIP/Strategic stage | Priority flag |
| `stale` | No activity for 14+ days | Re-engagement trigger |
| `713-affiliate` | Affiliate recruited for 713 | Campaign tracking |

---

## 6. Automation Summary (All Pipelines)

| # | Automation Name | Pipeline | Trigger | Actions |
|---|----------------|----------|---------|---------|
| 1 | Affiliate Welcome | Affiliate | Enters "New Contact" | Welcome email + internal alert |
| 2 | Affiliate Vetting Task | Affiliate | Enters "Vetting" | Create task for Jackie |
| 3 | Affiliate Qualified | Affiliate | Enters "Qualified" | "Next steps" email |
| 4 | Affiliate Onboarding | Affiliate | Enters "Approved" | 3-email onboarding sequence |
| 5 | Affiliate Check-in | Affiliate | Enters "Active" + 30 days | Monthly check-in email |
| 6 | Advertiser Welcome | Advertiser | Enters "New Prospect" | Welcome email + internal alert |
| 7 | Advertiser Intro | Advertiser | Enters "Intro" | Intro capabilities email |
| 8 | Advertiser Follow-up | Advertiser | Enters "Negotiation" | "Finalize terms" email |
| 9 | Advertiser Live | Advertiser | Enters "Live" | Notification to Jackie |
| 10 | Partner Identified | Partner | Enters "Identified" | Internal alert |
| 11 | Partner Test Reminder | Partner | Enters "Testing" + 7 days | "Check results" reminder |
| 12 | Stale Contact Alert | All | No stage change for 14 days | Internal reminder to Jackie |
| 13 | Re-engagement | All | Tagged "stale" for 7 days | Re-engagement email to contact |
