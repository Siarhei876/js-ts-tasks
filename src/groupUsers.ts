/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {

  const result: Record<'employees' | 'contractors', Array<unknown>> = {
    employees: [],
    contractors: [],
  }
  
  users.forEach((el) => {
  
    if ( typeof el === 'object' && el !== null ){
      const teamMember = el as { [key: string]: unknown }
      if (teamMember['type'] === 'EMPLOYEE') {     
        result.employees.push(teamMember);
      } else if (teamMember['type'] === 'CONTRACTOR') {
        result.contractors.push(teamMember);
      }
    }
  });

  return result;
};
