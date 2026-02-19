# Workflow 2B: Affiliate Rejection

**Pipeline:** Affiliate Pipeline
**Trigger:** Custom Field Updated → `vetting_status` = `Rejected`

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Affiliate Rejection`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Field Value Changed**
- Field: `vetting_status`
- Condition: Value equals `Rejected`
- Click Save Trigger

> **Why this trigger:** Jackie manually sets vetting_status = Rejected on a contact's record when she decides not to approve them. This workflow fires at that moment.

### Step 3: Add Tag — "rejected"
- Add Action: **Add Contact Tag**
- Tag: `rejected`
- *Why: Makes it easy to filter rejected contacts in Smart Lists*

### Step 4: Send Rejection Email
- Add Action: **Send Email**
- Subject: `Re: Your application to Jackie's affiliate network`
- From Name: `Jackie`
- Body:

```
Hey {{contact.first_name}},

Thanks so much for reaching out and expressing interest in working together.

After reviewing your application, I don't think we're the right fit at this time — but that's not a forever answer.

The main thing I'm looking for is [reason — e.g., a specific niche, higher volume, different traffic sources]. If your situation changes or you hit a new milestone, I'd genuinely love to hear from you again.

Wishing you the best with everything.

Jackie
```

> 💡 **Note:** Customize the bracketed reason above per contact, or keep it generic. The key is to leave the door open — rejected affiliates can become great partners later.

### Step 5: Remove from Active Automation
- Add Action: **Remove Contact Tag**
- Tag: `stale`
- *Why: If they had a stale tag, clean it up — they're now officially rejected, not stale*

### Step 6: Save & Publish
- Click **Save**
- Toggle workflow to **Published**

---

## Visual Flow

```
[Trigger: vetting_status field = "Rejected"]
        ↓
[Add Tag: "rejected"]
        ↓
[Send Email: Rejection — warm, door-open tone]
        ↓
[Remove Tag: "stale" (cleanup)]
```

---

## Notes
- Keep the tone **warm and non-final** — this is an affiliate network, not a job rejection letter
- Jackie can customize the body before the workflow fires if needed (pause, edit, resume)
- Jackie should manually move the contact to an archive stage or mark the opportunity as "Lost" in the pipeline
- These contacts are NOT deleted — they stay in GHL for future re-engagement
- Consider adding them to a tag `rejected-q1-2026` seasonally so you can do targeted win-back campaigns later
