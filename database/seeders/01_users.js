


exports.seed = async function (knex) {

  // create admin role
  const rolesModel = 'directus_roles';
  const roleId = '00b0cc22-cd2f-4156-9520-e7c50553981c';
  const roleName = 'Admin';
  const getAdminRole = await knex.select().table(rolesModel).where('name', roleName).first();

  if (typeof getAdminRole === 'undefined') {
    await knex(rolesModel).insert([
      {
        id: roleId,
        name: "Admin",
        icon: 'supervised_user_circle',
        description: 'Controls what API data available for admin user',
        app_access: true
      },
    ]);
  }

  // create admin user
  const usersModel = "directus_users";
  const userId = '4f65e726-6393-4b3e-b8a9-9958ab7a8e6d';
  const firstName = "John";
  const lastName = "Pixel";
  const email = "admin@mysite.com";
  const getAdminUser = await knex.select().table(usersModel).where('role', roleId).first();

  if (typeof getAdminUser === 'undefined') {
    await knex(usersModel).insert([
      {
        id: userId,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: '$argon2id$v=19$m=65536,t=3,p=4$pPAVkZoi6rzu4WFfc7L/JQ$tfmCkeNdyAoQ8oe7ifpRViF18BnpfGPyuIVfzgmadJE',
        role: roleId
      },
    ]);
  }
};
