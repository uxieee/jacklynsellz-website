# JacklynSellz — GHL Setup Guide (Step-by-Step)

*Using: `code-documentation` skill | Date: 2026-02-19*
*This guide walks through configuring everything in GoHighLevel.*

---

## Pre-Setup Checklist

- [ ] Fresh GHL account created
- [ ] Jackie's email connected (for sending)
- [ ] Phone number provisioned (for SMS)
- [ ] Jackie's FB profile: https://www.facebook.com/profile.php?id=61588113268466

---

## Part 1A: Contact Fields

**Location in GHL:** Settings → Custom Fields → **Contact**

> These fields describe **the person** — they persist across all deals/opportunities.

### General Fields
| Field Name | Field Key | Type | Options |
|-----------|-----------|------|---------|
| Contact Type | `contact_type` | Dropdown | Affiliate, Advertiser |
| Referred By | `referred_by` | Single Line Text | — |
| Source Group | `source_group` | Single Line Text | — |
| Notes | `notes` | Multi Line Text | — |

> **⚠️ Note:** "Partner" has been intentionally removed as a form option. The Partner Opportunities Pipeline tracks **deals** (Opportunities), not people. Jackie creates entries in that pipeline manually when she spots a partnership to broker. People who are both affiliates and advertisers should be added to both pipelines manually.



### Affiliate-Specific Fields
| Field Name | Field Key | Type | Options |
|-----------|-----------|------|---------|
| Affiliate Niche | `affiliate_niche` | Single Line Text | — |
| Experience Level | `experience_level` | Dropdown | Beginner, Intermediate, Advanced, Expert |
| Traffic Sources | `traffic_sources` | Multi Select | Facebook Ads, Google Ads, Email, Native, SEO, Social, Other |
| Monthly Volume | `monthly_volume` | Dropdown | Under $1K, $1K-$5K, $5K-$25K, $25K-$100K, $100K+ |
| Vetting Status | `vetting_status` | Dropdown | Pending, Qualified, Approved, Rejected, On Hold |

### Advertiser-Specific Fields
| Field Name | Field Key | Type | Options |
|-----------|-----------|------|---------|
| Company Name | `company_name` | Single Line Text | — |

---

## Part 1B: Opportunity Fields

**Location in GHL:** Settings → Custom Fields → **Opportunity**

> These fields describe **a specific deal** — each opportunity in the pipeline can have different values.

### Advertiser Deal Fields (used in Advertiser Pipeline)
| Field Name | Field Key | Type | Options |
|-----------|-----------|------|---------|
| Offer Type | `offer_type` | Dropdown | CPA, CPL, CPS, RevShare, Flat Fee |
| Offer Vertical | `offer_vertical` | Single Line Text | — |
| Payout Range | `payout_range` | Single Line Text | — |
| GEO Targets | `geo_targets` | Single Line Text | — |
| Exclusivity | `exclusivity` | Dropdown | Exclusive, Non-Exclusive |
| Contract Status | `contract_status` | Dropdown | No Contract, In Negotiation, Signed |
| Landing Page URL | `landing_page_url` | Single Line Text | — |
| Deal Notes | `deal_notes` | Multi Line Text | — |

### Partner Deal Fields (used in Partner Opportunities Pipeline)
| Field Name | Field Key | Type | Options |
|-----------|-----------|------|---------|
| Opportunity Name | `opportunity_name` | Single Line Text | — |
| Affiliates Involved | `affiliates_involved` | Single Line Text | — |
| Advertiser Involved | `advertiser_involved` | Single Line Text | — |
| Deal Type | `deal_type` | Dropdown | Media Buy, Lead Gen, Content, JV, Other |
| Estimated Value | `estimated_value` | Single Line Text | — |
| Start Date | `start_date` | Date | — |
| Status Notes | `status_notes` | Multi Line Text | — |

---

## Part 2: Tags

**Location in GHL:** Settings → Tags (or auto-created in workflows)

Create these tags:

| Tag | Color (suggested) |
|-----|-------------------|
| `affiliate` | Green |
| `advertiser` | Blue |
| `partner` | Purple |
| `source-facebook` | Light Blue |
| `source-telegram` | Dark Blue |
| `source-email` | Gray |
| `source-referral` | Gold |
| `vip` | Red |
| `stale` | Orange |
| `713-affiliate` | Teal |

---

## Part 3: Pipelines

**Location in GHL:** Opportunities → Pipelines → Create Pipeline

### Pipeline 1: Affiliate Pipeline

**Name:** Affiliate Pipeline

