CREATE TABLE `user_inventory2` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`item_id` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`name` VARCHAR(255) NOT NULL DEFAULT '0' COLLATE 'utf8_general_ci',
	`information` VARCHAR(255) NOT NULL DEFAULT '0' COLLATE 'utf8_general_ci',
	`slot` INT(11) NOT NULL,
	`dropped` TINYINT(4) NOT NULL DEFAULT '0',
	`creationDate` BIGINT(20) NOT NULL DEFAULT '0',
	`quality` FLOAT NULL DEFAULT '100',
	`quantity` INT(11) NULL DEFAULT '1',
	`createdAt` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `idx_user_inventory2_createdAt` (`createdAt`) USING BTREE,
	INDEX `idx_user_inventory2_dropped` (`dropped`, `createdAt`) USING BTREE,
	INDEX `idx_user_inventory2_dropped_created` (`dropped`, `createdAt`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1154483
;


CREATE TABLE `__objects` (
	`id` INT(255) NOT NULL AUTO_INCREMENT,
	`model` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`coordinates` LONGTEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`metaData` LONGTEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`randomId` INT(255) NULL DEFAULT '0',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1154482
;
