# 🚀 Fusion Enterprise Support Platform

An enterprise-grade Discord ticket system with AI classification, SLA tracking, analytics dashboard, audit logging, and full microservices architecture.

---

## 🏗 Architecture Overview

This system is built using a microservices architecture powered by:

- Discord Bot (Ticket creation & management)
- REST API Service
- AI Classification Service
- Real-time WebSocket Service
- SLA Worker Service
- Next.js Admin Dashboard
- MongoDB (Database)
- Redis (Caching & Rate Limiting)
- NGINX (Reverse Proxy)
- Docker (Containerization)

---

## 🧠 Core Features

### 🎟 Ticket System
- Slash command ticket panel
- One ticket per user enforcement
- Claim system
- Permission-based visibility
- Auto tagging
- AI auto-response
- AI ticket classification
- Auto-priority detection
- SLA timers
- Escalation workflows
- Transcript generation (brand themed)
- Auto close after inactivity

---

### 📊 Admin Dashboard
- Secure Discord OAuth login
- Role-based dashboard permissions
- Live ticket feed via WebSockets
- Analytics charts
- Staff performance tracking
- SLA countdown widgets
- Ticket stats overview
- Full audit log viewer

---

### 🔐 Security & Enterprise Controls
- Redis rate limiting
- JWT authentication
- RBAC permission middleware
- Audit logging system
- Admin role management
- Microservice separation
- NGINX reverse proxy

---

## 📂 Repository Structure
fusion-enterprise-support/

│

├── docker-compose.yml

├── nginx/

├── shared/

├── services/

│ ├── bot-service/

│ ├── api-service/

│ ├── ai-service/

│ ├── realtime-service/

│ └── worker-service/

└── web-panel/

---

## 🛠 Requirements

- Node.js v20+
- Docker & Docker Compose
- Discord Developer Application
- OpenAI API Key
- VPS or Cloud Server (recommended)

---

## ⚙ Environment Setup

Copy `.env.example` to `.env` and configure:

DISCORD_TOKEN=

DISCORD_CLIENT_ID=

DISCORD_CLIENT_SECRET=

OPENAI_KEY=

MONGO_URI=mongodb://mongodb:27017/fusion

REDIS_URL=redis://redis:6379

JWT_SECRET=

---

## 🐳 Running With Docker (Recommended)

Build and start everything:

docker compose up --build

---

Access:

- Web Panel → http://localhost
- API → http://localhost/api
- WebSocket → ws://localhost/socket

---

## 🧩 Services Overview

### 🤖 Bot Service
Handles:
- Ticket creation
- Channel permissions
- Claim system
- Transcript saving
- Logging
- AI integration

---

### 🌐 API Service
Handles:
- Analytics endpoints
- Audit logs
- RBAC enforcement
- Admin data
- Dashboard data

---

### 🧠 AI Service
Handles:
- Ticket classification
- Auto priority detection
- AI auto-response
- Category prediction

---

### 🔄 Realtime Service
Handles:
- WebSocket connections
- Live dashboard updates
- Ticket status broadcasting

---

### ⏱ Worker Service
Handles:
- SLA deadline checks
- Escalation workflows
- Auto-priority adjustments

---

## 📊 Analytics Capabilities

- Tickets by priority
- Tickets by category
- Staff resolution times
- SLA breach tracking
- Escalation metrics
- Open vs closed trends

---

## 🔐 Role-Based Permissions

Admin roles supported:

- owner
- admin
- manager
- support

Permissions include:

- VIEW_ANALYTICS
- MANAGE_ROLES
- VIEW_TICKETS
- EDIT_SLA
- VIEW_AUDIT_LOGS
- CONFIGURE_AI

---

## 🚀 Production Deployment

Recommended Setup:

1. VPS (Ubuntu 22.04)
2. Docker + Docker Compose
3. NGINX with SSL (Certbot)
4. Domain name
5. Cloud MongoDB (optional for scale)
6. Managed Redis (optional for scale)

---

## 🔒 Scaling Options

For high scale:

- Deploy MongoDB cluster
- Use Redis cluster
- Load balance API service
- Separate WebSocket service nodes
- Add Kubernetes
- Add CI/CD pipeline

---

## 📈 Comparable Enterprise Systems

Architecture level comparable to:

- Zendesk
- Freshdesk
- Intercom

---

## 🧪 Development Mode

To run services individually:

cd services/api-service

npm install

node index.js

Repeat for other services.

---

## 🧾 License

MIT License

---

## 👨‍💻 Author

Fusion Studios  
Enterprise Discord Support Platform

---

## 💡 Future Expansion Ideas

- Multi-tenant SaaS mode
- Stripe billing integration
- White-label client dashboards
- AI learning model from ticket history
- Advanced sentiment analysis
- Automated staffing recommendations

---

# 🎯 Ready For Production

This repository is designed to be:

- Scalable
- Secure
- Enterprise-ready
- AI-powered
- Fully containerized
- Real-time capable
