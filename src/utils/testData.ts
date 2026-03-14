
// Static users for login tests
export const staticUsers = {
  validUser: {
    email: 'testPenny@gmail.com', // pre-created test account
    password: 'mok2411994'
  },
  invalidUsers: [
    { email: 'wrongemail@example.com', password: 'Test@1234', description: 'Wrong email' },
    { email: 'testuser@example.com', password: 'WrongPass123', description: 'Wrong password' },
    // { email: '', password: '', description: 'Empty email & password' }
  ]
};


