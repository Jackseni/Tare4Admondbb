import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'connex',
  connector: 'mssql',
  url: 'mssql://Maria:Maria@DESKTOP-Maria/produccion',
  host: 'DESKTOP-K9PGG23',
  port: 1433,
  user: 'Maria',
  password: 'Maria',
  database: 'produccion'
};

/*const config = {
  name: 'conn',
  connector: 'mssql',
  url: 'mssql://talivan00220_SQLLogin_1:f37356i7k6@produccion00220.mssql.somee.com/produccion00220',
  host: 'produccion00220.mssql.somee.com',
  port: 1433,
  user: 'talivan00220_SQLLogin_1',
  password: 'f37356i7k6',
  database: 'produccion00220'
};*/


// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConnDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'connex';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conn', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
