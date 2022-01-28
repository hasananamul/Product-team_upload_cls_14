/**
 * define all HTML document by function
 * @param {*} value
 * @returns
 */
function $(value) {
  return document.querySelector(value);
}

/**
 * Function for set data to LS
 * @param {*} name
 * @param {*} value
 */
function set_data(name, value) {
  let convert_data = JSON.stringify(value);
  return localStorage.setItem(name, convert_data);
}

/**
 * Function for get data to LS
 * @param {*} name
 * @returns
 */
function get_data(name) {
  let revert_data = localStorage.getItem(name);
  return JSON.parse(revert_data);
}
