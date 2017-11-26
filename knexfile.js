{
  development : {
    client : 'pg',
    connection : 'postgres://localhost/devvy',
    migrations : {
      directory : __dirname + '/server/migrations'
    },
    seeds : {
      directory : __dirname + 'server/seeders'
    },
  },
  production : {
    client : 'pg',
    connection : 'postgres://localhost/devvy/',
    migrations : {
      directory : __dirname + '/server/migrations'
    },
    seeds : {
      directory : __dirname + 'server/seeders'
    }
  }
}