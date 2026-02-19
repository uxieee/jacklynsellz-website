# Workflow 9: Advertiser Live Notification

**Pipeline:** Advertiser Pipeline
**Trigger:** Contact enters stage → "Live"

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Advertiser Live Notification`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Advertiser Pipeline`
- Stage: `Live`
- Click Save Trigger

### Step 3: Internal Notification
- Add Action: **Internal Notification**
- Type: Email (or in-app)
- Send to: Jackie
- Message:

```
🎉 ADVERTISER IS NOW LIVE

Name: {{contact.first_name}} {{contact.last_name}}
Company: {{contact.company_name}}
Offer Type: {{opportunity.offer_type}}
Vertical: {{opportunity.offer_vertical}}
Payout: {{opportunity.payout_range}}

ACTION: Match with qualified affiliates in this vertical.
Check the Affiliate Pipeline for contacts with matching niches.
```

> **Note:** `offer_type`, `offer_vertical`, and `payout_range` are **Opportunity fields**, not Contact fields. In GHL workflows, use the opportunity variable syntax to pull these values.

### Step 4: Save & Publish

---

## Visual Flow

```
[Trigger: Enters "Live"]
        ↓
[Internal Notification to Jackie]
    → "Match with qualified affiliates"
```

---

## Notes
- This is **internal only** — no email to the advertiser
- Jackie uses this as a prompt to go to the Affiliate Pipeline and identify matches
- A future enhancement could auto-tag or auto-notify matching affiliates
