-- MySQL dump 10.13  Distrib 5.7.12, for Linux (x86_64)
--
-- Host: localhost    Database: menahousedb
-- ------------------------------------------------------
-- Server version	5.7.12-0ubuntu1.1

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
-- Table structure for table `Nedvizhimosts`
--

DROP TABLE IF EXISTS `Nedvizhimosts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Nedvizhimosts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `adressa` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gorod` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `kolitchestvo_komnat` int(11) NOT NULL,
  `etajnost_doma` int(11) NOT NULL,
  `zhilaya_ploshad` int(11) NOT NULL,
  `obshaya_ploshad` int(11) NOT NULL,
  `ploshad_kurhnia` int(11) NOT NULL,
  `etazh` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `opicanie` text COLLATE utf8_unicode_ci NOT NULL,
  `categorie_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nedvizhimosts`
--

LOCK TABLES `Nedvizhimosts` WRITE;
/*!40000 ALTER TABLE `Nedvizhimosts` DISABLE KEYS */;
/*!40000 ALTER TABLE `Nedvizhimosts` ENABLE KEYS */;
UNLOCK TABLES;

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
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookmarked`
--

LOCK TABLES `bookmarked` WRITE;
/*!40000 ALTER TABLE `bookmarked` DISABLE KEYS */;
INSERT INTO `bookmarked` VALUES (3,122,0,23,'2016-06-20 18:05:24','2016-06-20 18:05:24');
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
) ENGINE=InnoDB AUTO_INCREMENT=364 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (14,'0znWUWc1-20051001194624_geek2.jpg',1,'App\\Profiles','2016-03-02 16:16:07','2016-03-02 16:16:07'),(15,'CufP-50263_4066446_IMG_05_0000_max_656x437.JPG',10,'App\\Obivlenie','2016-03-03 17:10:05','2016-03-03 17:10:05'),(16,'lMFX-50263_4066446_IMG_00_0000_max_656x437.jpg',10,'App\\Obivlenie','2016-03-03 17:10:06','2016-03-03 17:10:06'),(17,'B3J6-50263_4066446_IMG_01_0000_max_656x437.JPG',10,'App\\Obivlenie','2016-03-03 17:10:07','2016-03-03 17:10:07'),(18,'sy5s-50263_4066446_IMG_05_0000_max_656x437.JPG',16,'App\\Obivlenie','2016-03-03 17:29:42','2016-03-03 17:29:42'),(19,'zdTk-50263_4066446_IMG_00_0000_max_656x437.jpg',16,'App\\Obivlenie','2016-03-03 17:29:42','2016-03-03 17:29:42'),(20,'OLrV-50263_4066446_IMG_01_0000_max_656x437.JPG',16,'App\\Obivlenie','2016-03-03 17:29:44','2016-03-03 17:29:44'),(21,'RJjz-50263_4066446_IMG_04_0000_max_656x437.JPG',16,'App\\Obivlenie','2016-03-03 17:29:44','2016-03-03 17:29:44'),(22,'OqGi-50263_4066446_IMG_08_0000_max_656x437.JPG',16,'App\\Obivlenie','2016-03-03 17:29:46','2016-03-03 17:29:46'),(23,'k4Oe-50263_4066446_IMG_00_0000_max_656x437.jpg',17,'App\\Obivlenie','2016-03-03 17:35:19','2016-03-03 17:35:19'),(24,'fPoT-50263_4066446_IMG_01_0000_max_656x437.JPG',17,'App\\Obivlenie','2016-03-03 17:35:20','2016-03-03 17:35:20'),(25,'upAI-50263_4066446_IMG_04_0000_max_656x437.JPG',17,'App\\Obivlenie','2016-03-03 17:35:22','2016-03-03 17:35:22'),(26,'9SzU-50263_4066446_IMG_08_0000_max_656x437.JPG',17,'App\\Obivlenie','2016-03-03 17:35:23','2016-03-03 17:35:23'),(27,'GL2R-50263_4066446_IMG_01_0000_max_656x437.JPG',18,'App\\Obivlenie','2016-03-03 21:46:55','2016-03-03 21:46:55'),(28,'fDGS-50263_4066446_IMG_04_0000_max_656x437.JPG',18,'App\\Obivlenie','2016-03-03 21:46:56','2016-03-03 21:46:56'),(29,'ikjg-50263_4066446_IMG_00_0000_max_656x437.jpg',19,'App\\Obivlenie','2016-03-09 22:12:54','2016-03-09 22:12:54'),(30,'cduz-50263_4066446_IMG_01_0000_max_656x437.JPG',19,'App\\Obivlenie','2016-03-09 22:12:56','2016-03-09 22:12:56'),(31,'z1a0-50263_4066446_IMG_01_0000_max_656x437.JPG',20,'App\\Obivlenie','2016-03-09 23:01:37','2016-03-09 23:01:37'),(32,'P7rd-50263_4066446_IMG_04_0000_max_656x437.JPG',20,'App\\Obivlenie','2016-03-09 23:01:38','2016-03-09 23:01:38'),(33,'qB7t-50263_4066446_IMG_04_0000_max_656x437.JPG',21,'App\\Obivlenie','2016-03-09 23:02:40','2016-03-09 23:02:40'),(34,'hJOi-50263_4066446_IMG_08_0000_max_656x437.JPG',21,'App\\Obivlenie','2016-03-09 23:02:41','2016-03-09 23:02:41'),(35,'xCIP-50263_4066446_IMG_01_0000_max_656x437.JPG',22,'App\\Obivlenie','2016-03-09 23:04:40','2016-03-09 23:04:40'),(36,'LpRw-50263_4066446_IMG_00_0000_max_656x437.jpg',23,'App\\Obivlenie','2016-03-11 06:57:02','2016-03-11 06:57:02'),(37,'zue7-50263_4066446_IMG_01_0000_max_656x437.JPG',23,'App\\Obivlenie','2016-03-11 06:57:02','2016-03-11 06:57:02'),(38,'GORW-50263_4066446_IMG_01_0000_max_656x437.JPG',24,'App\\Obivlenie','2016-03-11 09:48:41','2016-03-11 09:48:41'),(39,'5WBp-50263_4066446_IMG_04_0000_max_656x437.JPG',24,'App\\Obivlenie','2016-03-11 09:48:42','2016-03-11 09:48:42'),(40,'XAO2-50263_4066446_IMG_01_0000_max_656x437.JPG',25,'App\\Obivlenie','2016-03-11 09:49:52','2016-03-11 09:49:52'),(41,'nLaM-50263_4066446_IMG_04_0000_max_656x437.JPG',25,'App\\Obivlenie','2016-03-11 09:49:53','2016-03-11 09:49:53'),(42,'egp6-50263_4066446_IMG_00_0000_max_656x437.jpg',26,'App\\Obivlenie','2016-03-11 09:53:10','2016-03-11 09:53:10'),(43,'QpBm-50263_4066446_IMG_04_0000_max_656x437.JPG',26,'App\\Obivlenie','2016-03-11 09:53:12','2016-03-11 09:53:12'),(44,'9msv-50263_4066446_IMG_04_0000_max_656x437.JPG',27,'App\\Obivlenie','2016-03-11 10:19:28','2016-03-11 10:19:28'),(45,'3zZV-50263_4066446_IMG_04_0000_max_656x437.JPG',28,'App\\Obivlenie','2016-03-11 10:25:18','2016-03-11 10:25:18'),(46,'f7Hj-50263_4066446_IMG_04_0000_max_656x437.JPG',29,'App\\Obivlenie','2016-03-11 10:37:28','2016-03-11 10:37:28'),(47,'PL3D-50263_4066446_IMG_04_0000_max_656x437.JPG',30,'App\\Obivlenie','2016-03-11 10:53:06','2016-03-11 10:53:06'),(48,'U1Ml-50263_4066446_IMG_04_0000_max_656x437.JPG',31,'App\\Obivlenie','2016-03-11 11:04:31','2016-03-11 11:04:31'),(49,'9kR5-50263_4066446_IMG_04_0000_max_656x437.JPG',32,'App\\Obivlenie','2016-03-11 11:15:34','2016-03-11 11:15:34'),(50,'s1Ff-50263_4066446_IMG_01_0000_max_656x437.JPG',33,'App\\Obivlenie','2016-03-12 22:32:00','2016-03-12 22:32:00'),(51,'809M-50263_4066446_IMG_01_0000_max_656x437.JPG',34,'App\\Obivlenie','2016-03-12 22:33:13','2016-03-12 22:33:13'),(52,'ZCmA-50263_4066446_IMG_01_0000_max_656x437.JPG',35,'App\\Obivlenie','2016-03-12 22:33:56','2016-03-12 22:33:56'),(53,'CKz6-50263_4066446_IMG_01_0000_max_656x437.JPG',36,'App\\Obivlenie','2016-03-12 22:35:05','2016-03-12 22:35:05'),(54,'F0yE-50263_4066446_IMG_01_0000_max_656x437.JPG',37,'App\\Obivlenie','2016-03-12 22:36:11','2016-03-12 22:36:11'),(55,'DcNZ-50263_4066446_IMG_01_0000_max_656x437.JPG',38,'App\\Obivlenie','2016-03-12 22:36:56','2016-03-12 22:36:56'),(56,'MoVc-50263_4066446_IMG_01_0000_max_656x437.JPG',39,'App\\Obivlenie','2016-03-12 22:52:17','2016-03-12 22:52:17'),(57,'ptpA-50263_4066446_IMG_04_0000_max_656x437.JPG',39,'App\\Obivlenie','2016-03-12 22:52:18','2016-03-12 22:52:18'),(58,'GBM0-50263_4066446_IMG_08_0000_max_656x437.JPG',39,'App\\Obivlenie','2016-03-12 22:52:18','2016-03-12 22:52:18'),(59,'Ob6C-50263_4066446_IMG_00_0000_max_656x437.jpg',40,'App\\Obivlenie','2016-03-12 23:00:16','2016-03-12 23:00:16'),(60,'Q3S8-50263_4066446_IMG_01_0000_max_656x437.JPG',40,'App\\Obivlenie','2016-03-12 23:00:16','2016-03-12 23:00:16'),(61,'PD6V-50263_4066446_IMG_04_0000_max_656x437.JPG',40,'App\\Obivlenie','2016-03-12 23:00:17','2016-03-12 23:00:17'),(62,'JljU-50263_4066446_IMG_00_0000_max_656x437.jpg',41,'App\\Obivlenie','2016-03-12 23:05:09','2016-03-12 23:05:09'),(63,'zZz3-50263_4066446_IMG_01_0000_max_656x437.JPG',41,'App\\Obivlenie','2016-03-12 23:05:09','2016-03-12 23:05:09'),(64,'L7sg-50263_4066446_IMG_04_0000_max_656x437.JPG',41,'App\\Obivlenie','2016-03-12 23:05:10','2016-03-12 23:05:10'),(65,'VN5V-50263_4066446_IMG_00_0000_max_656x437.jpg',42,'App\\Obivlenie','2016-03-12 23:06:13','2016-03-12 23:06:13'),(66,'zz7f-50263_4066446_IMG_01_0000_max_656x437.JPG',42,'App\\Obivlenie','2016-03-12 23:06:14','2016-03-12 23:06:14'),(67,'bcEL-50263_4066446_IMG_04_0000_max_656x437.JPG',42,'App\\Obivlenie','2016-03-12 23:06:14','2016-03-12 23:06:14'),(68,'81Wp-50263_4066446_IMG_00_0000_max_656x437.jpg',43,'App\\Obivlenie','2016-03-12 23:06:53','2016-03-12 23:06:53'),(69,'xORW-50263_4066446_IMG_01_0000_max_656x437.JPG',43,'App\\Obivlenie','2016-03-12 23:06:54','2016-03-12 23:06:54'),(70,'Kk7w-50263_4066446_IMG_04_0000_max_656x437.JPG',43,'App\\Obivlenie','2016-03-12 23:06:56','2016-03-12 23:06:56'),(71,'ZyrF-50263_4066446_IMG_01_0000_max_656x437.JPG',44,'App\\Obivlenie','2016-03-12 23:08:12','2016-03-12 23:08:12'),(72,'LXDu-50263_4066446_IMG_04_0000_max_656x437.JPG',44,'App\\Obivlenie','2016-03-12 23:08:13','2016-03-12 23:08:13'),(73,'4nG7-50263_4066446_IMG_08_0000_max_656x437.JPG',44,'App\\Obivlenie','2016-03-12 23:08:14','2016-03-12 23:08:14'),(74,'q9EQ-50263_4066446_IMG_01_0000_max_656x437.JPG',45,'App\\Obivlenie','2016-03-12 23:16:17','2016-03-12 23:16:17'),(75,'ieYO-50263_4066446_IMG_04_0000_max_656x437.JPG',45,'App\\Obivlenie','2016-03-12 23:16:17','2016-03-12 23:16:17'),(76,'4Ztw-50263_4066446_IMG_08_0000_max_656x437.JPG',45,'App\\Obivlenie','2016-03-12 23:16:19','2016-03-12 23:16:19'),(77,'Ret8-50263_4066446_IMG_01_0000_max_656x437.JPG',46,'App\\Obivlenie','2016-03-12 23:34:33','2016-03-12 23:34:33'),(78,'nMdF-50263_4066446_IMG_04_0000_max_656x437.JPG',46,'App\\Obivlenie','2016-03-12 23:34:34','2016-03-12 23:34:34'),(79,'5wL6-50263_4066446_IMG_01_0000_max_656x437.JPG',47,'App\\Obivlenie','2016-03-12 23:36:49','2016-03-12 23:36:49'),(80,'bN6Z-50263_4066446_IMG_04_0000_max_656x437.JPG',47,'App\\Obivlenie','2016-03-12 23:36:50','2016-03-12 23:36:50'),(81,'xCsf-50263_4066446_IMG_04_0000_max_656x437.JPG',48,'App\\Obivlenie','2016-03-12 23:40:09','2016-03-12 23:40:09'),(82,'xMSc-50263_4066446_IMG_08_0000_max_656x437.JPG',48,'App\\Obivlenie','2016-03-12 23:40:09','2016-03-12 23:40:09'),(83,'ZicL-50263_4066446_IMG_01_0000_max_656x437.JPG',49,'App\\Obivlenie','2016-03-12 23:40:52','2016-03-12 23:40:52'),(84,'qtUg-50263_4066446_IMG_04_0000_max_656x437.JPG',49,'App\\Obivlenie','2016-03-12 23:40:53','2016-03-12 23:40:53'),(85,'ULOJ-50263_4066446_IMG_01_0000_max_656x437.JPG',50,'App\\Obivlenie','2016-03-13 00:35:34','2016-03-13 00:35:34'),(86,'Khwl-50263_4066446_IMG_04_0000_max_656x437.JPG',50,'App\\Obivlenie','2016-03-13 00:35:34','2016-03-13 00:35:34'),(87,'0iJc-50263_4066446_IMG_08_0000_max_656x437.JPG',50,'App\\Obivlenie','2016-03-13 00:35:34','2016-03-13 00:35:34'),(88,'DTUR-50263_4066446_IMG_04_0000_max_656x437.JPG',51,'App\\Obivlenie','2016-03-13 00:38:45','2016-03-13 00:38:45'),(89,'QAEX-50263_4066446_IMG_08_0000_max_656x437.JPG',51,'App\\Obivlenie','2016-03-13 00:38:45','2016-03-13 00:38:45'),(90,'H6Di-50263_4066446_IMG_01_0000_max_656x437.JPG',52,'App\\Obivlenie','2016-03-13 01:05:33','2016-03-13 01:05:33'),(91,'okCA-50263_4066446_IMG_04_0000_max_656x437.JPG',52,'App\\Obivlenie','2016-03-13 01:05:34','2016-03-13 01:05:34'),(92,'2LJc-50263_4066446_IMG_08_0000_max_656x437.JPG',52,'App\\Obivlenie','2016-03-13 01:05:35','2016-03-13 01:05:35'),(93,'XQib-50263_4066446_IMG_01_0000_max_656x437.JPG',53,'App\\Obivlenie','2016-03-13 01:06:16','2016-03-13 01:06:16'),(94,'vMdv-50263_4066446_IMG_04_0000_max_656x437.JPG',53,'App\\Obivlenie','2016-03-13 01:06:16','2016-03-13 01:06:16'),(95,'ktrL-50263_4066446_IMG_01_0000_max_656x437.JPG',54,'App\\Obivlenie','2016-03-13 01:07:42','2016-03-13 01:07:42'),(96,'YhF7-50263_4066446_IMG_04_0000_max_656x437.JPG',54,'App\\Obivlenie','2016-03-13 01:07:42','2016-03-13 01:07:42'),(97,'IvGn-50263_4066446_IMG_08_0000_max_656x437.JPG',54,'App\\Obivlenie','2016-03-13 01:07:42','2016-03-13 01:07:42'),(98,'8wVn-50263_4066446_IMG_04_0000_max_656x437.JPG',55,'App\\Obivlenie','2016-03-13 01:20:59','2016-03-13 01:20:59'),(99,'uziP-50263_4066446_IMG_04_0000_max_656x437.JPG',56,'App\\Obivlenie','2016-03-13 01:42:23','2016-03-13 01:42:23'),(100,'Dwg1-50263_4066446_IMG_04_0000_max_656x437.JPG',57,'App\\Obivlenie','2016-03-13 01:43:19','2016-03-13 01:43:19'),(101,'m0tQ-50263_4066446_IMG_08_0000_max_656x437.JPG',57,'App\\Obivlenie','2016-03-13 01:43:20','2016-03-13 01:43:20'),(102,'Bjug-50263_4066446_IMG_01_0000_max_656x437.JPG',58,'App\\Obivlenie','2016-03-13 01:46:01','2016-03-13 01:46:01'),(103,'FG9Z-50263_4066446_IMG_04_0000_max_656x437.JPG',58,'App\\Obivlenie','2016-03-13 01:46:02','2016-03-13 01:46:02'),(104,'DuIB-50263_4066446_IMG_01_0000_max_656x437.JPG',59,'App\\Obivlenie','2016-03-13 01:53:47','2016-03-13 01:53:47'),(105,'wLu0-50263_4066446_IMG_04_0000_max_656x437.JPG',59,'App\\Obivlenie','2016-03-13 01:53:47','2016-03-13 01:53:47'),(106,'m9bO-50263_4066446_IMG_05_0000_max_656x437.JPG',60,'App\\Obivlenie','2016-03-13 01:56:42','2016-03-13 01:56:42'),(107,'2F0e-50263_4066446_IMG_01_0000_max_656x437.JPG',60,'App\\Obivlenie','2016-03-13 01:56:42','2016-03-13 01:56:42'),(108,'BoeX-50263_4066446_IMG_04_0000_max_656x437.JPG',60,'App\\Obivlenie','2016-03-13 01:56:43','2016-03-13 01:56:43'),(109,'pv2n-50263_4066446_IMG_08_0000_max_656x437.JPG',60,'App\\Obivlenie','2016-03-13 01:56:43','2016-03-13 01:56:43'),(110,'IahT-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 10:48:05','2016-05-22 10:48:05'),(111,'IahT-50263_4066446_IMG_08_0000_max_656x437.JPG',64,'App\\Obivlenie','2016-05-22 10:48:05','2016-05-22 10:48:05'),(112,'hyJ5-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 10:53:22','2016-05-22 10:53:22'),(113,'hyJ5-50263_4066446_IMG_08_0000_max_656x437.JPG',65,'App\\Obivlenie','2016-05-22 10:53:22','2016-05-22 10:53:22'),(114,'9CKq-50263_4066446_IMG_00_0000_max_656x437.jpg',65,'App\\Obivlenie','2016-05-22 10:53:22','2016-05-22 10:53:22'),(115,'EL8a-50263_4066446_IMG_01_0000_max_656x437.JPG',65,'App\\Obivlenie','2016-05-22 10:53:22','2016-05-22 10:53:22'),(116,'j7UB-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 10:59:36','2016-05-22 10:59:36'),(117,'j7UB-50263_4066446_IMG_08_0000_max_656x437.JPG',66,'App\\Obivlenie','2016-05-22 10:59:36','2016-05-22 10:59:36'),(118,'IW4Y-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 11:04:47','2016-05-22 11:04:47'),(119,'IW4Y-50263_4066446_IMG_08_0000_max_656x437.JPG',67,'App\\Obivlenie','2016-05-22 11:04:47','2016-05-22 11:04:47'),(120,'kHOJ-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 11:09:10','2016-05-22 11:09:10'),(121,'kHOJ-50263_4066446_IMG_08_0000_max_656x437.JPG',68,'App\\Obivlenie','2016-05-22 11:09:10','2016-05-22 11:09:10'),(122,'pe8d-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 11:14:08','2016-05-22 11:14:08'),(123,'pe8d-50263_4066446_IMG_08_0000_max_656x437.JPG',69,'App\\Obivlenie','2016-05-22 11:14:08','2016-05-22 11:14:08'),(124,'nnPj-50263_4066446_IMG_08_0000_max_656x437.JPG',0,'App\\Thumbnail','2016-05-22 11:18:59','2016-05-22 11:18:59'),(125,'nnPj-50263_4066446_IMG_08_0000_max_656x437.JPG',70,'App\\Obivlenie','2016-05-22 11:18:59','2016-05-22 11:18:59'),(126,'KvzS-50263_4066446_IMG_00_0000_max_656x437.jpg',0,'App\\Thumbnail','2016-05-22 12:03:10','2016-05-22 12:03:10'),(127,'KvzS-50263_4066446_IMG_00_0000_max_656x437.jpg',76,'App\\Obivlenie','2016-05-22 12:03:10','2016-05-22 12:03:10'),(128,'EZBO-50263_4066446_IMG_00_0000_max_656x437.jpg',0,'App\\Thumbnail','2016-05-22 12:53:39','2016-05-22 12:53:39'),(129,'EZBO-50263_4066446_IMG_00_0000_max_656x437.jpg',77,'App\\Obivlenie','2016-05-22 12:53:39','2016-05-22 12:53:39'),(130,'MT3S9aoPjpeg',0,'App\\Thumbnail','2016-05-22 12:55:15','2016-05-22 12:55:15'),(131,'MT3S9aoPjpeg',78,'App\\Obivlenie','2016-05-22 12:55:15','2016-05-22 12:55:15'),(132,'YHHc1Q0G.jpeg',0,'App\\Thumbnail','2016-05-22 19:35:38','2016-05-22 19:35:38'),(133,'YHHc1Q0G.jpeg',79,'App\\Obivlenie','2016-05-22 19:35:38','2016-05-22 19:35:38'),(134,'oRFCM1mnSlGTJYDuCXMZ8OHLj3N9i81s.jpeg',0,'App\\Thumbnail','2016-05-22 19:58:08','2016-05-22 19:58:08'),(135,'oRFCM1mnSlGTJYDuCXMZ8OHLj3N9i81s.jpeg',80,'App\\Obivlenie','2016-05-22 19:58:08','2016-05-22 19:58:08'),(136,'FuxpWQjtU9eRgJWUo8TbyyTOlcME7DBq.jpeg',0,'App\\Thumbnail','2016-05-22 20:12:41','2016-05-22 20:12:41'),(137,'FuxpWQjtU9eRgJWUo8TbyyTOlcME7DBq.jpeg',81,'App\\Obivlenie','2016-05-22 20:12:41','2016-05-22 20:12:41'),(138,'Nxq8OzDeFrnX68VESKPnhyvgBZCUXhnL.jpeg',0,'App\\Thumbnail','2016-05-22 20:16:01','2016-05-22 20:16:01'),(139,'Nxq8OzDeFrnX68VESKPnhyvgBZCUXhnL.jpeg',83,'App\\Obivlenie','2016-05-22 20:16:01','2016-05-22 20:16:01'),(140,'wB6FW7ozsRlrqzzTvjJp2avyDAUTPW6N.jpeg',91,'App\\Obivlenie','2016-05-22 21:31:38','2016-05-22 21:31:38'),(141,'gVqM7DdKpdbWqS1py1TkFHUb95LnJfhw.jpeg',91,'App\\Obivlenie','2016-05-22 21:31:38','2016-05-22 21:31:38'),(142,'LKiJnXkctkdj4xTnlrNEfrbhwE98ST7n.jpeg',91,'App\\Obivlenie','2016-05-22 21:31:38','2016-05-22 21:31:38'),(143,'4czJAitPjj5TScZZNnXMVsc5xbuk3gVF.jpeg',93,'App\\Obivlenie','2016-05-22 21:38:51','2016-05-22 21:38:51'),(144,'IO42IieeqENrpDTyzfQScBzsvrZHbDkv.jpeg',93,'App\\Obivlenie','2016-05-22 21:38:51','2016-05-22 21:38:51'),(145,'lrh7dlF0eWApo6qL0poLZNiTHNTo4VVJ.jpeg',93,'App\\Obivlenie','2016-05-22 21:38:51','2016-05-22 21:38:51'),(146,'LNimokwxMIKbtM09cdSRKIBk7GG6PSDW.2015-11-16-mXtM7FL4-67c5c9c55da19a647e767f79a4f19545.jpg',95,'App\\Obivlenie','2016-05-22 21:43:35','2016-05-22 21:43:35'),(147,'oA8xQFOD295tdxS5fFgFR2hcUaofUm4J.2015-12-27-QpekUTjg-kvartira-moskva-nizhnyaya-pervomayskaya-ulica-82371691-1.jpg',95,'App\\Obivlenie','2016-05-22 21:43:35','2016-05-22 21:43:35'),(148,'6Bn5UPEMlaJ9xapvIdFvjy6Qzu9FCnRT.50263_4066446_IMG_08_0000_max_656x437.JPG',95,'App\\Obivlenie','2016-05-22 21:43:35','2016-05-22 21:43:35'),(149,'MBDwqqJF62RXmoS6JikgAz7ripLv0J7w.2015-11-16-mXtM7FL4-67c5c9c55da19a647e767f79a4f19545.jpg',96,'App\\Obivlenie','2016-05-22 21:44:45','2016-05-22 21:44:45'),(150,'Zkn6gOsySM71YzJqHxLsRqpP1UTnvjY7.2015-12-27-QpekUTjg-kvartira-moskva-nizhnyaya-pervomayskaya-ulica-82371691-1.jpg',96,'App\\Obivlenie','2016-05-22 21:44:45','2016-05-22 21:44:45'),(151,'KE5jo8uDxtCLKAsnYpkK2f9NrX4a7QDr.50263_4066446_IMG_08_0000_max_656x437.JPG',96,'App\\Obivlenie','2016-05-22 21:44:45','2016-05-22 21:44:45'),(152,'FlZhzhxTg5CE1jKAhtLhoXbli8I0avYR.2015-11-16-mXtM7FL4-67c5c9c55da19a647e767f79a4f19545.jpg',97,'App\\Obivlenie','2016-05-22 21:51:47','2016-05-22 21:51:47'),(153,'uJkZ1lr1qPniOpF84fteqnUJS8w5xjcq.2015-12-27-QpekUTjg-kvartira-moskva-nizhnyaya-pervomayskaya-ulica-82371691-1.jpg',97,'App\\Obivlenie','2016-05-22 21:51:47','2016-05-22 21:51:47'),(154,'cSsxft9nyeLX9hOYMIQo59BWtzmv1N2U.50263_4066446_IMG_08_0000_max_656x437.JPG',97,'App\\Obivlenie','2016-05-22 21:51:47','2016-05-22 21:51:47'),(155,'LHRuBtpCwrgli8XSKuY37UkLs7MAel0n.jpeg',100,'App\\Obivlenie','2016-05-22 21:58:43','2016-05-22 21:58:43'),(156,'i4R5KMlTBfyJe8q5A6Evw0MqhGsCYRWo.jpeg',100,'App\\Obivlenie','2016-05-22 21:58:43','2016-05-22 21:58:43'),(157,'euHLCEBxy2g7QWlTopTaWTN7672FD5JH.jpeg',100,'App\\Obivlenie','2016-05-22 21:58:43','2016-05-22 21:58:43'),(158,'ak80ewJ08N3T9ouvbUN4t4JrorOmCCGP.jpeg',105,'App\\Obivlenie','2016-05-22 22:03:26','2016-05-22 22:03:26'),(159,'Hqq6JnXdxqs8mZvtcvqWIpsAlq5keZ7K.jpeg',105,'App\\Obivlenie','2016-05-22 22:03:26','2016-05-22 22:03:26'),(160,'2mbyMmsmzU0dSXz8P5yPyvFq0y1Ei9Lj.jpeg',105,'App\\Obivlenie','2016-05-22 22:03:26','2016-05-22 22:03:26'),(161,'Fdj4rvg7TCJwY0hRG9UL5TFJ35lFQK8a.jpeg',0,'App\\Thumbnail','2016-05-22 22:09:11','2016-05-22 22:09:11'),(162,'5ShRvxbYSakjOPko9KnVQozLnaV51vj0.jpeg',107,'App\\Obivlenie','2016-05-22 22:20:44','2016-05-22 22:20:44'),(163,'y6rmWQy2mJig6eOKXYXYgrmKxWdF9KDo.jpeg',0,'App\\Thumbnail','2016-05-22 22:20:44','2016-05-22 22:20:44'),(164,'I2nWQAl9p4zPdzhAT8lzDCbhSQLNqxOB.jpeg',107,'App\\Obivlenie','2016-05-22 22:20:44','2016-05-22 22:20:44'),(165,'tb5mHaMvC5InqUvEmd4AR5aXBWQ0cHaK.jpeg',107,'App\\Obivlenie','2016-05-22 22:20:44','2016-05-22 22:20:44'),(166,'B0V0oxq1uhDKu1R9z4O45E24sNVJzH0v.jpeg',112,'App\\Obivlenie','2016-05-22 22:30:05','2016-05-22 22:30:05'),(167,'GWirkRdlesJcrhQZeu5SiyMhyeWH9hTj.jpeg',0,'App\\Thumbnail','2016-05-22 22:30:05','2016-05-22 22:30:05'),(168,'SyPVkXh5eWg8lbqi4LxuxNKlwcKyPES9.jpeg',112,'App\\Obivlenie','2016-05-22 22:30:05','2016-05-22 22:30:05'),(169,'PsQDFmcH1G9xneS9NkOtGFqVG49H0NwV.jpeg',112,'App\\Obivlenie','2016-05-22 22:30:05','2016-05-22 22:30:05'),(170,'FtKPaB752ruocGXXPc8QIn6I9kh0yCA0.jpeg',114,'App\\Obivlenie','2016-05-23 21:44:55','2016-05-23 21:44:55'),(171,'pO9C57veCigXPeHugXgJnyAL4ofPC9j0.jpeg',0,'App\\Thumbnail','2016-05-23 21:44:55','2016-05-23 21:44:55'),(172,'HfDk5cKuIkiID32yjgIaWYM7hwA7nwkW.jpeg',114,'App\\Obivlenie','2016-05-23 21:44:55','2016-05-23 21:44:55'),(173,'2cP7ZHUIwVBPbM3TSafu180RWvMbE0Cw.jpeg',114,'App\\Obivlenie','2016-05-23 21:44:55','2016-05-23 21:44:55'),(174,'OdzkohpYNanJI8ojJ556aKxG7fh3czgE.jpeg',116,'App\\Obivlenie','2016-05-23 22:12:17','2016-05-23 22:12:17'),(175,'116.jpeg',0,'App\\Thumbnail','2016-05-23 22:12:17','2016-05-23 22:12:17'),(176,'5BPrDbNiBO6glnVvXALu1Z1sOHMgDAO2.jpeg',116,'App\\Obivlenie','2016-05-23 22:12:17','2016-05-23 22:12:17'),(177,'AjwtGvG4bq3NTXDoKz95VQtQfeHUiafo.jpeg',116,'App\\Obivlenie','2016-05-23 22:12:17','2016-05-23 22:12:17'),(179,'117.jpeg',0,'App\\Thumbnail','2016-06-17 19:49:43','2016-06-17 19:49:43'),(182,'PQTfy9vW7ZDkE8dssQyIL2oBeY5g3bcu.jpeg',118,'App\\Obivlenie','2016-06-17 21:46:37','2016-06-17 21:46:37'),(183,'118.jpeg',0,'App\\Thumbnail','2016-06-17 21:46:37','2016-06-17 21:46:37'),(184,'rqiAs2ljITw0yxdlI3DPkB3NCBpjEDvb.jpeg',118,'App\\Obivlenie','2016-06-17 21:46:37','2016-06-17 21:46:37'),(185,'VkyhTsHy8z9kUobY6sRsl0UWZC7MBC45.jpeg',118,'App\\Obivlenie','2016-06-17 21:46:37','2016-06-17 21:46:37'),(186,'9yaPYTomOr6GUv16m5QTzaBpYD1RPpXV.jpeg',119,'App\\Obivlenie','2016-06-17 21:59:03','2016-06-17 21:59:03'),(187,'119.jpeg',0,'App\\Thumbnail','2016-06-17 21:59:04','2016-06-17 21:59:04'),(188,'tgpVIt0UmUeG9vZVjJXITocU8Cnx6nN0.jpeg',119,'App\\Obivlenie','2016-06-17 21:59:04','2016-06-17 21:59:04'),(189,'Pls0t4NarT801kjHfODWFiHco6qHRJ0d.jpeg',119,'App\\Obivlenie','2016-06-17 21:59:04','2016-06-17 21:59:04'),(190,'1ksfwJQXNCYlNEnEVAvk0j4k821T4MOg.jpeg',119,'App\\Obivlenie','2016-06-17 21:59:04','2016-06-17 21:59:04'),(191,'UzTgIkVfQe25Jv2FUzcgNBxyUU8Ph8GY.jpeg',120,'App\\Obivlenie','2016-06-17 23:49:41','2016-06-17 23:49:41'),(192,'120.jpeg',0,'App\\Thumbnail','2016-06-17 23:49:41','2016-06-17 23:49:41'),(193,'6CP5NCdPD7lUONLaAtRU0OpNeFxWgXSl.jpeg',120,'App\\Obivlenie','2016-06-17 23:49:41','2016-06-17 23:49:41'),(194,'75bkgSTfoP3ipPIlXQAzV6Ol3oqNEyje.jpeg',120,'App\\Obivlenie','2016-06-17 23:49:41','2016-06-17 23:49:41'),(195,'qrBFpcdUDEyQy33Rjfb6RnuAcMsVCyE0.jpeg',120,'App\\Obivlenie','2016-06-17 23:49:41','2016-06-17 23:49:41'),(196,'MhlFUE9DX9DsRxNbStMWzs2WrIimz5F7.jpeg',120,'App\\Obivlenie','2016-06-17 23:49:41','2016-06-17 23:49:41'),(197,'I0Mk6JjoerU8hHyS9HWMUMiarQE7QPs9.jpeg',121,'App\\Obivlenie','2016-06-17 23:50:28','2016-06-17 23:50:28'),(198,'121.jpeg',0,'App\\Thumbnail','2016-06-17 23:50:28','2016-06-17 23:50:28'),(199,'XTcSxh4bHV0Y7cE3PJslqfyvw7SGXs6P.jpeg',121,'App\\Obivlenie','2016-06-17 23:50:28','2016-06-17 23:50:28'),(200,'vJmXa0I9zbtFC9drmSJsOnanTD7tugDe.jpeg',121,'App\\Obivlenie','2016-06-17 23:50:28','2016-06-17 23:50:28'),(201,'ehyyJ3oGyDk98jKv5FmTmccwVqdROqyB.jpeg',121,'App\\Obivlenie','2016-06-17 23:50:28','2016-06-17 23:50:28'),(202,'8VQEAyFlftFSDhU2Agq3BpkWh5JjjXlV.jpeg',121,'App\\Obivlenie','2016-06-17 23:50:28','2016-06-17 23:50:28'),(203,'6XemBem51RrWPCnSs0SH1vL6fUUJg8sM.jpeg',122,'App\\Obivlenie','2016-06-18 08:01:16','2016-06-18 08:01:16'),(204,'122.jpeg',0,'App\\Thumbnail','2016-06-18 08:01:16','2016-06-18 08:01:16'),(205,'cuvf6Hp9kvYtetZmqIzf5JBUOXkRhhHc.jpeg',122,'App\\Obivlenie','2016-06-18 08:01:16','2016-06-18 08:01:16'),(206,'znLuTqjUQQcv9WmdJkhgcMpi6S4kiGbx.jpeg',122,'App\\Obivlenie','2016-06-18 08:01:16','2016-06-18 08:01:16'),(207,'E8rfn0d2IgLhiyxq4qDd5fYuIrqTrbhg.jpeg',123,'App\\Obivlenie','2016-06-18 08:19:02','2016-06-18 08:19:02'),(208,'123.jpeg',0,'App\\Thumbnail','2016-06-18 08:19:02','2016-06-18 08:19:02'),(209,'5TwUPqpOcQPzLwyOxzuv3lXtEzZ5rLTv.jpeg',123,'App\\Obivlenie','2016-06-18 08:19:02','2016-06-18 08:19:02'),(210,'8MP9gKOJV1z0bIk2LYUXnqTMi7YKNERV.jpeg',123,'App\\Obivlenie','2016-06-18 08:19:02','2016-06-18 08:19:02'),(211,'sObvCne5ynRH9ju36666rC7h088J7kea.jpeg',124,'App\\Obivlenie','2016-06-18 08:19:49','2016-06-18 08:19:49'),(212,'124.jpeg',0,'App\\Thumbnail','2016-06-18 08:19:49','2016-06-18 08:19:49'),(213,'pL5byJAM6op87q5DkXww3NWhT6KRaMoC.jpeg',124,'App\\Obivlenie','2016-06-18 08:19:49','2016-06-18 08:19:49'),(214,'Q2mPcWE2Tjjset9hoXUGzrk53FztSjF7.jpeg',124,'App\\Obivlenie','2016-06-18 08:19:49','2016-06-18 08:19:49'),(215,'pTsoQvhTkI7fHMBtfRzzUBLDk4zlJQYg.jpeg',125,'App\\Obivlenie','2016-06-18 17:05:07','2016-06-18 17:05:07'),(216,'125.jpeg',0,'App\\Thumbnail','2016-06-18 17:05:07','2016-06-18 17:05:07'),(217,'2SIrJ1QTv0kN9Rm7lRke5fFRb9xYE5zV.jpeg',125,'App\\Obivlenie','2016-06-18 17:05:07','2016-06-18 17:05:07'),(218,'8fceUkT0TUdbdi9jZg9t4rrqMzWB1nCU.jpeg',125,'App\\Obivlenie','2016-06-18 17:05:07','2016-06-18 17:05:07'),(227,'117.jpeg',0,'App\\Thumbnail','2016-06-20 13:32:36','2016-06-20 13:32:36'),(231,'117.jpeg',0,'App\\Thumbnail','2016-06-20 13:37:30','2016-06-20 13:37:30'),(236,'117.jpeg',0,'App\\Thumbnail','2016-06-20 13:38:05','2016-06-20 13:38:05'),(240,'hsOO76EuWK6jAC4Rr4CugZOAZ1VQLKvK.jpeg',117,'App\\Obivlenie','2016-06-20 14:51:03','2016-06-20 14:51:03'),(241,'117.jpeg',0,'App\\Thumbnail','2016-06-20 14:51:03','2016-06-20 14:51:03'),(242,'orGVxDzS96OqKPOc99iirepFjGZhpgTt.jpeg',117,'App\\Obivlenie','2016-06-20 14:51:03','2016-06-20 14:51:03'),(243,'hHGQFdQBXDSfUZtPqbGRtjLCkVfWg1vw.jpeg',117,'App\\Obivlenie','2016-06-20 14:51:03','2016-06-20 14:51:03'),(244,'XyZ2VEdH-20051001194624_geek2.jpg',3,'App\\Profiles','2016-06-20 22:39:59','2016-06-20 22:39:59'),(245,'S2MQJwJtLlBy1w7TXM8vk9t3gkYY11Tf.jpeg',126,'App\\Obivlenie','2016-07-01 09:09:02','2016-07-01 09:09:02'),(246,'126.jpeg',0,'App\\Thumbnail','2016-07-01 09:09:02','2016-07-01 09:09:02'),(247,'TEMDD2LtCPO3bGhPajKX1AdeDqdK1X6u.jpeg',126,'App\\Obivlenie','2016-07-01 09:09:02','2016-07-01 09:09:02'),(248,'DHRiKcQ41o1PniSmsdCBiOqNsNKI3QOu.jpeg',126,'App\\Obivlenie','2016-07-01 09:09:02','2016-07-01 09:09:02'),(249,'dvi13VSgNBjOtpmJC2nRZQW1wOD8biMP.jpeg',127,'App\\Obivlenie','2016-07-01 09:09:28','2016-07-01 09:09:28'),(250,'127.jpeg',0,'App\\Thumbnail','2016-07-01 09:09:28','2016-07-01 09:09:28'),(251,'n9pzjxiRjQyzvQNbBV5WEDSlGLHrvZGm.jpeg',127,'App\\Obivlenie','2016-07-01 09:09:28','2016-07-01 09:09:28'),(252,'7HnxVtV7fADSYQDnRfn3N5vF7wfngyrX.jpeg',127,'App\\Obivlenie','2016-07-01 09:09:28','2016-07-01 09:09:28'),(253,'GUlifD2NS7dys0eKfFCnJOQnuM9Ymj9Z.jpeg',128,'App\\Obivlenie','2016-07-01 09:10:02','2016-07-01 09:10:02'),(254,'128.jpeg',0,'App\\Thumbnail','2016-07-01 09:10:02','2016-07-01 09:10:02'),(255,'oFfpaobBgfNvc3XWDkKr9sNGkb0AJvaT.jpeg',128,'App\\Obivlenie','2016-07-01 09:10:02','2016-07-01 09:10:02'),(256,'PTBLFBafgEWRidNaWaesbXv75wEQNIvQ.jpeg',128,'App\\Obivlenie','2016-07-01 09:10:02','2016-07-01 09:10:02'),(257,'Tjq3DtDvxYjdudpc86DS6RgQRg47tBK3.jpeg',129,'App\\Obivlenie','2016-07-01 09:14:41','2016-07-01 09:14:41'),(258,'129.jpeg',0,'App\\Thumbnail','2016-07-01 09:14:41','2016-07-01 09:14:41'),(259,'aLO7Zv3YV2foPBzXG9cgtklCQ3AvKtjS.jpeg',129,'App\\Obivlenie','2016-07-01 09:14:41','2016-07-01 09:14:41'),(260,'yPdhy5G83D4zU01pgTR591Jtu7mIZYzh.jpeg',129,'App\\Obivlenie','2016-07-01 09:14:41','2016-07-01 09:14:41'),(261,'idF6908Ii2vRXfmYJjFOYronLzLWYOVJ.jpeg',130,'App\\Obivlenie','2016-07-01 09:23:42','2016-07-01 09:23:42'),(262,'130.jpeg',0,'App\\Thumbnail','2016-07-01 09:23:42','2016-07-01 09:23:42'),(263,'FLx5QHV7VRv0FH5QlhDq2fEDkJx3nauN.jpeg',130,'App\\Obivlenie','2016-07-01 09:23:42','2016-07-01 09:23:42'),(264,'k7RbXFohHEDgkqyjajsvacNKmHJsR0wa.jpeg',130,'App\\Obivlenie','2016-07-01 09:23:42','2016-07-01 09:23:42'),(265,'49CSL8PDRUtVya4FzlvjkSvLOYWwXqJW.jpeg',131,'App\\Obivlenie','2016-07-01 09:24:13','2016-07-01 09:24:13'),(266,'131.jpeg',0,'App\\Thumbnail','2016-07-01 09:24:13','2016-07-01 09:24:13'),(267,'NkwXtRTuPt7KOjkm04qdYaFsriwHpKXT.jpeg',131,'App\\Obivlenie','2016-07-01 09:24:13','2016-07-01 09:24:13'),(268,'O1exVzTa3xC0VpisTDc7OKkLK8QE0VC5.jpeg',131,'App\\Obivlenie','2016-07-01 09:24:13','2016-07-01 09:24:13'),(269,'lfWqRFiV7mYWsE8fAhCDOkOHTJWRuVrJ.jpeg',132,'App\\Obivlenie','2016-07-01 09:24:32','2016-07-01 09:24:32'),(270,'132.jpeg',0,'App\\Thumbnail','2016-07-01 09:24:32','2016-07-01 09:24:32'),(271,'sCMu32G7Nxq5xevReQdKaKpZND2Whoye.jpeg',132,'App\\Obivlenie','2016-07-01 09:24:32','2016-07-01 09:24:32'),(272,'jPxhZ1V8AogGFz3tg7xto96E4bzRttEo.jpeg',132,'App\\Obivlenie','2016-07-01 09:24:32','2016-07-01 09:24:32'),(273,'BsM1gE8QLotW4BD2RWD1ZjzYSOFgwFYu.jpeg',133,'App\\Obivlenie','2016-07-01 09:24:58','2016-07-01 09:24:58'),(274,'133.jpeg',0,'App\\Thumbnail','2016-07-01 09:24:58','2016-07-01 09:24:58'),(275,'Xx5fod8eIMIDxzYIA3oNQiWqVZNYtdix.jpeg',133,'App\\Obivlenie','2016-07-01 09:24:58','2016-07-01 09:24:58'),(276,'8jUSwZ1XCdDQdhyx9EuE5WuZlcbTxhHp.jpeg',133,'App\\Obivlenie','2016-07-01 09:24:58','2016-07-01 09:24:58'),(277,'cpHknzM7VhuCsQyxgbTjamv3FIVRJq6F.jpeg',134,'App\\Obivlenie','2016-07-01 09:25:26','2016-07-01 09:25:26'),(278,'134.jpeg',0,'App\\Thumbnail','2016-07-01 09:25:26','2016-07-01 09:25:26'),(279,'BRyA4lfIKIeVtW12YqXmafSisHievJRV.jpeg',134,'App\\Obivlenie','2016-07-01 09:25:26','2016-07-01 09:25:26'),(280,'FhWsonTeDRA5n54BgNQTinlISHmm9fRu.jpeg',134,'App\\Obivlenie','2016-07-01 09:25:26','2016-07-01 09:25:26'),(281,'K9xw57uiIRFfOKm6PNrnXIjQlt6O5ia6.jpeg',135,'App\\Obivlenie','2016-07-01 09:25:59','2016-07-01 09:25:59'),(282,'135.jpeg',0,'App\\Thumbnail','2016-07-01 09:25:59','2016-07-01 09:25:59'),(283,'Rv3AL39iKDK7aMs2fCpTZZnXO3F6bfM3.jpeg',135,'App\\Obivlenie','2016-07-01 09:25:59','2016-07-01 09:25:59'),(284,'GUpqBeuJuXTMiWafSriEhZ3y6mwE3aOD.jpeg',135,'App\\Obivlenie','2016-07-01 09:25:59','2016-07-01 09:25:59'),(285,'QkTtAOEr6g3179UGQoc27rG208PfPVoI.jpeg',136,'App\\Obivlenie','2016-07-01 09:26:23','2016-07-01 09:26:23'),(286,'136.jpeg',0,'App\\Thumbnail','2016-07-01 09:26:23','2016-07-01 09:26:23'),(287,'jSbPTLR7Zs3XIP6jVHg4t1DvZ4fi3XXT.jpeg',136,'App\\Obivlenie','2016-07-01 09:26:23','2016-07-01 09:26:23'),(288,'5NYiuMfeOKQZnb1cnaAcqlMaTO7UPvs1.jpeg',136,'App\\Obivlenie','2016-07-01 09:26:23','2016-07-01 09:26:23'),(289,'0ketm4fo1xTPfN8PrAths9QhLcDivuq5.jpeg',137,'App\\Obivlenie','2016-07-01 09:27:27','2016-07-01 09:27:27'),(290,'137.jpeg',0,'App\\Thumbnail','2016-07-01 09:27:27','2016-07-01 09:27:27'),(291,'8T7H99Ox4yeLNQOhvSDaEohxoLDT8HTm.jpeg',137,'App\\Obivlenie','2016-07-01 09:27:27','2016-07-01 09:27:27'),(292,'iwSiXcEYGTM9XOz8vNiBNI8Kqg7Al7br.jpeg',137,'App\\Obivlenie','2016-07-01 09:27:27','2016-07-01 09:27:27'),(293,'JWUmrVE5tCWnuAmYFKRhpBwgPqV8Nt3O.jpeg',138,'App\\Obivlenie','2016-07-01 09:27:54','2016-07-01 09:27:54'),(294,'138.jpeg',0,'App\\Thumbnail','2016-07-01 09:27:54','2016-07-01 09:27:54'),(295,'f2pyrQo8vjaUXkprZsIa2V46tBgocdXp.jpeg',138,'App\\Obivlenie','2016-07-01 09:27:54','2016-07-01 09:27:54'),(296,'m9FyU6dNXUaXc1Wwcn1RLg9ucFiXIuka.jpeg',138,'App\\Obivlenie','2016-07-01 09:27:54','2016-07-01 09:27:54'),(297,'TuJzV2QsAKtmfQLafkUyvozjkalw4SzI.jpeg',139,'App\\Obivlenie','2016-07-01 09:28:49','2016-07-01 09:28:49'),(298,'139.jpeg',0,'App\\Thumbnail','2016-07-01 09:28:49','2016-07-01 09:28:49'),(299,'BIZF5xIkAnlx2lg2FIi9XahsAjPm31lh.jpeg',139,'App\\Obivlenie','2016-07-01 09:28:49','2016-07-01 09:28:49'),(300,'Nho2KfMrEKl5hYIcGHNwKYw3GwXvMlaL.jpeg',139,'App\\Obivlenie','2016-07-01 09:28:49','2016-07-01 09:28:49'),(301,'adLg0Io8gZCkm52kkmOqB0GWqm3G5hL7.jpeg',140,'App\\Obivlenie','2016-07-01 09:29:25','2016-07-01 09:29:25'),(302,'140.jpeg',0,'App\\Thumbnail','2016-07-01 09:29:25','2016-07-01 09:29:25'),(303,'VppeFYvOiYLHqFfenilWhTUXEkXk8f7p.jpeg',140,'App\\Obivlenie','2016-07-01 09:29:25','2016-07-01 09:29:25'),(304,'YMgV9D3Bw2MX52nEuQvCXj4hAy5Y09Mq.jpeg',140,'App\\Obivlenie','2016-07-01 09:29:25','2016-07-01 09:29:25'),(305,'x2FHv1d1EiE920d142PTHl1U62uNsx5d.jpeg',141,'App\\Obivlenie','2016-07-02 08:03:30','2016-07-02 08:03:30'),(306,'141.jpeg',0,'App\\Thumbnail','2016-07-02 08:03:30','2016-07-02 08:03:30'),(307,'f4QZd4xB6En1vqY1iSDnRkF02yGQrMMP.jpeg',141,'App\\Obivlenie','2016-07-02 08:03:30','2016-07-02 08:03:30'),(308,'YJxIkFzM7hMBkG7eVzmuRM6kGkqx4xqT.jpeg',141,'App\\Obivlenie','2016-07-02 08:03:30','2016-07-02 08:03:30'),(309,'A9xBKqDJTy03gBKL9cX3LhIQqy4wonnL.jpeg',142,'App\\Obivlenie','2016-07-02 08:04:19','2016-07-02 08:04:19'),(310,'142.jpeg',0,'App\\Thumbnail','2016-07-02 08:04:19','2016-07-02 08:04:19'),(311,'kf2UE7Vvt2GTwXjJEHHxDPGZzQ6jvxbo.jpeg',142,'App\\Obivlenie','2016-07-02 08:04:19','2016-07-02 08:04:19'),(312,'Gn52qkQ7WsbjpLihF8sH8hxWZ2ARl7mp.jpeg',142,'App\\Obivlenie','2016-07-02 08:04:19','2016-07-02 08:04:19'),(313,'AnMOZzAc5OK790gmZR1pwTrV5tJKe8GK.jpeg',143,'App\\Obivlenie','2016-07-02 10:29:58','2016-07-02 10:29:58'),(314,'143.jpeg',0,'App\\Thumbnail','2016-07-02 10:29:58','2016-07-02 10:29:58'),(315,'etvx7BQTv0mLUKTjlBbHmU71pg2JhIED.jpeg',143,'App\\Obivlenie','2016-07-02 10:29:58','2016-07-02 10:29:58'),(316,'BinPFhdtpTYyLDkQFkY8wHVNPvrbgdpP.jpeg',143,'App\\Obivlenie','2016-07-02 10:29:58','2016-07-02 10:29:58'),(317,'h9lzbewD227PA1b7FjDX8OwUkmPilON5.jpeg',144,'App\\Obivlenie','2016-07-02 10:45:11','2016-07-02 10:45:11'),(318,'144.jpeg',0,'App\\Thumbnail','2016-07-02 10:45:11','2016-07-02 10:45:11'),(319,'mRsoI0UbhsimasUmiLYvn2j919FA6x7p.jpeg',144,'App\\Obivlenie','2016-07-02 10:45:11','2016-07-02 10:45:11'),(320,'MWkSeEeFmef6SnjGXjRPALEzfPdaqu31.jpeg',144,'App\\Obivlenie','2016-07-02 10:45:11','2016-07-02 10:45:11'),(321,'CrGz3rhQYZM5iQER8rGRB7PaDtGbdlsk.jpeg',145,'App\\Obivlenie','2016-07-02 10:45:51','2016-07-02 10:45:51'),(322,'145.jpeg',0,'App\\Thumbnail','2016-07-02 10:45:51','2016-07-02 10:45:51'),(323,'V3VPPPJpxtUNBMGjy1q16j6bUGkf2D7x.jpeg',145,'App\\Obivlenie','2016-07-02 10:45:51','2016-07-02 10:45:51'),(324,'GBvXaRwLeeGNQKvULDjZIHIIZq9K3FsY.jpeg',145,'App\\Obivlenie','2016-07-02 10:45:51','2016-07-02 10:45:51'),(325,'gxZHuf3NNuK0YFD1wFTp22oywWB8x1L2.jpeg',146,'App\\Obivlenie','2016-07-02 10:46:32','2016-07-02 10:46:32'),(326,'146.jpeg',0,'App\\Thumbnail','2016-07-02 10:46:32','2016-07-02 10:46:32'),(327,'JAHdNZbU5o4hRMT8urtnaaBcYOSwLuN5.jpeg',146,'App\\Obivlenie','2016-07-02 10:46:32','2016-07-02 10:46:32'),(328,'76AldICr7bGUIzteJQFw8Ier9mpbvJau.jpeg',146,'App\\Obivlenie','2016-07-02 10:46:32','2016-07-02 10:46:32'),(329,'1iBodV7Sg8P3xWRBsZYLETMHDBXjc1wz.jpeg',147,'App\\Obivlenie','2016-07-02 10:47:05','2016-07-02 10:47:05'),(330,'147.jpeg',0,'App\\Thumbnail','2016-07-02 10:47:05','2016-07-02 10:47:05'),(331,'rtypm8i74UUgmi7r0VXHvM4vbHgBgO6V.jpeg',147,'App\\Obivlenie','2016-07-02 10:47:05','2016-07-02 10:47:05'),(332,'A7FqBePG0MaWi2Kd8bY0oHczPa84JOOV.jpeg',147,'App\\Obivlenie','2016-07-02 10:47:05','2016-07-02 10:47:05'),(333,'7n2RiEN5QH76sU51vzRZYHIENCNpYCAx.jpeg',148,'App\\Obivlenie','2016-07-02 10:48:18','2016-07-02 10:48:18'),(334,'148.jpeg',0,'App\\Thumbnail','2016-07-02 10:48:18','2016-07-02 10:48:18'),(335,'upeu2lCDktosAOusnepXfi6vTKd0HhQW.jpeg',148,'App\\Obivlenie','2016-07-02 10:48:18','2016-07-02 10:48:18'),(336,'LOQNOHUf2DSvpyJFqNMAkk1cYSphPm0m.jpeg',148,'App\\Obivlenie','2016-07-02 10:48:18','2016-07-02 10:48:18'),(337,'61LitrNclbXeDoyDyHEI5HfrHLZrUn7j.jpeg',149,'App\\Obivlenie','2016-07-02 10:48:45','2016-07-02 10:48:45'),(338,'149.jpeg',0,'App\\Thumbnail','2016-07-02 10:48:45','2016-07-02 10:48:45'),(339,'9bKaBOWpRS7hLJxMjGPmhtj1JVzHdY0j.jpeg',149,'App\\Obivlenie','2016-07-02 10:48:45','2016-07-02 10:48:45'),(340,'OcOkBv3DNeyUJzcDNqU0KbRTEQoV1NGx.jpeg',149,'App\\Obivlenie','2016-07-02 10:48:45','2016-07-02 10:48:45'),(341,'edHQ0wrb0O8NMif8V95UgAYhPkKBBTVX.jpeg',157,'App\\Obivlenie','2016-07-26 21:50:55','2016-07-26 21:50:55'),(342,'157.jpeg',0,'App\\Thumbnail','2016-07-26 21:50:55','2016-07-26 21:50:55'),(343,'O6saMmAhzoAZ6qDrmrr5P67lGqgCE1vw.jpeg',157,'App\\Obivlenie','2016-07-26 21:50:55','2016-07-26 21:50:55'),(344,'FzYG7DVg6cqj4jlpwRN7yAGj35Fw8djp.jpeg',157,'App\\Obivlenie','2016-07-26 21:50:55','2016-07-26 21:50:55'),(345,'KdtlgMgV0dVozcHq4pWKNQ3fyBFezpSd.jpeg',158,'App\\Obivlenie','2016-07-26 22:00:25','2016-07-26 22:00:25'),(346,'158.jpeg',0,'App\\Thumbnail','2016-07-26 22:00:25','2016-07-26 22:00:25'),(347,'U00Sn3otv78Kht5sBDWiOMWuIcJ4LZMl.jpeg',158,'App\\Obivlenie','2016-07-26 22:00:25','2016-07-26 22:00:25'),(348,'6DVgzd9FR1TqctasFrnE4XbaoEnZmmVn.jpeg',158,'App\\Obivlenie','2016-07-26 22:00:25','2016-07-26 22:00:25'),(349,'FCjdYhOzU2ydbnBnDer5EMlGzWL6oFqg.jpeg',158,'App\\Obivlenie','2016-07-26 22:00:25','2016-07-26 22:00:25'),(350,'CBnNbVzTCEIMxt1YKT6PNC9y0cnk8jul.jpeg',159,'App\\Obivlenie','2016-07-26 22:03:23','2016-07-26 22:03:23'),(351,'159.jpeg',0,'App\\Thumbnail','2016-07-26 22:03:23','2016-07-26 22:03:23'),(352,'tOYjxLLb2onOXA7W4cs639R8zJdFoyHQ.jpeg',159,'App\\Obivlenie','2016-07-26 22:03:23','2016-07-26 22:03:23'),(353,'WgQF6HzuuObIyuSYUOqC95VjBw7kd2VQ.jpeg',159,'App\\Obivlenie','2016-07-26 22:03:23','2016-07-26 22:03:23'),(354,'Mgz8S4LL6xkU1nUHO02nYexHcrifPIau.jpeg',159,'App\\Obivlenie','2016-07-26 22:03:23','2016-07-26 22:03:23'),(355,'Drl464I9tJdt1bRHeaf98FxXTaF3kn55.jpeg',160,'App\\Obivlenie','2016-07-26 22:08:56','2016-07-26 22:08:56'),(356,'160.jpeg',0,'App\\Thumbnail','2016-07-26 22:08:56','2016-07-26 22:08:56'),(357,'fg6Bp4z1VRlxKotWHIUn9lTVuP8vOawa.jpeg',160,'App\\Obivlenie','2016-07-26 22:08:56','2016-07-26 22:08:56'),(358,'N6ua9qJaC8CYqyIjY9a4pvd6z6fws5z8.jpeg',160,'App\\Obivlenie','2016-07-26 22:08:56','2016-07-26 22:08:56'),(359,'OU29LIRVOUl5ZN18EJQOdIBZLzhrDNVn.jpeg',160,'App\\Obivlenie','2016-07-26 22:08:56','2016-07-26 22:08:56'),(360,'zFWh2ECwJkXGs2SqFpRz7vj9yBGGMj4z.jpeg',161,'App\\Obivlenie','2016-07-26 23:27:15','2016-07-26 23:27:15'),(361,'161.jpeg',0,'App\\Thumbnail','2016-07-26 23:27:15','2016-07-26 23:27:15'),(362,'op3MtL7W71uEcJLLCAYq3NyZs5EYJtGk.jpeg',161,'App\\Obivlenie','2016-07-26 23:27:15','2016-07-26 23:27:15'),(363,'VdADwO9N2omzqaktiABngmPiNwA9hiLC.jpeg',161,'App\\Obivlenie','2016-07-26 23:27:15','2016-07-26 23:27:15');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `thread_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
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
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `msgid` int(10) unsigned NOT NULL,
  `notify` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
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
  `dom` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `stroenie` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `gorod` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type_nedvizhimosti` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rayon` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `tekct_obivlenia` text CHARACTER SET utf8 NOT NULL,
  `kolitchestvo_komnat` int(11) DEFAULT NULL,
  `etajnost_doma` int(11) NOT NULL,
  `zhilaya_ploshad` int(11) NOT NULL,
  `obshaya_ploshad` int(11) NOT NULL,
  `ploshad_kurhni` int(11) NOT NULL,
  `etazh` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `categorie_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `san_usel` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `rating` int(10) unsigned DEFAULT NULL,
  `title` tinytext CHARACTER SET utf8,
  `description` text CHARACTER SET utf8,
  `mestopolozhenie_obmena` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `available` tinyint(1) DEFAULT '1',
  `predpolozhitelnaya_tsena` decimal(10,2) DEFAULT NULL,
  `doplata` decimal(10,2) DEFAULT NULL,
  `tseli_obmena` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `addres` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `numberclick` int(10) unsigned DEFAULT '0',
  `roof` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=162 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obivlenie`
