# Workflow 2: Affiliate Vetting Task

**Pipeline:** Affiliate Pipeline
**Trigger:** Contact enters stage → "Vetting"

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Affiliate Vetting Task`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Affiliate Pipeline`
- Stage: `Vetting`
- Click Save Trigger

### Step 3: Remove Stale Tag (if present)
- Add Action: **Remove Contact Tag**
- Tag: `stale`
- *Why: If this contact was re-engaged from stale, clear the tag*

### Step 4: Create Manual Task
- Add Action: **Create Task** (or **Add Task**)
- Title: `Vet {{contact.first_name}} {{contact.last_name}}`
- Description:
```
VETTING CHECKLIST:
- [ ] Review their niche: {{contact.affiliate_niche}}
- [ ] Check experience level: {{contact.experience_level}}
- [ ] Review traffic sources: {{contact.traffic_sources}}
- [ ] Look at social profiles / portfolio
- [ ] Check if referred: {{contact.referred_by}}
- [ ] Decision: Qualify, Reject, or Request More Info
```
- Assigned to: Jackie
- Due date: `2 days from now`

### Step 5: Save & Publish
- Click **Save**
- Toggle workflow to **Published**

---

## Visual Flow

```
[Trigger: Enters "Vetting"]
        ↓
[Remove Tag: "stale" (if present)]
        ↓
[Create Task: "Vet {{name}}"]
    → Assigned to: Jackie
    → Due: 48 hours
    → Includes vetting checklist
```

---

## Notes
- This workflow has **no external emails** — it's internal only
- Jackie manually reviews the contact and then drags them to "Qualified" or back to "New Contact" (reject)
