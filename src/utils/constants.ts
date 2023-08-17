export const GATEWAY_PORT = 9001;
export const USER_SERVICE_PORT = 9002;
export const FRONTEND_SERVICE_PORT = 3000;

export const GATEWAY_HOST_URL = `http://localhost:${GATEWAY_PORT}`;
export const DASHBOARD_URL = `http://localhost:${FRONTEND_SERVICE_PORT}/dashboard`;

export const KAFKA_BROKER_ADDRESS = 'http://localhost:9092';
export const KAFKA_CLIENT_ID = 'user-service-app';
export const KAFKA_GROUP_ID = 'user-service-group';

// Kafka
export const SEND_WELCOME_MAIL = 'send-welcome-mail';

// Db
export const ADMIN_ROLE_ID = '1';
export const USER_ROLE_ID = '2';

export const jwtConstants = {
  secret:
    'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};
