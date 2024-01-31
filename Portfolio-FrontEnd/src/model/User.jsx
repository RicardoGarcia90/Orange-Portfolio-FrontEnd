class User {
    constructor(name, lastName) {
      this.name = name;
      this.lastName = lastName;
      this.country = 'Brasil';
      this.avatar = '../src/assets/userAvatar.png'
      this.projects = [];
    }
  }

  const userMock = new User('Camila', 'Soares');

  export default userMock;