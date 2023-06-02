import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const archivo = './db/data.json';

export const guardarDB = (data) => {
  writeFileSync(archivo, JSON.stringify(data));
};

export const leerDB = () => {
  if (!existsSync(archivo)) {
    return null;
  }

  const info = readFileSync(archivo, { encoding: 'utf-8' });
  const data = JSON.parse(info);
  return data;
};
