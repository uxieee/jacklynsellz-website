# Workflow 10: Partner Opportunity Alert

**Pipeline:** Partner Opportunities Pipeline
**Trigger:** Opportunity enters stage → "Identified"

> **⚠️ Note:** Partner Opportunities are created as **Opportunities** in GHL, not Contacts. The trigger fires when an opportunity's stage changes, not a contact's stage.

---

## GHL Build Steps

### Step 1: Create Workflow
- Go to **Automation → Workflows → Create Workflow**
- Name: `Partner Opportunity Alert`
- Choose "Start from scratch"

### Step 2: Set Trigger
- Click **Add Trigger**
- Select: **Pipeline Stage Changed**
- Pipeline: `Partner Opportunities Pipeline`
- Stage: `Identified`
- Click Save Trigger

### Step 3: Add Tag
- Add Action: **Add Contact Tag**
- Tag: `partner`

### Step 4: Internal Notification
- Add Action: **Internal Notification**
- Send to: Jackie
- Message:

```
🔔 NEW PARTNER OPPORTUNITY

Opportunity: {{opportunity.opportunity_name}}
Deal Type: {{opportunity.deal_type}}
Estimated Value: {{opportunity.estimated_value}}

ACTION: Evaluate affiliate-advertiser fit for this opportunity.
```

> **Note:** `opportunity_name`, `deal_type`, and `estimated_value` are **Opportunity fields**. In GHL workflows, use the opportunity variable syntax to pull these values.

### Step 5: Save & Publish

---

## Visual Flow

```
[Trigger: Enters "Identified"]
        ↓
[Add Tag: "partner"]
        ↓
[Internal Notification to Jackie]
    → New opportunity details
```
