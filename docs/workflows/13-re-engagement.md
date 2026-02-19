# Workflow 13: Re-engagement

**Pipeline:** ALL pipelines
**Trigger:** Tag "stale" added + 7 day wait

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Re-engagement`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Tag Added**
- Tag: `stale`
- Click Save Trigger

### Step 3: Wait 7 Days
- Add Action: **Wait**
- Duration: `7 days`
- *Why: Gives Jackie time to manually follow up first. If she does and removes the tag, this workflow won't send.*

### Step 4: Check if Still Stale
- Add Action: **If/Else** condition
- Condition: Contact **has tag** → `stale`
  - **Yes branch:** Continue to Step 5
  - **No branch:** **End workflow** (they've been re-engaged already)

### Step 5: Send Re-engagement Email
- Add Action: **Send Email**
- Subject: `Still interested?`
- From Name: `Jackie`
- Body:

```
Hey {{contact.first_name}},

It's been a little while since we connected and I wanted to check in.

If you're still interested in working together, just reply to this email and I'll pick things back up where we left off.

If the timing isn't right, no worries at all — I'll keep your info on file and you're always welcome back.

Either way, I appreciate you.

Jackie
```

### Step 6: Send Re-engagement SMS
- Add Action: **Send SMS**
- Body: `Hey {{contact.first_name}}, it's Jackie. Haven't heard from you in a bit — just wanted to check if you're still interested in the network? No pressure either way. Reply anytime.`

### Step 7: Remove "stale" Tag
- Add Action: **Remove Contact Tag**
- Tag: `stale`
- *Why: The re-engagement message has now been sent. Removing the tag prevents a second re-engagement loop from firing if the contact is still slow to respond.*

### Step 8: Save & Publish
- Click **Save**
- Toggle workflow to **Published**

---

## Visual Flow

```
[Trigger: Tag "stale" added]
        ↓
[Wait 7 days]
        ↓
[If/Else: Still has "stale" tag?]
    → YES:
        [Send Email: "Still interested?"]
              ↓
        [Send SMS: Re-engagement]
    → NO:
        [End — already re-engaged]
```

---

## Notes
- This is the **last-chance** touchpoint before a contact goes cold
- The tone is intentionally low-pressure (psychology: reducing anxiety about re-engaging)
- "I'll keep your info on file" uses **Loss Aversion** — implies they could lose their spot
- If they reply, Jackie manually removes the "stale" tag and moves them forward
- If they don't reply after this, Jackie can decide to archive or remove them
