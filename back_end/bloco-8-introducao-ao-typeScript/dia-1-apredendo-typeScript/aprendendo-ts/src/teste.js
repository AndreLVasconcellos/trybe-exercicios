const users = require('./dataOne');

const IsMostActiveUser = (name, users) => {
    const mostActiveUser = users.reduce((prev, curr) => {
      console.log('prev', prev.repositories);
      console.log('curr', curr.repositories);
      const total = prev.repositories + curr.repositories;
      console.log(total);
      return prev.repositories > curr.repositories ? prev : curr
    });
    return mostActiveUser.name === name;
  };

console.log(IsMostActiveUser('Capi Etheriel', users));
