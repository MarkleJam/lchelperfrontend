create DATABASE Leetcodehelper;

CREATE TABLE item (
id INT  PRIMARY KEY, 
name VARCHAR(255), 
diff ENUM('easy', 'medium', 'hard'), 
type1 VARCHAR(255), 
type2 VARCHAR(255),
type3 VARCHAR(255),
grasp VARCHAR(255),
createAt date
);

select * from item;

insert into item (id, name, diff, type1, type2, type3, grasp, lastaccessed) values(24, 'sample',
'easy',
'array',
null,
null,
'almost',
'2019-08-11');
