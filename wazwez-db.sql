-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 30 Jul 2022 pada 09.18
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wazwez`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `SubTasks`
--

CREATE TABLE `SubTasks` (
  `subtask_id` int(11) NOT NULL,
  `task_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` enum('ONGOING','DONE') DEFAULT 'ONGOING'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `SubTasks`
--

INSERT INTO `SubTasks` (`subtask_id`, `task_id`, `name`, `status`) VALUES
(1, 1, 'Belajar DDL', 'ONGOING'),
(2, 1, 'Belajar DQL', 'ONGOING'),
(3, 1, 'Belajar DML', 'ONGOING');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Tasks`
--

CREATE TABLE `Tasks` (
  `task_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `deadline_at` date DEFAULT NULL,
  `status` enum('ONGOING','DONE') DEFAULT 'ONGOING'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `Tasks`
--

INSERT INTO `Tasks` (`task_id`, `user_id`, `name`, `description`, `deadline_at`, `status`) VALUES
(1, 1, 'Belajar SQL', '', '2022-07-23', 'ONGOING'),
(2, 1, 'Belajar Database', '', '2022-07-23', 'DONE'),
(3, 2, 'Belajar HTML CSS', '', '2022-07-23', 'DONE'),
(4, 1, 'Belajar PHP MySql', NULL, NULL, 'ONGOING');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Users`
--

CREATE TABLE `Users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `Users`
--

INSERT INTO `Users` (`user_id`, `name`, `avatar`) VALUES
(1, 'Fatur', 'https://cdn-icons-png.flaticon.com/512/168/168726.png'),
(2, 'Fatir', 'https://cdn-icons-png.flaticon.com/512/168/168732.png');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `SubTasks`
--
ALTER TABLE `SubTasks`
  ADD PRIMARY KEY (`subtask_id`),
  ADD KEY `task_id` (`task_id`);

--
-- Indeks untuk tabel `Tasks`
--
ALTER TABLE `Tasks`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `Tasks`
--
ALTER TABLE `Tasks`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `SubTasks`
--
ALTER TABLE `SubTasks`
  ADD CONSTRAINT `subtasks_ibfk_1` FOREIGN KEY (`task_id`) REFERENCES `Tasks` (`task_id`);

--
-- Ketidakleluasaan untuk tabel `Tasks`
--
ALTER TABLE `Tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
