fx_version "cerulean"

version '0.0.1'

game "gta5"

server_script '@np-lib/server/sv_rpc.js'
server_script '@np-lib/server/sv_rpc.lua'
server_script '@np-lib/server/sv_rpcother.lua'
server_script '@np-lib/server/sv_sql.js'
server_script 'server/*.js'
server_script 'server/*.lua'

client_script '@npx/client/lib.js'
client_script '@np-lib/client/cl_rpc.js'
client_script '@np-lib/client/cl_poly.js'
client_script 'client/*.js'
client_script 'client/*.lua'

lua54 'yes'
