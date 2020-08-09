import Axios from "Axios";


export default {
    // Gets all users
    getUsers: function() {
      return Axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
  };