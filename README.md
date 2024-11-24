 
### `SEMS-IoT Electricity Meter API`
    A Node.js application built with TypeScript, Sequelize ORM, and PostgreSQL to manage IoT electricity meters and user access. This API provides endpoints for user registration, meter management, and notification toggling.

### `Features`
    User Management: Register users with email, password, and FCM tokens.
    Meter Management: Add or delete meters for users with access control.


### `Dependencies`
    node version = 20.12.2
    Npm Dependencies    
        "@types/express": "^5.0.0",
        "bcryptjs": "^2.4.3",
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

### `enviroment variabels`  
    add database url to .env  
    DATABASE_URL=postgres://username:password@localhost:5432/databasename

### `Start application`  
    npx ts-node src/index.ts

### `Start seeder`  
    npx ts-node src/seed.ts


### `Project Structure`

    project-root/
    │
    ├── src/
    │   ├── config/
    │   │   └── database.ts       # Sequelize database connection setup
    │   │
    │   ├── controllers/
    │   │   ├── userController.ts # User-related API logic
    │   │   └── meterController.ts# Meter-related API logic
    │   │
    │   ├── models/
    │   │   ├── User.ts           # User model
    │   │   ├── ElectricityMeter.ts # Electricity Meter model
    │   │   └── UserMeterAccess.ts # User-to-Meter access model
    │   │
    │   ├── routes/
    │   │   ├── userRoutes.ts     # User-related routes
    │   │   └── meterRoutes.ts    # Meter-related routes
    │   │
    │   ├── middleware/
    │   │   └── validation.ts     # Validation middleware
    │   │
    │   ├── utils/
    │   │   └── bcrypt.ts         # Password hashing and validation utility
    │   │
    │   ├── app.ts                # Express app configuration
    │   ├── server.ts             # Application entry point
    │
    ├── migrations/               # Sequelize migrations for database schema
    ├── .env                      # Environment variables for database and secrets
    ├── package.json              # Dependencies and scripts
    ├── tsconfig.json             # TypeScript configuration
    └── README.md                 # Project documentation
