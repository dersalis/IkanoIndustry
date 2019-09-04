# Ikano Industry - Web
Ikano Industry Web


# Docker - polecenia odpalać w katalogu projektu angular (tam gdzie Dockerfile):


docker build -f Dockerfile -t iiweb:0.1 dist/web/
docker run -d -p 8080:80 --name iiweb iiweb:0.1