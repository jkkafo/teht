drop DATABASE if EXISTS shoppinglist;

CREATE DATABASE shoppinglist;

use shoppinglist;

CREATE TABLE item (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(255) NOT NULL,
    amount SMALLINT UNSIGNED NOT NULL
);

INSERT INTO item (description, amount) VALUES ('Tiest item', 1);