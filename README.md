## Quick Start
1. Clone the repository
2. Install the dependencies `npm install`
3. Copy `.env.example` `.env` and populate it with the correct credentials and settings
4. Installs the initial Directus system tables on an empty database `npx directus bootstrap`
5. Apply the generated snapshot `npx directus schema apply database/snapshot/snapshot.yaml -y`
6. Run seeder `knex seed:run`
7. Run the application in development mode with `npm run dev`


## Deploy
#### Process Manager (PM2)
1. `sudo npm install pm2 -g` - Install PM2
2. `pm2 startup` - Auto Start pm2 on boot
3. `npm run pm2:start` - Start an app
4. `pm2 save` - Freeze a process list for automatic respawn

#### Enable Port
1. `sudo ufw status` - Check ufw firewall
2. `sudo ufw allow {port}` - Open port

## Development
### Generate a snapshot of data model 
`npx directus schema snapshot --yes ./database/snapshot/snapshot.yaml`