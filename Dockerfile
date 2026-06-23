# Lean static deploy for a small (2 GB) self-hosted Zeabur node.
# We do NOT build the site on the server. dist/ is built locally
# (npm run build) and committed; this image only copies it into Caddy.
# Result: deploy = pull a ~45 MB image + a file copy. Almost no memory.
FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY dist/ /usr/share/caddy/
EXPOSE 80
