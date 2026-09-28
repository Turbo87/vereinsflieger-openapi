import { copyFile, mkdir, rm } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'dist');
const swaggerAssets = dirname(require.resolve('swagger-ui-dist/package.json'));

await rm(output, { recursive: true, force: true });
await mkdir(output);
await Promise.all([
  copyFile(join(root, 'site/index.html'), join(output, 'index.html')),
  copyFile(join(root, 'openapi.yaml'), join(output, 'openapi.yaml')),
  ...[
    'swagger-ui.css',
    'swagger-ui-bundle.js',
    'swagger-ui-bundle.js.LICENSE.txt',
    'LICENSE',
    'NOTICE',
  ].map((name) => copyFile(join(swaggerAssets, name), join(output, name))),
]);
