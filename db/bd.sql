create database evaluacion
go

create table Usuario(
	id int PRIMARY KEY IDENTITY(1,1),
	nombre nvarchar(100),
	email nvarchar(100) NOT NULL,
	telefono nvarchar(20),
	fecha_registro DATE DEFAULT GETDATE() 
)

select * from usuario

INSERT INTO USUARIO (nombre, email, telefono) 
VALUES 
	('Carlos Alberto', 'cpingo@gmail.com', '933457246'),
	('Jose Fabrizio', 'jpingo@gmail.com', '933457245')
