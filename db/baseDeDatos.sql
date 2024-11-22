CREATE SCHEMA proyecto;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL ,
contrasenia VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP);

INSERT INTO usuarios VALUES(DEFAULT, "Victoria", "vickyyoffe@gmail.com", "123", DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES(DEFAULT, "Julieta", "julimiel@gmail.com", "456", DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES(DEFAULT, "Pilar", "piliantunez@gmail.com", "789", DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES(DEFAULT, "Brian", "brian@gmail.com", "brian", DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES(DEFAULT, "Luis", "luis@gmail.com", "luis", DEFAULT,DEFAULT,DEFAULT);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT(10) UNIQUE,
nombre VARCHAR(250),
foto VARCHAR(250),
descripcion VARCHAR(250),
comentario VARCHAR(250) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP);

INSERT INTO productos VALUES(DEFAULT, 1, "Iphone 14", "iphone-14-128gb-midnight.jpg","El iPhone 14 es un smartphone de Apple lanzado en 2022, que ofrece mejoras en la cámara, un rendimiento eficiente con el chip A15 Bionic y una pantalla OLED Super Retina.", DEFAULT,DEFAULT,DEFAULT);
INSERT INTO productos VALUES(DEFAULT, 5, "Apple tv", "Apple_TV_4K_PDP_Image_Position-3_USBC_LAES_R1_v1.jpg","El Apple TV es un dispositivo de streaming que permite acceder a películas, series, apps y servicios de Apple, como Apple TV+, además de otros como Netflix y Disney+. Ofrece contenido en 4K HDR y opciones de control mediante Siri.", DEFAULT,DEFAULT,DEFAULT);
INSERT INTO productos VALUES(DEFAULT, 2, "MACBOOK PRO M3", "macbooks-pro14-2-1.jpg","La Mac Pro M3 es la potente computadora de escritorio de Apple, equipada con el chip M3 de alto rendimiento. Diseñada para profesionales, ofrece velocidad, capacidad de expansión y eficiencia energética.", DEFAULT,DEFAULT,DEFAULT);
INSERT INTO productos VALUES(DEFAULT, 3, "Airpods MAX", "1366_2000.jpg","Los AirPods Max son audífonos de diadema de Apple con audio de alta fidelidad, cancelación activa de ruido y audio espacial. Ofrecen un sonido envolvente, diseño elegante y comodidad para escuchar durante largas horas.", DEFAULT,DEFAULT,DEFAULT);
INSERT INTO productos VALUES(DEFAULT, 4, "Ipad PRO", "ipad_pro.jpg","El iPad Pro es la tablet avanzada de Apple con pantalla Liquid Retina, chip M2, compatibilidad con Apple Pencil y Magic Keyboard. Ideal para tareas creativas y profesionales por su rendimiento y versatilidad.", DEFAULT,DEFAULT,DEFAULT);

ALTER TABLE productos
ADD comentarios VARCHAR(250)