--

LOCK TABLES `obivlenie` WRITE;
/*!40000 ALTER TABLE `obivlenie` DISABLE KEYS */;
INSERT INTO `obivlenie` VALUES (116,'Шоссе Энтузиастов','москва, ул.Шоссе Энтузиастов, 147','','','Москва','Комната','ВАО','Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой. Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет. ',1,9,49,70,9,3,6380000,'Обмен-продаж',NULL,20,'2016-05-23 22:12:17','2016-07-28 07:07:04','0',NULL,'Обменяю 2-ку на 3-ку',NULL,'В том же районе',1,NULL,30000.00,'На увеличение',NULL,27,NULL),(117,'Беляево','Ул. Миклухо-Маклая, 20','','','Москва','Частный дом','ЮЗАО','Продается прекрасная однокомнатная квартира от собственника. В квартире сделан очень хороший ремонт, использовались качественные строительные и отделочные материалы, итальянские двери, обои, все краны и многое другое. проведен интернет, тв, кондиционер. о',2,4,49,65,9,3,5380000,'Обмен продажа',NULL,23,'2016-06-17 19:49:43','2016-06-28 13:37:05','0',NULL,'Обменяю 2-ку ',NULL,'В другом районе',1,5380000.00,100000.00,'На увеличение',NULL,6,'2'),(118,'Беляево','Ул. Миклухо-Маклая, 19','','','Москва','Комната','ЮЗАО','Продается прекрасная однокомнатная квартира от собственника. В квартире сделан очень хороший ремонт, использовались качественные строительные и отделочные материалы, итальянские двери, обои, все краны и многое другое. проведен интернет, тв, кондиционер. о',3,9,49,70,9,3,8380000,'Обмен продажа',NULL,23,'2016-06-17 21:46:37','2016-07-28 03:49:08','0',NULL,'59 WEST 12TH STREET 11G',NULL,'В другом районе',1,NULL,0.00,'На уменьшение',NULL,18,'2'),(119,'Юго-Западная','Ул. Миклухо-Маклая, 3','','','Москва','Частный дом','ЮЗАО','Продается прекрасная однокомнатная квартира от собственника. В квартире сделан очень хороший ремонт, использовались качественные строительные и отделочные материалы, итальянские двери, обои, все краны и многое другое. проведен интернет, тв, кондиционер. о',3,9,49,70,9,3,7700000,'Обмен',NULL,23,'2016-06-17 21:59:03','2016-07-28 18:22:44','0',NULL,'1-комнатная квартира 51 м²',NULL,'В том же районе',1,NULL,0.00,'На увеличение',NULL,8,'2'),(121,'Юго-Западная','Ул. Миклухо-Маклая, 6','','','Московская_область','Квартира','ЮЗАО','Двухкомнатная видовая квартира с дизайнерским ремонтом в ЖК Молодежный -1. Дом уже полностью заселен, есть консьерж. В квартире качественный, дорогой ремонт с применением самых современных строительных и отделочных материалов (есть фото скрытых работ), шу',2,6,49,85,9,2,8900000,'Обмен_продажа',NULL,20,'2016-06-17 23:50:28','2016-07-28 18:59:57','0',NULL,'Обменяю 2-ку на 3-ку',NULL,'В_том_же_районе',1,NULL,0.00,'На_увеличение',NULL,11,'2'),(122,'Беляево','Миклухо-Маклая улица 63А','','','Москва','Частный дом','ЮЗАО','Двухкомнатная видовая квартира с дизайнерским ремонтом в ЖК Молодежный -1. Дом уже полностью заселен, есть консьерж. В квартире качественный, дорогой ремонт с применением самых современных строительных и отделочных материалов (есть фото скрытых работ), шу',3,5,45,60,9,3,8900000,'Обмен_продажа',NULL,20,'2016-06-18 08:01:16','2016-07-28 18:37:11','0',NULL,'1-комнатная квартира 51 м²',NULL,'В_другом_районе',1,NULL,0.00,'На_увеличение',NULL,21,'2'),(124,'Университет','Ленинский проспект, Москва','','','Москва','Частный дом','ЮЗАО','Двухкомнатная видовая квартира с дизайнерским ремонтом в ЖК Молодежный -1. Дом уже полностью заселен, есть консьерж. В квартире качественный, дорогой ремонт с применением самых современных строительных и отделочных материалов (есть фото скрытых работ), шу',2,5,45,60,9,2,8380000,'Обмен',NULL,20,'2016-06-18 08:19:49','2016-07-28 18:28:05','0',NULL,'59 WEST 12TH STREET 11G',NULL,'В_другом_районе',1,NULL,0.00,'На_увеличение',NULL,3,'2'),(125,'Беляево','Ул. Миклухо-Маклая, 20','','','Москва','Квартира','ЮЗАО','Объявление от собственника! 2-х комнатная квартира на первом этаже по хорошей цене. Этаж высокий. Двор тихий. Есть большая лоджия. 30 лет жила одна семья. Собственность с 2006 года с момента оформления приватизации на маму и дочку (совершеннолетняя). Вокр',2,5,49,70,9,3,8380000,'Обмен',NULL,23,'2016-06-18 17:05:07','2016-07-28 18:28:26','0',NULL,'1-комнатная квартира 51 м²',NULL,'В_том_же_районе',1,NULL,0.00,'На_увеличение',NULL,9,'2'),(142,'Беляево','Ул. Миклухо-Маклая, 20','','','Москва','Комната','ЮЗАО','Укажите точную информацию о вашей квартире или доме в полном соответствии с действительностью. Будьте внимательны. Все объявления проверяются модераторами вручную! ',1,9,49,70,8,2,5380000,'Обмен',NULL,23,'2016-07-02 08:04:19','2016-07-28 18:21:13','0',NULL,'Обменяю 2-ку на 3-ку',NULL,'В_том_же_районе',1,NULL,0.00,'На_увеличение',NULL,1,'0'),(159,'Юго-западная','ул. миклухо-маклаяб Д. 19',NULL,NULL,'Москва','Квартира','Центральный',' Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой. Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod placerat rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem, a aliquam mauris rutrum a. Curabitur sit amet pretium lectus, nec consequat orci. ',3,20,195,250,20,5,2500000,'Обмен_продажа',NULL,23,'2016-07-26 22:03:23','2016-07-26 22:03:23','Раздельный',NULL,NULL,NULL,'В_другом_районе',1,NULL,0.00,'На_уменьшение',NULL,0,'2'),(160,'Юго-западная','ул. миклухо-маклая Д. 19',NULL,NULL,'Москва','Частный дом','Центральный',' Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой. Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod placerat rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem, a aliquam mauris rutrum a. Curabitur sit amet pretium lectus, nec consequat orci. ',NULL,20,195,250,20,5,2500000,'Обмен_продажа',NULL,23,'2016-07-26 22:08:56','2016-07-27 09:25:25','Раздельный',NULL,NULL,NULL,'В_другом_районе',1,NULL,0.00,'На_уменьшение',NULL,1,'2'),(161,'Юго-западная','ул. миклухо-маклая Д. 19',NULL,NULL,'Московская область','Новостройки','-',' Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой. Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod placerat rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem, a aliquam mauris rutrum a. Curabitur sit amet pretium lectus, nec consequat orci.\r\n\r\nClass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et metus in libero sollicitudin venenatis eu sed enim. Nam felis lorem, suscipit ac nisl ac, iaculis dapibus tellus. Cras ante justo, aliquet quis placerat nec, molestie id turpis. Cras at tincidunt magna. Mauris aliquam sem sit amet dapibus venenatis. Sed metus orci, tincidunt sed fermentum non, ornare non quam. Aenean nec turpis at libero lobortis pretium. ',4,20,170,200,10,5,2000000,'Обмен',NULL,23,'2016-07-26 23:27:15','2016-07-27 20:48:59','Совмещенный',NULL,NULL,NULL,'В_том_же_районе',1,NULL,0.00,'На_увеличение',NULL,4,'2.54');
/*!40000 ALTER TABLE `obivlenie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participants`
--

DROP TABLE IF EXISTS `participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `participants` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `thread_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `last_read` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participants`
--

LOCK TABLES `participants` WRITE;
/*!40000 ALTER TABLE `participants` DISABLE KEYS */;
/*!40000 ALTER TABLE `participants` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,19,'','Москва','sfjkkjs fgs fgjfkg ;jkdfgjkdfkjghfjd hgjhdfjghjkdfhgjkhdfjhgjk dhdghjkhejkhg jdhjkhgjdhg jkhdjghjdhsgjhdgjhdsjghjhdgjhsdjghjdhgjhjghhhhhhhhhhhhhhhhhhj jdfgjhf kfdhgh h jfdghfjdhgjhfdgh','2016-02-29 10:28:27','2016-05-01 18:54:19',1,'vk_username','fb_username','twitter_username','ok_username'),(2,20,'','','','2016-03-01 21:12:03','2016-03-01 21:12:03',0,NULL,NULL,NULL,NULL),(3,23,'','','                                                                                                                                                                  \r\n                  \r\n                  \r\n                  \r\n                  \r\n           ','2016-06-20 10:20:26','2016-06-20 22:39:59',0,'','','','');
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
  `favoris` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receivers`
--

LOCK TABLES `receivers` WRITE;
/*!40000 ALTER TABLE `receivers` DISABLE KEYS */;
INSERT INTO `receivers` VALUES (1,1,20,'2016-06-14 20:05:20','2016-06-16 06:33:17',NULL,'2016-06-16 06:33:17',0,1,0,0),(2,2,20,'2016-06-16 06:44:17','2016-06-16 10:08:22',NULL,'2016-06-16 10:08:22',0,1,0,1),(3,3,20,'2016-06-16 07:45:06','2016-06-16 09:37:20',NULL,'2016-06-16 09:37:17',0,1,1,0),(4,4,23,'2016-06-16 07:51:00','2016-07-02 11:01:02',NULL,'2016-07-02 11:01:02',0,1,0,1),(5,5,20,'2016-06-21 05:43:24','2016-06-21 05:43:24',NULL,'2016-06-21 05:43:24',0,0,0,0),(6,6,20,'2016-06-23 23:22:17','2016-06-23 23:36:12',NULL,'2016-06-23 23:36:10',0,1,1,0),(7,7,23,'2016-06-23 23:23:52','2016-07-02 11:00:10',NULL,'2016-07-02 11:00:10',0,1,0,0),(8,8,20,'2016-06-23 23:35:24','2016-06-23 23:35:24',NULL,'2016-06-23 23:35:24',0,0,0,0),(9,9,20,'2016-06-24 12:42:56','2016-06-25 06:05:37',NULL,'2016-06-25 06:05:37',0,1,0,0),(10,10,23,'2016-06-24 12:56:18','2016-07-28 19:53:20',NULL,'2016-07-28 19:53:20',0,1,0,0);
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
INSERT INTO `role_user` VALUES (2,20),(3,23);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `senders`
--

