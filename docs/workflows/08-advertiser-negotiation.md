# Workflow 8: Advertiser Negotiation Follow-Up

**Pipeline:** Advertiser Pipeline
**Trigger:** Contact enters stage → "Negotiation"

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Advertiser Negotiation Follow-Up`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Advertiser Pipeline`
- Stage: `Negotiation`
- Click Save Trigger

### Step 3: Send Negotiation Email
- Add Action: **Send Email**
- Subject: `Let's finalize the details`
- From Name: `Jackie`
- Body:

```
{{contact.first_name}},

I'm excited about this — your offer looks like a strong fit for several affiliates in my network.

To move forward, I'll need:
- Final payout/commission terms
- Approved landing page(s)
- Any compliance or creative guidelines
- Tracking link setup details

Once I have these, I can start matching you with the right affiliates and get a test running within the week.

Let me know if you have any questions about the process.

Jackie
```

### Step 4: Create Follow-Up Task
- Add Action: **Create Task**
- Title: `Finalize terms with {{contact.first_name}} — {{contact.company_name}}`
- Description: `Advertiser is in negotiation. Collect and fill in OPPORTUNITY fields: Offer Type, Payout Range, GEO Targets, Exclusivity, Landing Page URL, Contract Status.`
- Assigned to: Jackie
- Due date: `3 days from now`

### Step 5: Save & Publish

---

## Visual Flow

```
[Trigger: Enters "Negotiation"]
        ↓
[Send Email: "Let's finalize"]
        ↓
[Create Task: "Finalize terms with {{name}}"]
    → Due: 72 hours
    → Assigned: Jackie
```
