class User {
    constructor(name, lastName) {
      this.name = name;
      this.lastName = lastName;
      this.avatar = '../src/assets/userAvatar.png'
      this.nation = 'Brasil'
    }
  }

  const userMock = new User('Camila', 'Soares');

  export default userMock;