LOCK TABLES `senders` WRITE;
/*!40000 ALTER TABLE `senders` DISABLE KEYS */;
INSERT INTO `senders` VALUES (1,1,23,'2016-06-14 20:05:20','2016-06-14 20:05:20'),(2,2,23,'2016-06-16 06:44:17','2016-06-16 06:44:17'),(3,3,20,'2016-06-16 07:45:06','2016-06-16 07:45:06'),(4,4,20,'2016-06-16 07:51:00','2016-06-16 07:51:00'),(5,5,23,'2016-06-21 05:43:24','2016-06-21 05:43:24'),(6,6,20,'2016-06-23 23:22:17','2016-06-23 23:22:17'),(7,7,23,'2016-06-23 23:23:52','2016-06-23 23:23:52'),(8,8,23,'2016-06-23 23:35:24','2016-06-23 23:35:24'),(9,9,20,'2016-06-24 12:42:56','2016-06-24 12:42:56'),(10,10,20,'2016-06-24 12:56:18','2016-06-24 12:56:18');
/*!40000 ALTER TABLE `senders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `threads`
--

DROP TABLE IF EXISTS `threads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `threads` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `threads`
--

LOCK TABLES `threads` WRITE;
/*!40000 ALTER TABLE `threads` DISABLE KEYS */;
/*!40000 ALTER TABLE `threads` ENABLE KEYS */;
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
INSERT INTO `thumb` VALUES (0,'2016-05-22 02:58:54','2016-05-22 02:58:54'),(0,'2016-05-22 13:45:43','2016-05-22 13:45:43'),(0,'2016-05-22 13:48:05','2016-05-22 13:48:05'),(0,'2016-05-22 13:53:22','2016-05-22 13:53:22'),(0,'2016-05-22 13:59:36','2016-05-22 13:59:36'),(0,'2016-05-22 14:04:47','2016-05-22 14:04:47'),(0,'2016-05-22 14:09:10','2016-05-22 14:09:10'),(0,'2016-05-22 14:14:08','2016-05-22 14:14:08'),(0,'2016-05-22 14:18:59','2016-05-22 14:18:59'),(0,'2016-05-22 15:03:10','2016-05-22 15:03:10'),(0,'2016-05-22 15:53:39','2016-05-22 15:53:39'),(0,'2016-05-22 15:55:15','2016-05-22 15:55:15'),(0,'2016-05-22 22:35:38','2016-05-22 22:35:38'),(0,'2016-05-22 22:58:08','2016-05-22 22:58:08'),(0,'2016-05-22 23:12:41','2016-05-22 23:12:41'),(0,'2016-05-22 23:16:01','2016-05-22 23:16:01'),(0,'2016-05-23 01:09:11','2016-05-23 01:09:11'),(0,'2016-05-23 01:20:44','2016-05-23 01:20:44'),(0,'2016-05-23 01:30:05','2016-05-23 01:30:05'),(114,'2016-05-24 00:44:55','2016-05-24 00:44:55'),(116,'2016-05-24 01:12:17','2016-05-24 01:12:17'),(118,'2016-06-18 00:46:37','2016-06-18 00:46:37'),(119,'2016-06-18 00:59:04','2016-06-18 00:59:04'),(120,'2016-06-18 02:49:41','2016-06-18 02:49:41'),(121,'2016-06-18 02:50:28','2016-06-18 02:50:28'),(122,'2016-06-18 11:01:16','2016-06-18 11:01:16'),(123,'2016-06-18 11:19:02','2016-06-18 11:19:02'),(124,'2016-06-18 11:19:49','2016-06-18 11:19:49'),(125,'2016-06-18 20:05:07','2016-06-18 20:05:07'),(117,'2016-06-20 17:51:03','2016-06-20 17:51:03'),(126,'2016-07-01 12:09:02','2016-07-01 12:09:02'),(127,'2016-07-01 12:09:28','2016-07-01 12:09:28'),(128,'2016-07-01 12:10:02','2016-07-01 12:10:02'),(129,'2016-07-01 12:14:41','2016-07-01 12:14:41'),(130,'2016-07-01 12:23:42','2016-07-01 12:23:42'),(131,'2016-07-01 12:24:13','2016-07-01 12:24:13'),(132,'2016-07-01 12:24:32','2016-07-01 12:24:32'),(133,'2016-07-01 12:24:58','2016-07-01 12:24:58'),(134,'2016-07-01 12:25:26','2016-07-01 12:25:26'),(135,'2016-07-01 12:25:59','2016-07-01 12:25:59'),(136,'2016-07-01 12:26:23','2016-07-01 12:26:23'),(137,'2016-07-01 12:27:27','2016-07-01 12:27:27'),(138,'2016-07-01 12:27:54','2016-07-01 12:27:54'),(139,'2016-07-01 12:28:49','2016-07-01 12:28:49'),(140,'2016-07-01 12:29:25','2016-07-01 12:29:25'),(141,'2016-07-02 11:03:30','2016-07-02 11:03:30'),(142,'2016-07-02 11:04:19','2016-07-02 11:04:19'),(143,'2016-07-02 13:29:58','2016-07-02 13:29:58'),(144,'2016-07-02 13:45:11','2016-07-02 13:45:11'),(145,'2016-07-02 13:45:51','2016-07-02 13:45:51'),(146,'2016-07-02 13:46:32','2016-07-02 13:46:32'),(147,'2016-07-02 13:47:05','2016-07-02 13:47:05'),(148,'2016-07-02 13:48:18','2016-07-02 13:48:18'),(149,'2016-07-02 13:48:45','2016-07-02 13:48:45'),(157,'2016-07-27 00:50:55','2016-07-27 00:50:55'),(158,'2016-07-27 01:00:25','2016-07-27 01:00:25'),(159,'2016-07-27 01:03:23','2016-07-27 01:03:23'),(160,'2016-07-27 01:08:56','2016-07-27 01:08:56'),(161,'2016-07-27 02:27:15','2016-07-27 02:27:15');
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
  `id_obivlenie` int(10) unsigned NOT NULL,
  `subject` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fichiers_joints` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usermessages`
