-- MySQL dump 10.13  Distrib 5.7.12, for Linux (x86_64)
--
-- Host: localhost    Database: menahousedb
-- ------------------------------------------------------
-- Server version	5.7.12-0ubuntu1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attachments`
--

DROP TABLE IF EXISTS `attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attachments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pathfile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `msgid` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attachments`
--

LOCK TABLES `attachments` WRITE;
/*!40000 ALTER TABLE `attachments` DISABLE KEYS */;
/*!40000 ALTER TABLE `attachments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookmarked`
--

DROP TABLE IF EXISTS `bookmarked`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bookmarked` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `obivlenie_id` int(11) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookmarked`
--

LOCK TABLES `bookmarked` WRITE;
/*!40000 ALTER TABLE `bookmarked` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookmarked` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Продажа','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'Обмен','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'Аренда','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conversations`
--

DROP TABLE IF EXISTS `conversations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conversations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversations`
--

LOCK TABLES `conversations` WRITE;
/*!40000 ALTER TABLE `conversations` DISABLE KEYS */;
/*!40000 ALTER TABLE `conversations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imageable_id` int(11) NOT NULL,
  `imageable_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (14,'0znWUWc1-20051001194624_geek2.jpg',1,'App\\Profiles','2016-03-02 16:16:07','2016-03-02 16:16:07'),(15,'CufP-50263_4066446_IMG_05_0000_max_656x437.JPG',10,'App\\Obivlenie','2016-03-03 17:10:05','2016-03-03 17:10:05'),(16,'lMFX-50263_4066446_IMG_00_0000_max_656x437.jpg',10,'App\\Obivlenie','2016-03-03 17:10:06','2016-03-03 17:10:06'),(17,'B3J6-50263_4066446_IMG_01_0000_max_656x437.JPG',10,'App\\Obivlenie','2016-03-03 17:10:07','2016-03-03 17:10:07'),(18,'sy5s-50263_4066446_IMG_05_0000_max_656x437.JPG',16,'App\\Obivlenie','2016-03-03 17:29:42','2016-03-03 17:29:42'),(19,'zdTk-50263_4066446_IMG_00_0000_max_656x437.jpg',16,'App\\Obivlenie','2016-03-03 17:29:42','2016-03-03 17:29:42'),(20,'OLrV-50263_4066446_IMG_01_0000_max_656x437.JPG',16,'App\\Obivlenie','2016-03-03 17:29:44','2016-03-03 17:29:44'),(21,'RJjz-50263_4066446_IMG_04_0000_max_656x437.JPG',16,'App\\Obivlenie','2016-03-03 17:29:44','2016-03-03 17:29:44'),(22,'OqGi-50263_4066446_IMG_08_0000_max_656x437.JPG',16,'App\\Obivlenie','2016-03-03 17:29:46','2016-03-03 17:29:46'),(23,'k4Oe-50263_4066446_IMG_00_0000_max_656x437.jpg',17,'App\\Obivlenie','2016-03-03 17:35:19','2016-03-03 17:35:19'),(24,'fPoT-50263_4066446_IMG_01_0000_max_656x437.JPG',17,'App\\Obivlenie','2016-03-03 17:35:20','2016-03-03 17:35:20'),(25,'upAI-50263_4066446_IMG_04_0000_max_656x437.JPG',17,'App\\Obivlenie','2016-03-03 17:35:22','2016-03-03 17:35:22'),(26,'9SzU-50263_4066446_IMG_08_0000_max_656x437.JPG',17,'App\\Obivlenie','2016-03-03 17:35:23','2016-03-03 17:35:23'),(27,'GL2R-50263_4066446_IMG_01_0000_max_656x437.JPG',18,'App\\Obivlenie','2016-03-03 21:46:55','2016-03-03 21:46:55'),(28,'fDGS-50263_4066446_IMG_04_0000_max_656x437.JPG',18,'App\\Obivlenie','2016-03-03 21:46:56','2016-03-03 21:46:56'),(29,'ikjg-50263_4066446_IMG_00_0000_max_656x437.jpg',19,'App\\Obivlenie','2016-03-09 22:12:54','2016-03-09 22:12:54'),(30,'cduz-50263_4066446_IMG_01_0000_max_656x437.JPG',19,'App\\Obivlenie','2016-03-09 22:12:56','2016-03-09 22:12:56'),(31,'z1a0-50263_4066446_IMG_01_0000_max_656x437.JPG',20,'App\\Obivlenie','2016-03-09 23:01:37','2016-03-09 23:01:37'),(32,'P7rd-50263_4066446_IMG_04_0000_max_656x437.JPG',20,'App\\Obivlenie','2016-03-09 23:01:38','2016-03-09 23:01:38'),(33,'qB7t-50263_4066446_IMG_04_0000_max_656x437.JPG',21,'App\\Obivlenie','2016-03-09 23:02:40','2016-03-09 23:02:40'),(34,'hJOi-50263_4066446_IMG_08_0000_max_656x437.JPG',21,'App\\Obivlenie','2016-03-09 23:02:41','2016-03-09 23:02:41'),(35,'xCIP-50263_4066446_IMG_01_0000_max_656x437.JPG',22,'App\\Obivlenie','2016-03-09 23:04:40','2016-03-09 23:04:40'),(36,'LpRw-50263_4066446_IMG_00_0000_max_656x437.jpg',23,'App\\Obivlenie','2016-03-11 06:57:02','2016-03-11 06:57:02'),(37,'zue7-50263_4066446_IMG_01_0000_max_656x437.JPG',23,'App\\Obivlenie','2016-03-11 06:57:02','2016-03-11 06:57:02'),(38,'GORW-50263_4066446_IMG_01_0000_max_656x437.JPG',24,'App\\Obivlenie','2016-03-11 09:48:41','2016-03-11 09:48:41'),(39,'5WBp-50263_4066446_IMG_04_0000_max_656x437.JPG',24,'App\\Obivlenie','2016-03-11 09:48:42','2016-03-11 09:48:42'),(40,'XAO2-50263_4066446_IMG_01_0000_max_656x437.JPG',25,'App\\Obivlenie','2016-03-11 09:49:52','2016-03-11 09:49:52'),(41,'nLaM-50263_4066446_IMG_04_0000_max_656x437.JPG',25,'App\\Obivlenie','2016-03-11 09:49:53','2016-03-11 09:49:53'),(42,'egp6-50263_4066446_IMG_00_0000_max_656x437.jpg',26,'App\\Obivlenie','2016-03-11 09:53:10','2016-03-11 09:53:10'),(43,'QpBm-50263_4066446_IMG_04_0000_max_656x437.JPG',26,'App\\Obivlenie','2016-03-11 09:53:12','2016-03-11 09:53:12'),(44,'9msv-50263_4066446_IMG_04_0000_max_656x437.JPG',27,'App\\Obivlenie','2016-03-11 10:19:28','2016-03-11 10:19:28'),(45,'3zZV-50263_4066446_IMG_04_0000_max_656x437.JPG',28,'App\\Obivlenie','2016-03-11 10:25:18','2016-03-11 10:25:18'),(46,'f7Hj-50263_4066446_IMG_04_0000_max_656x437.JPG',29,'App\\Obivlenie','2016-03-11 10:37:28','2016-03-11 10:37:28'),(47,'PL3D-50263_4066446_IMG_04_0000_max_656x437.JPG',30,'App\\Obivlenie','2016-03-11 10:53:06','2016-03-11 10:53:06'),(48,'U1Ml-50263_4066446_IMG_04_0000_max_656x437.JPG',31,'App\\Obivlenie','2016-03-11 11:04:31','2016-03-11 11:04:31'),(49,'9kR5-50263_4066446_IMG_04_0000_max_656x437.JPG',32,'App\\Obivlenie','2016-03-11 11:15:34','2016-03-11 11:15:34'),(50,'s1Ff-50263_4066446_IMG_01_0000_max_656x437.JPG',33,'App\\Obivlenie','2016-03-12 22:32:00','2016-03-12 22:32:00'),(51,'809M-50263_4066446_IMG_01_0000_max_656x437.JPG',34,'App\\Obivlenie','2016-03-12 22:33:13','2016-03-12 22:33:13'),(52,'ZCmA-50263_4066446_IMG_01_0000_max_656x437.JPG',35,'App\\Obivlenie','2016-03-12 22:33:56','2016-03-12 22:33:56'),(53,'CKz6-50263_4066446_IMG_01_0000_max_656x437.JPG',36,'App\\Obivlenie','2016-03-12 22:35:05','2016-03-12 22:35:05'),(54,'F0yE-50263_4066446_IMG_01_0000_max_656x437.JPG',37,'App\\Obivlenie','2016-03-12 22:36:11','2016-03-12 22:36:11'),(55,'DcNZ-50263_4066446_IMG_01_0000_max_656x437.JPG',38,'App\\Obivlenie','2016-03-12 22:36:56','2016-03-12 22:36:56'),(56,'MoVc-50263_4066446_IMG_01_0000_max_656x437.JPG',39,'App\\Obivlenie','2016-03-12 22:52:17','2016-03-12 22:52:17'),(57,'ptpA-50263_4066446_IMG_04_0000_max_656x437.JPG',39,'App\\Obivlenie','2016-03-12 22:52:18','2016-03-12 22:52:18'),(58,'GBM0-50263_4066446_IMG_08_0000_max_656x437.JPG',39,'App\\Obivlenie','2016-03-12 22:52:18','2016-03-12 22:52:18'),(59,'Ob6C-50263_4066446_IMG_00_0000_max_656x437.jpg',40,'App\\Obivlenie','2016-03-12 23:00:16','2016-03-12 23:00:16'),(60,'Q3S8-50263_4066446_IMG_01_0000_max_656x437.JPG',40,'App\\Obivlenie','2016-03-12 23:00:16','2016-03-12 23:00:16'),(61,'PD6V-50263_4066446_IMG_04_0000_max_656x437.JPG',40,'App\\Obivlenie','2016-03-12 23:00:17','2016-03-12 23:00:17'),(62,'JljU-50263_4066446_IMG_00_0000_max_656x437.jpg',41,'App\\Obivlenie','2016-03-12 23:05:09','2016-03-12 23:05:09'),(63,'zZz3-50263_4066446_IMG_01_0000_max_656x437.JPG',41,'App\\Obivlenie','2016-03-12 23:05:09','2016-03-12 23:05:09'),(64,'L7sg-50263_4066446_IMG_04_0000_max_656x437.JPG',41,'App\\Obivlenie','2016-03-12 23:05:10','2016-03-12 23:05:10'),(65,'VN5V-50263_4066446_IMG_00_0000_max_656x437.jpg',42,'App\\Obivlenie','2016-03-12 23:06:13','2016-03-12 23:06:13'),(66,'zz7f-50263_4066446_IMG_01_0000_max_656x437.JPG',42,'App\\Obivlenie','2016-03-12 23:06:14','2016-03-12 23:06:14'),(67,'bcEL-50263_4066446_IMG_04_0000_max_656x437.JPG',42,'App\\Obivlenie','2016-03-12 23:06:14','2016-03-12 23:06:14'),(68,'81Wp-50263_4066446_IMG_00_0000_max_656x437.jpg',43,'App\\Obivlenie','2016-03-12 23:06:53','2016-03-12 23:06:53'),(69,'xORW-50263_4066446_IMG_01_0000_max_656x437.JPG',43,'App\\Obivlenie','2016-03-12 23:06:54','2016-03-12 23:06:54'),(70,'Kk7w-50263_4066446_IMG_04_0000_max_656x437.JPG',43,'App\\Obivlenie','2016-03-12 23:06:56','2016-03-12 23:06:56'),(71,'ZyrF-50263_4066446_IMG_01_0000_max_656x437.JPG',44,'App\\Obivlenie','2016-03-12 23:08:12','2016-03-12 23:08:12'),(72,'LXDu-50263_4066446_IMG_04_0000_max_656x437.JPG',44,'App\\Obivlenie','2016-03-12 23:08:13','2016-03-12 23:08:13'),(73,'4nG7-50263_4066446_IMG_08_0000_max_656x437.JPG',44,'App\\Obivlenie','2016-03-12 23:08:14','2016-03-12 23:08:14'),(74,'q9EQ-50263_4066446_IMG_01_0000_max_656x437.JPG',45,'App\\Obivlenie','2016-03-12 23:16:17','2016-03-12 23:16:17'),(75,'ieYO-50263_4066446_IMG_04_0000_max_656x437.JPG',45,'App\\Obivlenie','2016-03-12 23:16:17','2016-03-12 23:16:17'),(76,'4Ztw-50263_4066446_IMG_08_0000_max_656x437.JPG',45,'App\\Obivlenie','2016-03-12 23:16:19','2016-03-12 23:16:19'),(77,'Ret8-50263_4066446_IMG_01_0000_max_656x437.JPG',46,'App\\Obivlenie','2016-03-12 23:34:33','2016-03-12 23:34:33'),(78,'nMdF-50263_4066446_IMG_04_0000_max_656x437.JPG',46,'App\\Obivlenie','2016-03-12 23:34:34','2016-03-12 23:34:34'),(79,'5wL6-50263_4066446_IMG_01_0000_max_656x437.JPG',47,'App\\Obivlenie','2016-03-12 23:36:49','2016-03-12 23:36:49'),(80,'bN6Z-50263_4066446_IMG_04_0000_max_656x437.JPG',47,'App\\Obivlenie','2016-03-12 23:36:50','2016-03-12 23:36:50'),(81,'xCsf-50263_4066446_IMG_04_0000_max_656x437.JPG',48,'App\\Obivlenie','2016-03-12 23:40:09','2016-03-12 23:40:09'),(82,'xMSc-50263_4066446_IMG_08_0000_max_656x437.JPG',48,'App\\Obivlenie','2016-03-12 23:40:09','2016-03-12 23:40:09'),(83,'ZicL-50263_4066446_IMG_01_0000_max_656x437.JPG',49,'App\\Obivlenie','2016-03-12 23:40:52','2016-03-12 23:40:52'),(84,'qtUg-50263_4066446_IMG_04_0000_max_656x437.JPG',49,'App\\Obivlenie','2016-03-12 23:40:53','2016-03-12 23:40:53'),(85,'ULOJ-50263_4066446_IMG_01_0000_max_656x437.JPG',50,'App\\Obivlenie','2016-03-13 00:35:34','2016-03-13 00:35:34'),(86,'Khwl-50263_4066446_IMG_04_0000_max_656x437.JPG',50,'App\\Obivlenie','2016-03-13 00:35:34','2016-03-13 00:35:34'),(87,'0iJc-50263_4066446_IMG_08_0000_max_656x437.JPG',50,'App\\Obivlenie','2016-03-13 00:35:34','2016-03-13 00:35:34'),(88,'DTUR-50263_4066446_IMG_04_0000_max_656x437.JPG',51,'App\\Obivlenie','2016-03-13 00:38:45','2016-03-13 00:38:45'),(89,'QAEX-50263_4066446_IMG_08_0000_max_656x437.JPG',51,'App\\Obivlenie','2016-03-13 00:38:45','2016-03-13 00:38:45'),(90,'H6Di-50263_4066446_IMG_01_0000_max_656x437.JPG',52,'App\\Obivlenie','2016-03-13 01:05:33','2016-03-13 01:05:33'),(91,'okCA-50263_4066446_IMG_04_0000_max_656x437.JPG',52,'App\\Obivlenie','2016-03-13 01:05:34','2016-03-13 01:05:34'),(92,'2LJc-50263_4066446_IMG_08_0000_max_656x437.JPG',52,'App\\Obivlenie','2016-03-13 01:05:35','2016-03-13 01:05:35'),(93,'XQib-50263_4066446_IMG_01_0000_max_656x437.JPG',53,'App\\Obivlenie','2016-03-13 01:06:16','2016-03-13 01:06:16'),(94,'vMdv-50263_4066446_IMG_04_0000_max_656x437.JPG',53,'App\\Obivlenie','2016-03-13 01:06:16','2016-03-13 01:06:16'),(95,'ktrL-50263_4066446_IMG_01_0000_max_656x437.JPG',54,'App\\Obivlenie','2016-03-13 01:07:42','2016-03-13 01:07:42'),(96,'YhF7-50263_4066446_IMG_04_0000_max_656x437.JPG',54,'App\\Obivlenie','2016-03-13 01:07:42','2016-03-13 01:07:42'),(97,'IvGn-50263_4066446_IMG_08_0000_max_656x437.JPG',54,'App\\Obivlenie','2016-03-13 01:07:42','2016-03-13 01:07:42'),(98,'8wVn-50263_4066446_IMG_04_0000_max_656x437.JPG',55,'App\\Obivlenie','2016-03-13 01:20:59','2016-03-13 01:20:59'),(99,'uziP-50263_4066446_IMG_04_0000_max_656x437.JPG',56,'App\\Obivlenie','2016-03-13 01:42:23','2016-03-13 01:42:23'),(100,'Dwg1-50263_4066446_IMG_04_0000_max_656x437.JPG',57,'App\\Obivlenie','2016-03-13 01:43:19','2016-03-13 01:43:19'),(101,'m0tQ-50263_4066446_IMG_08_0000_max_656x437.JPG',57,'App\\Obivlenie','2016-03-13 01:43:20','2016-03-13 01:43:20'),(102,'Bjug-50263_4066446_IMG_01_0000_max_656x437.JPG',58,'App\\Obivlenie','2016-03-13 01:46:01','2016-03-13 01:46:01'),(103,'FG9Z-50263_4066446_IMG_04_0000_max_656x437.JPG',58,'App\\Obivlenie','2016-03-13 01:46:02','2016-03-13 01:46:02'),(104,'DuIB-50263_4066446_IMG_01_0000_max_656x437.JPG',59,'App\\Obivlenie','2016-03-13 01:53:47','2016-03-13 01:53:47'),(105,'wLu0-50263_4066446_IMG_04_0000_max_656x437.JPG',59,'App\\Obivlenie','2016-03-13 01:53:47','2016-03-13 01:53:47'),(106,'m9bO-50263_4066446_IMG_05_0000_max_656x437.JPG',60,'App\\Obivlenie','2016-03-13 01:56:42','2016-03-13 01:56:42'),(107,'2F0e-50263_4066446_IMG_01_0000_max_656x437.JPG',60,'App\\Obivlenie','2016-03-13 01:56:42','2016-03-13 01:56:42'),(108,'BoeX-50263_4066446_IMG_04_0000_max_656x437.JPG',60,'App\\Obivlenie','2016-03-13 01:56:43','2016-03-13 01:56:43'),(109,'pv2n-50263_4066446_IMG_08_0000_max_656x437.JPG',60,'App\\Obivlenie','2016-03-13 01:56:43','2016-03-13 01:56:43'),(110,'IahT-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 10:48:05','2016-05-22 10:48:05'),(111,'IahT-50263_4066446_IMG_08_0000_max_656x437.JPG',64,'App\\Obivlenie','2016-05-22 10:48:05','2016-05-22 10:48:05'),(112,'hyJ5-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 10:53:22','2016-05-22 10:53:22'),(113,'hyJ5-50263_4066446_IMG_08_0000_max_656x437.JPG',65,'App\\Obivlenie','2016-05-22 10:53:22','2016-05-22 10:53:22'),(114,'9CKq-50263_4066446_IMG_00_0000_max_656x437.jpg',65,'App\\Obivlenie','2016-05-22 10:53:22','2016-05-22 10:53:22'),(115,'EL8a-50263_4066446_IMG_01_0000_max_656x437.JPG',65,'App\\Obivlenie','2016-05-22 10:53:22','2016-05-22 10:53:22'),(116,'j7UB-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 10:59:36','2016-05-22 10:59:36'),(117,'j7UB-50263_4066446_IMG_08_0000_max_656x437.JPG',66,'App\\Obivlenie','2016-05-22 10:59:36','2016-05-22 10:59:36'),(118,'IW4Y-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 11:04:47','2016-05-22 11:04:47'),(119,'IW4Y-50263_4066446_IMG_08_0000_max_656x437.JPG',67,'App\\Obivlenie','2016-05-22 11:04:47','2016-05-22 11:04:47'),(120,'kHOJ-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 11:09:10','2016-05-22 11:09:10'),(121,'kHOJ-50263_4066446_IMG_08_0000_max_656x437.JPG',68,'App\\Obivlenie','2016-05-22 11:09:10','2016-05-22 11:09:10'),(122,'pe8d-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 11:14:08','2016-05-22 11:14:08'),(123,'pe8d-50263_4066446_IMG_08_0000_max_656x437.JPG',69,'App\\Obivlenie','2016-05-22 11:14:08','2016-05-22 11:14:08'),(124,'nnPj-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 11:18:59','2016-05-22 11:18:59'),(125,'nnPj-50263_4066446_IMG_08_0000_max_656x437.JPG',70,'App\\Obivlenie','2016-05-22 11:18:59','2016-05-22 11:18:59'),(126,'KvzS-50263_4066446_IMG_00_0000_max_656x437.jpg',0,'App\\Thumbnail','2016-05-22 12:03:10','2016-05-22 12:03:10'),(127,'KvzS-50263_4066446_IMG_00_0000_max_656x437.jpg',76,'App\\Obivlenie','2016-05-22 12:03:10','2016-05-22 12:03:10'),(128,'EZBO-50263_4066446_IMG_00_0000_max_656x437.jpg',0,'App\\Thumbnail','2016-05-22 12:53:39','2016-05-22 12:53:39'),(129,'EZBO-50263_4066446_IMG_00_0000_max_656x437.jpg',77,'App\\Obivlenie','2016-05-22 12:53:39','2016-05-22 12:53:39'),(130,'MT3S9aoPjpeg',0,'App\\Thumbnail','2016-05-22 12:55:15','2016-05-22 12:55:15'),(131,'MT3S9aoPjpeg',78,'App\\Obivlenie','2016-05-22 12:55:15','2016-05-22 12:55:15'),(132,'YHHc1Q0G.jpeg',0,'App\\Thumbnail','2016-05-22 19:35:38','2016-05-22 19:35:38'),(133,'YHHc1Q0G.jpeg',79,'App\\Obivlenie','2016-05-22 19:35:38','2016-05-22 19:35:38'),(134,'oRFCM1mnSlGTJYDuCXMZ8OHLj3N9i81s.jpeg',0,'App\\Thumbnail','2016-05-22 19:58:08','2016-05-22 19:58:08'),(135,'oRFCM1mnSlGTJYDuCXMZ8OHLj3N9i81s.jpeg',80,'App\\Obivlenie','2016-05-22 19:58:08','2016-05-22 19:58:08'),(136,'FuxpWQjtU9eRgJWUo8TbyyTOlcME7DBq.jpeg',0,'App\\Thumbnail','2016-05-22 20:12:41','2016-05-22 20:12:41'),(137,'FuxpWQjtU9eRgJWUo8TbyyTOlcME7DBq.jpeg',81,'App\\Obivlenie','2016-05-22 20:12:41','2016-05-22 20:12:41'),(138,'Nxq8OzDeFrnX68VESKPnhyvgBZCUXhnL.jpeg',0,'App\\Thumbnail','2016-05-22 20:16:01','2016-05-22 20:16:01'),(139,'Nxq8OzDeFrnX68VESKPnhyvgBZCUXhnL.jpeg',83,'App\\Obivlenie','2016-05-22 20:16:01','2016-05-22 20:16:01'),(140,'wB6FW7ozsRlrqzzTvjJp2avyDAUTPW6N.jpeg',91,'App\\Obivlenie','2016-05-22 21:31:38','2016-05-22 21:31:38'),(141,'gVqM7DdKpdbWqS1py1TkFHUb95LnJfhw.jpeg',91,'App\\Obivlenie','2016-05-22 21:31:38','2016-05-22 21:31:38'),(142,'LKiJnXkctkdj4xTnlrNEfrbhwE98ST7n.jpeg',91,'App\\Obivlenie','2016-05-22 21:31:38','2016-05-22 21:31:38'),(143,'4czJAitPjj5TScZZNnXMVsc5xbuk3gVF.jpeg',93,'App\\Obivlenie','2016-05-22 21:38:51','2016-05-22 21:38:51'),(144,'IO42IieeqENrpDTyzfQScBzsvrZHbDkv.jpeg',93,'App\\Obivlenie','2016-05-22 21:38:51','2016-05-22 21:38:51'),(145,'lrh7dlF0eWApo6qL0poLZNiTHNTo4VVJ.jpeg',93,'App\\Obivlenie','2016-05-22 21:38:51','2016-05-22 21:38:51'),(146,'LNimokwxMIKbtM09cdSRKIBk7GG6PSDW.2015-11-16-mXtM7FL4-67c5c9c55da19a647e767f79a4f19545.jpg',95,'App\\Obivlenie','2016-05-22 21:43:35','2016-05-22 21:43:35'),(147,'oA8xQFOD295tdxS5fFgFR2hcUaofUm4J.2015-12-27-QpekUTjg-kvartira-moskva-nizhnyaya-pervomayskaya-ulica-82371691-1.jpg',95,'App\\Obivlenie','2016-05-22 21:43:35','2016-05-22 21:43:35'),(148,'6Bn5UPEMlaJ9xapvIdFvjy6Qzu9FCnRT.50263_4066446_IMG_08_0000_max_656x437.JPG',95,'App\\Obivlenie','2016-05-22 21:43:35','2016-05-22 21:43:35'),(149,'MBDwqqJF62RXmoS6JikgAz7ripLv0J7w.2015-11-16-mXtM7FL4-67c5c9c55da19a647e767f79a4f19545.jpg',96,'App\\Obivlenie','2016-05-22 21:44:45','2016-05-22 21:44:45'),(150,'Zkn6gOsySM71YzJqHxLsRqpP1UTnvjY7.2015-12-27-QpekUTjg-kvartira-moskva-nizhnyaya-pervomayskaya-ulica-82371691-1.jpg',96,'App\\Obivlenie','2016-05-22 21:44:45','2016-05-22 21:44:45'),(151,'KE5jo8uDxtCLKAsnYpkK2f9NrX4a7QDr.50263_4066446_IMG_08_0000_max_656x437.JPG',96,'App\\Obivlenie','2016-05-22 21:44:45','2016-05-22 21:44:45'),(152,'FlZhzhxTg5CE1jKAhtLhoXbli8I0avYR.2015-11-16-mXtM7FL4-67c5c9c55da19a647e767f79a4f19545.jpg',97,'App\\Obivlenie','2016-05-22 21:51:47','2016-05-22 21:51:47'),(153,'uJkZ1lr1qPniOpF84fteqnUJS8w5xjcq.2015-12-27-QpekUTjg-kvartira-moskva-nizhnyaya-pervomayskaya-ulica-82371691-1.jpg',97,'App\\Obivlenie','2016-05-22 21:51:47','2016-05-22 21:51:47'),(154,'cSsxft9nyeLX9hOYMIQo59BWtzmv1N2U.50263_4066446_IMG_08_0000_max_656x437.JPG',97,'App\\Obivlenie','2016-05-22 21:51:47','2016-05-22 21:51:47'),(155,'LHRuBtpCwrgli8XSKuY37UkLs7MAel0n.jpeg',100,'App\\Obivlenie','2016-05-22 21:58:43','2016-05-22 21:58:43'),(156,'i4R5KMlTBfyJe8q5A6Evw0MqhGsCYRWo.jpeg',100,'App\\Obivlenie','2016-05-22 21:58:43','2016-05-22 21:58:43'),(157,'euHLCEBxy2g7QWlTopTaWTN7672FD5JH.jpeg',100,'App\\Obivlenie','2016-05-22 21:58:43','2016-05-22 21:58:43'),(158,'ak80ewJ08N3T9ouvbUN4t4JrorOmCCGP.jpeg',105,'App\\Obivlenie','2016-05-22 22:03:26','2016-05-22 22:03:26'),(159,'Hqq6JnXdxqs8mZvtcvqWIpsAlq5keZ7K.jpeg',105,'App\\Obivlenie','2016-05-22 22:03:26','2016-05-22 22:03:26'),(160,'2mbyMmsmzU0dSXz8P5yPyvFq0y1Ei9Lj.jpeg',105,'App\\Obivlenie','2016-05-22 22:03:26','2016-05-22 22:03:26'),(161,'Fdj4rvg7TCJwY0hRG9UL5TFJ35lFQK8a.jpeg',0,'App\\Thumbnail','2016-05-22 22:09:11','2016-05-22 22:09:11'),(162,'5ShRvxbYSakjOPko9KnVQozLnaV51vj0.jpeg',107,'App\\Obivlenie','2016-05-22 22:20:44','2016-05-22 22:20:44'),(163,'y6rmWQy2mJig6eOKXYXYgrmKxWdF9KDo.jpeg',0,'App\\Thumbnail','2016-05-22 22:20:44','2016-05-22 22:20:44'),(164,'I2nWQAl9p4zPdzhAT8lzDCbhSQLNqxOB.jpeg',107,'App\\Obivlenie','2016-05-22 22:20:44','2016-05-22 22:20:44'),(165,'tb5mHaMvC5InqUvEmd4AR5aXBWQ0cHaK.jpeg',107,'App\\Obivlenie','2016-05-22 22:20:44','2016-05-22 22:20:44'),(166,'B0V0oxq1uhDKu1R9z4O45E24sNVJzH0v.jpeg',112,'App\\Obivlenie','2016-05-22 22:30:05','2016-05-22 22:30:05'),(167,'GWirkRdlesJcrhQZeu5SiyMhyeWH9hTj.jpeg',0,'App\\Thumbnail','2016-05-22 22:30:05','2016-05-22 22:30:05'),(168,'SyPVkXh5eWg8lbqi4LxuxNKlwcKyPES9.jpeg',112,'App\\Obivlenie','2016-05-22 22:30:05','2016-05-22 22:30:05'),(169,'PsQDFmcH1G9xneS9NkOtGFqVG49H0NwV.jpeg',112,'App\\Obivlenie','2016-05-22 22:30:05','2016-05-22 22:30:05'),(170,'FtKPaB752ruocGXXPc8QIn6I9kh0yCA0.jpeg',114,'App\\Obivlenie','2016-05-23 21:44:55','2016-05-23 21:44:55'),(171,'pO9C57veCigXPeHugXgJnyAL4ofPC9j0.jpeg',0,'App\\Thumbnail','2016-05-23 21:44:55','2016-05-23 21:44:55'),(172,'HfDk5cKuIkiID32yjgIaWYM7hwA7nwkW.jpeg',114,'App\\Obivlenie','2016-05-23 21:44:55','2016-05-23 21:44:55'),(173,'2cP7ZHUIwVBPbM3TSafu180RWvMbE0Cw.jpeg',114,'App\\Obivlenie','2016-05-23 21:44:55','2016-05-23 21:44:55'),(174,'OdzkohpYNanJI8ojJ556aKxG7fh3czgE.jpeg',116,'App\\Obivlenie','2016-05-23 22:12:17','2016-05-23 22:12:17'),(175,'116.jpeg',0,'App\\Thumbnail','2016-05-23 22:12:17','2016-05-23 22:12:17'),(176,'5BPrDbNiBO6glnVvXALu1Z1sOHMgDAO2.jpeg',116,'App\\Obivlenie','2016-05-23 22:12:17','2016-05-23 22:12:17'),(177,'AjwtGvG4bq3NTXDoKz95VQtQfeHUiafo.jpeg',116,'App\\Obivlenie','2016-05-23 22:12:17','2016-05-23 22:12:17');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `obivlenie`
