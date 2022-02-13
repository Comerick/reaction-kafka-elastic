const { KafkaClient, Producer, ProduceRequest } = require('kafka-node') ;

const kafkaHost = 'localhost:9092';

function publish(topic, message) {
    // The client connects to a Kafka broker
    const client = new KafkaClient({ kafkaHost });
    // The producer handles publishing messages over a topic
    const producer = new Producer(client);

    // First wait for the producer to be initialized
    producer.on(
        'ready',
        () => {
            // Update metadata for the topic we'd like to publish to
            client.refreshMetadata(
                [topic],
                (err) => {
                    if (err) {
                        throw err;
                    }

                    console.log(`Sending message to ${topic}: ${message}`);
                    producer.send(
                        [{ topic, messages: [message] }],
                        (err, result) => {
                            console.log(err || result);
                            process.exit();
                        }
                    );
                }
            );
        }
    );

    // Handle errors
    producer.on(
        'error',
        (err) => {
            console.log('error', err);
        }
    );
}
const topic = 'test'
const message = {_id: '111', title: 'kafka-client'}

publish(topic, message);