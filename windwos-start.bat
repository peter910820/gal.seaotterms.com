@echo off

call yarn build

set NITRO_PORT=3005
set NITRO_HOST=127.0.0.1

node .output/server/index.mjs

pause
