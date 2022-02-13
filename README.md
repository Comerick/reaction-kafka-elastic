# reaction-kafka-elastic

Setup docker-compose.yml based on the article https://dzone.com/articles/implementing-mongodb-to-elastic-search-7x-data-pip


Use this instead:
```javascript
rs.initiate({_id: "replica0", members:[{_id: 0, host: "mongodb:27017"}]})

```

Connect to connect-kafka container
```javascript
docker exec -it connect bash
```
Execute the following:
```javascript
./bin/kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic test
   ```

REACTION docs
https://docs.reactioncommerce.com/docs/3.4.0/developer-kafka-streams#docsNav
https://docs.reactioncommerce.com/docs/2.0.0/event-hooks
https://github.com/reactioncommerce/api-plugin-accounts/blob/trunk/src/startup/afterShopCreate.js

UTIL
https://github.com/edenhill/kcat
###WORKING, hurray!