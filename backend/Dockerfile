# Docker Official Image Python
FROM python:3.10-slim

# Set working directory in the container
WORKDIR /app

# Copy dependencies to container
COPY requirements.txt /app 

# Run command to upgrade pip latest
RUN pip install --upgrade pip setuptools

RUN apt-get update \
    && apt-get install -y ca-certificates \
    && update-ca-certificates

RUN pip config set global.trusted-host \
    "pypi.org files.pythonhosted.org pypi.python.org" \
    --trusted-host=pypi.python.org \
    --trusted-host=pypi.org \
    --trusted-host=files.pythonhosted.org

# Install dependencies from requirements.txt
RUN pip install -r requirements.txt

# Copy code
COPY . /app

#Set variable evirnment
ENV FLASK_APP=app
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=a5000
ENV FLASK_ENV=development

# Expose the port from container
EXPOSE 5000

#Command for running the application
CMD ["flask","run", "--debug"]

