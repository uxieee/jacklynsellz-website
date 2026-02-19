# Workflow 5: Affiliate Monthly Check-in

**Pipeline:** Affiliate Pipeline
**Trigger:** Contact enters stage → "Active"

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Affiliate Monthly Check-in`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Affiliate Pipeline`
- Stage: `Active`
- Click Save Trigger

### Step 3: Wait 30 Days
- Add Action: **Wait**
- Duration: `30 days`

### Step 4: Stage Guard — If/Else Check
- Add Action: **If/Else**
- Condition: `Contact Pipeline Stage` → `equals` → `Active` (in Affiliate Pipeline)
- *This is the loop guard: only continue if they're still Active*

**Branch: YES (still Active) — continue to email**

### Step 5: Send Check-in Email
- Add Action: **Send Email** (inside the Yes branch)
- Subject: `Monthly check-in`
- From Name: `Jackie`
- Body:

```
Hey {{contact.first_name}},

Just checking in on how things are going.

Any wins to share? Anything I can help with? I'm always looking for ways to optimize what's working and fix what isn't.

Hit reply anytime — I read every email.

Jackie
```

### Step 6: Go Back to Wait (Loop)
- Add Action: **Go To** (still inside the Yes branch)
- Go to: Step 3 (the Wait 30 days step)
- *This creates a recurring monthly loop — only fires if stage check passes*

**Branch: NO (promoted to Scaling/VIP or elsewhere) — end workflow**
- No action needed — the workflow simply ends cleanly for this contact

> **⚠️ GHL Note:** If your GHL version doesn't support "Go To" loops, use a **recurring workflow trigger** instead:
> - Create a new workflow that triggers daily at 9am
> - Add a filter: `Contact Pipeline Stage = Active` AND `Date Contact Entered Active Stage > 30 days ago`
> - This is more reliable and stage-aware by design

### Step 6: Save & Publish
- Click **Save**
- Toggle workflow to **Published**

---

## Visual Flow

```
[Trigger: Enters "Active"]
        ↓
[Wait 30 days]    ←──────────────────────┐
        ↓                                 │
[If/Else: Still in "Active" stage?]       │
    → YES:                                │
        [Send Email: Monthly Check-in]    │
        [Go To: Wait step] ───────────────┘
    → NO (Promoted to Scaling/VIP/etc):
        [End Workflow]
```

---

## Notes
- The **If/Else stage guard** is critical — without it, a contact promoted to Scaling or VIP would still receive "Active" check-in emails indefinitely
- The loop only continues while `Pipeline Stage = Active` — promotion automatically exits the loop cleanly
- The tone is casual and relationship-focused — not a newsletter
- If using the "Go To" loop: GHL may count each loop iteration as a separate workflow execution depending on plan — monitor your usage limits
