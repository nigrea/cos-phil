module.exports = {
  friendlyName: "Logout",

  description: "Logout user.",

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    return exits.success();
  }
};
