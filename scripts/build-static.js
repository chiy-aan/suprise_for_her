import { copyFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const outputDirectory = resolve('dist');
rmSync(outputDirectory, { recursive: true, force: true });
mkdirSync(outputDirectory, { recursive: true });

for (const file of [
  'index.html',
  'index-standalone.html',
  'Naan Un Azhaginile BGM.mp3',
]) {
  copyFileSync(resolve(file), resolve(outputDirectory, file));
}
