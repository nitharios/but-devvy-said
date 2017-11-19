\c nniosco;

DROP DATABASE IF EXISTS nigel;
DROP USER IF EXISTS nigel_manager;

CREATE USER nigel_manager;
CREATE DATABASE nigel OWNER nigel_manager;

\c nigel;