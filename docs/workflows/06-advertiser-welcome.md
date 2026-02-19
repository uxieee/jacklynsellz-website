# Workflow 6: Advertiser Welcome

**Pipeline:** Advertiser Pipeline
**Trigger:** Contact enters stage → "New Prospect"

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Advertiser Welcome`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Advertiser Pipeline`
- Stage: `New Prospect`
- Click Save Trigger

### Step 3: Add Wait (2 min)
- Add Action: **Wait**
- Duration: `2 minutes`

### Step 4: Add Tag — "advertiser"
- Add Action: **Add Contact Tag**
- Tag: `advertiser`

### Step 5: Tag by Source Platform
- Add Action: **If/Else** condition
- Condition: GHL built-in `Source` field → equals → `Facebook`
  - **Yes branch:** Add Action → **Add Contact Tag** → `source-facebook`
  - **No branch:** Add another **If/Else**
    - Condition: `Source` → equals → `Telegram`
      - **Yes:** Add Tag → `source-telegram`
      - **No:** Add another **If/Else**
        - Condition: `Source` → equals → `Referral`
          - **Yes:** Add Tag → `source-referral`
          - **No:** Add Tag → `source-email`

### Step 6: Send Welcome Email
- Add Action: **Send Email**
- Subject: `Welcome — let's explore how we can work together`
- From Name: `Jackie`
- Body:

```
Hi {{contact.first_name}},

Thanks for your interest in the JacklynSellz network.

I run a curated affiliate network focused on quality over quantity. Every affiliate in my network is personally vetted — no bots, no fraud, no wasted budget.

Here's my process:

1. I learn about your offer — vertical, payout, GEOs, landing pages
2. I identify the right affiliates from my network for your offer
3. We test, optimize, and scale together

I'd love to learn more about what you're promoting. Can you reply with:
- Your offer type (CPA, CPL, CPS, etc.)
- Your target GEOs
- Your current payout range

That's all I need to get started.

Jackie
```

### Step 7: Send Welcome SMS
- Add Action: **Send SMS**
- Body: `Hi {{contact.first_name}}, Jackie here from JacklynSellz. Thanks for reaching out! I sent you an email with a few questions about your offer. Looking forward to connecting.`

### Step 8: Internal Notification
- Add Action: **Internal Notification**
- Send to: Jackie
- Message: `New advertiser prospect: {{contact.first_name}} {{contact.last_name}} — {{contact.company_name}}`

### Step 9: Save & Publish
- Click **Save**
- Toggle workflow to **Published**

---

## Visual Flow

```
[Trigger: Enters "New Prospect"]
        ↓
[Wait 2 minutes]
        ↓
[Add Tag: "advertiser"]
        ↓
[If/Else: Platform source tagging]
        ↓
[Send Email: Welcome]
        ↓
[Send SMS: Welcome]
        ↓
[Internal Notification to Jackie]
```
