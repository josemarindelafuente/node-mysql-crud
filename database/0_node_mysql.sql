-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-08-2022 a las 13:40:25
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `0_node_mysql`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `rol` varchar(50) NOT NULL DEFAULT 'suscriptor',
  `pass` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `rol`, `pass`) VALUES
(1, 'jmarin0', 'jmarin@gmail.com', 'admin', '$2a$10$lB7bFkmtGBHS8Ge9HL5JheY6.gB7frhKk.n4OOlD2JSvVFUscdjlm'),
(2, 'usuario1', 'usuario1@gmail.com', 'suscriptor', '$2a$10$lB7bFkmtGBHS8Ge9HL5JheY6.gB7frhKk.n4OOlD2JSvVFUscdjlm'),
(3, 'usuario2', 'usuario2@gmail.com', 'suscriptor', '$2a$10$lB7bFkmtGBHS8Ge9HL5JheY6.gB7frhKk.n4OOlD2JSvVFUscdjlm'),
(4, 'usuario3', 'usuario3@gmail.com', 'suscriptor', '$2a$10$lB7bFkmtGBHS8Ge9HL5JheY6.gB7frhKk.n4OOlD2JSvVFUscdjlm'),
(6, 'usuario4', 'usuario4@gmail.com', 'Suscriptor', '$2a$10$lB7bFkmtGBHS8Ge9HL5JheY6.gB7frhKk.n4OOlD2JSvVFUscdjlm'),
(7, 'usuario5', 'usuario5@gmail.com', 'Suscriptor', '$2a$10$lB7bFkmtGBHS8Ge9HL5JheY6.gB7frhKk.n4OOlD2JSvVFUscdjlm'),
(10, 'Jose marin de la fuente', 'jose.marindelafuente@gmail.com', 'suscriptor', '$2a$10$lB7bFkmtGBHS8Ge9HL5JheY6.gB7frhKk.n4OOlD2JSvVFUscdjlm');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