| Stage # | Stage Name | Order |
|---------|-----------|-------|
| 1 | New Contact | 1 |
| 2 | Vetting | 2 |
| 3 | Qualified | 3 |
| 4 | Approved | 4 |
| 5 | Active | 5 |
| 6 | Scaling | 6 |
| 7 | VIP | 7 |

### Pipeline 2: Advertiser Pipeline

**Name:** Advertiser Pipeline

| Stage # | Stage Name | Order |
|---------|-----------|-------|
| 1 | New Prospect | 1 |
| 2 | Intro | 2 |
| 3 | Review | 3 |
| 4 | Negotiation | 4 |
| 5 | Live | 5 |
| 6 | Scaling | 6 |
| 7 | Strategic | 7 |

### Pipeline 3: Partner Opportunities

**Name:** Partner Opportunities Pipeline

| Stage # | Stage Name | Order |
|---------|-----------|-------|
| 1 | Identified | 1 |
| 2 | Matching | 2 |
| 3 | Testing | 3 |
| 4 | Live | 4 |
| 5 | Scaling | 5 |
| 6 | Archived | 6 |

---

## Part 4: Workflows (Automations)

**Location in GHL:** Automation → Workflows → Create Workflow

Build these workflows in order. Email copy is in `email-sms-copy-templates.md`.

---

### Workflow 1: Affiliate Welcome

**Trigger:** Pipeline Stage Changed → Affiliate Pipeline → "New Contact"

```
[Trigger: Stage = New Contact]
    ↓
[Wait: 2 minutes]
    ↓
[Add Tag: "affiliate"]
    ↓
[If/Else: Source = "Facebook"]
    → Yes: [Add Tag: "source-facebook"]
    → No: [If/Else: Platform = "Telegram"]
        → Yes: [Add Tag: "source-telegram"]
        → No: [Add Tag: "source-email"]
    ↓
[Send Email: "Affiliate Welcome" — Email 1]
    ↓
[Send SMS: SMS Template 1]
    ↓
[Internal Notification → Jackie: "New affiliate contact: {{name}}"]
```

---

### Workflow 2: Affiliate Vetting Task

**Trigger:** Pipeline Stage Changed → Affiliate Pipeline → "Vetting"

```
[Trigger: Stage = Vetting]
    ↓
[Create Task]
    Title: "Vet {{contact.first_name}} {{contact.last_name}}"
    Assigned to: Jackie
    Due: 48 hours
    Description: See vetting checklist in pipeline design doc
    ↓
[Add Tag: Remove "stale" if present]
```

---

### Workflow 3: Affiliate Qualified

**Trigger:** Pipeline Stage Changed → Affiliate Pipeline → "Qualified"

```
[Trigger: Stage = Qualified]
    ↓
[Update Custom Field: vetting_status = "Qualified"]
    ↓
[Send Email: "You're Qualified" — Email 3]
    ↓
[Send SMS: SMS Template 2]
```

---

### Workflow 4: Affiliate Onboarding Sequence

**Trigger:** Pipeline Stage Changed → Affiliate Pipeline → "Approved"

```
[Trigger: Stage = Approved]
    ↓
[Update Custom Field: vetting_status = "Approved"]
    ↓
[Send Email: "You're officially in" — Email 4 (Day 1)]
    ↓
[Wait: 2 days]
    ↓
[Send Email: "Quick question" — Email 5 (Day 3)]
    ↓
[Wait: 2 days]
    ↓
[Send Email: "Your first offer options" — Email 6 (Day 5)]
```

---

### Workflow 5: Affiliate Monthly Check-in

**Trigger:** Pipeline Stage Changed → Affiliate Pipeline → "Active"

```
[Trigger: Stage = Active]
    ↓
[Wait: 30 days]
    ↓
[Send Email]
    Subject: "Monthly check-in"
    Body: "Hey {{first_name}}, just checking in on how things are going.
    Any wins to share? Anything I can help with? Hit reply anytime. — Jackie"
    ↓
[Wait: 30 days]
    ↓
[Go To: Send Email step] (loop)
```

---

### Workflow 6: Advertiser Welcome

**Trigger:** Pipeline Stage Changed → Advertiser Pipeline → "New Prospect"

```
[Trigger: Stage = New Prospect]
    ↓
[Wait: 2 minutes]
    ↓
[Add Tag: "advertiser"]
    ↓
[Send Email: "Advertiser Welcome" — Email 7]
    ↓
[Send SMS: SMS Template 4]
    ↓
[Internal Notification → Jackie: "New advertiser prospect: {{name}}"]
```

---

### Workflow 7: Advertiser Intro

**Trigger:** Pipeline Stage Changed → Advertiser Pipeline → "Intro"

```
[Trigger: Stage = Intro]
    ↓
[Send Email: "Here's what the network can do" — Email 8]
```

