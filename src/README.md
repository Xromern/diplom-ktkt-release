# diplom-ktkt-release

docker-composer up


sudo mysqldump -u ktkt -pq  ktkt -h 127.0.0.1 -P3306 --column-statistics=0  > /home/danil/ktkt-dump.sql
sudo mysqldump -u ktkt -pq  ktkt -h 127.0.0.1 -P3306 --column-statistics=0  < /home/danil/ktkt-dump.sql
