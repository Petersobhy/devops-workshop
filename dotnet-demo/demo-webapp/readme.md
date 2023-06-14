touch dockerfile

dotnet new webapp -f net6.0 -n demo-app

# Same directory as the docker file
docker build -t demo-webapp .

# Solution root directory
docker build -f ./demo-webapp/Dockerfile -t demo-webapp ./demo-webapp