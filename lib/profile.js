/**
 * Parse profile.
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }
  
  var profile = {};
  profile.id = json.user.id;
  profile.first_name = json.user.first_name;
  profile.last_name = json.user.last_name;
  profile.email = json.user.email;
  profile.avatar = json.user.avatar_thumb;

  
  return profile;
};
