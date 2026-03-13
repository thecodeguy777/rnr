const { spawn } = require('child_process');

const child = spawn('node', [
  'C:\\Users\\mary\\repos\\rnr-gold-jewelry\\node_modules\\nuxt\\bin\\nuxt.mjs',
  'dev',
  '--port', '3000'
], {
  cwd: 'C:\\Users\\mary\\repos\\rnr-gold-jewelry',
  stdio: 'inherit',
  env: { ...process.env }
});

child.on('error', (err) => {
  console.error('Failed to start:', err);
  process.exit(1);
});

child.on('close', (code) => {
  process.exit(code);
});
