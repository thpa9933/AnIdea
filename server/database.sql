CREATE DATABASE anIdea;

CREATE TABLE service(
    id SERIAL PRIMARY KEY,
    userName VARCHAR(255),
    serviceName VARCHAR(255),
    description VARCHAR(1023),
    scope VARCHAR(1023),
    audiance VARCHAR(1023),
    email VARCHAR(255)
);