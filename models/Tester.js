const mongoose = require('mongoose');
const { isEmail, isMobilePhone } = require("validator");
const appTesterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"], // Providing a custom error message
            trim: true, // Removes any whitespace at the beginning or end
            minlength: [3, "Name must be at least 3 characters long"], // Minimum length validation
          },
      
          phone: {
            type: String,
            required: [true, "Phone is required"],
            unique: true,
            validate: [isMobilePhone, "Please provide a valid phone number"],
            trim: true,
          },
        
        email: { 
            type: String, 
            required: [true, 'Email is required'], 
            unique: true,
            lowercase: true, // Convert email to lowercase before saving
            validate: [isEmail, 'Please provide a valid email address'], // Using the 'validator' library for email validation
            trim: true, // Removes any whitespace at the beginning or end
        },
        
        isActive: {
            type: Boolean,
          },

          
    sessionValidityExpriryDate: {
        type: Date,
      },

        sessionCreatedAt: {
            type: Date, // Using Date type instead of String for dates
            required: [true, 'Session creation date is required'],
            default: Date.now, // Automatically set to current date
        },
    },
    { 
        collection: 'testers', 
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

// IFilter by email
appTesterSchema.index({ email: 1 });

const model = mongoose.model('AppTesterData', appTesterSchema);
module.exports = model;
