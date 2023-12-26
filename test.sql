/*
 Navicat Premium Data Transfer

 Source Server         : root
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 11/12/2023 17:04:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `Comment_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Comment_Content` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `Comment_Time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `image_all_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Comment_ID`) USING BTREE,
  INDEX `fk_Comment_Image`(`image_all_id` ASC) USING BTREE,
  CONSTRAINT `fk_Comment_Image` FOREIGN KEY (`image_all_id`) REFERENCES `image_all` (`image_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 58 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (34, '66', '2023-12-05 17:59:49', 254);
INSERT INTO `comment` VALUES (35, '66', '2023-12-05 18:00:07', 254);
INSERT INTO `comment` VALUES (36, '9', '2023-12-05 18:01:18', 254);
INSERT INTO `comment` VALUES (37, '6', '2023-12-05 18:01:25', 254);
INSERT INTO `comment` VALUES (38, '1', '2023-12-05 18:02:37', 254);
INSERT INTO `comment` VALUES (39, '1', '2023-12-05 18:03:00', 254);
INSERT INTO `comment` VALUES (40, '21', '2023-12-05 18:03:04', 254);
INSERT INTO `comment` VALUES (41, '666666', '2023-12-05 18:04:24', 254);
INSERT INTO `comment` VALUES (42, '12', '2023-12-05 18:05:42', 254);
INSERT INTO `comment` VALUES (43, '9', '2023-12-05 18:06:51', 254);
INSERT INTO `comment` VALUES (44, '9', '2023-12-05 18:06:58', 254);
INSERT INTO `comment` VALUES (45, '11', '2023-12-05 18:07:33', 254);
INSERT INTO `comment` VALUES (46, '11', '2023-12-05 18:07:37', 254);
INSERT INTO `comment` VALUES (47, '1', '2023-12-05 18:10:20', 254);
INSERT INTO `comment` VALUES (48, '1', '2023-12-05 18:10:41', 254);
INSERT INTO `comment` VALUES (49, '11', '2023-12-05 18:11:28', 254);
INSERT INTO `comment` VALUES (50, '999', '2023-12-05 18:11:45', 254);
INSERT INTO `comment` VALUES (51, '66', '2023-12-05 18:14:19', 254);
INSERT INTO `comment` VALUES (52, '3', '2023-12-05 18:14:23', 254);
INSERT INTO `comment` VALUES (53, '777777', '2023-12-05 18:15:00', 254);
INSERT INTO `comment` VALUES (54, '789', '2023-12-05 18:15:16', 254);
INSERT INTO `comment` VALUES (55, '45444', '2023-12-05 18:18:21', 254);
INSERT INTO `comment` VALUES (56, '756', '2023-12-05 18:19:08', 254);
INSERT INTO `comment` VALUES (57, '87', '2023-12-05 18:19:48', 256);

-- ----------------------------
-- Table structure for headnav
-- ----------------------------
DROP TABLE IF EXISTS `headnav`;
CREATE TABLE `headnav`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `query` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of headnav
-- ----------------------------
INSERT INTO `headnav` VALUES ('首页', '/', NULL);
INSERT INTO `headnav` VALUES ('精品', 'Boutique', '精品推荐');
INSERT INTO `headnav` VALUES ('分享', 'New', '分享内容');
INSERT INTO `headnav` VALUES ('热门', 'Hot', '热门推荐');

-- ----------------------------
-- Table structure for hot_img
-- ----------------------------
DROP TABLE IF EXISTS `hot_img`;
CREATE TABLE `hot_img`  (
  `img_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `img_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `img_date` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `img_suffix` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hot_img
-- ----------------------------
INSERT INTO `hot_img` VALUES ('http://localhost:3000/images/Hot/1.gif', '1', '2023-12-06 14:45:10', '1.gif');
INSERT INTO `hot_img` VALUES ('http://localhost:3000/images/Hot/2af46db64afcafae3bfc0ae01 copy.jpg', '2af46db64afcafae3bfc0ae01 copy', '2023-12-06 14:45:10', '2af46db64afcafae3bfc0ae01 copy.jpg');
INSERT INTO `hot_img` VALUES ('http://localhost:3000/images/Hot/2041de3f4e55cd05ac0628200.png', '2041de3f4e55cd05ac0628200', '2023-12-06 14:45:10', '2041de3f4e55cd05ac0628200.png');
INSERT INTO `hot_img` VALUES ('http://localhost:3000/images/Hot/2af46db64afcafae3bfc0ae01.jpg', '2af46db64afcafae3bfc0ae01', '2023-12-06 14:45:10', '2af46db64afcafae3bfc0ae01.jpg');

-- ----------------------------
-- Table structure for image_all
-- ----------------------------
DROP TABLE IF EXISTS `image_all`;
CREATE TABLE `image_all`  (
  `image_path` mediumtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `image_id` int(255) NOT NULL AUTO_INCREMENT,
  `image_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`image_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 259 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of image_all
-- ----------------------------
INSERT INTO `image_all` VALUES ('http://localhost:3000/images/imgAll/2041de3f4e55cd05ac0628200.png', 254, '2041de3f4e55cd05ac0628200');
INSERT INTO `image_all` VALUES ('http://localhost:3000/images/imgAll/夏目友人帐 copy.jpg', 255, '夏目友人帐 copy');
INSERT INTO `image_all` VALUES ('http://localhost:3000/images/imgAll/夏目友人帐 copy 2.jpg', 256, '夏目友人帐 copy 2');
INSERT INTO `image_all` VALUES ('http://localhost:3000/images/imgAll/夏目友人帐.jpg', 257, '夏目友人帐');
INSERT INTO `image_all` VALUES ('http://localhost:3000/images/imgAll/2af46db64afcafae3bfc0ae00.gif', 258, '2af46db64afcafae3bfc0ae00');

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test`  (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES (1);
INSERT INTO `test` VALUES (2);
INSERT INTO `test` VALUES (3);

-- ----------------------------
-- Table structure for upload_img
-- ----------------------------
DROP TABLE IF EXISTS `upload_img`;
CREATE TABLE `upload_img`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `img_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `img_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `img_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of upload_img
-- ----------------------------
INSERT INTO `upload_img` VALUES (14, 'http://localhost:3000/images/upload/5.jpg', '8', '8');
INSERT INTO `upload_img` VALUES (15, 'http://localhost:3000/images/upload/5.jpg', '55', '23');
INSERT INTO `upload_img` VALUES (16, 'http://localhost:3000/images/upload/6.jpg', 'undefined', 'undefined');
INSERT INTO `upload_img` VALUES (17, 'http://localhost:3000/images/upload/5.jpg', '111111', '11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
INSERT INTO `upload_img` VALUES (18, 'http://localhost:3000/images/upload/4.jpg', '11111111', '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
INSERT INTO `upload_img` VALUES (19, 'http://localhost:3000/images/upload/6.jpg', '144444', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `passpwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_german2_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '123123', '123123');
INSERT INTO `user` VALUES (24, 'qweqwe', 'qweqwe3');
INSERT INTO `user` VALUES (25, 'qweqwe', 'qweqwe31');
INSERT INTO `user` VALUES (26, 'qweqwe', 'dubaia');
INSERT INTO `user` VALUES (27, 'qweqwe', 'dubaiaa');
INSERT INTO `user` VALUES (28, 'dubai', 'qweqwe');
INSERT INTO `user` VALUES (29, 'qweqwe', 'dubaiaa');
INSERT INTO `user` VALUES (30, 'dubai', 'qweqwe');

SET FOREIGN_KEY_CHECKS = 1;
