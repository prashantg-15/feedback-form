show databases;
use FeedbackProject;
show tables;
select * from FacultyReview;

desc FacultyReview;
drop table FacultyReview;
CREATE TABLE `FacultyReview` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ucid` bigint DEFAULT NULL,
  `q1` int DEFAULT NULL,
  `Q2` int DEFAULT NULL,
  `Q3` int DEFAULT NULL,
  `Q4` int DEFAULT NULL,
  `Q5` int DEFAULT NULL,
  `Q6` int DEFAULT NULL,
  `Q7` int DEFAULT NULL,
  `Q8` int DEFAULT NULL,
  `Q9` int DEFAULT NULL,
  `Q10` int DEFAULT NULL,
  `Q11` varchar(8000) DEFAULT NULL,
  `faculty` varchar(50) DEFAULT NULL,
  `FeedBackSentiment` varchar(20) DEFAULT NULL,
  `class_name` varchar(15) DEFAULT NULL,
  `positive_percentage` decimal DEFAULT NULL,
  `negative_percentage` decimal DEFAULT NULL,
  `neutral_percentage` decimal DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

create table FacultySubjects(
   id integer primary key Auto_increment,
   className varchar(15),
   faculty_name varchar(50),
   subject varchar(50),
   isElective tinyInt
);

show tables;

select * from FacultySubjects;


INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","DBMS Practical",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Pallavi Thakur","Web Technologies Practical",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Nikhita Mangaonkar","Software Engineering Practical",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","DBMS Theory",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Nikhita Mangaonkar","Software Engineering Theory",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Sampat Vaidya","Linear Algebra Theory",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","Data Structures Practical",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","Data Structures Theory",0);

select * from FeedbackProject.FacultySubjects where className LIKE "%fymca%";

INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","DBMS Practical",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Pallavi Thakur","Web Technologies Practical",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Nikhita Mangaonkar","Software Engineering Practical",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","DBMS Theory",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Nikhita Mangaonkar","Software Engineering Theory",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Sampat Vaidya","Linear Algebra Theory",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","Data Structures Practical",0);
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","Data Structures Theory",0);




