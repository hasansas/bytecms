
exports.seed = async function (knex) {
  const roleId = '00b0cc22-cd2f-4156-9520-e7c50553981c';
  const permissionsModel = 'directus_permissions';

  // posts permissions
  const postCollection = 'posts'
  await knex(permissionsModel).where('collection', postCollection).where('role', roleId).del();
  await knex(permissionsModel).insert([
    { role: roleId, collection: postCollection, action: 'create', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: postCollection, action: 'read', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: postCollection, action: 'update', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: postCollection, action: 'delete', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: postCollection, action: 'share', permissions: {}, validation: {}, fields: '*' },
    { collection: postCollection, action: 'read', permissions: {}, validation: {}, fields: '*' },
  ]);

  // categories permissions
  const categoriesCollection = 'categories'
  await knex(permissionsModel).where('collection', categoriesCollection).where('role', roleId).del();
  await knex(permissionsModel).insert([
    { role: roleId, collection: categoriesCollection, action: 'create', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: categoriesCollection, action: 'read', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: categoriesCollection, action: 'update', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: categoriesCollection, action: 'delete', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: categoriesCollection, action: 'share', permissions: {}, validation: {}, fields: '*' },
    { collection: categoriesCollection, action: 'read', permissions: {}, validation: {}, fields: '*' },
  ]);

  // authors permissions
  const authorsCollection = 'authors'
  await knex(permissionsModel).where('collection', authorsCollection).where('role', roleId).del();
  await knex(permissionsModel).insert([
    { role: roleId, collection: authorsCollection, action: 'create', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: authorsCollection, action: 'read', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: authorsCollection, action: 'update', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: authorsCollection, action: 'delete', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: authorsCollection, action: 'share', permissions: {}, validation: {}, fields: '*' },
    { collection: authorsCollection, action: 'read', permissions: {}, validation: {}, fields: '*' },
  ]);

  // authors permissions
  const filesCollection = 'directus_files'
  await knex(permissionsModel).where('collection', filesCollection).where('role', roleId).del();
  await knex(permissionsModel).insert([
    { role: roleId, collection: filesCollection, action: 'create', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: filesCollection, action: 'read', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: filesCollection, action: 'update', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: filesCollection, action: 'delete', permissions: {}, validation: {}, fields: '*' },
    { role: roleId, collection: filesCollection, action: 'share', permissions: {}, validation: {}, fields: '*' },
  ]);
};
