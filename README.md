# reaction-kafka-elastic


Setup docker-compose.yml based on the article https://dzone.com/articles/implementing-mongodb-to-elastic-search-7x-data-pip


Use this instead:
```javascript
rs.initiate({_id: "replica0", members:[{_id: 0, host: "localhost:27017"}]})

```

Connect to connect-kafka container
```javascript
docker exec -it reaction-kafka-connect bash
```
Execute the following:
```javascript
./bin/kafka-topics.sh --create --zookeeper 172.17.0.2:2181 --replication-factor 1 --partitions 1 --topic test
```

###WORKING, hurray!