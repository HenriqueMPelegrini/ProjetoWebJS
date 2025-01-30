CREATE TABLE Cliente(
	id int not null AUTO_INCREMENT,
    cpf varchar(14) not null,
    nome varchar(100) not null,
    sobrenome varchar(100) not null,
    endereco varchar(100) not null,
    cidade varchar(100) not null,
    estado varchar(2) not null,
    cep varchar(10) not null,
    PRIMARY KEY(id)
); 