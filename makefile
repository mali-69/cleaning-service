clean:
	docker volume rm $$(docker volume ls -q) || :

start:
	docker-compose up -d

stop:
	docker-compose down --remove-orphans

restart: stop clean start