--

LOCK TABLES `usermessages` WRITE;
/*!40000 ALTER TABLE `usermessages` DISABLE KEYS */;
INSERT INTO `usermessages` VALUES (1,23,20,' Добрый день.\r\n\r\nХотел узнать подробнее по вашей квартире\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ','2016-06-14 20:05:20','2016-06-14 20:05:20',115,0,'Квартира на Обмен',0),(2,23,20,'Добрый день. \r\nХотел узнать подробнее по вашей квартире ','2016-06-16 06:44:17','2016-06-16 06:44:17',116,116,'Квартира на Обмен-продаж',0),(3,20,20,'Добрый день. \r\nХотел узнать подробнее по вашей квартире ','2016-06-16 07:45:06','2016-06-16 07:45:06',116,116,'Квартира на Обмен-продаж',0),(4,20,23,'Hey!,\r\nLooks pretty good. How about meeting? ','2016-06-16 07:51:00','2016-06-16 07:51:00',116,116,'Квартира на Обмен-продаж',0),(5,23,20,'Квартира в отличном состоянии, с евроремонтом, чистая, аккуратная. Везде ст. пакеты, встр. кух., можем оставить мебель и технику.','2016-06-21 05:43:24','2016-06-21 05:43:24',116,116,'Квартира на Обмен-продаж',0),(6,20,20,'Доброго времени суток, Уважаемые!\r\nПредлагаю Вам рассмотреть возможность покупки Пентхауса, расположенного в Жилом Комплексе «Берег» Химкинского района Московской области.\r\nПлощадь Пентхауса - 420 м2 в трех уровнях + дополнительно 2 террасы по 200 м2 каждая, которые, при желании, можно остеклить и превратить в полноценные жилые помещения, либо зеленые лужайки.\r\nПентхаус расположен на этажах 9 и 10 десятиэтажного дома из чистого кирпича со стенами толщиной в 75 сантиметров.','2016-06-23 23:22:17','2016-06-23 23:22:17',119,119,'Квартира на Обмен',0),(7,23,23,'Доброго времени суток, Уважаемые!\r\nПредлагаю Вам рассмотреть возможность покупки Пентхауса, расположенного в Жилом Комплексе «Берег» Химкинского района Московской области.\r\nПлощадь Пентхауса - 420 м2 в трех уровнях + дополнительно 2 террасы по 200 м2 каждая, которые, при желании, можно остеклить и превратить в полноценные жилые помещения, либо зеленые лужайки.\r\nПентхаус расположен на этажах 9 и 10 десятиэтажного дома из чистого кирпича со стенами толщиной в 75 сантиметров.','2016-06-23 23:23:52','2016-06-23 23:23:52',116,116,'Квартира на Обмен-продаж',0),(8,23,20,'Доброго времени суток, Уважаемые!\r\nПредлагаю Вам рассмотреть возможность покупки Пентхауса, расположенного в Жилом Комплексе «Берег» Химкинского района Московской области.','2016-06-23 23:35:24','2016-06-23 23:35:24',122,122,'Квартира на Обмен_продажа',0),(9,20,20,'16-этажный кирпичный жилой дом, построенный в 2001 году по индивидуальному проекту. Привлекательный внешний вид за счет уникальной отделки фасада. Современный элитный Жилой дом Крутицкая набережная д. 19 находится в благоустроенном районе Москвы Даниловский (Южный округ), в 18 мин. ходьбы от метро Пролетарская, Автозаводская. Основными преимуществами ЖК Крутицкая набережная д. 19 являются: удобная транспортная доступность, комфортная инфраструктура. ','2016-06-24 12:42:56','2016-06-24 12:42:56',116,116,'однокомнатная  квартира на Обмен-продаж',0),(10,20,23,'16-этажный кирпичный жилой дом, построенный в 2001 году по индивидуальному проекту. Привлекательный внешний вид за счет уникальной отделки фасада. Современный элитный Жилой дом Крутицкая набережная д. 19 находится в благоустроенном районе Москвы Даниловский (Южный округ), в 18 мин. ходьбы от метро Пролетарская, Автозаводская. Основными преимуществами ЖК Крутицкая набережная д. 19 являются: удобная транспортная доступность, комфортная инфраструктура. ','2016-06-24 12:56:18','2016-06-24 12:56:18',117,117,'2х комнатная  квартира на Обмен продажа',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (20,'Мария','Шарапова','Григорьевна','husseincoulibaly@ya.ru','$2y$10$LFbt9SvOTBEnnaAaxdg4QeOYsNwlhau333GprnT.ERUSNwkknSWLu','79636772521','activated',1,NULL,'fYGdmju8OgbtsiQpwciysw9d4Oo2TBcgv1khAjEWRpVL1VZMTQTtLrSD61yC','2016-03-01 21:07:31','2016-06-28 17:53:43','y',''),(21,'1',' ',' ','1@mail.com','$2y$10$7BsoCLiZ1UNWT4b9SsdAEePi1z/6du3QnCqUwcPUqNGD..0E6qBDK','1','',0,'vKI2AZXpXbzDcAR0ciYZHNLHbfTqKl',NULL,'2016-03-07 07:15:38','2016-03-07 07:15:38','y',''),(22,'1',' ',' ','atomcorpmail@gmail.com','$2y$10$b/adjnT7KuTBwNVkjMa7L.Y.CZ7QITu738/Fq.uWFYdaGo7.181Wu','1','',0,'CoqDCK3RBaN4HjSSOvnsAjMVRzNatF',NULL,'2016-03-07 07:16:22','2016-03-07 07:16:22','y',''),(23,'Иванович','Иван','Перов','husseincoulibaly@gmail.com','$2y$10$88RMLGy7TtYsPksp/2q/4ezGnQTnc4V4wvaXt.XGNq09f7V2eZF0a','3243678','activated',0,NULL,'foV0cpYIPsYsnbreJOBBY2Y93nlCoFjzmDysQSlQnjRYVgkK681W9tieehGd','2016-06-14 16:07:20','2016-07-28 03:43:20','y',''),(24,'Светлана','Григорьевна',' ','husseincoulibaly@gmail.ru','$2y$10$FWgmhxt.r.luR7n8Vh3eGuggcycC8A2pVVUoBtDvXToxstu1nTyQO','+89636772521','activated',0,NULL,'AUPA1yvRfdVLUnT8wcvFuda0nzTu0HpksdB0MOiINprMJAB9PfFRmQ03Na3s','2016-06-28 17:54:11','2016-06-28 18:23:48','y','');
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

-- Dump completed on 2016-07-29  6:54:11
