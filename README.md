# Multi-Step Form Application

A responsive multi-step form application built with HTML, CSS, JavaScript, and jQuery. This application allows users to submit personal information, history, address, and ID details through a user-friendly step-by-step interface.

## Features

- **6-Step Form Process**: Personal Information, Personal History, Address Information, ID Information, Review, and Confirmation
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Sidebar Navigation**: Easy step navigation via sidebar menu (collapsible on mobile)
- **Form Validation**: Comprehensive validation for all required fields including email format and conditional fields
- **Date Pickers**: User-friendly date selection using jQuery UI datepicker
- **Data Persistence**: Form data is saved to localStorage automatically
- **Review Page**: Summary page before final submission with edit capabilities
- **Confirmation Page**: Success message with reference number upon submission

## Technologies Used

- HTML5
- CSS3 (Flexbox/Grid)
- JavaScript (ES6+)
- jQuery 3.6.0
- jQuery UI (Datepicker)

## File Structure

```
form/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Form logic, validation, and navigation
└── README.md       # Documentation
```

## Getting Started

1. Download or clone the project files
2. Open `index.html` in a web browser
3. No build process or dependencies installation required - all libraries are loaded via CDN

## Form Steps

### Step 1: Personal Information
- Title, Name fields (Forename, Middle names, Surname)
- Date of Birth (date picker)
- Birth details (Nationality, County, Country, Town)
- Gender
- Email address
- National Insurance Number (conditional)

### Step 2: Personal History
- Previous addresses
- Employment history
- Education background

### Step 3: Address Information
- Current address fields
- City, County, Postcode
- Country
- Phone and Mobile numbers

### Step 4: ID Information
- Identification type
- ID Document Number
- Passport details (optional)
- ID Issue and Expiry dates

### Step 5: Review
- Complete summary of all entered information
- Edit buttons to return to any section

### Step 6: Confirmation
- Success message
- Reference number
- Confirmation details

## Validation

- **Required Fields**: All fields marked in orange are required
- **Email Validation**: Validates proper email format
- **Conditional Fields**: National Insurance Number is required if "Yes" is selected
- **Real-time Validation**: Fields are validated on blur
- **Date Validation**: Date pickers prevent invalid date selection

## Color Scheme

- **Header**: Blue (#0056b3)
- **Text**: Black (#000000)
- **Required Fields**: Orange (#ff9800)
- **Success/Confirmation**: Green (#4caf50)
- **Error Messages**: Red (#f44336)

## Responsive Breakpoints

- **Desktop**: > 1024px (3-column form layout, visible sidebar)
- **Tablet**: 768px - 1024px (2-column form layout, visible sidebar)
- **Mobile**: < 768px (1-column form layout, collapsible sidebar)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Form data is stored in browser localStorage and persists between sessions
- Form data is cleared after submission (can be modified in script.js)
- The form can be edited at the review step before final submission
- Support button functionality can be customized for your needs

## License

This project is for demonstration purposes.

