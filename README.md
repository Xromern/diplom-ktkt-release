# diplom-ktkt-release

docker-composer up

docker exec -it docker_database_1 bash

docker exec -it docker_php-fpm_1 bash


sudo docker exec -i docker_database_1  mysqldump -u root -pq  ktkt -h 127.0.0.1 -P3306  > /home/danil/ktkt-dump22.sql
sudo docker exec -i docker_database_1  mysqldump -u root -pq  ktkt -h 127.0.0.1 -P3306  < /home/danil/ktkt-dump2.sql
sudo docker exec -i docker_database_1  mysqldump -u root -pq  ktkt -h 127.0.0.1 -P3306  > ktkt-dump4.sql
sudo docker exec -i docker_database_1  mysqldump -u root -pq  ktkt -h 127.0.0.1 -P3306  < ktkt-dump3.sql


docker exec -i docker_database_1 mysql -uroot -pq ktkt < /home/dump/ktkt-dump3.sql
docker exec -i docker_database_1 mysql -uktkt -pq ktkt > data4.sql

Перейти в контейнер
docker-c

1. Create .env (.env.example) in /docker

1. docker exec -it docker_database_1 bash
2. mysql -uroot -pq ktkt < /home/dump/ktkt-dump3.sql
