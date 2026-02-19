# Workflow 11: Partner Test Reminder

**Pipeline:** Partner Opportunities Pipeline
**Trigger:** Opportunity enters stage → "Testing"

> **⚠️ Note:** Partner Opportunities are created as **Opportunities** in GHL, not Contacts. The trigger fires when an opportunity's stage changes.

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Partner Test Reminder`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Partner Opportunities Pipeline`
- Stage: `Testing`
- Click Save Trigger

### Step 3: Wait 7 Days
- Add Action: **Wait**
- Duration: `7 days`

### Step 4: Internal Notification
- Add Action: **Internal Notification**
- Send to: Jackie
- Message:

```
⏰ TEST PERIOD CHECK-IN

Opportunity: {{opportunity.opportunity_name}}
Testing started: 7 days ago

ACTION: Review performance results.
- If successful → Move to "Live"
- If underperforming → Adjust or move to "Archived"
```

> **Note:** `opportunity_name` is an **Opportunity field**. Use the opportunity variable syntax in GHL.

### Step 5: Save & Publish

---

## Visual Flow

```
[Trigger: Enters "Testing"]
        ↓
[Wait 7 days]
        ↓
[Internal Notification to Jackie]
    → "Check test results for {{opportunity.opportunity_name}}"
```
