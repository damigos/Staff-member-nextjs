export const getFilteredItem = function (stack, property, matcher) {
    if (Array.isArray(stack)) {
      const value = stack.filter((element) => element[property] == matcher);
      if (value?.length) {
        return value[0];
      }
    }
    return null;
  };
  
  
  export const formDataToObject = function (formdata) {
    const obj = {};
    formdata.forEach((value, key) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (!Array.isArray(obj[key])) {
          obj[key] = [obj[key]];
        }
        obj[key].push(value);
      } else {
        obj[key] = value;
      }
    });
    return obj;
  };
  
  
  
  export const fetchAPI = async function (url, options = {}) {
    if (!url) {
      throw new Error("no url was provided");
    }
    const headers = {
      headers: { Accept: "application/json", "Content-Type": "application/json" },
    };
    const response = await fetch(url, {
      ...headers,
      ...options,
    });
    if (!response.ok) {
      throw new Error("Something was wrong");
    }
    const result = await response.json();
    return result;
  };
  
  export const BUSINESS_URL = `${process.env.API_URL}/api/business`;
  export const STAFF_URL = `${process.env.API_URL}/api/staff`;
  export const USER_URL = `${process.env.API_URL}api/users`;
  