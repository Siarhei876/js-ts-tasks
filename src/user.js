class User {

  #firstName
  #secondName
  #age
  
  constructor( firstName, secondName, age ) {

    if ( typeof firstName !== 'string' ) {
      throw new Error( "Wrong first name provided" )
    } else this.#firstName = firstName

    if ( typeof secondName !== 'string' ) {
      throw new Error( "Wrong second name provided" )
    } else this.#secondName = secondName
    
    if ( typeof age !== 'number' ) {
      throw new Error( "Wrong age name provided" )
    } else this.#age = age
  }

  set firstName( newFirstName ){
  
    if ( typeof newFirstName !== 'string' ){
      throw new Error( `Wrong first name provided: ${ typeof newFirstName }` )
    } else this.#firstName = newFirstName
  }
  set secondName( newSecondName ){
    
    if ( typeof newSecondName !== 'string' ){
      throw new Error( `Wrong second name provided: ${ typeof newSecondName }` )
    } else this.#secondName = newSecondName
  }

  get name(){
    return this.#firstName + " " + this.#secondName
  }
  get age(){
    return this.#age
  }

  introduce(){
    return `My name is ${this.name}, I'm ${this.#age}`
  }
  celebrateBirthday(){
    this.#age++
  }

}


/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function( firstName, secondName, age ){
  return new User( firstName, secondName, age );
}

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function ( data ) {
  return data.map( ( el ) => new User( el.firstName, el.secondName, el.age ) )
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.reduce( ( acc, user ) => user.age == age ? acc.concat([user]) : acc, [])
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function ( TestUtils ) {

  return ( users ) => users.sort( TestUtils.sortComparatorByAge )
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  return users.map( ( user, i ) => {
    i % 2 == 0 && user.celebrateBirthday()
    return user
  } )
};
