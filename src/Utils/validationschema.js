import validator from "validator";

export const createuservalidationschema = {
  name: {
    notEmpty: { errorMessage: "username cannot be empty" },
    isLength: {
      options: { min: 3, max: 32 },
      errorMessage: "Name length must be between 3 and 32",
    },
    custom: {
      options: (value) => /^[a-zA-Z0-9\u0621-\u064A ]{3,32}$/.test(value),
      errorMessage: "Name must contain only letters, numbers, and spaces",
    },
    trim: true,
    escape: true,
    customSanitizer: {
      options: (value) => value.replace(/\s+/g, " "), // يحوّل مسافات كتير لمسافة وحدة
    },
  },

  email: {
    notEmpty: { errorMessage: "email cannot be empty" },
    custom: {
      options: (value) => validator.isEmail(value),
      errorMessage: "Invalid email format",
    },
    trim: true,
    customSanitizer: {
      options: (value) => validator.normalizeEmail(value),
    },
  },

  address: {
    notEmpty: { errorMessage: "address cannot be empty" },
    isLength: {
      options: { min: 3, max: 100 },
      errorMessage: "Address length must be between 3 and 100",
    },
    custom: {
      options: (value) =>
        /^[a-zA-Z0-9\u0621-\u064A\s.,\-\/]{3,100}$/.test(value),
      errorMessage: "Address contains invalid characters",
    },
    trim: true,
    escape: true,
    customSanitizer: {
      options: (value) => value.replace(/<[^>]*>?/gm, ""), // يشيل أي HTML tags
    },
  },
};
