# Workflow 3: Affiliate Qualified

**Pipeline:** Affiliate Pipeline
**Trigger:** Contact enters stage → "Qualified"

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Affiliate Qualified`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Affiliate Pipeline`
- Stage: `Qualified`
- Click Save Trigger

### Step 3: Update Custom Field
- Add Action: **Update Contact Field**
- Field: `Vetting Status`
- Value: `Qualified`
- *Note: This marks them as Qualified — Jackie still needs to manually approve. The field will be updated to "Approved" in Workflow 4 (Onboarding) when they enter the Approved stage.*

### Step 4: Send Qualified Email
- Add Action: **Send Email**
- Subject: `You've been qualified — here's what's next`
- From Name: `Jackie`
- Body:

```
Hey {{contact.first_name}},

Good news — I've reviewed your profile and you're a great fit for the network.

Here's what happens next:

I'll match you with offers based on your niche ({{contact.affiliate_niche}}) and traffic sources. I only work with advertisers I've personally vetted, so you'll never waste time on low-quality offers.

Before I can officially bring you on board, I just need a quick confirmation:

→ Reply with "I'm in" and I'll move forward with your onboarding.

If you have any questions about how the network operates, just ask. I'm an open book.

Jackie
```

### Step 5: Send Qualified SMS
- Add Action: **Send SMS**
- Body: `{{contact.first_name}} — great news, you've been qualified for the JacklynSellz network! Check your email for what's next. Looking forward to working together.`

### Step 6: Save & Publish
- Click **Save**
- Toggle workflow to **Published**

---

## Visual Flow

```
[Trigger: Enters "Qualified"]
        ↓
[Update Field: Vetting Status = "Approved"]
        ↓
[Send Email: "You've been qualified"]
        ↓
[Send SMS: Qualified notification]
```
