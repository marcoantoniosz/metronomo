import { Model, INTEGER, STRING, NOW, DATE } from 'sequelize';
import db from '.';

class Lp extends Model {
  id!: number;
  title!: string;
  image!: string;
  artist!: string;
  genre!: string;
  description!: string;
  price!: number;
  created: Date;
  updated: Date;
}

Lp.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  image: {
    type: STRING,
    allowNull: false,
  },
  artist: {
    type: STRING,
    allowNull: false,
  },
  genre: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: INTEGER,
    allowNull: false,
  },
  created: {
    type: DATE,
    allowNull: false,
    defaultValue: NOW,
  },
  updated: {
    type: DATE,
    allowNull: false,
    defaultValue: NOW,
  },
}, {
  sequelize: db,
  modelName: 'lp',
  timestamps: false,
});

export default Lp;
