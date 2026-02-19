# Workflow 7: Advertiser Intro

**Pipeline:** Advertiser Pipeline
**Trigger:** Contact enters stage → "Intro"

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Advertiser Intro`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Advertiser Pipeline`
- Stage: `Intro`
- Click Save Trigger

### Step 3: Send Intro Email
- Add Action: **Send Email**
- Subject: `Here's what the JacklynSellz network can do for you`
- From Name: `Jackie`
- Body:

```
{{contact.first_name}},

Thanks for sharing your offer details. Here's a quick overview of how I operate:

The JacklynSellz Network:
- Personally vetted affiliates across multiple verticals
- Focus on sustainable, scalable partnerships
- Direct line to me for support and optimization

What makes us different:
Most networks throw your offer at hundreds of affiliates and hope something sticks. I take a different approach — I match your offer with 3-5 affiliates who have proven results in your vertical. Smaller volume, higher quality.

If that approach resonates, let's discuss the specifics of your offer and I'll let you know how we can help.

Jackie
```

### Step 4: Save & Publish

---

## Visual Flow

```
[Trigger: Enters "Intro"]
        ↓
[Send Email: Network capabilities]
```

---

## Notes
- This is a simple single-email workflow
- Jackie manually moves the contact to "Intro" after initial conversation
- The email positions JacklynSellz as quality-first (differentiator)
