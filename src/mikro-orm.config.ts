import { Options } from '@mikro-orm/core';
import { Task } from './entities/task.entity';
import { MongoDriver } from '@mikro-orm/mongodb';
const config: Options = {
  entities: [Task],        // Entity của bạn
  dbName: 'tien-db',       // tên db MongoDB
  driver: MongoDriver,
  clientUrl: 'mongodb://dbadmin:Ad2ubCq8ScsF7crt@118.70.109.40:29017/?authSource=admin',
    debug: true,             // bật log truy vấn (tuỳ chọn
};

export default config;
