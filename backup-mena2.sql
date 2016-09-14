-- MySQL dump 10.13  Distrib 5.7.13, for Linux (x86_64)
--
-- Host: localhost    Database: menahousedb
-- ------------------------------------------------------
-- Server version	5.7.13-0ubuntu0.16.04.2

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

-- DROP TABLE IF EXISTS `Nedvizhimosts`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `Nedvizhimosts` (
--   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
--   `adressa` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
--   `gorod` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
--   `kolitchestvo_komnat` int(11) NOT NULL,
--   `etajnost_doma` int(11) NOT NULL,
--   `zhilaya_ploshad` int(11) NOT NULL,
--   `obshaya_ploshad` int(11) NOT NULL,
--   `ploshad_kurhnia` int(11) NOT NULL,
--   `etazh` int(11) NOT NULL,
--   `price` int(11) NOT NULL,
--   `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
--   `opicanie` text COLLATE utf8_unicode_ci NOT NULL,
--   `categorie_id` int(10) unsigned DEFAULT NULL,
--   `user_id` int(10) unsigned DEFAULT NULL,
--   `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
--   `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nedvizhimosts`
--

-- LOCK TABLES `Nedvizhimosts` WRITE;
-- /*!40000 ALTER TABLE `Nedvizhimosts` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `Nedvizhimosts` ENABLE KEYS */;
-- UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookmarked`
--

LOCK TABLES `bookmarked` WRITE;
/*!40000 ALTER TABLE `bookmarked` DISABLE KEYS */;
INSERT INTO `bookmarked` VALUES (3,122,0,23,'2016-06-20 18:05:24','2016-06-20 18:05:24'),(4,116,0,23,'2016-09-02 21:59:46','2016-09-02 21:59:46');
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
-- Table structure for table `favorisutilisateurs`
--

DROP TABLE IF EXISTS `favorisutilisateurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorisutilisateurs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `deleted` tinyint(1) NOT NULL,
  `bkm_date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `bookmarkable_id` int(10) unsigned NOT NULL,
  `bookmarkable_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `favorisutilisateurs_bookmarkable_id_bookmarkable_type_index` (`bookmarkable_id`,`bookmarkable_type`),
  KEY `favorisutilisateurs_user_id_foreign` (`user_id`),
  CONSTRAINT `favorisutilisateurs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorisutilisateurs`
--

LOCK TABLES `favorisutilisateurs` WRITE;
/*!40000 ALTER TABLE `favorisutilisateurs` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorisutilisateurs` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,19,'','Москва','sfjkkjs fgs fgjfkg ;jkdfgjkdfkjghfjd hgjhdfjghjkdfhgjkhdfjhgjk dhdghjkhejkhg jdhjkhgjdhg jkhdjghjdhsgjhdgjhdsjghjhdgjhsdjghjdhgjhjghhhhhhhhhhhhhhhhhhj jdfgjhf kfdhgh h jfdghfjdhgjhfdgh','2016-02-29 10:28:27','2016-05-01 18:54:19',1,'vk_username','fb_username','twitter_username','ok_username'),(2,20,'','','','2016-03-01 21:12:03','2016-03-01 21:12:03',0,NULL,NULL,NULL,NULL),(3,23,'','','                                                                                                                                                                  \r\n                  \r\n                  \r\n                  \r\n                  \r\n           ','2016-06-20 10:20:26','2016-06-20 22:39:59',0,'','','',''),(4,27,'','','','2016-08-08 18:48:53','2016-08-08 18:48:53',0,NULL,NULL,NULL,NULL),(5,29,'','','','2016-08-08 18:50:53','2016-08-08 18:50:53',0,NULL,NULL,NULL,NULL),(6,30,'','','','2016-08-08 18:54:00','2016-08-08 18:54:00',0,NULL,NULL,NULL,NULL),(7,32,'','','','2016-08-08 18:55:22','2016-08-08 18:55:22',0,NULL,NULL,NULL,NULL),(8,33,'','','','2016-08-08 18:55:22','2016-08-08 18:55:22',0,NULL,NULL,NULL,NULL),(9,34,'','','','2016-08-08 18:55:22','2016-08-08 18:55:22',0,NULL,NULL,NULL,NULL),(10,36,'','','','2016-08-08 19:21:17','2016-08-08 19:21:17',0,NULL,NULL,NULL,NULL),(11,37,'','','','2016-08-08 19:21:17','2016-08-08 19:21:17',0,NULL,NULL,NULL,NULL),(12,38,'','','','2016-08-08 19:21:17','2016-08-08 19:21:17',0,NULL,NULL,NULL,NULL),(13,40,'','','','2016-08-08 19:38:51','2016-08-08 19:38:51',0,NULL,NULL,NULL,NULL),(14,41,'','','','2016-08-08 19:38:51','2016-08-08 19:38:51',0,NULL,NULL,NULL,NULL),(15,42,'','','','2016-08-08 19:38:51','2016-08-08 19:38:51',0,NULL,NULL,NULL,NULL),(16,26,'','','','2016-09-11 17:52:58','2016-09-11 17:52:58',0,NULL,NULL,NULL,NULL),(17,43,'','','','2016-09-12 10:31:10','2016-09-12 10:31:10',0,NULL,NULL,NULL,NULL);
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
INSERT INTO `receivers` VALUES (1,1,20,'2016-06-14 20:05:20','2016-06-16 06:33:17',NULL,'2016-06-16 06:33:17',0,1,0,0),(2,2,20,'2016-06-16 06:44:17','2016-06-16 10:08:22',NULL,'2016-06-16 10:08:22',0,1,0,1),(3,3,20,'2016-06-16 07:45:06','2016-06-16 09:37:20',NULL,'2016-06-16 09:37:17',0,1,1,0),(4,4,23,'2016-06-16 07:51:00','2016-09-11 16:57:42',NULL,'2016-09-11 16:57:42',0,1,1,1),(5,5,20,'2016-06-21 05:43:24','2016-06-21 05:43:24',NULL,'2016-06-21 05:43:24',0,0,0,0),(6,6,20,'2016-06-23 23:22:17','2016-06-23 23:36:12',NULL,'2016-06-23 23:36:10',0,1,1,0),(7,7,23,'2016-06-23 23:23:52','2016-09-11 07:23:52',NULL,'2016-09-11 07:23:52',0,1,0,0),(8,8,20,'2016-06-23 23:35:24','2016-06-23 23:35:24',NULL,'2016-06-23 23:35:24',0,0,0,0),(9,9,20,'2016-06-24 12:42:56','2016-06-25 06:05:37',NULL,'2016-06-25 06:05:37',0,1,0,0),(10,10,23,'2016-06-24 12:56:18','2016-09-11 16:57:29',NULL,'2016-09-11 16:57:29',0,1,0,0);
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
INSERT INTO `thumb` VALUES (0,'2016-05-22 02:58:54','2016-05-22 02:58:54'),(0,'2016-05-22 13:45:43','2016-05-22 13:45:43'),(0,'2016-05-22 13:48:05','2016-05-22 13:48:05'),(0,'2016-05-22 13:53:22','2016-05-22 13:53:22'),(0,'2016-05-22 13:59:36','2016-05-22 13:59:36'),(0,'2016-05-22 14:04:47','2016-05-22 14:04:47'),(0,'2016-05-22 14:09:10','2016-05-22 14:09:10'),(0,'2016-05-22 14:14:08','2016-05-22 14:14:08'),(0,'2016-05-22 14:18:59','2016-05-22 14:18:59'),(0,'2016-05-22 15:03:10','2016-05-22 15:03:10'),(0,'2016-05-22 15:53:39','2016-05-22 15:53:39'),(0,'2016-05-22 15:55:15','2016-05-22 15:55:15'),(0,'2016-05-22 22:35:38','2016-05-22 22:35:38'),(0,'2016-05-22 22:58:08','2016-05-22 22:58:08'),(0,'2016-05-22 23:12:41','2016-05-22 23:12:41'),(0,'2016-05-22 23:16:01','2016-05-22 23:16:01'),(0,'2016-05-23 01:09:11','2016-05-23 01:09:11'),(0,'2016-05-23 01:20:44','2016-05-23 01:20:44'),(0,'2016-05-23 01:30:05','2016-05-23 01:30:05'),(114,'2016-05-24 00:44:55','2016-05-24 00:44:55'),(116,'2016-05-24 01:12:17','2016-05-24 01:12:17'),(118,'2016-06-18 00:46:37','2016-06-18 00:46:37'),(119,'2016-06-18 00:59:04','2016-06-18 00:59:04'),(120,'2016-06-18 02:49:41','2016-06-18 02:49:41'),(121,'2016-06-18 02:50:28','2016-06-18 02:50:28'),(122,'2016-06-18 11:01:16','2016-06-18 11:01:16'),(123,'2016-06-18 11:19:02','2016-06-18 11:19:02'),(124,'2016-06-18 11:19:49','2016-06-18 11:19:49'),(125,'2016-06-18 20:05:07','2016-06-18 20:05:07'),(117,'2016-06-20 17:51:03','2016-06-20 17:51:03'),(126,'2016-07-01 12:09:02','2016-07-01 12:09:02'),(127,'2016-07-01 12:09:28','2016-07-01 12:09:28'),(128,'2016-07-01 12:10:02','2016-07-01 12:10:02'),(129,'2016-07-01 12:14:41','2016-07-01 12:14:41'),(130,'2016-07-01 12:23:42','2016-07-01 12:23:42'),(131,'2016-07-01 12:24:13','2016-07-01 12:24:13'),(132,'2016-07-01 12:24:32','2016-07-01 12:24:32'),(133,'2016-07-01 12:24:58','2016-07-01 12:24:58'),(134,'2016-07-01 12:25:26','2016-07-01 12:25:26'),(135,'2016-07-01 12:25:59','2016-07-01 12:25:59'),(136,'2016-07-01 12:26:23','2016-07-01 12:26:23'),(137,'2016-07-01 12:27:27','2016-07-01 12:27:27'),(138,'2016-07-01 12:27:54','2016-07-01 12:27:54'),(139,'2016-07-01 12:28:49','2016-07-01 12:28:49'),(140,'2016-07-01 12:29:25','2016-07-01 12:29:25'),(141,'2016-07-02 11:03:30','2016-07-02 11:03:30'),(142,'2016-07-02 11:04:19','2016-07-02 11:04:19'),(143,'2016-07-02 13:29:58','2016-07-02 13:29:58'),(144,'2016-07-02 13:45:11','2016-07-02 13:45:11'),(145,'2016-07-02 13:45:51','2016-07-02 13:45:51'),(146,'2016-07-02 13:46:32','2016-07-02 13:46:32'),(147,'2016-07-02 13:47:05','2016-07-02 13:47:05'),(148,'2016-07-02 13:48:18','2016-07-02 13:48:18'),(149,'2016-07-02 13:48:45','2016-07-02 13:48:45'),(157,'2016-07-27 00:50:55','2016-07-27 00:50:55'),(158,'2016-07-27 01:00:25','2016-07-27 01:00:25'),(159,'2016-07-27 01:03:23','2016-07-27 01:03:23'),(160,'2016-07-27 01:08:56','2016-07-27 01:08:56'),(161,'2016-07-27 02:27:15','2016-07-27 02:27:15'),(162,'2016-08-06 11:19:00','2016-08-06 11:19:00'),(163,'2016-08-06 11:21:14','2016-08-06 11:21:14'),(164,'2016-08-06 14:46:46','2016-08-06 14:46:46'),(165,'2016-08-06 15:21:35','2016-08-06 15:21:35'),(176,'2016-08-10 03:12:57','2016-08-10 03:12:57'),(177,'2016-08-10 03:18:50','2016-08-10 03:18:50'),(209,'2016-09-11 21:11:28','2016-09-11 21:11:28'),(210,'2016-09-11 21:29:30','2016-09-11 21:29:30');
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
  `billing` varchar(100) DEFAULT 'free' NULL ,
  `payload` varchar(255)  NULL ,
  `created_at` timestamp  NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp  NULL DEFAULT '0000-00-00 00:00:00',
  `notify` enum('y','n') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'y',
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Dump completed on 2016-09-12 18:17:39
