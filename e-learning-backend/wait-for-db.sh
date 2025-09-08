#!/bin/sh

# Exit on error
set -e

echo "Waiting for database $DB_HOST:$DB_PORT..."

while ! nc -z $DB_HOST $DB_PORT; do
  sleep 0.5
done

echo "Database is ready!"

# Apply migrations
python manage.py makemigrations
python manage.py migrate

# Start Django
exec "$@"
