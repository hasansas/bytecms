
exports.seed = async function (knex) {
  const presetsModel = 'directus_presets';

  // posts presets
  const postCollection = 'posts'
  const postsPreset = {
    collection: postCollection,
    layout_query: {
      tabular: { fields: ["image.$thumbnail", "title", "author", "category", "publish_date", "status"] }
    },
    layout_options: {
      tabular: {
        widths: { "image.$thumbnail": 52, "title": 364, "author": 205, "publish_date": 273, "status": 91 }, "align": { "status": "left" }
      }
    },
    icon: 'bookmark',
  }
  await knex(presetsModel).where('collection', postCollection).del();
  await knex(presetsModel).insert([postsPreset]);

  // categories presets
  const categoriesCollection = 'categories'
  const categoriesPreset = {
    collection:categoriesCollection,
    layout_query: { "tabular": { "fields": ["image.$thumbnail", "name", "slug", "description"] } },
    layout_options: { "tabular": { "widths": { "image.$thumbnail": 52, "name": 176, "slug": 191, "description": 471 } } },
    icon: 'bookmark',
  }
  await knex(presetsModel).where('collection', categoriesCollection).del();
  await knex(presetsModel).insert([categoriesPreset]);

  // authors presets
  const authorsCollection = 'authors'
  const authorsPreset = {
    collection: authorsCollection,
    layout_query: { "tabular": { "fields": ["image.$thumbnail", "name", "title", "company"] } },
    layout_options: { "tabular": { "widths": { "image.$thumbnail": 52, "name": 282, "title": 171, "company": 176 } } },
    icon: 'bookmark',
  }
  await knex(presetsModel).where('collection', authorsCollection).del();
  await knex(presetsModel).insert([authorsPreset]);
};
