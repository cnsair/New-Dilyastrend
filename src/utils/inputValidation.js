export const name_validation = {
  autoComplete: "off",
  name: "name",
  type: "text",
  id: "name",
  placeholder: "name",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const password_validation = {
  autoComplete: "off",
  name: "password",
  type: "password",
  id: "password",
  placeholder: "password",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const phone_validation = {
  autoComplete: "off",
  name: "phone",
  type: "phone",
  id: "phone",
  placeholder: "phone",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const email_validation = {
  autoComplete: "off",
  name: "email",
  type: "email",
  id: "email",
  placeholder: "email address",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "not valid",
    },
  },
};

export const username_validation = {
  autoComplete: "off",
  name: "username",
  type: "text",
  id: "username",
  placeholder: "username",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};
