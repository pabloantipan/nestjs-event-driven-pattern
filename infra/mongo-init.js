db = db.getSiblingDB('test2');

db.createUser({
  user: 'pablo',
  pwd: '123pablo',
  roles: [{ role: 'userAdminAnyDatabase', db: 'test2' }],
});