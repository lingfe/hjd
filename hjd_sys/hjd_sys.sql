/*
SQLyog Ultimate v10.00 Beta1
MySQL - 5.6.37 : Database - datahjlchateaudb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`datahjlchateaudb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `datahjlchateaudb`;

/*Table structure for table `carouselfigure` */

DROP TABLE IF EXISTS `carouselfigure`;

CREATE TABLE `carouselfigure` (
  `id` VARCHAR(64) NOT NULL COMMENT '轮播图表id标识',
  `imgUrl` VARCHAR(1024) NOT NULL COMMENT '图片地址',
  `imgName` VARCHAR(64) DEFAULT '' COMMENT '图片名称，可以为空',
  `state` INT(11) DEFAULT '0' COMMENT '状态,0=显示,1=下架',
  `cdate` DATETIME DEFAULT '' COMMENT '创建时间',
  `mdate` DATETIME DEFAULT '' COMMENT '最后修改时间',
  `creator` VARCHAR(64) DEFAULT 'admin' COMMENT '创建人',
  `uman` VARCHAR(64) DEFAULT 'admin' COMMENT '修改人',
  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `carouselfigure` */

INSERT  INTO `carouselfigure`(`id`,`imgUrl`,`imgName`,`state`,`cdate`,`mdate`,`creator`,`uman`,`df`,`version`) VALUES ('20a6eef3-e5dd-4655-8f81-ee3e84cc0a99','https://static.daho.club/static/upload/hjd/shopImg/20180112/6eeadca8-05e9-4fd2-ad55-2a6c9e4daabf.jpg',NULL,0,'2018-01-12 17:01:29','2018-01-12 17:01:29','20a6eef3-e5dd-4655-8f81-ee3e84cc0a99','20a6eef3-e5dd-4655-8f81-ee3e84cc0a99',0,0),('89650cec-e7b0-4731-8f10-2413a0374d5a','https://static.daho.club/static/upload/hjd/shopImg/20180102/ccf47398-f081-4377-b775-fa80190470f1.jpg',NULL,0,'2018-01-02 17:28:33','2018-01-02 17:28:33','89650cec-e7b0-4731-8f10-2413a0374d5a','89650cec-e7b0-4731-8f10-2413a0374d5a',0,0),('953c2904-8124-4ae4-a0da-193376001fb3','https://static.daho.club/static/upload/hjd/shopImg/20180102/8477b8a1-5773-422c-bf93-a2af8207e060.jpg',NULL,0,'2018-01-02 17:28:37','2018-01-02 17:28:37','953c2904-8124-4ae4-a0da-193376001fb3','953c2904-8124-4ae4-a0da-193376001fb3',0,0);

/*Table structure for table `distributor` */

DROP TABLE IF EXISTS `distributor`;

CREATE TABLE `distributor` (
  `id` VARCHAR(64) NOT NULL COMMENT '经销商id标识',
  `distributorName` VARCHAR(32) DEFAULT NULL COMMENT '经销商名称，商店名称',
  `pwd` VARCHAR(32) DEFAULT NULL COMMENT '经销商登录密码,微信号，或者openid',
  `state` INT(11) DEFAULT '0' COMMENT '状态,0=正常',
  `cdate` DATETIME DEFAULT NULL COMMENT '创建时间',
  `mdate` DATETIME DEFAULT NULL COMMENT '最后修改时间',
  `creator` VARCHAR(64) DEFAULT 'admin' COMMENT '创建人',
  `uman` VARCHAR(64) DEFAULT 'admin' COMMENT '修改人',
  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `distributor` */

INSERT  INTO `distributor`(`id`,`distributorName`,`pwd`,`state`,`cdate`,`mdate`,`creator`,`uman`,`df`,`version`) VALUES ('12331231','零风','lingfe',0,'2017-12-21 13:45:34','2017-12-21 13:45:19','admin','admin',0,0),('4bce4a4d-3d8f-4362-9a56-7a8f8adb102d','表订单','321',0,'2017-12-25 18:22:43','2017-12-25 18:22:43','4bce4a4d-3d8f-4362-9a56-7a8f8adb102d','4bce4a4d-3d8f-4362-9a56-7a8f8adb102d',0,0),('5ac970de-81d3-4dcc-80f5-fa222f7c7cea','00001','ggg',0,'2017-12-21 15:41:40','2017-12-21 15:41:40','5ac970de-81d3-4dcc-80f5-fa222f7c7cea','5ac970de-81d3-4dcc-80f5-fa222f7c7cea',0,0),('5fa74250-b6d7-4820-9eb1-939de2ac7830','undefined','undefined',0,'2018-03-23 11:30:05','2018-03-23 11:30:05','5fa74250-b6d7-4820-9eb1-939de2ac7830','5fa74250-b6d7-4820-9eb1-939de2ac7830',0,0),('61b88699-4fc8-4046-9cfd-d4eef137073f','火锅店','lingfe2',0,'2017-12-21 15:22:45','2017-12-21 15:22:45','61b88699-4fc8-4046-9cfd-d4eef137073f','61b88699-4fc8-4046-9cfd-d4eef137073f',0,0),('73b1d7bd-ec91-42b1-a09c-0bdf7fb50d8c','666320','1230',0,'2018-01-10 15:26:36','2018-01-10 15:26:36','73b1d7bd-ec91-42b1-a09c-0bdf7fb50d8c','73b1d7bd-ec91-42b1-a09c-0bdf7fb50d8c',0,0),('94eeb6d4-689a-45c8-8025-fdb23e934538','南明d','999',0,'2018-01-10 19:16:50','2018-01-10 19:16:50','94eeb6d4-689a-45c8-8025-fdb23e934538','94eeb6d4-689a-45c8-8025-fdb23e934538',0,0),('c0d0e874-48a3-4ed5-a493-e81300d89acd','66632','123',0,'2017-12-21 15:19:21','2017-12-21 15:19:21','c0d0e874-48a3-4ed5-a493-e81300d89acd','c0d0e874-48a3-4ed5-a493-e81300d89acd',0,0),('e69147aa-38a6-48f0-9714-a94ff960a734','aaa','bbbb',0,'2017-12-23 13:44:46','2017-12-23 13:44:46','e69147aa-38a6-48f0-9714-a94ff960a734','e69147aa-38a6-48f0-9714-a94ff960a734',0,0);

/*Table structure for table `feedback` */

DROP TABLE IF EXISTS `feedback`;

CREATE TABLE `feedback` (
  `id` VARCHAR(64) NOT NULL COMMENT '投诉建议表id标识',
  `personalId` VARCHAR(64) NOT NULL COMMENT '用户id,投诉者id',
  `content` VARCHAR(1024) DEFAULT NULL COMMENT '内容',
  `remark` VARCHAR(1024) DEFAULT NULL COMMENT '备注',
  `state` INT(11) DEFAULT '0' COMMENT '状态,0=正常',
  `cdate` DATETIME DEFAULT NULL COMMENT '创建时间',
  `mdate` DATETIME DEFAULT NULL COMMENT '最后修改时间',
  `creator` VARCHAR(64) DEFAULT 'admin' COMMENT '创建人',
  `uman` VARCHAR(64) DEFAULT 'admin' COMMENT '修改人',
  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `feedback` */

INSERT  INTO `feedback`(`id`,`personalId`,`content`,`remark`,`state`,`cdate`,`mdate`,`creator`,`uman`,`df`,`version`) VALUES ('09b361a0-b0c5-4149-9691-3991e8a93b32','29c8ff45-d16a-446e-9c7f-0de7279e44c6','让他一人同意让他让他有人讨厌',NULL,0,'2018-01-08 15:38:39','2018-01-08 15:38:39','09b361a0-b0c5-4149-9691-3991e8a93b32','09b361a0-b0c5-4149-9691-3991e8a93b32',0,0),('2342342','ssdfsdf','水电费水电费',NULL,0,NULL,NULL,'admin','admin',0,0),('4a85a3d0-af8f-445e-b391-15af14f0cacc','29c8ff45-d16a-446e-9c7f-0de7279e44c6','结婚哈哈哈哈',NULL,0,'2018-01-16 11:50:59','2018-01-16 11:50:59','4a85a3d0-af8f-445e-b391-15af14f0cacc','4a85a3d0-af8f-445e-b391-15af14f0cacc',0,0),('81d315d1-60b6-46d6-a3c7-6bea4d5e19fe','d9816b04-650a-48b2-8256-c7fb0174120c','sdfasdf商品源,商品源商品源商品源商品源商品源商品源商品源商品源商品源,商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源,商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源商品源,商品源商品源商品源商品源商品源商品源,商品源',NULL,0,'2017-12-23 12:09:54','2017-12-23 12:09:54','81d315d1-60b6-46d6-a3c7-6bea4d5e19fe','81d315d1-60b6-46d6-a3c7-6bea4d5e19fe',0,0);

/*Table structure for table `shopinfo` */

DROP TABLE IF EXISTS `shopinfo`;

CREATE TABLE `shopinfo` (
  `id` VARCHAR(64) NOT NULL COMMENT '商品信息表id标识',
  `distributorId` VARCHAR(64) DEFAULT NULL COMMENT '经销商id',
  `distributorName` VARCHAR(32) DEFAULT NULL COMMENT '经销商名称，商品店名',
  `title` VARCHAR(64) NOT NULL COMMENT '标题名称',
  `imgUrl` VARCHAR(1024) DEFAULT NULL COMMENT '商品图片，最多三张',
  `price` FLOAT DEFAULT NULL COMMENT '价格',
  `infoImgUrl` VARCHAR(1024) DEFAULT NULL COMMENT '图片信息详细，一张',
  `remark` VARCHAR(1024) DEFAULT NULL COMMENT '商品备注',
  `state` INT(11) DEFAULT '0' COMMENT '状态,0=显示,1=下架',
  `cdate` DATETIME DEFAULT NULL COMMENT '创建时间',
  `mdate` DATETIME DEFAULT NULL COMMENT '最后修改时间',
  `creator` VARCHAR(64) DEFAULT 'admin' COMMENT '创建人',
  `uman` VARCHAR(64) DEFAULT 'admin' COMMENT '修改人',
  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `shopinfo` */

INSERT  INTO `shopinfo`(`id`,`distributorId`,`distributorName`,`title`,`imgUrl`,`price`,`infoImgUrl`,`remark`,`state`,`cdate`,`mdate`,`creator`,`uman`,`df`,`version`) VALUES ('46045a18-c334-4dbf-924a-b79d18b6e497','12331231','零风','买一箱送一箱','20180102/a501b7f3-6706-48d8-a909-99a6a02d40bb.jpg,20180102/ce05ca42-64a4-4c73-8bbf-37057347dd70.jpg,20180102/8408b442-c52c-4e66-bd65-354da7318f32.jpg',688,'20180102/d06e8fec-1130-41de-8ebd-d1af0335c145.jpg','null',0,'2018-01-02 17:25:12','2018-01-02 17:25:12','46045a18-c334-4dbf-924a-b79d18b6e497','46045a18-c334-4dbf-924a-b79d18b6e497',0,0),('606ebf27-7662-4992-a607-da5ef3141aa8','12331231','零风','红酒套餐','20180102/4288ef84-58f9-4b7e-941d-58c58cfba6eb.jpg,20180102/35f0cfad-bef3-40c9-b691-5538b7b0bb76.jpg,20180102/7b565fbb-2879-4123-b20f-08d0bf80bad4.jpg',588,'20180102/e3b8d398-6e38-4b01-8ed9-6df6747d219a.jpg','null',0,'2018-01-02 17:24:01','2018-01-02 17:24:01','606ebf27-7662-4992-a607-da5ef3141aa8','606ebf27-7662-4992-a607-da5ef3141aa8',0,0),('7f90cba4-dcd3-42ff-ac8e-85c7c2b0f683','12331231','零风','买一箱得两箱','20180102/d151a0cf-b15d-4f40-8924-4a0a510199d9.jpg,20180102/6dfb3be1-95b4-4c60-b526-a682c9da27ff.jpg,20180102/2ab5211c-8712-4791-a75c-c1dd0bdd27b1.jpg',888,'20180102/17eb4d20-f63f-4b40-9675-36eb24ca8722.jpg','null',0,'2018-01-02 17:26:11','2018-01-02 17:26:11','7f90cba4-dcd3-42ff-ac8e-85c7c2b0f683','7f90cba4-dcd3-42ff-ac8e-85c7c2b0f683',0,0),('e2067411-dace-4cf1-a99e-d1f93c4e0f2f','c0d0e874-48a3-4ed5-a493-e81300d89acd','66632','222','20180111/7309fc23-e138-4de6-a998-1f6d76e0cfed.jpg,20180111/7d3f4bec-8b8a-4821-bc52-5135f5636a8a.jpg',3,'20180111/e044d8df-5a00-4ce8-b2cf-401e35ee82a7.jpg','234234sdfsfsdfsdfs',0,'2018-01-11 21:49:14','2018-01-11 21:49:14','e2067411-dace-4cf1-a99e-d1f93c4e0f2f','e2067411-dace-4cf1-a99e-d1f93c4e0f2f',0,0),('e38cf808-c273-4536-9a4a-6a54f7110a51',NULL,NULL,'sdfsdf',',20180227/5a626c36-be7d-4c73-baf8-bf080e5aeab2.jpg',3,'20180227/ceb43ac2-237a-4fbd-bb67-56a2ce394ca6.jpg','sddsf',1,'2018-02-27 17:38:45','2018-02-27 17:38:45','e38cf808-c273-4536-9a4a-6a54f7110a51','e38cf808-c273-4536-9a4a-6a54f7110a51',0,0);

/*Table structure for table `shoporder` */

DROP TABLE IF EXISTS `shoporder`;

CREATE TABLE `shoporder` (
  `id` VARCHAR(64) NOT NULL COMMENT '商品订单表id标识',
  `distributorId` VARCHAR(64) DEFAULT NULL COMMENT '经销商id',
  `distributorName` VARCHAR(32) DEFAULT NULL COMMENT '经销商名称，商品店名',
  `personalId` VARCHAR(64) DEFAULT NULL COMMENT '用户id',
  `shopInfoid` VARCHAR(64) DEFAULT NULL COMMENT '商品信息id',
  `title` VARCHAR(64) DEFAULT NULL COMMENT '标题名称',
  `imgUrl` VARCHAR(1024) DEFAULT NULL COMMENT '商品图片，最多一张',
  `price` FLOAT DEFAULT NULL COMMENT '价格',
  `number` INT(11) DEFAULT NULL COMMENT '数量',
  `address` VARCHAR(1024) DEFAULT NULL COMMENT '收货地址',
  `phone` VARCHAR(32) DEFAULT NULL COMMENT '电话',
  `distributionTime` VARCHAR(1024) DEFAULT NULL COMMENT '配送时间',
  `remark` VARCHAR(1024) DEFAULT NULL COMMENT '备注',
  `state` INT(11) DEFAULT '0' COMMENT '状态,0=已提交，未发货,1=已发货,未确认,2=已完成,已确认,3=已取消',
  `cdate` DATETIME DEFAULT NULL COMMENT '创建时间',
  `mdate` DATETIME DEFAULT NULL COMMENT '最后修改时间',
  `creator` VARCHAR(64) DEFAULT 'admin' COMMENT '创建人',
  `uman` VARCHAR(64) DEFAULT 'admin' COMMENT '修改人',
  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `shoporder` */

INSERT  INTO `shoporder`(`id`,`distributorId`,`distributorName`,`personalId`,`shopInfoid`,`title`,`imgUrl`,`price`,`number`,`address`,`phone`,`distributionTime`,`remark`,`state`,`cdate`,`mdate`,`creator`,`uman`,`df`,`version`) VALUES ('07d65cef-4d8a-4f2d-b667-f7724072c97f','4bce4a4d-3d8f-4362-9a56-7a8f8adb102d','表订单','d9816b04-650a-48b2-8256-c7fb0174120c','50e8cb5d-abff-4b07-aabb-f1209b27e6f6','k','20171225/0ed280b3-8396-48f9-a2bc-1dee7de66a1a.png',6,3,'45453453','110','123123','ssss',2,'2017-12-26 14:04:06','2017-12-26 14:04:06','07d65cef-4d8a-4f2d-b667-f7724072c97f','07d65cef-4d8a-4f2d-b667-f7724072c97f',0,0),('17676a6a-b3d0-40dd-8304-09e7148e178a','e69147aa-38a6-48f0-9714-a94ff960a734','aaa','96dcd960-a42d-4e3c-b642-4729f2368bc6','da5e4244-354c-44e0-b6e5-bbc77ddac8ea','666','20171225/f127e7c0-ae3d-4cec-88a5-ad8f03e1545c.jpg',23,1,'创客小镇','18612363057','2018-01-02','null',3,'2018-01-02 23:47:29','2018-01-02 23:47:29','17676a6a-b3d0-40dd-8304-09e7148e178a','17676a6a-b3d0-40dd-8304-09e7148e178a',0,0),('1a6e282e-d13d-45a4-bbac-cb7128042548','e69147aa-38a6-48f0-9714-a94ff960a734','aaa','96dcd960-a42d-4e3c-b642-4729f2368bc6','da5e4244-354c-44e0-b6e5-bbc77ddac8ea','666','20171225/f127e7c0-ae3d-4cec-88a5-ad8f03e1545c.jpg',23,1,'创客小镇','18612363057','2018-01-02','null',3,'2018-01-02 23:47:35','2018-01-02 23:47:35','1a6e282e-d13d-45a4-bbac-cb7128042548','1a6e282e-d13d-45a4-bbac-cb7128042548',0,0),('2226d630-d531-4a7e-b7fb-61c90ede9287','e69147aa-38a6-48f0-9714-a94ff960a734','aaa','f1915a93-a177-4816-a482-067b17fbab4b','da5e4244-354c-44e0-b6e5-bbc77ddac8ea','666','20171225/f127e7c0-ae3d-4cec-88a5-ad8f03e1545c.jpg',23,2,'滚滚滚呵呵','110','2018-01-02','哈哈哈',0,'2018-01-02 14:55:51','2018-01-02 14:55:51','2226d630-d531-4a7e-b7fb-61c90ede9287','2226d630-d531-4a7e-b7fb-61c90ede9287',0,0),('309980c6-1210-4d4c-974e-47a7764c6167','12331231','零风','undefined','46045a18-c334-4dbf-924a-b79d18b6e497','买一箱送一箱',NULL,688,1,'54645','34534534','Thu Jan 11 2018 00:00:00 GMT 0800 (中国标准时间)','34534',0,'2018-01-15 13:22:11','2018-01-15 13:22:11','309980c6-1210-4d4c-974e-47a7764c6167','309980c6-1210-4d4c-974e-47a7764c6167',0,0),('3e6d6492-8461-461b-8d3c-88bdd457a8e0','12331231','零风','29c8ff45-d16a-446e-9c7f-0de7279e44c6','46045a18-c334-4dbf-924a-b79d18b6e497','买一箱送一箱',NULL,688,4,'53453','345345','Wed Jan 10 2018 00:00:00 GMT 0800 (中国标准时间)','334',3,'2018-01-15 13:25:06','2018-01-15 13:25:06','3e6d6492-8461-461b-8d3c-88bdd457a8e0','3e6d6492-8461-461b-8d3c-88bdd457a8e0',0,0),('3fc0656e-bd99-424b-968c-cecfe9755611','e69147aa-38a6-48f0-9714-a94ff960a734','aaa','d9816b04-650a-48b2-8256-c7fb0174120c','da5e4244-354c-44e0-b6e5-bbc77ddac8ea','666','20171225/f127e7c0-ae3d-4cec-88a5-ad8f03e1545c.jpg',23,5,'2652652','232322','2017-12-26','232323',0,'2017-12-26 18:25:29','2017-12-26 18:25:29','3fc0656e-bd99-424b-968c-cecfe9755611','3fc0656e-bd99-424b-968c-cecfe9755611',0,0),('453463656456','dsfsdfds1651465','谁谁谁','29c8ff45-d16a-446e-9c7f-0de7279e44c6','112313213','542342342','20171223/9062e29f-c881-4254-82e6-c8f864197f56.jpg',33,2,'沙发手动阀沙发斯蒂芬是','13012311231','水水水水',NULL,3,'2017-12-25 17:16:28','2017-12-25 17:16:31','d9816b04-650a-48b2-8256-c7fb0174120c','d9816b04-650a-48b2-8256-c7fb0174120c',0,0),('481e4b1d-b65f-49c1-b2f0-e0c33517b163','c0d0e874-48a3-4ed5-a493-e81300d89acd','66632','d9816b04-650a-48b2-8256-c7fb0174120c','0a6b4bad-719c-4067-878c-2b36d8299f2d','56456456','20171223/9062e29f-c881-4254-82e6-c8f864197f56.jpg',3,1,'123123','110','123','ddd',1,'2017-12-26 11:15:20','2017-12-26 11:15:20','481e4b1d-b65f-49c1-b2f0-e0c33517b163','481e4b1d-b65f-49c1-b2f0-e0c33517b163',0,0),('63e09f3f-d1ff-4b35-aecc-801d24a1b3bb','c0d0e874-48a3-4ed5-a493-e81300d89acd','66632','d9816b04-650a-48b2-8256-c7fb0174120c','0a6b4bad-719c-4067-878c-2b36d8299f2d','56456456','20171223/9062e29f-c881-4254-82e6-c8f864197f56.jpg',3,3,'是否的水电费是否','13012311231','2017-12-27','33333',3,'2017-12-27 13:11:19','2017-12-27 13:11:19','63e09f3f-d1ff-4b35-aecc-801d24a1b3bb','63e09f3f-d1ff-4b35-aecc-801d24a1b3bb',0,0),('7fe276d5-e563-4659-8859-91d8bf05a424','e69147aa-38a6-48f0-9714-a94ff960a734','aaa','d9816b04-650a-48b2-8256-c7fb0174120c','da5e4244-354c-44e0-b6e5-bbc77ddac8ea','666','20171225/f127e7c0-ae3d-4cec-88a5-ad8f03e1545c.jpg',23,1,'123','23613123','2018-01-03','123',3,'2018-01-03 11:02:04','2018-01-03 11:02:04','7fe276d5-e563-4659-8859-91d8bf05a424','7fe276d5-e563-4659-8859-91d8bf05a424',0,0),('818129bd-c9b1-4d21-9eb9-7d5f9bb7c83d','12331231','零风','29c8ff45-d16a-446e-9c7f-0de7279e44c6','7f90cba4-dcd3-42ff-ac8e-85c7c2b0f683','买一箱得两箱','20180102/17eb4d20-f63f-4b40-9675-36eb24ca8722.jpg',888,1,'s\'d\'f\'s','212312312','Tue Feb 27 2018 00:00:00 GMT 0800 (中国标准时间)','undefined',0,'2018-02-27 17:45:33','2018-02-27 17:45:33','818129bd-c9b1-4d21-9eb9-7d5f9bb7c83d','818129bd-c9b1-4d21-9eb9-7d5f9bb7c83d',0,0),('8bbdceb3-68e1-41d5-8c77-0a0261a527b9','12331231','零风','d9816b04-650a-48b2-8256-c7fb0174120c','46045a18-c334-4dbf-924a-b79d18b6e497','买一箱送一箱','20180102/d06e8fec-1130-41de-8ebd-d1af0335c145.jpg',688,3,'sdfsdfsdf','13012311231','2018-01-03','sdf',3,'2018-01-03 16:38:47','2018-01-03 16:38:47','8bbdceb3-68e1-41d5-8c77-0a0261a527b9','8bbdceb3-68e1-41d5-8c77-0a0261a527b9',0,0),('8c9e7d7b-9a35-4252-a4f1-cb8b284a409b','c0d0e874-48a3-4ed5-a493-e81300d89acd','66632','d9816b04-650a-48b2-8256-c7fb0174120c','0a6b4bad-719c-4067-878c-2b36d8299f2d','56456456','20171223/9062e29f-c881-4254-82e6-c8f864197f56.jpg',3,2,'2222','null','null','null',2,'2017-12-26 11:06:08','2017-12-26 11:06:08','8c9e7d7b-9a35-4252-a4f1-cb8b284a409b','8c9e7d7b-9a35-4252-a4f1-cb8b284a409b',0,0),('a7972906-022e-4551-b1f4-bb6541dd9fa3','12331231','零风','96dcd960-a42d-4e3c-b642-4729f2368bc6','46045a18-c334-4dbf-924a-b79d18b6e497','买一箱送一箱','20180102/d06e8fec-1130-41de-8ebd-d1af0335c145.jpg',688,1,'吧','喇叭','2018-01-08','巴啦啦',0,'2018-01-08 15:08:53','2018-01-08 15:08:53','a7972906-022e-4551-b1f4-bb6541dd9fa3','a7972906-022e-4551-b1f4-bb6541dd9fa3',0,0),('baab9292-21bc-4dc6-9f70-89a5eb198b3f','12331231','零风','undefined','46045a18-c334-4dbf-924a-b79d18b6e497','买一箱送一箱',NULL,688,2,'234','2343242','Sat Jan 13 2018 00:00:00 GMT 0800 (中国标准时间)','234234234',0,'2018-01-15 13:20:11','2018-01-15 13:20:11','baab9292-21bc-4dc6-9f70-89a5eb198b3f','baab9292-21bc-4dc6-9f70-89a5eb198b3f',0,0),('c40f577d-38ec-4661-8638-b692f95af118','12331231','零风','29c8ff45-d16a-446e-9c7f-0de7279e44c6','46045a18-c334-4dbf-924a-b79d18b6e497','买一箱送一箱',NULL,688,2,'354354','123','Thu Jan 04 2018 00:00:00 GMT 0800 (中国标准时间)','dsfsdf',3,'2018-01-15 13:23:26','2018-01-15 13:23:26','c40f577d-38ec-4661-8638-b692f95af118','c40f577d-38ec-4661-8638-b692f95af118',0,0),('de3a45ae-6410-473d-9585-92640e136573','12331231','零风','29c8ff45-d16a-446e-9c7f-0de7279e44c6','46045a18-c334-4dbf-924a-b79d18b6e497','买一箱送一箱','20180102/d06e8fec-1130-41de-8ebd-d1af0335c145.jpg',688,3,'3453','dfgfg','Fri Jan 05 2018 00:00:00 GMT 0800 (中国标准时间)','dfgdf',3,'2018-01-15 13:26:46','2018-01-15 13:26:46','de3a45ae-6410-473d-9585-92640e136573','de3a45ae-6410-473d-9585-92640e136573',0,0);

/*Table structure for table `userinfo` */

DROP TABLE IF EXISTS `userinfo`;

CREATE TABLE `userinfo` (
  `id` VARCHAR(64) NOT NULL COMMENT '用户信息表标识',
  `openid` VARCHAR(64) DEFAULT NULL COMMENT '与微信小程序生成的微信用户id',
  `username` VARCHAR(32) DEFAULT NULL COMMENT '用户名',
  `wechatNumber` VARCHAR(32) DEFAULT NULL COMMENT '微信账号',
  `avatarUrl` VARCHAR(255) DEFAULT NULL COMMENT '用户头像',
  `phone` VARCHAR(32) DEFAULT NULL COMMENT '电话',
  `provinceName` VARCHAR(64) DEFAULT NULL COMMENT '省',
  `cityName` VARCHAR(64) DEFAULT NULL COMMENT '市',
  `regionName` VARCHAR(64) DEFAULT NULL COMMENT '区',
  `address` VARCHAR(256) DEFAULT NULL COMMENT '详细地址',
  `memo` VARCHAR(64) DEFAULT NULL COMMENT '备注',
  `state` INT(11) DEFAULT '0' COMMENT '账号状态,0=普通用户,1=管理员,2=经销商',
  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
  `creator` VARCHAR(64) DEFAULT 'admin' COMMENT '创建人',
  `uman` VARCHAR(64) DEFAULT 'admin' COMMENT '修改人',
  `cdate` DATETIME DEFAULT NULL COMMENT '创建时间',
  `mdate` DATETIME DEFAULT NULL COMMENT '最后修改时间',
  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `userinfo` */

INSERT  INTO `userinfo`(`id`,`openid`,`username`,`wechatNumber`,`avatarUrl`,`phone`,`provinceName`,`cityName`,`regionName`,`address`,`memo`,`state`,`df`,`creator`,`uman`,`cdate`,`mdate`,`version`) VALUES ('0f285dad-822b-4daf-a195-9290003807af','','rdgztest_DWOMTK',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'0f285dad-822b-4daf-a195-9290003807af','0f285dad-822b-4daf-a195-9290003807af','2018-04-20 13:47:07','2018-04-20 13:47:07',0),('135560c2-22ae-417e-94fe-2bffbf18b41d','123','123',NULL,'https://static.daho.club/static/upload/hjd.png','123',NULL,NULL,NULL,NULL,NULL,0,0,'135560c2-22ae-417e-94fe-2bffbf18b41d','135560c2-22ae-417e-94fe-2bffbf18b41d','2018-01-03 17:16:22','2018-01-03 17:16:22',0),('14494847-c45f-475a-b912-b5ff05bba52c',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,'14494847-c45f-475a-b912-b5ff05bba52c','14494847-c45f-475a-b912-b5ff05bba52c','2018-01-03 15:55:45','2018-01-03 15:55:45',0),('2801d938-a142-4263-b046-9815f5cd0bd3','oofAh0c8M6dIoSI5V65h9ghGBQpg','蒋鹏',NULL,'https://wx.qlogo.cn/mmopen/vi_32/L5Gjte8slBZUcESsyibSqJx2AiaHlZdibL1GLoDetoDDoBvvBjGxJfRkThibWapJDES6ICqyWPECmDT1fwIphVswTQ/0',NULL,NULL,NULL,NULL,NULL,NULL,1,0,'2801d938-a142-4263-b046-9815f5cd0bd3','2801d938-a142-4263-b046-9815f5cd0bd3','2018-01-02 15:52:46','2018-01-02 15:52:46',0),('29c8ff45-d16a-446e-9c7f-0de7279e44c6','undefined','undefined',NULL,'https://static.daho.club/static/upload/hjd.png','undefined',NULL,NULL,NULL,NULL,NULL,1,0,'29c8ff45-d16a-446e-9c7f-0de7279e44c6','29c8ff45-d16a-446e-9c7f-0de7279e44c6','2018-01-05 15:26:13','2018-01-05 15:26:13',0),('664999ed-6a1c-46fa-b479-77e4139a1acd','lingfe','12321',NULL,'https://static.daho.club/static/upload/hjd.png','lingfe',NULL,NULL,NULL,NULL,NULL,0,0,'664999ed-6a1c-46fa-b479-77e4139a1acd','664999ed-6a1c-46fa-b479-77e4139a1acd','2018-01-03 17:23:16','2018-01-03 17:23:16',0),('84401c79-19ee-46b2-8bd5-b5e54fdc3c2e','oofAh0XHZEbBlKOEGSmhY7R6rd6k','rdgztest_JNHFNT',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'84401c79-19ee-46b2-8bd5-b5e54fdc3c2e','84401c79-19ee-46b2-8bd5-b5e54fdc3c2e','2018-01-02 18:15:16','2018-01-02 18:15:16',0),('96dcd960-a42d-4e3c-b642-4729f2368bc6','oofAh0VxFGAk-XaXNYSAKSauybgU','合光同尘',NULL,'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erWctiaCG8yMVfs9x7BtkrO0gDpHziaSbKQnx6B6jVtrzmSP5omALLUmiczYVP8EQIK2I9Js7uA30zsg/0',NULL,NULL,NULL,NULL,NULL,NULL,1,0,'96dcd960-a42d-4e3c-b642-4729f2368bc6','96dcd960-a42d-4e3c-b642-4729f2368bc6','2018-01-02 16:41:10','2018-01-02 16:41:10',0),('b93feb64-9a1a-4954-896b-71069ba7c031','qq','110',NULL,'https://static.daho.club/static/upload/hjd.png','qq',NULL,NULL,NULL,NULL,NULL,0,0,'b93feb64-9a1a-4954-896b-71069ba7c031','b93feb64-9a1a-4954-896b-71069ba7c031','2018-01-17 11:05:05','2018-01-17 11:05:05',0),('c85bf156-caa3-43ec-9560-629223d762d0','oofAh0YOV6F4GwBwyqNn5POF4xfU','rdgztest_RSMVWX',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'c85bf156-caa3-43ec-9560-629223d762d0','c85bf156-caa3-43ec-9560-629223d762d0','2018-01-11 12:11:32','2018-01-11 12:11:32',0),('d9816b04-650a-48b2-8256-c7fb0174120c','oofAh0cMpx4noFOAWrHm2D2WcCDs','零风',NULL,'https://wx.qlogo.cn/mmopen/vi_32/icxNWy28C5LPwoJYPfJTDaZWJSQXEfuUSrYk3ls2fjhVKcibsnJCibZAkjTqsNDZib7NFCT7NeGictka3ibFzqQAvDVA/0',NULL,NULL,NULL,NULL,NULL,NULL,1,0,'42508ce4-e2b6-460d-9751-8e4ac907c5a2','42508ce4-e2b6-460d-9751-8e4ac907c5a2','2018-01-02 15:37:44','2018-01-02 15:37:44',0),('ecaf3052-ead2-4713-be5d-469b67abd6f5','oofAh0WdB5l-i9GT9E0S5hjcBrvc','rdgztest_HVERPJ',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'ecaf3052-ead2-4713-be5d-469b67abd6f5','ecaf3052-ead2-4713-be5d-469b67abd6f5','2018-01-02 17:04:05','2018-01-02 17:04:05',0),('f67c99bc-ac91-4946-832a-a42881c5c692','oofAh0V5Huoo4D6me6G8QeLIJ51w','rdgztest_SUHWSL',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'f67c99bc-ac91-4946-832a-a42881c5c692','f67c99bc-ac91-4946-832a-a42881c5c692','2018-01-07 17:23:58','2018-01-07 17:23:58',0),('f7933576-ee1e-49c9-97b6-3745fc733f22','sdfdsdfs','undefined',NULL,'https://static.daho.club/static/upload/hjd.png','sdfdsdfs',NULL,NULL,NULL,NULL,NULL,0,0,'f7933576-ee1e-49c9-97b6-3745fc733f22','f7933576-ee1e-49c9-97b6-3745fc733f22','2018-01-05 15:35:00','2018-01-05 15:35:00',0),('fd2d81f6-c305-44dc-98ba-d92d574a6fd4','123','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,'fd2d81f6-c305-44dc-98ba-d92d574a6fd4','fd2d81f6-c305-44dc-98ba-d92d574a6fd4','2018-01-03 17:04:28','2018-01-03 17:04:28',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
