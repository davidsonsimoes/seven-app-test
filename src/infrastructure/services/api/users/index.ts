import axios from 'axios';

const apiUsers = {
  getAll: async () => {
    const response = await axios.get(
      'https://random-persons.herokuapp.com/users'
    );

    return response.data.data;
  }
};

export default apiUsers;
