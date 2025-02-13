type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const existingUser: User = {
    name: "MyName",
    surname: "MySurname",
    email: "",
    password: "",
  };
  return { ...initialValues, ...existingUser };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
