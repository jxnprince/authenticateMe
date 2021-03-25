'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) throw new Error('Cannot be an email.');
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [3, 256] }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: { len: [60, 60] }
    }
  },
  { defaultScope: {
      attributes: {
        exclude : ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: { attributes: { exclude: ['hashedPassword'] } },
      loginUser: { attributes: {} }
    },
    });
  
/*||=========================INSTANCE METHODS===============================||*/

  User.associate = function(models) {
    // associations can be defined here
  };


//returns an obj with the User instance info that is safe to save to a JWT
  
  User.prototype.toSafeObject = function () {
    const { id, username, email } = this
      return { id, username, email };
  }


//Accepts a password string and return true if there is a match 
//with the User instance's hashedPassword, otherwise will return false.
  
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }


//Accepts an id and will return a User with that id using the 'currentUser' scope
  
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };
  
/*Will accept an object with a credential and password key and find a User with 
a username or email with the specified credential using the loginUser scope. 
If a user is found, then validate the password by passing it into the 
instance's .validatePassword method. 
If the password is valid,then return the user with the currentUser scope.*/
  
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: { [Op.or]: { username: credential, email: credential } }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

/*Will accept an object with a username, email and password key, 
Hash the password, create a User with the username, email, and hashedPassword, &
return the created user with the currentUser scope. */

  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({ username, email, hashedPassword });
      return await User.scope('currentUser').findByPk(user.id);
  };
  
  return User;
};