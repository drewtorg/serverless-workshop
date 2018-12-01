let initialized = false;

const init = async () => {
  if (initialized) {
    return;
  }

  process.env.restaurants_api =
    "https://3gkp5e89v7.execute-api.eu-west-1.amazonaws.com/dev/restaurants";
  process.env.restaurants_table = "restaurants-dev-drewtorg";
  process.env.restaurant_notification_topic = "restaurants-dev-drewtorg";
  process.env.order_events_stream = "orders-dev-drewtorg";
  process.env.AWS_REGION = "eu-west-1";
  process.env.TEST_ROOT =
    "https://3gkp5e89v7.execute-api.eu-west-1.amazonaws.com/dev";

  initialized = true;
};

module.exports = {
  init
};
