
exports.seed = async function (knex) {
  // restet extensions
  const extensionModel = 'directus_extensions'
  await knex(extensionModel).del();

  // add default settings
  const settingsModel = "directus_settings";
  const getSettings = await knex.select().table(settingsModel);
  const settings = Object.values(JSON.parse(JSON.stringify(getSettings)))

  if (settings.length > 0) {
    return
  }

  const moduleBar = [
    { "type": "module", "id": "content", "enabled": true },
    { "type": "module", "id": "users", "enabled": true },
    { "type": "module", "id": "files", "enabled": true },
    { "type": "module", "id": "insights", "enabled": true },
    { "type": "module", "id": "settings", "enabled": true, "locked": true }
  ]

  // Inserts seed entries
  return knex(settingsModel).insert([
    {
      project_name: 'ByteCMS',
      project_color: "#6644FF",
      default_appearance: 'light',
      default_theme_light: 'Directus Color Match',
      module_bar: JSON.stringify(moduleBar)
    },
  ]);
};
