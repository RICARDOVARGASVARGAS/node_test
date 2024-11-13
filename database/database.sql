drop database cursos;

create database cursos;

use cursos;

create table
    estudiantes (
        id int auto_increment,
        dni varchar(64),
        nombre varchar(64),
        apellido varchar(64),
        email varchar(128),
        primary key (id)
    );

create table
    profesores (
        id int auto_increment,
        dni varchar(64),
        nombre varchar(64),
        apellido varchar(64),
        email varchar(128),
        profesion varchar(128),
        telefono varchar(64),
        primary key (id)
    );

create table
    cursos (
        id int auto_increment,
        nombre varchar(64),
        descripcion text,
        profesor_id int,
        primary key (id)
    );

create table
    cursos_estudiantes (
        cursos_id int,
        estudiante_id int,
        primary key (cursos_id, estudiante_id)
    );

alter table cursos.cursos add constraint cursos_profesores_fk foreign key (profesor_id) references cursos.profesores (id);

alter table cursos.cursos_estudiantes add constraint cursos_estudiantes_cursos_fk foreign key (cursos_id) references cursos.cursos (id);

alter table cursos.cursos_estudiantes add constraint cursos_estudiantes_estudiantes_fk foreign key (estudiante_id) references cursos.estudiantes (id);