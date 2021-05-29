# diplom-ktkt-release

docker-composer up
docker exec -it docker_database_1 bash

sudo docker exec -i docker_database_1  mysqldump -u ktkt -pq  ktkt -h 127.0.0.1 -P3306  > /home/danil/ktkt-dump22.sql
sudo docker exec -i docker_database_1  mysqldump -u ktkt -pq  ktkt -h 127.0.0.1 -P3306  < /home/danil/ktkt-dump2.sql


docker exec -i docker_database_1 mysql -uktkt -pq ktkt < data.sql
docker exec -i docker_database_1 mysql -uktkt -pq ktkt > data2.sql

