# Form Testing Guide

## Complete Form Walkthrough

This guide walks through testing the entire form from start to finish.

## Step 1: Personal Information (step1.html)

### Required Fields to Fill:
1. **Surname**: Enter any surname (e.g., "Smith")
2. **Date of Birth**: Click the date picker and select a date (e.g., "10/04/1995")
3. **Birth Nationality**: Select from dropdown (e.g., "British")
4. **Country of Birth**: Select from dropdown (e.g., "United Kingdom")
5. **Town of Birth**: Enter town name (e.g., "London")
6. **Gender**: Select from dropdown (e.g., "Male")
7. **Email Address**: Enter valid email (e.g., "test@example.com")
8. **National Insurance Number Available?**: Select "Yes" or "No"
   - If "Yes" selected, **NI Number** field appears - enter format: AB123456C

### Optional Fields:
- Title
- Forename
- Middle name 1
- Middle name 2

### Test Actions:
1. Fill all required fields
2. If NI Number Available = "Yes", fill NI Number in correct format
3. Click "Next" button
4. Should navigate to step2.html

---

## Step 2: Personal History (step2.html)

### Required Fields to Fill:
1. **Previous Addresses**: Enter text (e.g., "123 Main St, City, 2020-2024")
2. **Employment History**: Enter text (e.g., "Software Developer, Company ABC, 2020-present")
3. **Education Background**: Enter text (e.g., "Bachelor's Degree in Computer Science, University XYZ, 2016-2020")
4. **Have you changed your name before?**: Select "Yes" or "No"
   - If "Yes", **Name Change Details** field appears - enter details
5. **Has your Nationality changed since birth?**: Select "Yes" or "No"
   - If "Yes", **Nationality Change Details** field appears - enter details
6. **Have you ever been convicted of a criminal offence?**: Select "Yes" or "No"
   - If "Yes", **Conviction Details** field appears - enter details

### Test Actions:
1. Fill all required textarea fields
2. Test conditional fields by selecting "Yes" for name change, nationality change, or conviction
3. Fill details if "Yes" is selected
4. Click "Next" button
5. Should navigate to step3.html

---

## Step 3: Address Information (step3.html)

### Required Fields to Fill:
1. **Address Line 1**: Enter address (e.g., "123 Main Street")
2. **City/Town**: Enter city (e.g., "London")
3. **County**: Enter county (e.g., "Greater London")
4. **Postcode**: Enter postcode (e.g., "SW1A 1AA")
5. **Country**: Select from dropdown (e.g., "United Kingdom")
6. **Phone Number**: Enter phone number (e.g., "+44 20 1234 5678")

### Optional Fields:
- Address Line 2
- Address Line 3
- Mobile Number

### Test Actions:
1. Fill all required fields
2. Optionally fill optional fields
3. Click "Next" button
4. Should navigate to step4.html

---

## Step 4: ID Information (step4.html)

### Required Fields to Fill:
1. **Identification Type**: Select from dropdown (e.g., "Passport")
2. **ID Document Number**: Enter document number (e.g., "123456789")
3. **ID Issue Date**: Click date picker and select a date
4. **Upload ID Document**: Click "Choose File" and select a PDF, JPG, or PNG file (max 5MB)
5. **Upload Utility Bill**: Click "Choose File" and select a PDF, JPG, or PNG file (max 5MB)

### Optional Fields:
- Passport Number
- Passport Expiry Date
- ID Expiry Date

### Test Actions:
1. Fill all required fields
2. Upload ID document (file preview should appear)
3. Upload utility bill (file preview should appear)
4. Test file removal by clicking × on preview
5. Re-upload files if removed
6. Click "Next" button
7. Should navigate to step5.html

---

## Step 5: Review (step5.html)

### What to Check:
1. **Review Summary**: All entered information should be displayed in sections:
   - Personal Information
   - Personal History
   - Address Information
   - ID Information (including uploaded file names)

2. **Edit Buttons**: Each section should have an "Edit" button
   - Clicking "Edit" should navigate to the corresponding step page
   - Data should be preserved when editing

3. **Navigation**:
   - "Previous" button should go back to step4.html
   - "Submit Application" button should be visible

### Test Actions:
1. Review all displayed information
2. Test "Edit" buttons - click one and verify it navigates correctly
3. Fill any missing information if needed
4. Return to review page
5. Click "Submit Application" button
6. Should navigate to step6.html

---

## Step 6: Confirmation (step6.html)

### What to Check:
1. **Success Message**: "Application Submitted Successfully!" should be displayed
2. **Reference Number**: A unique reference number should be generated and displayed
3. **Confirmation Text**: Thank you message should be visible

### Test Actions:
1. Verify reference number is displayed
2. Note the reference number for records
3. Form submission is complete!

---

## Additional Testing Scenarios

### Test Data Persistence:
1. Fill out Step 1, navigate to Step 2
2. Refresh the page (F5)
3. Navigate back to Step 1
4. Verify all data is still there

### Test Validation:
1. Try to proceed without filling required fields
2. Should show error messages
3. Try invalid email format
4. Try invalid NI Number format (if applicable)
5. Try uploading file larger than 5MB
6. Try uploading invalid file type

### Test Conditional Fields:
1. Step 1: Select "Yes" for NI Number - field should appear
2. Step 2: Select "Yes" for name change - details field should appear
3. Step 2: Select "Yes" for nationality change - details field should appear
4. Step 2: Select "Yes" for conviction - details field should appear

### Test Navigation:
1. Use sidebar links to jump between steps
2. Use Previous/Next buttons
3. Use browser back/forward buttons
4. Verify data persists across navigation

---

## Expected Results

✅ All steps should navigate correctly
✅ All required fields should validate
✅ Conditional fields should show/hide correctly
✅ File uploads should work with preview
✅ Data should persist across pages
✅ Review page should show all information
✅ Submission should generate reference number
✅ Confirmation page should display success message

---

## Notes

- This is a frontend-only form (no backend)
- File uploads store metadata only (name, size, type) - actual files are not stored
- All data is stored in browser localStorage
- Form can be tested by opening step1.html in a web browser

