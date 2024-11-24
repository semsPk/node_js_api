 

### `Dependencies`   
        "@types/express": "^5.0.0",
        "cors": "^2.8.5",
        "dotenv": "^16.4.5",
        "express": "^4.21.1",
        "pg": "^8.13.1",
        "pg-hstore": "^2.3.4",
        "reflect-metadata": "^0.2.2",
        "sequelize": "^6.37.5",
        "ts-node": "^10.9.2",
        "typeorm": "^0.3.20",
        "typescript": "^5.6.3"

        node version = 20.12.2  


### `Start application`  
    add database url to .env  
    DATABASE_URL=postgres://username:password@localhost:5432/databasename

    command
    npx ts-node src/index.ts

### `Start seeder`  
    npx ts-node src/seed.ts


