var _ = require('lodash');

var MembershipApplication = function(args) {
  _.extend(this, args);
}

MembershipApplication.prototype.nameIsValid = function() {
  return this.first && this.last;
};
MembershipApplication.prototype.emailIsValid = function() {};
MembershipApplication.prototype.ageIsValid = function() {};
MembershipApplication.prototype.heightIsValid = function() {};
MembershipApplication.prototype.weightIsValid = function() {};
MembershipApplication.prototype.isValid = function() {
  return this.nameIsValid();
};

module.exports = MembershipApplication;
