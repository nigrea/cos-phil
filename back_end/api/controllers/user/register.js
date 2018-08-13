module.exports = {
  friendlyName: "Register",

  description: "Register user.",

  inputs: {
    email: {
      description: "The email of the user to create.",
      type: "string",
      required: true
    },
    password: {
      description: "The password of the user to create.",
      type: "string",
      required: true
    },
    username: {
      description: "The username of the user to create.",
      type: "string",
      required: true
    }
  },

  exits: {
    badRequest: {
      description: "Invalid data",
      responseType: "badRequest"
    }
  },

  fn: async function(inputs, exits) {
    let oldUser = await User.findOne({
      or: [{ email: inputs.email }, { username: inputs.username }]
    });

    if (oldUser) {
      return exits.badRequest({ errors: ["User already exists"] });
    }

    let newUser = await User.create(inputs);

    return exits.success(newUser);
  }
};
