# Platziverse - db

## Usage

``` js
const setupDatabase =  require('platziverse-db')

setupDatabase(config).then(db => {
    const { Agent, Metric } = db
}).catch( err => console.log(err))
```

## Create Database
```sql
CREATE ROLE desarrollador WITH LOGIN PASSWORD '1234560';
CREATE DATABASE platziverse;
GRANT ALL PRIVILEGES ON DATABASE platziverse TO desarrollador;
```