# Workflow 12: Stale Contact Alert

**Pipeline:** ALL pipelines
**Trigger:** Recurring daily schedule — checks if contact has had no stage update in 14+ days

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Stale Contact Alert`
- Choose "Start from scratch"

### Step 2: Set Trigger (Recurring Daily Schedule)
- Click **Add Trigger**
- Select: **Date/Time** (or **Scheduled**)
- Set to run: **Every day at 9:00 AM**
- No contact filter on the trigger itself — the workflow will process contacts via the filter in Step 3

> **Why this approach:** GHL's "Stale Opportunities" feature is a pipeline *view* setting, not a workflow trigger — it's not reliably available as automation in all plans. A recurring daily trigger is universal and deterministic.

### Step 3: Filter — Check if Actually Stale
- Add Action: **If/Else**
- Condition 1: `Opportunity Last Updated` → `more than 14 days ago`
- Condition 2 (AND): `Contact Pipeline Stage` → `is not empty` *(only contacts in a pipeline)*
- Condition 3 (AND): `Contact Tag` → `does NOT contain` → `stale` *(don't re-tag contacts already stale)*
- Condition 4 (AND): `Contact Tag` → `does NOT contain` → `rejected` *(skip rejected contacts)*

**Branch: YES (contact is stale) → continue**
**Branch: NO → End Workflow (not stale, skip)**

### Step 4: Add Tag — "stale"
- Add Action: **Add Contact Tag** (inside the YES branch)
- Tag: `stale`

### Step 5: Internal Notification
- Add Action: **Internal Notification** (inside the YES branch)
- Send to: Jackie
- Message:

```
⚠️ STALE CONTACT ALERT

Name: {{contact.first_name}} {{contact.last_name}}
Email: {{contact.email}}
Stale for: 14+ days (no stage change)

ACTION REQUIRED — choose one:
→ Still interested? Move them forward in pipeline
→ Unresponsive? Leave tagged "stale" (WF13 re-engagement fires in 7 days)
→ Dead lead? Mark opportunity as Lost and remove from pipeline
```

### Step 6: Save & Publish

---

## Visual Flow

```
[Trigger: Daily at 9:00 AM]
        ↓
[If/Else: Last updated > 14 days ago
          AND in a pipeline
          AND NOT already tagged "stale"
          AND NOT tagged "rejected"]
    → YES:
        [Add Tag: "stale"]
        [Internal Notification to Jackie]
    → NO:
        [End Workflow]
```

---

## Notes
- This workflow feeds into **Workflow 13 (Re-engagement)** — after 7 more days with the "stale" tag, the re-engagement email fires
- If Jackie takes action and moves the contact, the "stale" tag should be removed (handled in Workflow 2 and manually)
- Consider creating a **Smart List** in GHL filtered by tag "stale" so Jackie can see all stale contacts in one view
