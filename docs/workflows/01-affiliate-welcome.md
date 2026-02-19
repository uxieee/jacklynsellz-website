# Workflow 1: Affiliate Welcome

**Pipeline:** Affiliate Pipeline
**Trigger:** Contact enters stage → "New Contact"

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Affiliate Welcome`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Affiliate Pipeline`
- Stage: `New Contact`
- Click Save Trigger

### Step 3: Add Wait (2 min)
- Add Action: **Wait**
- Duration: `2 minutes`
- *Why: Prevents email from arriving before the form confirmation page loads*

### Step 4: Add Tag — "affiliate"
- Add Action: **Add Contact Tag**
- Tag: `affiliate`

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
- Subject: `Welcome to the JacklynSellz Network`
- From Name: `Jackie`
- Body:

```
Hey {{contact.first_name}},

Thanks for connecting — I'm glad you're here.

I'm Jackie, and I run a performance marketing network focused on building real partnerships, not just filling a roster. Every affiliate I work with is someone I've personally vetted and believe in.

Here's how this works:

1. I review your info to understand your experience and niche
2. We connect to make sure we're a good fit for each other
3. I match you with offers that align with your strengths

I'll be reviewing your profile in the next 48 hours. In the meantime, if there's anything you want me to know — your best verticals, traffic sources, or what you're looking for — just reply to this email.

Talk soon,
Jackie
```

### Step 7: Send Welcome SMS
- Add Action: **Send SMS**
- Body: `Hi {{contact.first_name}}, it's Jackie from JacklynSellz. Thanks for connecting! I just sent you an email with next steps. Check your inbox when you get a chance. 🤝`

### Step 8: Internal Notification
- Add Action: **Internal Notification**
- Type: Email (or in-app)
- Send to: Jackie
- Message: `New affiliate contact: {{contact.first_name}} {{contact.last_name}} from {{contact.source}}`

### Step 9: Save & Publish
- Click **Save**
- Toggle workflow to **Published**

---

## Visual Flow

```
[Trigger: Enters "New Contact"]
        ↓
[Wait 2 minutes]
        ↓
[Add Tag: "affiliate"]
        ↓
[If/Else: Platform?]
    → Facebook: Tag "source-facebook"
    → Telegram: Tag "source-telegram"
    → Referral: Tag "source-referral"
    → Other: Tag "source-email"
        ↓
[Send Email: Welcome]
        ↓
[Send SMS: Welcome]
        ↓
[Internal Notification to Jackie]
```