--

DROP TABLE IF EXISTS `obivlenie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `obivlenie` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `metro` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ulitsa` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `stroenie` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gorod` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type_nedvizhimosti` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rayon` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tekct_obivlenia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `kolitchestvo_komnat` int(11) NOT NULL,
  `etajnost_doma` int(11) NOT NULL,
  `zhilaya_ploshad` int(11) NOT NULL,
  `obshaya_ploshad` int(11) NOT NULL,
  `ploshad_kurhni` int(11) NOT NULL,
  `etazh` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `categorie_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `san_usel` int(10) unsigned NOT NULL,
  `rating` int(10) unsigned DEFAULT NULL,
  `title` tinytext CHARACTER SET utf8,
  `description` text CHARACTER SET utf8,
  `mestopolozhenie_obmena` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `available` tinyint(1) DEFAULT '1',
  `predpolozhitelnaya_tsena` decimal(10,2) DEFAULT NULL,
  `doplata` decimal(10,2) DEFAULT NULL,
  `tseli_obmena` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `addres` varchar(255) COLLATE utf8_unicode_ci  NULL,
  `numberclick` INT UNSIGNED DEFAULT 0,
  `roof` INT UNSIGNED NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obivlenie`
--

LOCK TABLES `obivlenie` WRITE;
/*!40000 ALTER TABLE `obivlenie` DISABLE KEYS */;
INSERT INTO `obivlenie` VALUES (115,'Шоссе Энтузиастов','москва, ул.Шоссе Энтузиастов, 147','','','Москва','Новостройки','ВАО','Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой. Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет. ',3,9,49,70,9,3,8380000,'Обмен',NULL,20,'2016-05-23 22:08:48','2016-05-23 22:08:48',0,NULL,'Обменяю 2-ку на 3-ку',NULL,'В том же районе',1,NULL,30000.00,'На увеличение',NULL,NULL,NULL),
(116,'Шоссе Энтузиастов','москва, ул.Шоссе Энтузиастов, 147','','','Москва','Комната','ВАО','Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой. Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет. ',1,9,49,70,9,3,8380000,'Обмен',NULL,20,'2016-05-23 22:12:17','2016-05-23 22:12:17',0,NULL,'Обменяю 2-ку на 3-ку',NULL,'В том же районе',1,NULL,30000.00,'На увеличение',NULL,NULL,NULL);
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profiles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `bio` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `hasprofile` tinyint(1) NOT NULL DEFAULT '0',
  `vk` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fb` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `twitter` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ok` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,19,'','Москва','sfjkkjs fgs fgjfkg ;jkdfgjkdfkjghfjd hgjhdfjghjkdfhgjkhdfjhgjk dhdghjkhejkhg jdhjkhgjdhg jkhdjghjdhsgjhdgjhdsjghjhdgjhsdjghjdhgjhjghhhhhhhhhhhhhhhhhhj jdfgjhf kfdhgh h jfdghfjdhgjhfdgh','2016-02-29 10:28:27','2016-05-01 18:54:19',1,'vk_username','fb_username','twitter_username','ok_username'),(2,20,'','','','2016-03-01 21:12:03','2016-03-01 21:12:03',0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receivers`
