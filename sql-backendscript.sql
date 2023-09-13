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

drop table FacultySubjects;
create table FacultySubjects(
   id integer primary key Auto_increment,
   className varchar(15),
   faculty_name varchar(50),
   subject varchar(50),
   isElective varchar(10)
);

show tables;

select * from FacultySubjects;


INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","DBMS Practical","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Pallavi Thakur","Web Technologies Practical","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Nikhita Mangaonkar","Software Engineering Practical","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","DBMS Theory","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Nikhita Mangaonkar","Software Engineering Theory","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Sampat Vaidya","Linear Algebra Theory","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","Data Structures Practical","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","Data Structures Theory","NO");

select * from FeedbackProject.FacultySubjects where className LIKE "%SYMCA%";

INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","DBMS Practical","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Pallavi Thakur","Web Technologies Practical","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Nikhita Mangaonkar","Software Engineering Practical","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","DBMS Theory","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Nikhita Mangaonkar","Software Engineering Theory","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Sampat Vaidya","Linear Algebra Theory","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","Data Structures Practical","NO");
INSERT INTO `FeedbackProject`.`FacultySubjects`(`className`, `faculty_name`,`subject`,`isElective`)VALUES("FYMCA","Prof Harshil Kanakia","Data Structures Theory","NO");

INSERT INTO `FeedbackProject`.`FacultySubjects`(`id`,`className`, `faculty_name`,`subject`,`isElective`)VALUES
('9', 'SYMCA', 'Prof Harshil Kanakia', 'Process Automation Theory', "NO"),
('10', 'SYMCA', 'Prof Harshil Kanakia', 'Process Automation  Practical', "NO"),
('11', 'SYMCA', 'Prof Nikhita Mangaonkar', 'Quality Assurance Theory', "YES"),
('12', 'SYMCA', 'Prof Nikhita Mangaonkar', 'Quality Assurance Practical', "YES"),
('13', 'SYMCA', 'Prof Sampat Vaidya', 'Probabilty & Statistics Theory', "NO"),
('14', 'SYMCA', 'Prof Sakina', 'Mobile Programming Practical', "NO"),
('15', 'SYMCA', 'Dr Aarti Karande', 'Cloud Computing Theory', "YES"),
('16', 'SYMCA', 'Dr Aarti Karande', 'Cloud Computing Theory', "YES"),
('17', 'SYMCA', 'Prof Pooja Raundale', 'Computer Graphics Theory', "YES"),
('18', 'SYMCA', 'Prof Pooja Raundale', 'Computer Graphics Practical',"YES");

