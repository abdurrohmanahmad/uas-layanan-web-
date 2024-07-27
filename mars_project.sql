-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2024 at 01:44 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mars_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `keberangkatan`
--

CREATE TABLE `keberangkatan` (
  `nama_agen_kapal` varchar(255) NOT NULL,
  `perusahaan_agen_kapal` varchar(255) NOT NULL,
  `imo_number` varchar(255) NOT NULL,
  `nama_kapal` varchar(255) NOT NULL,
  `kebangsaan_kapal` varchar(255) NOT NULL,
  `data_cru_indonesia` int(11) NOT NULL,
  `data_cru_asing` int(11) NOT NULL,
  `pelabuhan_asal` varchar(255) NOT NULL,
  `pelabuhan_tujuan` varchar(255) NOT NULL,
  `service_location` varchar(255) NOT NULL,
  `jadwal_keberangkatan` date NOT NULL,
  `tujuan_keberangkatan` varchar(255) NOT NULL,
  `dokument` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `keberangkatan`
--

INSERT INTO `keberangkatan` (`nama_agen_kapal`, `perusahaan_agen_kapal`, `imo_number`, `nama_kapal`, `kebangsaan_kapal`, `data_cru_indonesia`, `data_cru_asing`, `pelabuhan_asal`, `pelabuhan_tujuan`, `service_location`, `jadwal_keberangkatan`, `tujuan_keberangkatan`, `dokument`) VALUES
('sdd', 'sdd', 'sdd123', 'sd', 'sdsd', 11, 11, 'sd', 'fdf', 'df', '2024-05-07', 'ad', 'sd');

-- --------------------------------------------------------

--
-- Table structure for table `kedatangan`
--

CREATE TABLE `kedatangan` (
  `nama_agen_kapal` varchar(255) NOT NULL,
  `perusahaan_agen_kapal` varchar(255) NOT NULL,
  `imo_number` int(11) NOT NULL,
  `nama_kapal` varchar(255) NOT NULL,
  `kebangsaan_kapal` varchar(255) NOT NULL,
  `data_cru_indonesia` int(11) NOT NULL,
  `data_cru_asing` int(11) NOT NULL,
  `pelabuhan_asal` varchar(255) NOT NULL,
  `pelabuhan_tujuan` varchar(255) NOT NULL,
  `service_location` varchar(255) NOT NULL,
  `jadwal_kedatangan` date NOT NULL,
  `tujuan_kedatangan` varchar(255) NOT NULL,
  `dokument` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kedatangan`
--

INSERT INTO `kedatangan` (`nama_agen_kapal`, `perusahaan_agen_kapal`, `imo_number`, `nama_kapal`, `kebangsaan_kapal`, `data_cru_indonesia`, `data_cru_asing`, `pelabuhan_asal`, `pelabuhan_tujuan`, `service_location`, `jadwal_kedatangan`, `tujuan_kedatangan`, `dokument`) VALUES
('sdd', 'sdd', 0, 'sd', 'sdsd', 11, 11, 'sd', 'fdf', 'df', '2024-05-07', 'ad', 'sd');

-- --------------------------------------------------------

--
-- Table structure for table `request_register`
--

CREATE TABLE `request_register` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_agen_kapal` varchar(255) NOT NULL,
  `nama_perusahaan` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `no_hp_agen` int(35) NOT NULL,
  `alamat_perusahaan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sign_off`
--

CREATE TABLE `sign_off` (
  `nama_cru` varchar(255) NOT NULL,
  `no_paspor` varchar(255) NOT NULL,
  `kebangsaan_cru` varchar(255) NOT NULL,
  `tg_rencana_sign_off` date NOT NULL,
  `nama_kapal` varchar(255) NOT NULL,
  `kebangsaan_kapal` varchar(255) NOT NULL,
  `surat` varchar(255) NOT NULL,
  `waktu_lapor` date NOT NULL,
  `nama_agen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sign_on`
--

CREATE TABLE `sign_on` (
  `nama_cru` varchar(255) NOT NULL,
  `no_paspor` varchar(255) NOT NULL,
  `kebangsaan_cru` varchar(255) NOT NULL,
  `tg_rencana_sign_on` date NOT NULL,
  `nama_kapal` varchar(255) NOT NULL,
  `kebangsaan_kapal` varchar(255) NOT NULL,
  `surat` varchar(255) NOT NULL,
  `waktu_lapor` date NOT NULL,
  `nama_agen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `request_register`
--
ALTER TABLE `request_register`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `sign_off`
--
ALTER TABLE `sign_off`
  ADD PRIMARY KEY (`no_paspor`);

--
-- Indexes for table `sign_on`
--
ALTER TABLE `sign_on`
  ADD PRIMARY KEY (`no_paspor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
