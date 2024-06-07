### Installs the initial Directus system tables on an empty database
`npx directus bootstrap`

### Apply the generated snapshot
`npx directus schema apply database/snapshot/snapshot.yaml -y`

### Run Seeder
`knex seed:run` 

## Development
### Generate a snapshot of data model 
`npx directus schema snapshot --yes ./database/snapshot/snapshot.yaml`