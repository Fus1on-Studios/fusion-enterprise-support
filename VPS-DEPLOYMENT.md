# 🚀 Fusion Enterprise Support Platform
## Production VPS Deployment Guide

This guide walks you through deploying your platform to a production Ubuntu VPS.

---

# 🖥 Recommended VPS Specs

Minimum:
- 4GB RAM
- 2 vCPU
- 80GB SSD

Recommended:
- 8GB RAM
- 4 vCPU
- 160GB SSD

Providers:
- DigitalOcean
- Vultr
- Hetzner
- AWS EC2

---

# 1️⃣ Initial Server Setup (Ubuntu 22.04)

SSH into your server:

ssh root@your-server-ip

Update system:

sudo apt update && sudo apt upgrade -y

Install required packages:

sudo apt install -y curl git ufw

---

# 2️⃣ Install Docker

curl -fsSL https://get.docker.com | bash

Enable Docker:

sudo systemctl enable docker
sudo systemctl start docker

Install Docker Compose:

sudo apt install docker-compose-plugin -y

Verify:

docker --version
docker compose version

---

# 3️⃣ Configure Firewall

Allow SSH:

sudo ufw allow OpenSSH

Allow HTTP & HTTPS:

sudo ufw allow 80
sudo ufw allow 443

Enable firewall:

sudo ufw enable

---

# 4️⃣ Clone Your Repository

cd /opt
git clone https://github.com/YOUR_USERNAME/fusion-enterprise-support.git
cd fusion-enterprise-support

---

# 5️⃣ Configure Environment Variables

Copy example file:

cp .env.example .env

Edit:

nano .env

Set production values:

DISCORD_TOKEN=
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
OPENAI_KEY=
MONGO_URI=mongodb://mongodb:27017/fusion
REDIS_URL=redis://redis:6379
JWT_SECRET=super-long-random-string

Save & exit.

---

# 6️⃣ Build & Start Production

docker compose up -d --build

Check running services:

docker ps

---

# 7️⃣ Set Up Domain (Optional but Recommended)

Point your domain A record to your VPS IP.

Example:
support.yourdomain.com → VPS_IP

---

# 8️⃣ Install SSL (HTTPS)

Install Certbot:

sudo apt install certbot python3-certbot-nginx -y

Run:

sudo certbot --nginx -d support.yourdomain.com

Auto-renew:

sudo systemctl enable certbot.timer

---

# 9️⃣ Production Optimization

Edit docker-compose.yml to add restart policies:

restart: always

Enable log rotation:

Create /etc/docker/daemon.json:

{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}

Restart Docker:

sudo systemctl restart docker

---

# 🔟 Monitoring (Recommended)

Install htop:

sudo apt install htop

Check containers:

docker stats

Optional:
- Add Prometheus
- Add Grafana
- Add uptime monitoring

---

# 🔒 Security Hardening (Important)

Disable root login:

sudo nano /etc/ssh/sshd_config

Set:

PermitRootLogin no

Restart SSH:

sudo systemctl restart ssh

Create a new sudo user instead.

---

# 🔁 Updating the Platform

To deploy updates:

cd /opt/fusion-enterprise-support
git pull
docker compose down
docker compose up -d --build

---

# 📈 Scaling Options

For high traffic:

- Move MongoDB to managed cluster
- Use Redis cluster
- Separate WebSocket service
- Add load balancer
- Deploy via Kubernetes

---

# 🧠 AI Cost Optimization

If ticket volume is high:
- Cache AI classifications in Redis
- Limit auto-response tokens
- Add confidence thresholds

---

# 🛑 Troubleshooting

View logs:

docker compose logs -f

Restart specific service:

docker compose restart api-service

Rebuild one service:

docker compose up -d --build api-service

---

# ✅ Deployment Complete

Your system should now be live at:

http://your-domain.com

Dashboard → /
API → /api
WebSockets → /socket

---

# 🎯 Production Ready

You now have:

✔ Enterprise microservices
✔ AI classification
✔ SLA automation
✔ Real-time dashboard
✔ Role-based permissions
✔ Audit logging
✔ Dockerized deployment
✔ NGINX reverse proxy
✔ HTTPS enabled

---

Fusion Enterprise Support Platform
Production Deployment Complete 🚀
