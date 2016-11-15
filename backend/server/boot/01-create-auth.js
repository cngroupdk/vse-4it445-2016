'use strict';

module.exports = function(app) {
  app.dataSources.mysqlds.autoupdate(['user', 'Role', 'ACL', 'RoleMapping', 'AccessToken'], function(err) {
    const { User, Role, RoleMapping } = app.models;

    User.count(function(err, count) {
      if (count > 0) { return; }
      User.create([
        {
          username: 'root',
          email: 'root@vse.handson.pro',
          password: 'root',
          emailVerified: true,
        },
        {
          username: 'user',
          email: 'user@vse.handson.pro',
          password: 'user',
          emailVerified: true,
        },
      ], function(err, [rootUser, someUser]) {
        if (err) { throw err; }
        console.log('Created user:', rootUser);
        console.log('Created user:', someUser);

        Role.create({
          name: 'admin'
        }, function(err, adminRole) {
          if (err) { throw err; }
          console.log('Created role:', adminRole);

          adminRole.principals.create({
            principalType: RoleMapping.USER,
            principalId: rootUser.id
          }, function(err, principal) {
            if (err) { throw err; }
            console.log('Created principal:', principal);
          });
        });
      });
    });
  });
};