--

DROP TABLE IF EXISTS `receivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `receivers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `msgid` int(10) unsigned NOT NULL,
  `toid` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `last_read` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `spam` tinyint(1) NOT NULL DEFAULT '0',
  `readed` tinyint(1) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receivers`
--

LOCK TABLES `receivers` WRITE;
/*!40000 ALTER TABLE `receivers` DISABLE KEYS */;
/*!40000 ALTER TABLE `receivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_user`
--

DROP TABLE IF EXISTS `role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_user` (
  `role_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  KEY `role_user_role_id_index` (`role_id`),
  KEY `role_user_user_id_index` (`user_id`),
  CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_user`
--

LOCK TABLES `role_user` WRITE;
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
INSERT INTO `role_user` VALUES (2,19),(2,20);
/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2016-02-28 20:48:04','2016-02-28 20:48:04'),(2,'Moderator','2016-02-28 20:48:04','2016-02-28 20:48:04'),(3,'Member','2016-02-28 20:48:04','2016-02-28 20:48:04');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `senders`
--

DROP TABLE IF EXISTS `senders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `senders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `msgid` int(10) unsigned NOT NULL,
  `userid` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `senders`
--

LOCK TABLES `senders` WRITE;
/*!40000 ALTER TABLE `senders` DISABLE KEYS */;
/*!40000 ALTER TABLE `senders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thumb`
--

DROP TABLE IF EXISTS `thumb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thumb` (
  `obivlenie_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thumb`
--

LOCK TABLES `thumb` WRITE;
/*!40000 ALTER TABLE `thumb` DISABLE KEYS */;
INSERT INTO `thumb` VALUES (0,'2016-05-22 02:58:54','2016-05-22 02:58:54'),(0,'2016-05-22 13:45:43','2016-05-22 13:45:43'),(0,'2016-05-22 13:48:05','2016-05-22 13:48:05'),(0,'2016-05-22 13:53:22','2016-05-22 13:53:22'),(0,'2016-05-22 13:59:36','2016-05-22 13:59:36'),(0,'2016-05-22 14:04:47','2016-05-22 14:04:47'),(0,'2016-05-22 14:09:10','2016-05-22 14:09:10'),(0,'2016-05-22 14:14:08','2016-05-22 14:14:08'),(0,'2016-05-22 14:18:59','2016-05-22 14:18:59'),(0,'2016-05-22 15:03:10','2016-05-22 15:03:10'),(0,'2016-05-22 15:53:39','2016-05-22 15:53:39'),(0,'2016-05-22 15:55:15','2016-05-22 15:55:15'),(0,'2016-05-22 22:35:38','2016-05-22 22:35:38'),(0,'2016-05-22 22:58:08','2016-05-22 22:58:08'),(0,'2016-05-22 23:12:41','2016-05-22 23:12:41'),(0,'2016-05-22 23:16:01','2016-05-22 23:16:01'),(0,'2016-05-23 01:09:11','2016-05-23 01:09:11'),(0,'2016-05-23 01:20:44','2016-05-23 01:20:44'),(0,'2016-05-23 01:30:05','2016-05-23 01:30:05'),(114,'2016-05-24 00:44:55','2016-05-24 00:44:55'),(116,'2016-05-24 01:12:17','2016-05-24 01:12:17');
/*!40000 ALTER TABLE `thumb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usermessages`
--

DROP TABLE IF EXISTS `usermessages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usermessages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fromid` int(10) unsigned NOT NULL,
  `toid` int(10) unsigned NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `id_conversation` int(10) unsigned NOT NULL,
  `subject` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fichiers_joints` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usermessages`
--

LOCK TABLES `usermessages` WRITE;
/*!40000 ALTER TABLE `usermessages` DISABLE KEYS */;
/*!40000 ALTER TABLE `usermessages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `familia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `otchestvo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `phonenumber` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `confirmed` tinyint(1) NOT NULL DEFAULT '0',
  `confirmation_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `notify` enum('y','n') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'y',
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (19,'Иван','Иванович','Петров','husseincoulibaly@gmail.com','$2y$10$jQ2km92IPc1lz44.6gQcCO6c1mhO8G/H4ExupZ/farHSRWrWQ77U6','79636772521','activated',1,NULL,'Ax5FF7V1R5e4zVbIYNOQ7cUQ8eOqOV7Mzs2VAKgsqdGZnCpxkij7lSYzrZOk','2016-02-29 08:25:06','2016-05-02 09:49:31','y',''),(20,'Мария','Шарапова','Григорьевна','husseincoulibaly@ya.ru','$2y$10$LFbt9SvOTBEnnaAaxdg4QeOYsNwlhau333GprnT.ERUSNwkknSWLu','79636772521','activated',1,NULL,'g1iPRAt6zDoor2OgIHTKeDQM8UFnq52FYgIG762KaeZ9VZge6Fuc360rNcAM','2016-03-01 21:07:31','2016-05-23 22:09:18','y',''),(21,'1',' ',' ','1@mail.com','$2y$10$7BsoCLiZ1UNWT4b9SsdAEePi1z/6du3QnCqUwcPUqNGD..0E6qBDK','1','',0,'vKI2AZXpXbzDcAR0ciYZHNLHbfTqKl',NULL,'2016-03-07 07:15:38','2016-03-07 07:15:38','y',''),(22,'1',' ',' ','atomcorpmail@gmail.com','$2y$10$b/adjnT7KuTBwNVkjMa7L.Y.CZ7QITu738/Fq.uWFYdaGo7.181Wu','1','',0,'CoqDCK3RBaN4HjSSOvnsAjMVRzNatF',NULL,'2016-03-07 07:16:22','2016-03-07 07:16:22','y','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-28  3:26:05
