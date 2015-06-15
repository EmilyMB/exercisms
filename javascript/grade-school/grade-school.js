var School = function() {
  this.roster = function() {
    return Db;
  };

  this.add = function(student, grade) {
    Db[grade] = (Db[grade] || []).concat(student).sort();
  };

  this.grade = function(grade) {
    return (Db[grade] || []);
  };

  var Db = {};

};

module.exports = School;
