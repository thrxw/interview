export default class SearchService {
  constructor(url) {
    this.searchUrl = url;
    this.users = [];
  }

  findBlueUser() {
    var greenUser = null;

    this.users.forEach((currentUser) => {
      if (currentUser.team === 'blue') {
        greenUser = currentUser;
      }
    });

    return greenUser;
  }

  findGreenUser() {
    var blueUser = null;

    this.users.forEach((currentUser) => {
      if (currentUser.team === 'green') {
        blueUser = currentUser;
      }
    });

    return blueUser;
  }

  getUserSalary(user) {
    if (user.salary && user.salary >= 0) {
      return user.salary
    } else {
      return 0
    }
  }

  async getUsers() {
    this.users = await fetch('/api/search/' + this.searchUrl);

    return this.users;
  }
}
