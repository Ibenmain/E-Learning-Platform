DOCKER_COMPOSE = docker-compose
PROJECT_NAME = E-Learning-Platform
WAIT_COMMAND = sh -c "until nc -z backend 8000; do echo 'Waiting for backend...'; sleep 1; done"

.PHONY: build up down restart logs backend-logs frontend-logs db-logs migrate createsuperuser clean help

build:
	@echo "Building Docker images..."
	$(DOCKER_COMPOSE) build

up:
	@echo "Starting Docker containers..."
	$(DOCKER_COMPOSE) up -d
	@echo "Waiting for backend to be ready..."
	$(DOCKER_COMPOSE) exec backend $(WAIT_COMMAND)
	@echo "Running migrations..."
	$(DOCKER_COMPOSE) exec backend python manage.py migrate

down:
	@echo "Stopping Docker containers..."
	$(DOCKER_COMPOSE) down

restart: down up

logs:
	@echo "Viewing logs for all services..."
	$(DOCKER_COMPOSE) logs -f

backend-logs:
	@echo "Viewing logs for backend service..."
	$(DOCKER_COMPOSE) logs -f backend

frontend-logs:
	@echo "Viewing logs for frontend service..."
	$(DOCKER_COMPOSE) logs -f frontend

db-logs:
	@echo "Viewing logs for database service..."
	$(DOCKER_COMPOSE) logs -f db

migrate:
	@echo "Running Django migrations..."
	$(DOCKER_COMPOSE) exec backend python manage.py migrate

createsuperuser:
	@echo "Creating Django superuser..."
	$(DOCKER_COMPOSE) exec backend python manage.py createsuperuser

clean:
	@echo "Cleaning up Docker containers and volumes..."
	$(DOCKER_COMPOSE) down -v --remove-orphans

help:
	@echo "Available commands:"
	@echo "  build              Build Docker images"
	@echo "  up                 Start Docker containers and run migrations"
	@echo "  down               Stop Docker containers"
	@echo "  restart            Restart Docker containers"
	@echo "  logs               View logs for all services"
	@echo "  backend-logs       View logs for the backend service"
	@echo "  frontend-logs      View logs for the frontend service"
	@echo "  db-logs            View logs for the database service"
	@echo "  migrate            Run Django migrations"
	@echo "  createsuperuser    Create a Django superuser"
	@echo "  clean              Remove Docker containers, volumes, and orphans"
	@echo "  help               Show this help menu"
