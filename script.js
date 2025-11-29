$(document).ready(function() {
    // Initialize form data storage
    let formData = JSON.parse(localStorage.getItem('formData')) || {};
    let currentStep = parseInt(localStorage.getItem('currentStep')) || 1;
    
    // Comprehensive birth nationality list (must be defined before functions that use it)
    const birthNationalities = [
        'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan',
        'Argentine', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini',
        'Bangladeshi', 'Barbadian', 'Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bhutanese',
        'Bolivian', 'Bosnian', 'Botswanan', 'Brazilian', 'Bruneian', 'Bulgarian',
        'Burkinabe', 'Burmese', 'Burundian', 'Cabo Verdean', 'Cambodian', 'Cameroonian', 'Canadian',
        'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese',
        'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish',
        'Djiboutian', 'Dominican', 'Dominican', 'Ecuadorean', 'Egyptian', 'Salvadoran',
        'Equatorial Guinean', 'Eritrean', 'Estonian', 'Eswatini', 'Ethiopian', 'Fijian',
        'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek',
        'Grenadian', 'Guatemalan', 'Guinean', 'Guinea-Bissauan', 'Guyanese', 'Haitian', 'Honduran',
        'Hungarian', 'Icelandic', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli',
        'Italian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan', 'Kiribati', 'Kosovar',
        'Kuwaiti', 'Kyrgyzstani', 'Laotian', 'Latvian', 'Lebanese', 'Lesotho', 'Liberian', 'Libyan',
        'Liechtensteiner', 'Lithuanian', 'Luxembourger', 'Malagasy', 'Malawian', 'Malaysian',
        'Maldivian', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican',
        'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Montenegrin', 'Moroccan', 'Mozambican',
        'Namibian', 'Nauruan', 'Nepalese', 'Dutch', 'New Zealander', 'Nicaraguan',
        'Nigerien', 'Nigerian', 'North Korean', 'North Macedonian', 'Norwegian', 'Omani', 'Pakistani',
        'Palauan', 'Palestinian', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Filipino',
        'Polish', 'Portuguese', 'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Kittitian', 'Nevisian',
        'Saint Lucian', 'Vincentian', 'Samoan', 'Sammarinese',
        'Sao Tomean', 'Saudi Arabian', 'Senegalese', 'Serbian', 'Seychellois',
        'Sierra Leonean', 'Singaporean', 'Slovak', 'Slovenian', 'Solomon Islander', 'Somali',
        'South African', 'South Korean', 'South Sudanese', 'Spanish', 'Sri Lankan', 'Sudanese',
        'Surinamese', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajikistani', 'Tanzanian',
        'Thai', 'Timorese', 'Togolese', 'Tongan', 'Trinidadian', 'Tobagonian', 'Tunisian',
        'Turkish', 'Turkmen', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Emirati',
        'British', 'American', 'Uruguayan', 'Uzbekistani', 'Vanuatuan', 'Vatican',
        'Venezuelan', 'Vietnamese', 'Yemeni', 'Zambian', 'Zimbabwean'
    ];
    
    // Comprehensive country list (must be defined before functions that use it)
    const countries = [
        'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
        'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
        'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
        'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
        'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada',
        'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros',
        'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark',
        'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador',
        'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji',
        'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece',
        'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
        'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
        'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo',
        'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
        'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia',
        'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
        'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique',
        'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua',
        'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan',
        'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines',
        'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis',
        'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
        'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
        'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
        'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan',
        'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania',
        'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
        'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
        'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
        'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
    ];
    
    // Initialize date pickers
    initializeDatePickers();
    
    // Initialize form
    initializeForm();
    
    // Populate country dropdowns and birth nationalities (after form is initialized)
    populateCountries();
    populateBirthNationalities();
    
    // Load saved data
    loadFormData();
    
    // Ensure countries and nationalities are populated after loading data
    setTimeout(function() {
        populateCountries();
        populateBirthNationalities();
    }, 200);
    
    // Sidebar toggle for mobile (from header)
    $(document).on('click', '#headerToggle', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.sidebar').toggleClass('open');
        $('body').toggleClass('sidebar-open');
        return false;
    });
    
    // Step navigation from sidebar - now uses links, so just close sidebar on mobile
    $('.step-item').on('click', function(e) {
        // Close sidebar on mobile after selecting a step
        if ($(window).width() <= 768) {
            $('.sidebar').removeClass('open');
            $('body').removeClass('sidebar-open');
        }
        // Links will handle navigation naturally
    });
    
    // Previous button - navigate to previous page
    $('#prevBtn').on('click', function(e) {
        if ($(this).is('a')) {
            // Already a link, just save data before navigating
            saveCurrentStepData();
            return; // Let the link work naturally
        }
        // If it's a button, convert to navigation
        if (window.prevPage) {
            saveCurrentStepData();
            window.location.href = window.prevPage;
        }
    });
    
    // Next button - navigate to next page
    $('#nextBtn').on('click', function(e) {
        e.preventDefault();
        
        // Check if any fields are filled
        if (!hasAnyFieldFilled()) {
            showWarningModal();
            return;
        }
        
        // Validate and proceed
        const isValid = validateCurrentStep();
        if (isValid) {
            saveCurrentStepData();
            
            if (currentStep === 5) {
                generateReviewSummary();
            }
            
            if (window.nextPage) {
                window.location.href = window.nextPage;
            }
        } else {
            // Scroll to first error
            const firstError = $('.form-step .error').first();
            if (firstError.length) {
                $('html, body').animate({
                    scrollTop: firstError.offset().top - 100
                }, 500);
            }
        }
    });
    
    // Submit button
    $('#submitBtn').on('click', function(e) {
        e.preventDefault();
        if (validateCurrentStep()) {
            saveCurrentStepData();
            submitForm();
        }
    });
    
    // Conditional fields
    $('#niNumberAvailable').on('change', function() {
        if ($(this).val() === 'Yes') {
            $('#niNumberGroup').show();
            $('#niNumber').prop('required', true);
        } else {
            $('#niNumberGroup').hide();
            $('#niNumber').prop('required', false).val('');
        }
    });
    
    // Conditional conviction details field
    $('#convicted').on('change', function() {
        if ($(this).val() === 'Yes') {
            $('#convictionDetailsGroup').show();
            $('#convictionDetails').prop('required', true);
        } else {
            $('#convictionDetailsGroup').hide();
            $('#convictionDetails').prop('required', false).val('');
        }
    });
    
    // Conditional name change details field
    $('#nameChanged').on('change', function() {
        if ($(this).val() === 'Yes') {
            $('#nameChangeDetailsGroup').show();
            $('#nameChangeDetails').prop('required', true);
        } else {
            $('#nameChangeDetailsGroup').hide();
            $('#nameChangeDetails').prop('required', false).val('');
        }
    });
    
    // Conditional nationality change details field
    $('#nationalityChanged').on('change', function() {
        if ($(this).val() === 'Yes') {
            $('#nationalityChangeDetailsGroup').show();
            $('#nationalityChangeDetails').prop('required', true);
        } else {
            $('#nationalityChangeDetailsGroup').hide();
            $('#nationalityChangeDetails').prop('required', false).val('');
        }
    });
    
    // File upload handlers
    $('#idDocumentUpload, #utilityBillUpload').on('change', function() {
        const $input = $(this);
        const file = this.files[0];
        const previewId = $input.attr('id') + 'Preview';
        const $preview = $('#' + previewId);
        
        if (file) {
            // Validate file size (5MB max)
            const maxSize = 5 * 1024 * 1024; // 5MB in bytes
            if (file.size > maxSize) {
                alert('File size exceeds 5MB. Please choose a smaller file.');
                $input.val('');
                $preview.removeClass('has-file').html('');
                return;
            }
            
            // Validate file type
            const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
            if (!allowedTypes.includes(file.type)) {
                alert('Invalid file type. Please upload a PDF, JPG, or PNG file.');
                $input.val('');
                $preview.removeClass('has-file').html('');
                return;
            }
            
            // Show file preview
            const fileSize = (file.size / 1024 / 1024).toFixed(2) + ' MB';
            const fileName = file.name.length > 30 ? file.name.substring(0, 30) + '...' : file.name;
            
            $preview.addClass('has-file').html(
                '<div class="file-preview-item">' +
                    '<span class="file-preview-name">' + fileName + '</span>' +
                    '<span class="file-preview-size">' + fileSize + '</span>' +
                    '<button type="button" class="file-preview-remove" aria-label="Remove file">&times;</button>' +
                '</div>'
            );
            
            // Remove file handler
            $preview.find('.file-preview-remove').on('click', function() {
                $input.val('');
                $preview.removeClass('has-file').html('');
            });
            
            // Save file info to localStorage
            const fileInfo = {
                name: file.name,
                size: file.size,
                type: file.type,
                lastModified: file.lastModified
            };
            formData[$input.attr('name')] = JSON.stringify(fileInfo);
            localStorage.setItem('formData', JSON.stringify(formData));
        } else {
            $preview.removeClass('has-file').html('');
        }
    });
    
    // Real-time validation
    $('.form-control.required').on('blur', function() {
        validateField($(this));
    });
    
    // Email validation
    $('#email').on('blur', function() {
        validateEmail($(this));
    });
    
    // NI Number validation
    $('#niNumber').on('blur input', function() {
        const $field = $(this);
        let value = $field.val().trim().toUpperCase().replace(/\s/g, '');
        // Auto-format as user types (remove spaces, convert to uppercase)
        if (value && value !== $field.val()) {
            $field.val(value);
        }
        validateNINumber($field);
    });
    
    // Ensure dropdowns are populated when clicked
    $('#countryOfBirth, #country').on('focus click', function() {
        populateCountries();
    });
    
    $('#birthNationality').on('focus click', function() {
        populateBirthNationalities();
    });
    
    // Populate birth nationality dropdown
    function populateBirthNationalities() {
        const $select = $('#birthNationality');
        if ($select.length) {
            const existingOptions = $select.find('option').length;
            const expectedOptions = birthNationalities.length + 1;
            
            // Always populate if we don't have all options
            if (existingOptions !== expectedOptions) {
                const currentValue = $select.val();
                $select.empty();
                $select.append('<option value="">Select...</option>');
                
                // Add all nationalities
                birthNationalities.forEach(function(nationality) {
                    $select.append($('<option></option>').attr('value', nationality).text(nationality));
                });
                
                // Restore value if it was set
                if (currentValue && currentValue !== '' && birthNationalities.indexOf(currentValue) !== -1) {
                    $select.val(currentValue);
                }
                
                // Force a refresh
                $select.trigger('change');
            }
        }
    }
    
    // Populate country dropdowns
    function populateCountries() {
        const countrySelects = ['#countryOfBirth', '#country'];
        
        countrySelects.forEach(function(selector) {
            const $select = $(selector);
            if ($select.length && $select.is(':visible')) {
                // Check if already fully populated
                const existingOptions = $select.find('option').length;
                const expectedOptions = countries.length + 1; // +1 for "Select..." option
                
                // Always populate if we don't have all options
                if (existingOptions !== expectedOptions) {
                    // Save current value before clearing
                    const currentValue = $select.val();
                    
                    // Clear and add "Select..." option
                    $select.empty();
                    $select.append('<option value="">Select...</option>');
                    
                    // Add all countries
                    countries.forEach(function(country) {
                        $select.append($('<option></option>').attr('value', country).text(country));
                    });
                    
                    // Restore value if it was set
                    if (currentValue && currentValue !== '' && countries.indexOf(currentValue) !== -1) {
                        setTimeout(function() {
                            $select.val(currentValue);
                        }, 10);
                    }
                }
            }
        });
    }
    
    // Initialize date pickers
    function initializeDatePickers() {
        const dateFields = ['dateOfBirth', 'passportExpiryDate', 'idIssueDate', 'idExpiryDate'];
        
        dateFields.forEach(function(fieldId) {
            $('#' + fieldId).datepicker({
                dateFormat: 'dd/mm/yy',
                changeMonth: true,
                changeYear: true,
                yearRange: '1900:' + new Date().getFullYear(),
                maxDate: fieldId === 'dateOfBirth' ? '0' : '+10y',
                onSelect: function(dateText, inst) {
                    const $field = $(this);
                    $field.removeClass('error');
                    $field.nextAll('.error-message').remove();
                    $field.siblings('.error-message').remove();
                    // Re-validate the field
                    validateField($field);
                }
            });
        });
    }
    
    // Initialize form - for page-based navigation
    function initializeForm() {
        // Get current step from window object (set in each page)
        if (typeof window.currentStep !== 'undefined') {
            currentStep = window.currentStep;
            localStorage.setItem('currentStep', currentStep);
        }
        
        // Populate countries and birth nationalities when on step 1
        if (currentStep === 1) {
            // Wait a bit for DOM to be ready
            setTimeout(function() {
                populateCountries();
                populateBirthNationalities();
                // Populate again to ensure it worked
                setTimeout(function() {
                    populateCountries();
                    populateBirthNationalities();
                }, 200);
            }, 100);
        } else if (currentStep === 3) {
            // Populate countries for step 3
            setTimeout(function() {
                populateCountries();
                setTimeout(function() {
                    populateCountries();
                }, 200);
            }, 100);
        }
        
        // Update navigation buttons
        updateNavigationButtons();
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Update navigation buttons
    function updateNavigationButtons() {
        // Previous button - show if not on step 1
        if (currentStep > 1) {
            $('#prevBtn').show();
        } else {
            $('#prevBtn').hide();
        }
        
        // Next button - show if not on step 5 or 6
        if (currentStep < 5) {
            $('#nextBtn').show();
            $('#submitBtn').hide();
        } else if (currentStep === 5) {
            $('#nextBtn').hide();
            $('#submitBtn').show();
            generateReviewSummary();
        } else {
            $('#nextBtn').hide();
            $('#submitBtn').hide();
        }
        
        if (currentStep === 6) {
            generateReferenceNumber();
        }
    }
    
    // Validate current step
    function validateCurrentStep() {
        let isValid = true;
        const currentStepForm = $('form');
        
        if (currentStepForm.length) {
            // Clear previous errors completely
            currentStepForm.find('.error-message').remove();
            currentStepForm.find('.form-control').removeClass('error');
            $('.validation-error').remove();
            
            // Validate required fields - only validate visible fields
            currentStepForm.find('.required').each(function() {
                const $field = $(this);
                const fieldId = $field.attr('id');
                
                // Skip hidden fields and conditional fields that aren't needed
                if ($field.is(':visible') && !$field.closest('.form-group').is(':hidden')) {
                    // Skip email, NI Number, and conditional details fields - they're validated separately with specific rules
                    if (fieldId !== 'niNumber' && fieldId !== 'email' && fieldId !== 'convictionDetails' && fieldId !== 'nameChangeDetails' && fieldId !== 'nationalityChangeDetails') {
                        if (!validateField($field)) {
                            isValid = false;
                        }
                    }
                }
            });
            
            // Step-specific validation
            if (currentStep === 1) {
                // Validate email with specific email format validation
                const $emailField = $('#email');
                if ($emailField.length && $emailField.is(':visible')) {
                    const emailValid = validateEmail($emailField);
                    if (!emailValid) isValid = false;
                }
                
                // Only validate NI Number if it's required (when "Yes" is selected and field is visible)
                if ($('#niNumberAvailable').val() === 'Yes' && $('#niNumberGroup').is(':visible')) {
                    const $niField = $('#niNumber');
                    if ($niField.length && $niField.is(':visible')) {
                        const niValid = validateNINumber($niField);
                        if (!niValid) isValid = false;
                    }
                }
            }
            
            // Step 2 specific validation - conditional fields
            if (currentStep === 2) {
                // Only validate conviction details if "Yes" is selected and field is visible
                if ($('#convicted').val() === 'Yes' && $('#convictionDetailsGroup').is(':visible')) {
                    const $convictionField = $('#convictionDetails');
                    if ($convictionField.length && $convictionField.is(':visible')) {
                        if (!validateField($convictionField)) {
                            isValid = false;
                        }
                    }
                }
                
                // Only validate name change details if "Yes" is selected and field is visible
                if ($('#nameChanged').val() === 'Yes' && $('#nameChangeDetailsGroup').is(':visible')) {
                    const $nameChangeField = $('#nameChangeDetails');
                    if ($nameChangeField.length && $nameChangeField.is(':visible')) {
                        if (!validateField($nameChangeField)) {
                            isValid = false;
                        }
                    }
                }
                
                // Only validate nationality change details if "Yes" is selected and field is visible
                if ($('#nationalityChanged').val() === 'Yes' && $('#nationalityChangeDetailsGroup').is(':visible')) {
                    const $nationalityChangeField = $('#nationalityChangeDetails');
                    if ($nationalityChangeField.length && $nationalityChangeField.is(':visible')) {
                        if (!validateField($nationalityChangeField)) {
                            isValid = false;
                        }
                    }
                }
            }
            
            if (!isValid) {
                showValidationError('Please correct the errors before proceeding.');
            } else {
                // Clear any validation error messages if validation passes
                $('.validation-error').remove();
            }
        }
        
        return isValid;
    }
    
    // Validate individual field
    function validateField($field) {
        let isValid = true;
        let value = $field.val();
        
        // Handle different field types
        if ($field.is('select')) {
            value = value || '';
        } else if ($field.hasClass('datepicker')) {
            // Date picker fields - value might be in dd/mm/yy format
            value = value ? value.trim() : '';
        } else {
            value = value ? value.trim() : '';
        }
        
        const isRequired = $field.hasClass('required') || $field.prop('required');
        
        // Clear previous errors
        $field.removeClass('error');
        $field.nextAll('.error-message').remove();
        $field.siblings('.error-message').remove();
        
        // Skip validation if field is hidden (like conditional NI Number when not needed)
        if ($field.is(':hidden') || $field.closest('.form-group').is(':hidden')) {
            return true;
        }
        
        if (isRequired) {
            // For select fields, check if value is empty or "Select..."
            if ($field.is('select')) {
                // Get the actual selected value
                const selectedValue = $field.val();
                if (!selectedValue || selectedValue === '' || selectedValue === 'Select...' || selectedValue === null) {
                    isValid = false;
                    showFieldError($field, 'This field is required.');
                }
            } else if ($field.hasClass('datepicker')) {
                // For date picker fields, check if date is selected
                const dateValue = $field.val() ? $field.val().trim() : '';
                // Date format is dd/mm/yy (8 chars) or dd/mm/yyyy (10 chars) - check for at least 8 characters
                if (!dateValue || dateValue === '' || dateValue === 'Select date' || dateValue.length < 8) {
                    isValid = false;
                    showFieldError($field, 'This field is required.');
                }
            } else if ($field.attr('type') === 'file') {
                // For file input fields
                if (!$field[0].files || $field[0].files.length === 0) {
                    isValid = false;
                    showFieldError($field, 'Please upload a file.');
                }
            } else {
                // For input/textarea fields
                const textValue = $field.val() ? $field.val().trim() : '';
                if (!textValue || textValue === '') {
                    isValid = false;
                    showFieldError($field, 'This field is required.');
                }
            }
        }
        
        return isValid;
    }
    
    // Validate email
    function validateEmail($emailField) {
        const email = $emailField.val() ? $emailField.val().trim() : '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Clear previous errors
        $emailField.removeClass('error');
        $emailField.nextAll('.error-message').remove();
        $emailField.siblings('.error-message').remove();
        
        if (!email || email === '') {
            showFieldError($emailField, 'Email address is required.');
            return false;
        }
        
        if (!emailRegex.test(email)) {
            showFieldError($emailField, 'Please enter a valid email address.');
            return false;
        }
        
        return true;
    }
    
    // Validate NI Number
    function validateNINumber($niField) {
        // Skip validation if field is hidden
        if (!$niField.is(':visible') || $niField.closest('.form-group').is(':hidden')) {
            return true;
        }
        
        let niNumber = $niField.val();
        if (niNumber) {
            niNumber = niNumber.trim().toUpperCase().replace(/\s/g, '');
        } else {
            niNumber = '';
        }
        
        const niRegex = /^[A-Z]{2}[0-9]{6}[A-Z]{1}$/;
        
        // Clear previous errors
        $niField.removeClass('error');
        $niField.nextAll('.error-message').remove();
        $niField.siblings('.error-message').remove();
        
        if ($('#niNumberAvailable').val() === 'Yes') {
            if (!niNumber || niNumber === '') {
                showFieldError($niField, 'National Insurance Number is required.');
                return false;
            }
            
            if (!niRegex.test(niNumber)) {
                showFieldError($niField, 'Please enter a valid National Insurance Number (e.g., AB123456C).');
                return false;
            }
            
            // Update field with formatted value
            $niField.val(niNumber);
        }
        
        return true;
    }
    
    // Show field error
    function showFieldError($field, message) {
        $field.addClass('error');
        // Remove any existing error message first
        $field.nextAll('.error-message').remove();
        $field.siblings('.error-message').remove();
        // Add error message after the field
        $field.after('<span class="error-message">' + message + '</span>');
    }
    
    // Show validation error message
    function showValidationError(message) {
        // Remove existing error message
        $('.validation-error').remove();
        
        // Add error message at top of form container
        const $formContainer = $('.form-container');
        $formContainer.prepend('<div class="validation-error" style="background-color: #ffebee; color: #c62828; padding: 1rem; border-radius: 4px; margin-bottom: 1rem; border-left: 4px solid #c62828;">' + message + '</div>');
        
        // Scroll to error
        setTimeout(function() {
            const $error = $('.validation-error');
            if ($error.length) {
                window.scrollTo(0, $error.offset().top - 100);
            }
        }, 100);
        
        // Remove error after 5 seconds
        setTimeout(function() {
            $('.validation-error').fadeOut(function() {
                $(this).remove();
            });
        }, 5000);
    }
    
    // Save current step data
    function saveCurrentStepData() {
        const stepForm = $('form');
        
        if (stepForm.length) {
            // Collect all form fields
            stepForm.find('input, select, textarea').each(function() {
                const $field = $(this);
                const name = $field.attr('name');
                
                if (name) {
                    if ($field.is(':checkbox') || $field.is(':radio')) {
                        if ($field.is(':checked')) {
                            formData[name] = $field.val();
                        }
                    } else if ($field.attr('type') === 'file') {
                        // File inputs are handled separately in the change event
                        // Just ensure the file info is already saved (done in change handler)
                        if (!formData[name] && $field[0].files && $field[0].files.length > 0) {
                            const file = $field[0].files[0];
                            const fileInfo = {
                                name: file.name,
                                size: file.size,
                                type: file.type,
                                lastModified: file.lastModified
                            };
                            formData[name] = JSON.stringify(fileInfo);
                        }
                    } else {
                        const value = $field.val();
                        formData[name] = value || '';
                    }
                }
            });
            
            localStorage.setItem('formData', JSON.stringify(formData));
        }
    }
    
    // Load form data
    function loadFormData() {
        Object.keys(formData).forEach(function(key) {
            const $field = $('[name="' + key + '"]');
            
            if ($field.length) {
                const value = formData[key];
                if (value || value === '') {
                    if ($field.is('select')) {
                        $field.val(value);
                    } else if ($field.is(':checkbox') || $field.is(':radio')) {
                        $field.filter('[value="' + value + '"]').prop('checked', true);
                    } else {
                        $field.val(value);
                    }
                }
            }
        });
        
        // Trigger conditional fields
        if (formData.niNumberAvailable === 'Yes') {
            $('#niNumberAvailable').val('Yes');
            $('#niNumberGroup').show();
            $('#niNumber').prop('required', true);
        }
        
        if (formData.convicted === 'Yes') {
            $('#convicted').val('Yes');
            $('#convictionDetailsGroup').show();
            $('#convictionDetails').prop('required', true);
        }
        
        if (formData.nameChanged === 'Yes') {
            $('#nameChanged').val('Yes');
            $('#nameChangeDetailsGroup').show();
            $('#nameChangeDetails').prop('required', true);
        }
        
        if (formData.nationalityChanged === 'Yes') {
            $('#nationalityChanged').val('Yes');
            $('#nationalityChangeDetailsGroup').show();
            $('#nationalityChangeDetails').prop('required', true);
        }
        
        // Restore file upload previews
        if (formData.idDocumentUpload) {
            try {
                const fileInfo = JSON.parse(formData.idDocumentUpload);
                const $preview = $('#idDocumentUploadPreview');
                const fileSize = (fileInfo.size / 1024 / 1024).toFixed(2) + ' MB';
                const fileName = fileInfo.name.length > 30 ? fileInfo.name.substring(0, 30) + '...' : fileInfo.name;
                
                $preview.addClass('has-file').html(
                    '<div class="file-preview-item">' +
                        '<span class="file-preview-name">' + fileName + '</span>' +
                        '<span class="file-preview-size">' + fileSize + '</span>' +
                        '<button type="button" class="file-preview-remove" aria-label="Remove file">&times;</button>' +
                    '</div>'
                );
                
                $preview.find('.file-preview-remove').on('click', function() {
                    $('#idDocumentUpload').val('');
                    formData.idDocumentUpload = '';
                    localStorage.setItem('formData', JSON.stringify(formData));
                    $preview.removeClass('has-file').html('');
                });
            } catch (e) {
                // Invalid file info, ignore
            }
        }
        
        if (formData.utilityBillUpload) {
            try {
                const fileInfo = JSON.parse(formData.utilityBillUpload);
                const $preview = $('#utilityBillUploadPreview');
                const fileSize = (fileInfo.size / 1024 / 1024).toFixed(2) + ' MB';
                const fileName = fileInfo.name.length > 30 ? fileInfo.name.substring(0, 30) + '...' : fileInfo.name;
                
                $preview.addClass('has-file').html(
                    '<div class="file-preview-item">' +
                        '<span class="file-preview-name">' + fileName + '</span>' +
                        '<span class="file-preview-size">' + fileSize + '</span>' +
                        '<button type="button" class="file-preview-remove" aria-label="Remove file">&times;</button>' +
                    '</div>'
                );
                
                $preview.find('.file-preview-remove').on('click', function() {
                    $('#utilityBillUpload').val('');
                    formData.utilityBillUpload = '';
                    localStorage.setItem('formData', JSON.stringify(formData));
                    $preview.removeClass('has-file').html('');
                });
            } catch (e) {
                // Invalid file info, ignore
            }
        }
    }
    
    // Get max completed step - not needed for page-based navigation, but kept for compatibility
    function getMaxCompletedStep() {
        // For page-based navigation, we can navigate to any step
        // This function is kept for compatibility but always returns 6
        return 6;
    }
    
    // Generate review summary
    function generateReviewSummary() {
        const $reviewContainer = $('#reviewContainer');
        $reviewContainer.empty();
        
        // Step 1: Personal Information
        $reviewContainer.append(createReviewSection('Personal Information', 1, [
            { label: 'Title', value: formData.title || 'Not provided' },
            { label: 'Forename', value: formData.forename || 'Not provided' },
            { label: 'Middle Name 1', value: formData.middlename1 || 'Not provided' },
            { label: 'Middle Name 2', value: formData.middlename2 || 'Not provided' },
            { label: 'Surname', value: formData.surname || 'Not provided' },
            { label: 'Date of Birth', value: formData.dateOfBirth || 'Not provided' },
            { label: 'Birth Nationality', value: formData.birthNationality || 'Not provided' },
            { label: 'Country of Birth', value: formData.countryOfBirth || 'Not provided' },
            { label: 'Town of Birth', value: formData.townOfBirth || 'Not provided' },
            { label: 'Gender', value: formData.gender || 'Not provided' },
            { label: 'Email Address', value: formData.email || 'Not provided' },
            { label: 'NI Number Available', value: formData.niNumberAvailable || 'Not provided' },
            { label: 'NI Number', value: formData.niNumber || 'Not provided', condition: formData.niNumberAvailable === 'Yes' }
        ]));
        
        // Step 2: Personal History
        $reviewContainer.append(createReviewSection('Personal History', 2, [
            { label: 'Previous Addresses', value: formData.previousAddresses || 'Not provided' },
            { label: 'Employment History', value: formData.employmentHistory || 'Not provided' },
            { label: 'Education Background', value: formData.educationBackground || 'Not provided' },
            { label: 'Name Changed', value: formData.nameChanged || 'Not provided' },
            { label: 'Name Change Details', value: formData.nameChangeDetails || 'Not provided', condition: formData.nameChanged === 'Yes' },
            { label: 'Nationality Changed Since Birth', value: formData.nationalityChanged || 'Not provided' },
            { label: 'Nationality Change Details', value: formData.nationalityChangeDetails || 'Not provided', condition: formData.nationalityChanged === 'Yes' },
            { label: 'Criminal Conviction', value: formData.convicted || 'Not provided' },
            { label: 'Conviction Details', value: formData.convictionDetails || 'Not provided', condition: formData.convicted === 'Yes' }
        ]));
        
        // Step 3: Address Information
        $reviewContainer.append(createReviewSection('Address Information', 3, [
            { label: 'Address Line 1', value: formData.addressLine1 || 'Not provided' },
            { label: 'Address Line 2', value: formData.addressLine2 || 'Not provided' },
            { label: 'Address Line 3', value: formData.addressLine3 || 'Not provided' },
            { label: 'City/Town', value: formData.city || 'Not provided' },
            { label: 'County', value: formData.county || 'Not provided' },
            { label: 'Postcode', value: formData.postcode || 'Not provided' },
            { label: 'Country', value: formData.country || 'Not provided' },
            { label: 'Phone Number', value: formData.phoneNumber || 'Not provided' },
            { label: 'Mobile Number', value: formData.mobileNumber || 'Not provided' }
        ]));
        
        // Step 4: ID Information
        let idDocumentInfo = 'Not provided';
        let utilityBillInfo = 'Not provided';
        
        if (formData.idDocumentUpload) {
            try {
                const fileInfo = JSON.parse(formData.idDocumentUpload);
                idDocumentInfo = fileInfo.name + ' (' + (fileInfo.size / 1024 / 1024).toFixed(2) + ' MB)';
            } catch (e) {
                idDocumentInfo = 'Uploaded';
            }
        }
        
        if (formData.utilityBillUpload) {
            try {
                const fileInfo = JSON.parse(formData.utilityBillUpload);
                utilityBillInfo = fileInfo.name + ' (' + (fileInfo.size / 1024 / 1024).toFixed(2) + ' MB)';
            } catch (e) {
                utilityBillInfo = 'Uploaded';
            }
        }
        
        $reviewContainer.append(createReviewSection('ID Information', 4, [
            { label: 'ID Type', value: formData.idType || 'Not provided' },
            { label: 'ID Document Number', value: formData.idDocumentNumber || 'Not provided' },
            { label: 'Passport Number', value: formData.passportNumber || 'Not provided' },
            { label: 'Passport Expiry Date', value: formData.passportExpiryDate || 'Not provided' },
            { label: 'ID Issue Date', value: formData.idIssueDate || 'Not provided' },
            { label: 'ID Expiry Date', value: formData.idExpiryDate || 'Not provided' },
            { label: 'ID Document Upload', value: idDocumentInfo },
            { label: 'Utility Bill Upload', value: utilityBillInfo }
        ]));
    }
    
    // Create review section
    function createReviewSection(title, stepNumber, items) {
        const $section = $('<div class="review-section"></div>');
        const $header = $('<div class="review-section-header"></div>');
        $header.append('<h3 class="review-section-title">' + title + '</h3>');
        $header.append('<button type="button" class="edit-btn" data-step="' + stepNumber + '">Edit</button>');
        
        $section.append($header);
        
        items.forEach(function(item) {
            if (item.condition !== undefined && !item.condition) {
                return;
            }
            
            const $item = $('<div class="review-item"></div>');
            $item.append('<span class="review-label">' + item.label + ':</span>');
            const displayValue = (item.value || 'Not provided').replace(/\n/g, '<br>');
            $item.append('<span class="review-value">' + displayValue + '</span>');
            $section.append($item);
        });
        
        // Edit button functionality - navigate to the step page
        $section.find('.edit-btn').on('click', function() {
            const stepPages = {
                1: 'step1.html',
                2: 'step2.html',
                3: 'step3.html',
                4: 'step4.html',
                5: 'step5.html',
                6: 'step6.html'
            };
            if (stepPages[stepNumber]) {
                window.location.href = stepPages[stepNumber];
            }
        });
        
        return $section;
    }
    
    // Generate reference number
    function generateReferenceNumber() {
        const refNumber = 'REF-' + Date.now().toString().substr(-8) + '-' + Math.random().toString(36).substr(2, 4).toUpperCase();
        $('#referenceNumber').text(refNumber);
    }
    
    // Submit form
    function submitForm() {
        // Here you would typically send data to a server
        // For now, we'll just show the confirmation
        
        // Save submission status
        localStorage.setItem('submitted', 'true');
        localStorage.setItem('submittedAt', new Date().toISOString());
        
        // Navigate to confirmation page
        window.location.href = 'step6.html';
        
        // Clear form data after successful submission (optional)
        // localStorage.removeItem('formData');
        // localStorage.removeItem('currentStep');
    }
    
    // Close sidebar when clicking outside on mobile
    $(document).on('click', function(e) {
        if ($(window).width() <= 768) {
            if (!$(e.target).closest('.sidebar').length && !$(e.target).closest('#headerToggle').length && !$(e.target).is('#headerToggle')) {
                if ($('.sidebar').hasClass('open')) {
                    $('.sidebar').removeClass('open');
                    $('body').removeClass('sidebar-open');
                }
            }
        }
    });
    
    // Handle window resize
    $(window).on('resize', function() {
        if ($(window).width() > 768) {
            $('.sidebar').removeClass('open');
        }
    });
    
    // Support button handlers
    $('.support-tab, .support-btn').on('click', function() {
        alert('Support feature - This would typically open a support chat or contact form.');
    });
    
    // Modal handlers
    $('#modalOkBtn, #closeModal').on('click', function() {
        hideWarningModal();
    });
    
    // Close modal when clicking outside
    $('#warningModal').on('click', function(e) {
        if ($(e.target).is('#warningModal')) {
            hideWarningModal();
        }
    });
    
    // Close modal with ESC key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $('#warningModal').hasClass('show')) {
            hideWarningModal();
        }
    });
    
    // Check if any fields are filled in the current step
    function hasAnyFieldFilled() {
        const currentStepForm = $('form');
        
        if (!currentStepForm.length) {
            return true; // No form means no validation needed (e.g., review/confirmation pages)
        }
        
        let hasFilledField = false;
        
        currentStepForm.find('input, select, textarea').each(function() {
            const $field = $(this);
            
            // Skip hidden fields and buttons
            if ($field.is(':hidden') || $field.closest('.form-group').is(':hidden')) {
                return;
            }
            
            if ($field.attr('type') === 'hidden' || $field.attr('type') === 'button' || $field.attr('type') === 'submit') {
                return;
            }
            
            let value = $field.val();
            
            // Handle different field types
            if ($field.is('select')) {
                value = value || '';
                // Check if a valid option is selected (not empty and not "Select...")
                if (value && value !== '' && value !== 'Select...') {
                    hasFilledField = true;
                    return false; // Break the loop
                }
            } else {
                // For input/textarea fields
                value = value ? value.trim() : '';
                if (value && value !== '' && value !== 'Select date') {
                    hasFilledField = true;
                    return false; // Break the loop
                }
            }
        });
        
        return hasFilledField;
    }
    
    // Show warning modal
    function showWarningModal() {
        $('#warningModal').addClass('show');
    }
    
    // Hide warning modal
    function hideWarningModal() {
        $('#warningModal').removeClass('show');
    }
});

