# Data Model Upgrade Plan: Custom Objects & Associations

> This document outlines when and how to migrate from the current flat contact model to GHL's Custom Objects & Associations for better relational data management.

---

## Current Model (Phase 1 — Launch)

Everything lives on a **Contact** record with custom fields:

```
┌─────────────────────────────────┐
│  CONTACT                        │
│                                 │
│  Contact Type: Affiliate        │
│  Affiliate Niche: Health        │
│  Traffic Sources: FB Ads        │
│  Monthly Volume: $5K-$25K       │
│  ... (all fields on one record) │
└─────────────────────────────────┘
```

**Pros:** Simple, fast to build, easy for one operator
**Cons:** No relationships between records, can't be both affiliate AND advertiser, deals stored as contacts

---

## When to Upgrade (Triggers)

Upgrade when **any** of these are true:

| Signal | Threshold |
|--------|-----------|
| Active affiliates | 50+ |
| Active advertisers | 10+ |
| Jackie can't track deals mentally | Happening regularly |
| One person is both affiliate & advertiser | 3+ cases |
| Need reporting on "which affiliates work with which advertisers" | First time |

---

## Target Model (Phase 2 — Scale)

### Entity: Contact
**What:** People (affiliates, advertisers, Jackie's team)
**Changes:** Allow multi-select for Contact Type, remove deal-specific fields

| Field | Type | Notes |
|-------|------|-------|
| Contact Type | Multi-Select | `Affiliate`, `Advertiser`, `Both` |
| Platform Found On | Dropdown | Unchanged |
| Referred By | Text | Unchanged |
| Source Group | Text | Unchanged |
| Notes | Multi-Line | Unchanged |

### Entity: Custom Object — "Offer"
**What:** An advertiser's product/service being promoted
**Created in:** Settings → Custom Objects → Create

| Field | Type | Notes |
|-------|------|-------|
| Offer Name | Text | e.g. "HealthMax CPA Offer" |
| Offer Type | Dropdown | CPA, CPL, CPS, RevShare, Flat Fee |
| Vertical | Text | e.g. Health, Finance, eComm |
| Payout | Currency | Per-action payout |
| GEO Targets | Text | Countries/regions |
| Landing Page URL | URL | Offer's LP |
| Compliance Notes | Multi-Line | Any restrictions |
| Status | Dropdown | Draft, Active, Paused, Ended |

### Entity: Custom Object — "Deal"
**What:** A specific affiliate ↔ advertiser partnership on an offer
**Created in:** Settings → Custom Objects → Create

| Field | Type | Notes |
|-------|------|-------|
| Deal Name | Text | Auto: "{Affiliate} × {Offer}" |
| Deal Type | Dropdown | Lead Gen, Media Buy, Content, JV |
| Estimated Monthly Value | Currency | Expected revenue |
| Start Date | Date | When the deal went live |
| Status | Dropdown | Testing, Live, Scaling, Paused, Ended |
| Performance Notes | Multi-Line | Tracking notes |

### Associations (Relationships)

| From | To | Relationship | Example |
|------|----|-------------|---------|
| Contact (Advertiser) | Offer | "owns" | HealthCorp → HealthMax CPA Offer |
| Contact (Affiliate) | Deal | "runs" | John → "John × HealthMax" |
| Offer | Deal | "has" | HealthMax CPA → "John × HealthMax" |
| Contact (Affiliate) | Contact (Advertiser) | "works with" | John ↔ HealthCorp |

### Visual Data Model

```
┌──────────────┐        ┌──────────────┐
│   CONTACT    │        │   CONTACT    │
│  (Affiliate) │        │ (Advertiser) │
│              │        │              │
│  Niche       │        │  Company     │
│  Traffic     │        │              │
│  Volume      │        │              │
└──────┬───────┘        └──────┬───────┘
       │                       │
       │    ┌──────────┐       │
       │    │  OFFER   │       │
       │    │          │◄──────┘ "owns"
       │    │  Type    │
       │    │  Payout  │
       │    │  GEOs    │
       │    └────┬─────┘
       │         │
       │    ┌────▼─────┐
       └───►│   DEAL   │
 "runs"     │          │
            │  Value   │
            │  Status  │
            │  Notes   │
            └──────────┘
```

---

## Migration Steps

### Step 1: Create Custom Objects (~20 min)
1. Go to **Settings → Custom Objects**
2. Create **Offer** object with all fields listed above
3. Create **Deal** object with all fields listed above

### Step 2: Set Up Associations (~10 min)
1. Go to **Settings → Associations**
2. Create: Contact ↔ Offer (label: "owns / owned by")
3. Create: Contact ↔ Deal (label: "runs / run by")
4. Create: Offer ↔ Deal (label: "has / part of")
5. Create: Contact ↔ Contact (label: "works with")

### Step 3: Migrate Existing Data (~30 min per 50 contacts)
For each existing advertiser contact:
1. Create an **Offer** record from their custom fields
2. Link the Offer to the advertiser contact via association
3. If there's an active deal, create a **Deal** record
4. Link the Deal to the appropriate affiliate + offer

### Step 4: Update Pipelines
- **Advertiser Pipeline:** Stays as-is (tracks the advertiser relationship)
- **Partner Opportunities Pipeline:** Replace with the **Deal** custom object
  - Deals get their own status field (Testing → Live → Scaling)
  - No longer need "opportunity" contacts

### Step 5: Update Workflows
- Workflows that reference partner opportunity contacts → update triggers to use Deal object
- Add workflows that fire on Deal status changes

### Step 6: Clean Up
- Remove redundant custom fields from contacts (company name, offer type, etc. — now on Offer object)
- Archive the Partner Opportunities pipeline (replaced by Deals)

---

## Pipeline Changes Summary

| Current | After Upgrade |
|---------|--------------|
| Affiliate Pipeline (contact-based) | **No change** |
| Advertiser Pipeline (contact-based) | **No change** |
| Partner Opportunities Pipeline (contact-based) | **Replaced by Deal custom object** |

---

## Don't Upgrade Until You Need It

> The flat model is fine for launch. Custom Objects add power but also complexity. Only migrate when the triggers above are hit. When you do, this document gives you the exact blueprint.
