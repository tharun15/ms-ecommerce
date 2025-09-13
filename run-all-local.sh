#!/bin/bash

# Check dependencies
command -v python3 >/dev/null 2>&1 || { echo >&2 "python3 is not installed. Install it with: sudo apt install python3"; exit 1; }
command -v pip3 >/dev/null 2>&1 || { echo >&2 "pip3 is not installed. Install it with: sudo apt install python3-pip"; exit 1; }
command -v mvn >/dev/null 2>&1 || { echo >&2 "maven is not installed. Install it with: sudo apt install maven"; exit 1; }
command -v java >/dev/null 2>&1 || { echo >&2 "java is not installed. Install it with: sudo apt install default-jdk"; exit 1; }

# Run Python microservice
cd python-service
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
nohup python3 app.py &
echo "Python microservice is running at http://localhost:5000"
cd ..

# Run Java microservice
cd java-service
mvn clean package
nohup java -jar target/java-service-0.0.1-SNAPSHOT.jar &
echo "Java microservice is running at http://localhost:8080"
cd ..

echo "Both microservices are running locally."
