📖 Description

A Salesforce Lightning Web Component that allows users to view and update Account records using the standard lightning-record-form.

This component demonstrates practical usage of:

Standard Salesforce UI components
Layout-based form rendering (Compact & Full)
Toast notifications for success and error handling

Users can quickly edit Account details in a structured, responsive form.

Key Features:

Uses lightning-record-form for automatic form handling
Supports Compact layout (2 columns) for quick editing
Can be easily switched to Full layout for detailed view
Displays success and error messages using toast notifications
Clean UI with SLDS styling
⚙️ Installation
Clone this repository
Deploy the component to your Salesforce org using SFDX / VS Code
Open Lightning App Builder in Salesforce
Drag and drop the component onto:
Record Page (recommended)
App Page
Home Page
▶️ Usage
Navigate to an Account record page
Add the Account Editor component
The form will automatically load the current record

Behavior:

Edit fields and click Save
You will see:
✅ Account updated successfully (on success)
❌ Error message (if something fails)
🛠 Configuration

You are using layout-based rendering instead of manual fields:

layout-type="Compact"
columns="2"

Options you can switch:

layout-type="Compact" → Minimal fields, faster editing
layout-type="Full" → Shows complete page layout
columns="2" → Controls form layout responsiveness
📸 Screenshots
