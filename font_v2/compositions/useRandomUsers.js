// composables/useRandomUsers.js
import { ref } from 'vue';
import { faker } from '@faker-js/faker';

export const useRandomUsers = (minUsers = 50) => {
  const users = ref([]);

  const generateRandomUsername = () => {
    return faker.random.alphaNumeric(6);
  };

  const generateRandomAmount = () => {
    return faker.datatype.number({ min: 1000, max: 100000 });
  };

  const generateRandomUsers = () => {
    for (let i = 0; i < minUsers; i++) {
      const username = generateRandomUsername();
      const amount = generateRandomAmount();
      users.value.push({ username, amount });
    }
  };

  generateRandomUsers();

  return {
    users,
  };
};
