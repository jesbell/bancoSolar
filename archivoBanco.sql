-- Crea la base de datos: 

CREATE DATABASE bancosolar;

-- conectate a tu bd bancosolar y Crea tabla usuario: 

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY, 
    nombre VARCHAR(50),
    balance FLOAT CHECK (balance >= 0)
    );


-- Crea tabla de transferencia: 

CREATE TABLE transferencias (
    id SERIAL PRIMARY KEY, 
    emisor INT, 
    receptor INT, 
    monto FLOAT, 
    fecha TIMESTAMP, 
    FOREIGN KEY (emisor) REFERENCES usuarios(id), 
    FOREIGN KEY (receptor) REFERENCES usuarios(id)
    );

-- Opcionalmente puedes insertar estos usuarios con sus montos,
-- modificarlos o crear otros distintos: 
INSERT INTO usuarios (nombre, balance) VALUES
('Juan', 1000.50),
('María', 750.25),
('Carlos', 300.75),
('Ana', 1500.00);