---

### Workflow 8: Advertiser Negotiation

**Trigger:** Pipeline Stage Changed → Advertiser Pipeline → "Negotiation"

```
[Trigger: Stage = Negotiation]
    ↓
[Send Email: "Let's finalize the details" — Email 9]
    ↓
[Create Task]
    Title: "Finalize terms with {{contact.company_name}}"
    Assigned to: Jackie
    Due: 72 hours
```

---

### Workflow 9: Advertiser Live Notification

**Trigger:** Pipeline Stage Changed → Advertiser Pipeline → "Live"

```
[Trigger: Stage = Live]
    ↓
[Internal Notification → Jackie]
    "{{contact.company_name}} is now LIVE."
    "Offer: {{opportunity.offer_type}} in {{opportunity.offer_vertical}} — Payout: {{opportunity.payout_range}}"
    "ACTION: Match with qualified affiliates in this vertical."
```

---

### Workflow 10: Partner Opportunity Alert

**Trigger:** Pipeline Stage Changed → Partner Opportunities → "Identified"

```
[Trigger: Stage = Identified]
    ↓
[Internal Notification → Jackie]
    "New opportunity: {{opportunity_name}} ({{deal_type}}) — Estimated: {{estimated_value}}"
```

---

### Workflow 11: Partner Test Reminder

**Trigger:** Pipeline Stage Changed → Partner Opportunities → "Testing"

```
[Trigger: Stage = Testing]
    ↓
[Wait: 7 days]
    ↓
[Internal Notification → Jackie]
    "Reminder: Check results for '{{opportunity_name}}' — testing started 7 days ago."
```

---

### Workflow 12: Stale Contact Alert

**Trigger:** Trigger based on conditions — Contact has NOT had a pipeline stage change in 14 days

```
[Trigger: No stage change for 14 days]
    ↓
[Add Tag: "stale"]
    ↓
[Internal Notification → Jackie]
    "{{first_name}} {{last_name}} has been in {{stage}} for 14+ days. Follow up or move."
```

*Note: In GHL, this can be implemented as a scheduled trigger or using the "Stale Opportunities" feature if available.*

---

### Workflow 13: Re-engagement Email

**Trigger:** Tag Added → "stale" (and 7 days have passed)

```
[Trigger: Tag "stale" added]
    ↓
[Wait: 7 days]
    ↓
[If/Else: Still has "stale" tag?]
    → Yes:
        [Send Email: "Still interested?" — Email 14]
        [Send SMS: SMS Template 3]
        [Remove Tag: "stale"]
    → No:
        [End workflow — they've been re-engaged]
```

---

## Part 5: Contact Form

**Location in GHL:** Sites → Forms → Create Form

### Affiliate / Advertiser Intake Form

**Form Name:** JacklynSellz Network Application

| Field | Type | Required | Maps To |
|-------|------|----------|---------|
| First Name | Text | Yes | `contact.first_name` |
| Last Name | Text | Yes | `contact.last_name` |
| Email | Email | Yes | `contact.email` |
| Phone | Phone | No | `contact.phone` |
| I am a... | Dropdown | Yes | `contact.contact_type` |
| | Options: Affiliate, Advertiser | | |
| How did you find us? | Dropdown | Yes | `contact.source` *(GHL built-in field)* |
| | Options: Facebook, Telegram, Email, Referral, Other | | |
| Your Niche / Industry | Text | No | `contact.affiliate_niche` |

> **Note:** This field maps to `affiliate_niche` for both affiliates and advertisers. For advertisers, `offer_vertical` is an Opportunity field — Jackie fills it in manually when she creates the Opportunity record.
| Tell us about yourself | Text Area | No | `contact.notes` |
| Referred by | Text | No | `contact.referred_by` |

**Form Submission Action:**
- If Contact Type = Affiliate → Add to Affiliate Pipeline at "New Contact"
- If Contact Type = Advertiser → Add to Advertiser Pipeline at "New Prospect"

> **⚠️ No Partner routing:** Partner Opportunities Pipeline contains **Opportunities** (deals), not Contacts. There is no form routing for it — Jackie creates Partner Opportunity records manually when she identifies a match to broker.

---

## Part 6: Post-Setup Testing

- [ ] Submit test form as Affiliate → verify enters correct pipeline + welcome email fires
- [ ] Submit test form as Advertiser → verify enters correct pipeline + welcome email fires
- [ ] Manually move test contact through each stage → verify each automation triggers
- [ ] Check that tags are applied correctly
- [ ] Verify SMS sends (if phone number configured)
- [ ] Confirm internal notifications reach Jackie
- [ ] Test stale contact trigger (may need to wait or simulate)
