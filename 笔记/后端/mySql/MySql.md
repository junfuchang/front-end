# MySql

## 0.教程

[【中字】SQL进阶教程 | 史上最易懂SQL教程！10小时零基础成长SQL大师！！_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1UE41147KC)

网友笔记：[课程：Mosh_完全掌握SQL【笔记】 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/222865842)



## 1.安装Mysql

[win - mysql下载地址](https://dev.mysql.com/downloads/installer/)

一直确认默认安装即可（中间会进行root用户的密码设置）

### 修改关键字为大写

MySQLWorkbench ->  Edit -> Preferences -> SQL Editor -> Query Editor -> Use UPPERCASE keywords on completion



## 2.基本语句的使用

注意：

- 查询（where）字符串（推荐使用单引号）时不区分大小写
- 比较日期时使用要引号

~~~mysql
-- P8
-- 基本语法
-- 1.查询（where）字符串（推荐使用单引号）时不区分大小写
-- 2.比较日期时使用要引号
USE `sql_store`;
SELECT 
	name,
	unit_price,
    unit_price * 1.1 AS "new price"		-- 重命名
FROM sql_store.products
WHERE unit_price>2
ORDER BY name;		-- 排序

-- P9
-- 查询的逻辑判断
SELECT * 
FROM sql_store.orders
WHERE order_date>='2017-01-01' AND order_date<'2018-01-01';

-- P10
-- 查询中可以使用运算
SELECT * FROM sql_store.order_items
WHERE order_id=6 and quantity*unit_price>30;

-- P11
-- IN操作符
SELECT * FROM sql_store.products WHERE quantity_in_stock in (49,38,72);

-- P12
-- BETWEEN操作符
SELECT * FROM sql_store.customers
WHERE birth_date BETWEEN '1900-01-01' and '2000-01-01'; 

-- P13
-- LIKE操作符（%表示任意多字符，_表示一个字符）
SELECT * FROM sql_store.customers
WHERE (address Like '%trail%' or address Like '%avenue%') OR phone Like '%9';

-- P14
-- REGEXP操作符
-- 常用操作符：^(开头) $(结尾) |(或) [abcd](其中之一) [a-d](其中之一) 
SELECT * FROM sql_store.customers
-- where first_name REGEXP 'elka|ambur';
-- where last_name regexp 'ey|on$';
-- where last_name regexp '^my|se';
where last_name regexp 'b[ru]';
 
-- P15
-- IS NULL操作符（判空）
SELECT * FROM sql_store.orders
where shipper_id is NULL;

-- P16
-- BORDER BY操作符（指定排序列，默认为主键）
-- 使用 DESC 降序排序（每一个列字段后面都可以加）
-- 使用BORDER BY 1,2 这种可以按照展示列的第一列和第二列排序（不推荐使用）
SELECT * FROM sql_store.order_items
where order_id=2
order by quantity*unit_price DESC;

-- P17
-- LIMIT操作符（限定返回的结果）
-- 使用：1. LIMIT 7 表示显示前七条数据
-- 		2. LIMIT 6,2  表示显示第六条后面的两条记录(7,8)	
SELECT * FROM sql_store.customers
order by points DESC
limit 3;
~~~



## 3.连接

### 内连接

~~~mysql
-- P18
-- (INNER )JOIN..ON..内连接
use sql_store;

SELECT OI.product_id,name,quantity,OI.unit_price
FROM order_items OI
JOIN products p
	 ON p.product_id = OI.product_id;
	 
-- P19
-- 连接其他数据库的表（在表名前加是数据库名即可）
use sql_store;

SELECT * 
FROM order_items o
JOIN sql_inventory.products p
	ON o.product_id = p.product_id;
~~~

### 自连接

~~~sql
-- P20
-- 表连接自身，需要分别取别名
SELECT e.employee_id,e.first_name,m.employee_id as mID 
FROM sql_hr.employees e
JOIN sql_hr.employees m
	on e.reports_to = m.employee_id;
~~~

### 多表连接

~~~sql
-- P21
-- 使用多个JOIN实现多表连接
use sql_invoicing;

select 
	payment.payment_id,
    payment.amount,
	c.name,
    PS.name
from payments payment
Join clients c
	on payment.client_id = c.client_id
JOIN payment_methods PS
	on payment.payment_method = PS.payment_method_id
~~~

### 复合连接条件

~~~sql
-- P22
-- 使用多个条件进行复合连接
use sql_store;

SELECT * 
FROM order_items oi
JOIN order_item_notes oin
	ON oi.order_id = oin.order_id
    And oi.product_id = oin.product_id;
~~~

### 隐式连接（不推荐）

~~~sql
-- P23
-- 使用where代替join..on..
select *
from order o,customer c
where r.customer_id = c.customer_id
~~~

### 外连接

~~~sql
-- P24
-- 分为左外连接和右外连接，被选择的一侧将直接返回全部结果，无论条件是否被满足
-- 推荐一直使用左连接
SELECT * 
FROM order_items oi
Right JOIN products p
	ON oi.product_id = p.product_id;
~~~

### 多外表连接

~~~sql
-- P25
-- 与外连接同理
use sql_store;

SELECT  
    c.customer_id,
	o.order_id,
    o.shipper_id,
    c.first_name,
    sh.name as shipper
FROM customers c
left join orders o
	on o.customer_id = c.customer_id
left join shippers sh
	on o.shipper_id = sh.shipper_id
order by c.customer_id;
~~~

### 自外连接

~~~sql
-- P26
use sql_hr;
SELECT 
	e.employee_id,
    e.first_name,
    m.first_name as manager
FROM employees e
left join employees m
	on e.reports_to = m.employee_id
~~~

### USING子句

~~~sql
-- P27
-- 当像这种on o.shipper_id = sh.shipper_id 查询条件相同时，可以用using(shipper_id) 简化
use sql_invoicing;
SELECT
	p.date,
    c.name as client,
    p.amount,
    pm.name as payment_method
FROM payments p
join clients c
	using(client_id)
join payment_methods pm
	on pm.payment_method_id = p.payment_method

~~~

### 自然连接（不推荐）

~~~sql
-- P28
-- 自然连接由mysql引擎自己尝试连接，可能会有出乎意料的问题
select
	o.order_id,
	c.first_name
from order o
natural join customer c
~~~

### 交叉连接

~~~sql
-- P29
-- 结果为一个表中的每一项和另一个表的全部进行组合（笛卡尔积）
-- 显式交叉连接（推荐）
SELECT * 
FROM shippers 
cross join products;
-- 隐式交叉连接
SELECT * 
FROM shippers, products;
~~~

### Unions联合

~~~sql
-- P30
-- 将多个查询结果显示在一起
SELECT
	customer_id,first_name,points,'Bronze' as type
FROM customers
where points<2000
union
SELECT
	customer_id,first_name,points,'Silver'
FROM customers
where points between 2000 and 3000
union
SELECT
	customer_id,first_name,points,'gold'
FROM customers
where points>=3000
~~~



## 4.记录的增删改

### 插入

#### 插入一行

~~~mysql
-- P31
-- 介绍了列的属性（PK,NN,AI）

-- P32
-- 写法一
-- 直接写表名，值要和表中的每一个列都要对于
insert into customers
value(
	'232',
    'wqeweq',
    '2132132',
    'zust',
    'hangzhou1',
    'zj',
    2222
)
-- 写法二
-- 写出列名，然后值和列要对应
insert into customers(
	first_name,
    last_name,
    phone,
    address,
    city,
    state,
    points
) value(
	'232',
    'wqeweq',
    '2132132',
    'zust',
    'hangzhou1',
    'zj',
    2222
)
~~~

#### 插入多行

~~~sql
-- P33
use sql_store;
insert into products
value (default,"name1",34,23.34),
	(default,"name2",323,24.23),
	(default,"name3",34,13.44);
~~~

#### 插入分层级的行（子表的id依赖其父表的id）

~~~sql
-- P34
-- last_insert_id()的使用，获取最近一条插入记录的id
insert into orders(customer_id,order_date,status)
value(1,'2019-01-30',1);
insert into order_items
value(last_insert_id(),1,2,2.3),
	(last_insert_id(),2,4,3.3);
~~~

#### 创建表复制值

~~~sql
-- P35
use sql_invoicing;
create table invoice_archived as 		-- 该语句创建了表并将子语句的结果插入
SELECT * FROM invoices join clients using(client_id) where payment_date is not null;
~~~

### 更新

#### 更新单行

~~~sql
-- P36
use sql_invoicing;
update invoices
set payment_total = invoice_total*0.5,
	payment_date = due_date
where invoice_id = 3;
~~~

#### 更新多行

- 需要先取消WorkBentch的安全更新模式，然后重启客户端

~~~sql
-- P37
use sql_store;
update customers
set points = points+50
where birth_date between '1990-01-01' and '1991-01-01';
~~~

#### 在update中使用子查询

~~~sql
-- P38
use sql_store;
update orders
set comments = "glod customer"
where customer_id in (		  -- where中使用子查询
    select customer_id
    from customers
    where points >=3000);
~~~

### 删除

~~~sql
-- P39
use sql_store;
delete from orders		 -- 删除某些记录，若不加查询语句将会把整个表删掉
where customer_id in (
    select customer_id
    from customers
    where points <100);
    
-- P40
-- 重置数据库
~~~



## 5.高级查询

### 聚合函数

- 对SUM(), AVG(), COUNT(), MAX(), MIN()的使用
  - COUNT( DISTINCT colName) 用DISTINCT关键字可以得出去掉重复值的记录数

~~~sql
-- P41
use sql_invoicing;
select
	'First half of 2019' as  date_range,
    sum(invoice_total) as total_sales,
    sum(payment_total) as total_payments,
    sum(invoice_total-payment_total) as what_we_except
from invoices
where due_date between '2019-01-01' and '2019-07-01'
union
select
	'Second half of 2019',
    sum(invoice_total) as total_sales,
    sum(payment_total) as total_payments,
    sum(invoice_total-payment_total) as what_we_except
from invoices
where due_date between '2019-07-01' and '2020-01-01'
union
select
	'Total',
    sum(invoice_total) as total_sales,
    sum(payment_total) as total_payments,
    sum(invoice_total-payment_total) as what_we_except
from invoices
where due_date between '2019-01-01' and '2020-01-01'
~~~

### GROUP BY子句

~~~sql
-- P42
use sql_invoicing;
select 
	date,
    pm.name as payment_method,
    SUM(amount) as total_payments
from payments join payment_methods pm on payment_method =payment_method_id
group by date,pm.name
order by date,pm.name desc;
~~~

### HAVING子句

~~~sql
-- P43
use sql_store;
select
	c.state,
    c.customer_id,
    c.first_name,
	sum(oi.quantity*oi.unit_price) as spent
from orders o
join customers c using(customer_id)
join order_items oi using(order_id)
where c.state = "VA"
group by c.customer_id 
having spent>100;		-- 其中的列名一定要在select中出现，应为having是对上面的结果进行筛选
~~~

### ROLLUP运算符

~~~sql
-- P44
-- 对分组的数据每一组都进行值的总和统计（只针对用sum()得出的列）
use sql_invoicing;
select
	payments.payment_method,
	sum(payments.amount) as total
from payments 
join payment_methods on payment_method = payment_method_id
group by payments.payment_method with rollup;
~~~



## 6.复杂查询

### 子查询

~~~sql
-- p45
-- 重置数据库
-- P46
-- 子查询
use sql_hr;
select *
from employees
where salary>= (
select AVG(salary)
from employees
)
~~~

### IN操作符

~~~sql
-- P47
-- 查询一次in后面的子查询，会得到子查询的结果
-- 再查询是否满足子查询的结果
use sql_invoicing;
select *
from clients
where client_id not in (
	select distinct client_id
    from invoices
)
~~~

### 子查询VS连接

~~~mysql
-- P48
-- 使用子查询更已读
use sql_store;
select distinct o.customer_id,c.first_name,c.last_name
from orders o 
join customers c using(customer_id) 
where order_id  in (
	select order_id
    from order_items
    where product_id = 3
);
-- 使用连接更方便
use sql_store;
select distinct o.customer_id,c.first_name,c.last_name
from  customers c
join orders o using(customer_id) 
join order_items oi using(order_id)
where  oi.product_id = 3;
~~~

### ALL关键字

~~~mysql
-- P49
-- 对ALL内的每一个进行比较
use sql_invoicing;
select *
from invoices
where invoice_total  > ALL(
	select invoice_total
	from invoices
	where client_id = 3
)
~~~

### ANY / SOME关键字

~~~sql
-- P50
use sql_invoicing;
select *
from clients
where client_id = any(	
	SELECT client_id
	FROM invoices
	group by client_id
	having count(*) >= 2
)
~~~

### 相关子查询

~~~sql
-- P51
-- 在子查询中使用外部条件进行筛选
use sql_invoicing;
select *
from `invoices` i 
where invoice_total >= (
	select avg(invoice_total)
    from invoices
    where client_id = i.client_id
)
~~~

### EXISTS运算符

~~~sql
-- P52
-- 不会先返回子查询的结果，而是在执行中查询，判断是否满足条件（true OR false），效率会比in高
use sql_store;
select *
from products p
where not exists(
	select product_id
	from order_items
	where product_id = p.product_id
);
~~~

### SELECT子句中的子查询

~~~sql
-- P53
-- select中也可以嵌套查询
use sql_invoicing;
select c.client_id,
	c.name,
    (select sum(invoice_total) from invoices where client_id = c.client_id) as total_sales,
    (select avg(invoice_total) from invoices)as average,
    (select total_sales) - (select average)as difference
from clients c;
~~~

### FROM子句中的子查询

~~~sql
-- P54
-- FROM 后面需要跟表，但我们查询出的结果并不是一个真正的表，所有我们需要给他加一个别名（必填项）
-- 不太推荐这么使用，因为太过复杂，后面学的视图可以很好的解决现在这个问题
use sql_invoicing;
select *
from (
	select c.client_id,
		c.name,
		(select sum(invoice_total) from invoices where client_id = c.client_id) as total_sales,
		(select avg(invoice_total) from invoices)as average,
		(select total_sales) - (select average)as difference
	from clients c
) as table_name
where total_sales is not Null;
~~~



## 7.常用函数

### 数值函数

- ROUND（数值【，精度】）
  - 四舍五入
- TRUNCATE（数值，精度）
  - 将数值截取到精度
- CEILING（数值）
  - 返回大于等于这个数的最小整数（向上取整）
- FLOOER（数值）
  - 向下取整
- ABS（数值）
  - 取绝对值，如果是负数的话就返回一个正数
- RAND（）
  - 生成【0，1）的随机数

### 字符串函数

- LENGTH（'strings'）
  - 返回字符串长度
- UPPER（'strings'）、LOWWER（'strings'）
  - 返回全大写、返回全小写
- LTRIM（'strings'）、TRIM（'strings'）、RTRIM（'strings'）
  - 分别可以去除左侧、两侧、右侧空格
- LEFT（'strings'，3）、RIGHTHT（'strings'，3）
  - 分别从左、从右取字符串3位
- SUBSTRING（'strings'，2,3）
  - 取子串，从第2位开始取3位，得到：tri
  - 第三个参数是可选的

- LOCATE（'r','strings'）
  - 输出子串从字符串的第几位开始
  - 不区分大小写
  - 没有结果会返回0
- REPLACE（字符串，要替换的子串，新子串）
  - 字符串的替换
- CONCAT（字符串1，字符串2）
  - 返回两个字符串的拼接

### 日期函数

- NOW（）、CURDATE（）、CURTIME（）	
  - 获取当前完整时间、日期、时间
- DAYNAME（）、MONTHNAME（）
  - 获取星期名、月份名
- YEAR（NOW（））.....
  - 可以获取时间对应的部分
- EXTRACT（year from now()）
  - 可以获取时间对应的部分

### 格式化日期

- DATE_FORMAT(NOW(),"%Y  %m %d")
  - 自定义显示日期
- TIME_FORMAT(NOW(),"%h :%i %p")
  - 自定义显示日期
  - 这里显示的是 2:45 PM

### 计算日期和时间

now 为2021年

- DATE_ADD(NOW(),INCREASE 1 YEAR)
  - 返回2022年的同一时间
  - 这里的数字是可以写成负数的，就相当于DATE_SUB了
- DATE_SUB(NOW(),INCREASE 1 YEAR)
  - 返回2020年的同一时间

- DATEDIFF（日期1，日期2）
  - 计算日期间隔（日期1 - 日期2）
- TIEM_TO_SEC("09:00")
  - 返回从零点到现在的秒数

### 其他函数

- IFNULL（colName, "为空！"）

  - 若该列值为null，则返回字符串”为空！“

- COALESCE（colName1, colName2, "为空！"）

  - 若colName1为null，则用colName2填充，若colName2还为空，则用字符串”为空！“填充

- IF(表达式，结果1，结果2)

  - 和三目运算符一样
  - 若表达式返回true，则返回结果1，否则返回结果2

- CASE运算符

  - ~~~sql
    CASE
    	WHEN age = 1 THRN "一"
    	WHEN age = 2 THRN "二"
    	WHEN age = 3 THRN "三"
    END as Age	
    ~~~



## 8.视图

- 可以为查询创建视图，这个视图就是这个查询的结果（视图存储的是查询，而非查询出的结果）
- 视图不存储数据，数据任存储在表中
- 视图的使用和表一样

### 创建视图

~~~sql
-- P63
use sql_invoicing;
create view clients_balance as	-- 创建视图语句
select
	i.client_id,
    c.name,
	sum(i.invoice_total) - sum(i.payment_total) as balance
from invoices i
join clients c using(client_id)
group by i.client_id
~~~

### 删除和更新视图

- 可以把创建视图的源sql保存一下（推荐）
- 生成视图mysql会给你的源sql语句添加一些东西，以防止命名冲突

~~~mysql
-- P64
-- 删除视图
DROP VIEW viewNAme

-- 更新视图（推荐）
create or replace view clients_balance as
....
~~~

### 可更新视图

- 前提是没有以下内容
  - DISTINCT
  - 聚合函数（MIN，MAX，SUM等）
  - GROUP BY / HAVING
  - UNION
- 可更新视图可以使用insert、delete、update对视图进行修改，同时对应的表的内容也会相应变化

~~~mysql
-- P65
-- 先创建一个可更新视图
create or replace view invoice_clients as
select client_id,name
from clients;
-- 再对它进行修改
update invoice_clients
set name= 'aFu'
where client_id = 1;
~~~

### WITH CHEAK OPTION 子句

- 视图有种默认行为
  - 更新或者删除视图记录时有可能有一些行会消失

- 解决
  - 在创建视图的时候最后面使用WITH CHEAK OPTION 子句解决
  - 当进行操作且有可能使记录消失时，将会报错提示

~~~sql
-- P66
create or replace view invoice_clients as
select client_id,name
from clienpayment_idts
with check option ;				-- 在结束添加即可

update invoice_clients
set name= 'aFu'
where client_id = 1;
~~~

### 使用视图的优点

-- P67

- 复用
- 简化
- 安全



## 9.存储过程

### 概念

~~~sql
-- P68
# 个人理解
服务端需要用到数据库查询，直接在函数中书写sql代码来操作数据库太过繁杂，不易管理
	👇
所有有个“存储过程”的概念 
	👇
可以这么理解：sql就是对数据库操作的一些步骤过程，而我们有个数据库对象可以实现对他们的集中管理，可以更加方便、也更安全

👉相当于一个函数，在mysql中创建一系列存储过程，然后开发时直接调用这个存储过程就可以实现相应的功能
~~~

### 创建存储过程

~~~mysql
-- P69
-- 推荐将创建存储过程的源码保存成sql
use sql_invoicing;
DELIMITER $$		-- 将结束符标识更改为$$，用来划分存储过程的区块
create PROCEDURE get_invoices_with_balance()	-- 创建存储过程
BEGIN
	SELECT * FROM invoices where invoice_total-payment_total > 0;
END$$				-- 区块结束
DELIMITER ;			-- 将结束符标识还原为;
~~~

### 使用workBench快速创建存储过程

~~~sql
-- P70
手动创建一个存储过程之后，刷新左边侧边栏，会出现sotre procedure的类目
右键这个类目就会出现提示框，可以快速创建了
~~~

### 删除存储过程

~~~sql
-- P71
DROP PROCEDURE IF EXISTS get_invoices_with_balance		-- 如果存在的话就删除
~~~

### 带参数的存储过程

~~~sql
-- P72
-- 创建带参数的存储过程
use sql_invoicing;
DELIMITER $$
create PROCEDURE get_invoices_by_clients(id int)
BEGIN
	select * from invoices where client_id = id;
END$$
DELIMITER ;
-- 调用
call get_invoices_by_clients(1);
~~~

### 参数设置默认值

~~~mysql
-- P73
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_payments`(p_client_id int, p_payment_method_id tinyint)
BEGIN
	select *
    from payments
    where client_id = IFNULL(p_client_id,client_id) and payment_method = ifnull(p_payment_method_id,payment_method);
END
-- 调用
call sql_invoicing.get_payments(null,null);
~~~

### 参数校验

~~~mysql
-- P74
-- 在创建触发器的begin后，可以进行校验，抛出错误
Begin
	if age<0 then signal sqlstate "22003"
	end if
	...
END
~~~

### 输出参数（不推荐）

~~~sql
-- P75
CREATE PROCEDURE `get_something` 
(
	client_id int,
	OUT invoices_count int,					-- 定义返回值
    OUT invoices_total DECIMAL(9,2)			
)
BEGIN
	select count(*),sum(invoice_total)
    INTO invoices_count,invoices_total		-- 返回值
    FROM invoice i
    where i.client_id = client_id AND payment_total = 0;
END
~~~

### 变量

~~~sql
-- P76
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_age`()
BEGIN
	declare age_before int default 20;			-- 定义变量
	declare age_increase int default 3;
    declare age_now int;
    
    set age_now = age_before+ age_increase;		-- 设置变量
    select age_now;								-- 使用select输出变量
END
~~~

### 函数

- 只能返回一个结果，不能返回多个记录或表之类的

~~~sql
-- P77
CREATE FUNCTION get_something(client_id int)
RETURNS INTEREG
-- 以下三个模式根据情况选择一个或多个
deterministic			-- deterministic确定性，不依赖数据库的数值，x到y的映射是固定的
READS SQL DATA			-- 需要读取数据库
MODIFIES SQL DATA		-- 需要修改数据库

BEGIN
	declare age_before int default 20;			-- 定义变量
	declare age_increase int default 3;
    declare age_now int;
    
    set age_now = age_before+ age_increase;		-- 设置变量

	RETURN age_now;
END	

-- 删除函数
DROP FUNCTION if exitxs get_something;
~~~

### 命名规则

~~~sql
-- P78
这个没有强制规定，根据喜好或者公司规范即可
小驼峰、
下划线连接、
加前缀名、
......
~~~



## 10.触发器（Triggers）和事件（event）

触发器实在插入、更新、和删除语句前后自动执行的一堆SQL代码

### 创建触发器

~~~sql
-- P79
use sql_invoicing;
DELIMITER $$
create trigger payments_after_delete
	after delete on payments		-- 对什么表进行什么操作之前或之后触发
    for each row		-- 表示插入的每一行都会触发触发器
BEGIN 
	update invoices
    set payment_total = payment_total-OLD.amount
    where invoice_id = OLD.invoice_id;
END$$
DELIMITER ;
~~~

### 查看触发器

~~~sql
-- P80
show trigger  	-- 显示触发器列表
show trigger lick "payments%"		-- 对触发器列表进行筛选
~~~

### 删除触发器

~~~ sql
-- P81
drop trigger if exists 'triggerName'
~~~

### 使用触发器创建日志表

- 我们可以创建个表来存储操作记录
- 只需要在使用触发器时对这个日志表进行更新

~~~sql
-- P82
BEGIN
	....
	insert into logTable
	value( OLD.id, OLD.name ,'DELETE', now());
END
~~~

### 创建事件

~~~mysql
-- P83
-- 可以查看全局的系统变量
show variables;
-- 查找event事件变量，打开MySql事件调度器
show variables like 'event%'			-- 显示事件调度器变量名
set GLOBAL 'event_scheduler' = ON		-- 开启
~~~

~~~sql
DELIMITER $$
create event yearly_show_log
on schedule
	-- at '2022-01-02'		-- 在某一时刻执行一次
    -- every 1 year 		-- 每隔一年执行
    every 1 year STARTS '2019-01-01' ENDS '2022-01-01' 	-- 可以指定开始事件和结束事件（都是可以选填的）
DO BEGIN
	insert into logTable
    value(now());
END $$
DELIMITER ;
~~~

### 查看、删除和更改事件

~~~mysql
-- P84
-- 查看事件
show events;
show events like "yearly%";		-- 查看以yearly开头的事件

-- 删除事件
drop event if exists "yearly_show_log"

-- 更改事件
-- 使用 ALTER EVENT，语法和创建事件一样
DELIMITER $$
ALTER event yearly_show_log
on schedule
	-- at '2022-01-02'		-- 在某一时刻执行一次
    -- every 1 year 		-- 每隔一年执行
    every 1 year STARTS '2019-01-01' ENDS '2022-01-01' 	-- 可以指定开始事件和结束事件（都是可以选填的）
DO BEGIN
	insert into logTable
    value(now());
END $$
DELIMITER ;

-- 停用和启用事件
ALTER event yearly_show_log DISABLE
ALTER event yearly_show_log ENABLE
~~~



## 11.事务

-- P85

表示一组要么**全部成功**就成功，要么**有失败**就失败的**工作单元**

- 我们平时的增删改查都运行在事务下，只不过没有明写出来罢了

特性：（CAID）

- 原子性
  - 事务要么成功要么失败
- 一致性
  - 使用事务会使数据库保持正确、一致
- 隔离性
  - 事务间互不影响，如操作同一组数据，会等其他事务先执行，不会一起对数据进行操作
- 持久性
  - 事务一旦成功提交，数据将被修改，之后出现故障也不影响已经成功提交事务的数据

### 创建事务

~~~ sql
-- P86
use sql_store;
start transaction;		-- 开始事务

insert into orders(customer_id, order_data, status)
value(1, '2019-01-01', 1);

insert into order_items
value(last_insert_id(), 1, 1, 1);

commit;		-- 事务提交
-- ROLLBACEK	-- 事务手动回滚

-- 默认情况下我们的增删改在没有错误的情况下都会自动提交，由一个全局变量（autocommit）
show variables like "autocommit"  -- 查看变量是否开启
~~~

### 并发和锁定

-- P87

- 并发
  - 多个用户同时操作同一数据
- 锁定
  - 当一个事务开始时，会给其数据加锁，不允许其他事务更改

### 并发产生的问题

-- P88

- 丢失更新
  - 后提交的事务会覆盖前提交的事务
  - 解决：mysql默认使用的锁定可以解决这个问题
- 读脏数据
  - 一个事务读取了另一个事务还未提交的数据
  - 解决：使用隔离（读已提交）
- 不可重复读
  - 第一次读取的数被修改，导致第二次读取的数和第一次不一样
  - 解决：使用隔离（可重复读）：就算数据被改了，第二次也使用第一次读取出来的数据
- 幻读
  - 没能读取在查询中出现的新数据(一行)
  - 解决：使用隔离（序列化）：如果要修改将要被读取的表，需要等修改完成后再去读取，简单来说要时间顺序

### 事务隔离级别

- 在运行事务前先检查级别，推荐`repeatable read  `

|                         | lost updates | dirty reads | non-repeating reads | phantom reads |
| :---------------------- | :----------: | :---------: | :-----------------: | :-----------: |
| read uncommitted        |              |             |                     |               |
| read committed          |              |      √      |                     |               |
| repeatable read（默认） |      √       |      √      |          √          |               |
| serializable            |      √       |      √      |          √          |       √       |

~~~sql
-- P89
-- read uncommitted是mysql数据库的默认行为
show variables like "transaction_isolation";				-- 查看当前事务隔离级别
set global transaction isolation level REPEATABLE READ;		-- 设置全局（global）的事务隔离级别（REPEATABLE READ），还可以设置会话（session）级别的隔离
~~~

~~~sql
-- P90 ~ P93
-- 对事物的问题和解决这些概念用示例讲解了一边（讲的炒鸡清楚）
~~~

### 死锁

- 由于事务对表的修改数据库系统会对表进行上锁
- 当两个事务分别给对方需要的表上了锁，那么就会产生死锁，导致双方都在等待资源的释放，事务都永远无法完成
- （小例子：两个人要干架，一个人说我不会先出手打你，除非你先打我，另一个人说俺也一样，那么问题来了，他俩谁都不会先动手，就永远的等在那）

~~~sql
-- P94
-- 事务1
use sql_store;
start transaction;
update orders set status = 1 where order_id = 1;			-- 步骤1
update customers set state = "VA" where customer_id = 1;	-- 步骤1
commit;

-- 事务2
use sql_store;
start transaction;
update customers set state = "VA" where customer_id = 1;	-- 步骤1
update orders set status = 1 where order_id = 1;			-- 步骤2
commit;

-- 如上，若先分别执行两个事务的步骤1，那么之后无论哪个事务先执行步骤2都会进入死锁
~~~



## 12.数据类型

~~~sql
-- P95
-- 简单介绍了下有哪些数据类型
1. String Type
2. Numberic Type
3. Date and Time Types
4. Blob Types
5. Spatial Types
~~~

### 字符串类型

~~~sql
-- P96
char(x)			固定长度
* varchar(x)	max:64KB 6553个字符()	
mediumtext		max:16MB
longtext		max:4GB
tinytext		max:255 bytes
text			max:64kb
----------------------------
英语占1个字节
欧洲和中东语言占2个字节
中文和日文占3个字节
- 若定义char(10)	mysql会留出30个字节
~~~

### 数值类型

 ~~~sql
 -- P97
 -- 整型
 tinyint				1B	[-128,127]
 * unsigned tinyint 	1B	[0,255]
 smallint			2B	[-32K,32K]
 mediumint			3B	[-8M,8M]
 int					4B	[-2B,2B]
 bigint				8B	[-9Z,9Z]
 -- int(4)	如果存入1，则显示0001，而实际存储的仍然是1
 
 -- P98
 -- 浮点数
 decimal(p,s)	p的范围[1,65]，同意的还有：dec numeric fixed
 -- 下面这俩只存储近似值，并不精确，通常用于科学计算
 float			4B
 double			8B
 ~~~
### 布尔型
~~~sql
-- P99
bool		
boolean	
-- 通常true、false与1、0等价
~~~
### 枚举和集合类型
~~~mysql
-- P100
ENUM("小","中","大")		要求值为其中的所列出的
SET(....)
-- 不推荐，后期维护很复杂，建议直接建立类型表
~~~

### 日期时间类型

~~~mysql
-- P101
date			存储日期
time			存储时间
datetime	8B	存储日期和时间
timestamp	4B	时间戳（只能存储到2038年），通常用来记录最近更新时间
year			存储年份
~~~

### Blob类型

~~~sql
-- P102
-- 用来存储二进制数据，图像。视频、word....
tinyblob		255b
blob			65KB
mediumblob		16MB
longblob		4GB
-- 不推荐数据库存储文件
1.数据库会很大
2.弱化了数据备份功能
3.性能问题
4.需要写额外的代码
~~~

### json类型

~~~sql
-- P103
-- 创建json方法1
update products
set prop = '
{
	"name": "sdsd",
	"obj": {"age": 20},
}'
-- 创建json方法2
update products
set prop = JSON_OBJECT(
	'something',JSON_ARRAY(1,2,3),
    'obj',JSON_OBJECT('name','afu')
)

-- 读取json方式1
JSON_EXTRACT(prop,'$.name')
-- 读取json方式2
prop -> '$.name'		-- 得到："sdsd"
prop ->> '$.name'		-- 可以再加一个箭头去掉引号，得到：sdsd

-- 修改json方式
update products
set prop = JSON_SET(
	prop,
    '$.name','ssssss'
)

-- 删除json方式
update products
set prop = JSON_REMOVE(
	prop,
    '$.name'
)
~~~



## 13.设计数据库

~~~sql
-- P104 ~ P127
-- 主要以操作为主，学习数据库思路，建议观看视频
~~~

### 数据建模过程

​	在线画图工具：https://draw.io/

1. 理解和分析业务需求
2. 构建业务的概念模型
3. 生成逻辑模型以存储数据
4. 建立实体模型

### 三大范式

简单来说

- 第一范式：确保每列的内容不能再被分割
- 第二范式：设置的列要和表的内容相关
- 第三范式：一个列不能由其他列计算出来

**谨记：着重消除冗余，不要啥啥都建表，以需求为准**



## 13.1其他相关知识

### 数据库操作

~~~sql
-- P128
-- 新建数据库
create database is not exists dbName;
-- 删除数据库
drop database is not exists dbName;		
~~~

### 表的操作

~~~sql
-- P129,P130
-- 创建表
create table tableName
(
	id 		int primary key auto_increment,
    name 	varchar(50) not null,
  	points 	int noy null default 0,
    email 	varchar(50) not null unique,
    address varchar(255)
);
-- 删除表
drop table if exists tableName;
-- 修改表
alter table if exists tableName
	-- 添加列，若不指定after或before，列会出现在最后
	add age tinyint not null default 0 after name
	-- 修改列
	modify address varchar(255) not null
	-- 删除列
	drop email
~~~

### 创建表间关系

~~~sql
-- P131
create table sonTable
(
	order_id 		int primary key auto_increment,
    customer_id 	int not null,
    -- 创建外键约束
    foreign key fk_sonTable_fatherTable(customer_id)
    	-- 外键来自哪里
    	references fatherTable(customer_id)
    	-- 外键发生相应操作时的反应
    	on update cascade
    	on delete no action
);
~~~

### 更改主键/外键

~~~sql
-- P132
alter table if exists tableName
	-- 添加和删除主键
	drop primary key,
	add primary key (order_id, customer_id),
	-- 添加和删除外键
	drop foreign key fk_sonTable_fatherTable,
	add foreign key fk_sonTable_fatherTable(customer_id)
    	references fatherTable(customer_id)
    	on update cascade
    	on delete no action
~~~

### 字符集

~~~sql
-- P133
-- 显示当前所有的字符集
show charset
-- 修改字符集
-- 对数据库
create/alter database dbName
	character set utf8;
-- 对表
create/alter table tableName
(
    ...
)
character set utf8;
~~~

### 存储引擎

~~~sql
-- P134
-- 显示所有存储引擎，sql8以上是InnoDB
show engines;
-- 更改表的搜索引擎
alter table tableName
ENGINE = InnoDB;
~~~



## 14.索引

~~~sql
-- P135,P136
-- 介绍索引
索引本质上是数据库引擎用来快速查找数据的数据结构
我们不必为每个表添加索引，因为索引会增加数据库的体积并影响正常运行的速度
我们是根据查询情况来判断是否添加索引
~~~

### 创建索引

~~~sql
-- P137
-- 查看查询的详细信息
use sql_store;
-- 在没有使用索引前type为all，搜索了1010行
explain select customer_id from customers where points>1000;
-- 使用索引后，type为range，搜索了529行
create index idx_points on customers(points);
~~~

### 查询索引

~~~sql
-- P138
-- 查看一个表的所有索引
show index in customers;
-- 主键默认有索引，称为聚集索引（Clustered Index）
-- 排列规则（Collation）表示数据在索引中的排序方式，A表示升序，D表示降序
-- 基数（Cardinality）表示索引中的唯一值的估计数量，并不是真值。可以使用analyze来查看真实信息
analyze table customers;
~~~

### 前缀索引

~~~mysql
-- P139
-- 创建前缀索引
-- 对于char和varchar括号的内容是可选的，但对于text和blob，必须要填内容（具体多少要看情况，足以标识唯一即可）
create index idx_name on customers(name(5));
~~~

### 全文索引

~~~sql
-- P140
-- 创建全文搜索，有两种模式（自然语言模式（默认），布尔模式）
-- 搜索时会为每一行创建相关性得分[0,1],搜索结果将按降序排序
-- 1. 自然语言模式（默认）
use sql_blog;
create fulltext index idx_title_body on posts(title,body);
select *
from posts
where match(title,body) against ('react redux');	-- 这里使用的时
-- 2. 布尔模式，可以排除或者一定包含某些短语
-- 减号代表排除，加号代表一定要包含，内部再使用引号可以用来搜索指定短语
where match(title,body) against ('react -redux +from "something"' in boolean mode);
~~~

### 复合索引

- 推荐使用复合索引（mysql最多支持复合16列，复合个几列就差不多了）

~~~sql
-- P141
-- mysql只会选取一个索引进行搜索，当要搜索多列内容时效率可以优化，就是使用复合索引
-- 复合索引被选取时，将会同时搜索多列，效率会优化
create index idx_name_age on customers(name,age);

-- 删除索引
drop index idx_name_age on customers;
~~~

~~~mysql
-- P142
-- 复合索引中列的顺序：两条基本规则（不适用所有情况，看具体情况）
-- 1. 把使用频率高的排在前面；2. 基数大的排前面
create index idx_name_age on customers(name,age);	-- 这里(name,age)就是在确定排列顺序

-- 强制使用某个索引，而不去让搜索引擎寻找最优索引
select *
from posts
use index(idx_name_age)		-- 强制使用该索引
where match(title,body) against ('react redux');	-- 这里使用的时
~~~

### 索引无效情况

~~~sql
-- P143
-- 若要使用索引的情况下
-- 1. 当使用 or 这类需要重复查询的情况，尽量将他们拆分
select * from myTable where name="jack" or age=20
👇
select * from myTable where name="jack"
union
select * from myTable where age=20

-- 2. 尽量不要再where语句中使用表达式
select * from myTable where age + 10 > 30
👇
select * from myTable where age > 20
~~~

### 使用索引排序

~~~sql
-- P144
-- 若有包含所排序列的索引，采用索引会加快排序
-- 查看排序的cost
show status like 'last_query_codt'
~~~

### 覆盖索引

~~~sql
-- P145
-- 我们的select语句中若包含的列全都可以使用索引，则称为覆盖索引，可以在不读取表的情况下执行查询

-- 索引优化检查点
-- 1. where语句
-- 2. order by语句
-- 3. select语句
~~~

### 维护索引

~~~sql
-- P146
-- 重复索引，注意检查现有的索引
mysql不会阻止创建完全相同列的索引
-- 多余索引
(a,b)
(a)		-- 这就是多余的，因为（a,b）已经能完成对a的索引
(b)		-- 这就不是多余的
-- 未使用索引
~~~



## 15.权限管理

~~~sql
-- P147
-- 我们需要保护数据库的安全
~~~

### 创建用户

~~~ sql
-- P148
-- 主机部分是可选的，表示不限制主机就可以登陆。主机可以是ip地址/localhost/"%.baidu.com" %指不限制子域
create user name@主机 identified by "123456"
~~~

### 查看用户

~~~sql
-- P149
select * from mysql.user;		-- 查看系统的用户表
~~~

### 删除用户

~~~sql
 -- P150
drop user name@主机;
~~~

### 更改密码

 ~~~mysql
 -- P151
 set password for name = "123456";
 -- 可以不加`for name`，表示当前的用户
 set password = "123456";
 ~~~

### 授予权限

~~~sql
-- P152
-- 对管理员可以授予所有的权限
grant all
on *.*		-- 某个数据库的某个表，*表示全部
to afu;
-- 对普通用户授予增删改查、执行存储过程的权限
grant insert,delete,update,select,execute
on sql_store.*
to afu;
~~~

### 查看权限

~~~sql
-- P153
-- 返回当前用户的权限
show grant;		-- 显示某人的权限show grant from name;	
~~~

### 撤销权限

~~~sql
-- P154
revoke delete
on sql_store.*
from afu
~~~


