# Workflow 4: Affiliate Onboarding Sequence

**Pipeline:** Affiliate Pipeline
**Trigger:** Contact enters stage → "Approved"

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Affiliate Onboarding Sequence`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Affiliate Pipeline`
- Stage: `Approved`
- Click Save Trigger

### Step 3: Update Vetting Status Field
- Add Action: **Update Contact Field**
- Field: `Vetting Status`
- Value: `Approved`
- *This is the correct place to mark Approved — the contact has passed vetting and Jackie has confirmed onboarding.*

### Step 4: Send Onboarding Email — Day 1
- Add Action: **Send Email**
- Subject: `You're officially in — welcome aboard`
- From Name: `Jackie`
- Body:

```
{{contact.first_name}}, welcome to the team.

You're now an approved JacklynSellz affiliate. Here's everything you need to know:

How I work:
- I personally match affiliates with offers based on fit, not volume
- Communication is everything — if something isn't working, tell me
- I'm available on Messenger, Telegram, or email

What I need from you:
- Let me know when you're ready to start promoting
- Keep me updated on what's working (and what isn't)
- If you know other solid affiliates, introductions are always welcome

I'll be reaching out in the next few days with some offers that match your profile.

Let's build something good,
Jackie
```

### Step 4: Wait 2 Days
- Add Action: **Wait**
- Duration: `2 days`

### Step 5: Send Follow-Up Email — Day 3
- Add Action: **Send Email**
- Subject: `Quick question`
- From Name: `Jackie`
- Body:

```
Hey {{contact.first_name}},

Just checking in — did you get a chance to review my last email?

I'm putting together a shortlist of offers for your niche and wanted to make sure I have the right info:

- Your best traffic source: {{contact.traffic_sources}}
- Your niche: {{contact.affiliate_niche}}

If anything's changed or if you want to add context, just reply here.

Jackie
```

### Step 6: Wait 2 More Days
- Add Action: **Wait**
- Duration: `2 days`

### Step 7: Send Final Onboarding Email — Day 5
- Add Action: **Send Email**
- Subject: `Your first offer options`
- From Name: `Jackie`
- Body:

```
{{contact.first_name}},

I've got a few offers that could be a strong fit for you. I'm going to send those over separately, but first I want to set expectations:

What I look for in a good partnership:
- Consistent communication
- Honest reporting
- Long-term thinking over quick wins

If that sounds like how you operate, we're going to work well together.

Keep an eye out for my next message with specific offer details.

Jackie
```

### Step 9: Save & Publish
- Click **Save**
- Toggle workflow to **Published**

---

## Visual Flow

```
[Trigger: Enters "Approved"]
        ↓
[Send Email: "You're officially in" — Day 1]
        ↓
[Wait 2 days]
        ↓
[Send Email: "Quick question" — Day 3]
        ↓
[Wait 2 days]
        ↓
[Send Email: "Your first offer options" — Day 5]
```

---

## Notes
- This is a **drip sequence** — 3 emails over 5 days
- Each email escalates commitment gradually (psychology: Commitment & Consistency)
- If the contact replies at any point, Jackie can intervene manually
