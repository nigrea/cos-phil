var bcrypt = require("bcrypt");

module.exports = {
  friendlyName: "Login",

  description: "Creates the users session",

  inputs: {
    password: {
      description: "The password of the user to login.",
      type: "string",
      required: true
    },
    username: {
      description: "The username of the user to login.",
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
    let user = await User.findOne({ username: inputs.username });

    if (user) {
      if (bcrypt.compareSync(inputs.password, user.password)) {
        this.req.session.userId = user.id;
        return exits.success();
      } else {
        exits.badRequest({ errors: ["Wrong password provided"] });
      }
    } else {
      exits.badRequest({ errors: ["User doesn't exist"] });
    }
  }
};
