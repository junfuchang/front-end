# 服务器配置

## 配置Nginx

**1.安装git**

```
yum install git -y 全局安装
```

**2.下载nvm是node版本控制器**

```
git clone git://github.com/creationix/nvm.git ~/nvm
```

**3.设置nvm自动运行**

```
echo "source ~/nvm/nvm.sh" >> ~/.bashrc


source ~/.bashrc
```

**4.查询node版本**

```
nvm list-remote
```

**5.安装node**

```
nvm install v14.18.1  //本人安装14版本

node -v		//查看版本，判断是否安装成功
```

**6.Nginx服务器安装**

**6.1.安装pcre依赖**

```
yum -y install pcre*
```

**6.2.安装openssl依赖**

```
yum -y install openssl*
```

**6.3.在根目录创建一个nginx目录**

在根目录也就是root这个目录创建了一个nginx文件，这里面都存放我们安装的nginx

```
mkdir nginx
```

![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107220531822-21818286.png)

**6.4.安装nginx服务**

```bash
wget http://nginx.org/download/nginx-1.20.2.tar.gz 		//是一个压缩文件
```

**6.5.解压nginx安装包**

```
tar -zxvf nginx-1.20.2.tar.gz
```

**6.6.进入解压的目录**

```
cd nginx-1.20.2.tar.gz
./configure    执行文件，检查配置文件是否生效
```

**6.7.编译**

```
make -j4
```

**6.8.安装依赖**

```
make install
```

**6.9.进入/usr/bin/的目录下**

```
ln -s /usr/local/nginx/sbin/nginx nginx //相当于一个快捷方式
```

　　![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107221534192-983386149.png)

**9.9返回主界面** 

 直接输入cd就可以返回主界面 通过输入pwd可以查看到返回的是不是主界面

 ![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107221743445-728450543.png)

**10.9启动nginx**

```
直接输入 nginx 就可以启动
```

通过输入ps -ef|grep nginx可以看到进程

![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107222051378-495859169.png)

在浏览器地址栏输入自己服务器的ip地址就可以看到下面的界面了

![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107231731687-1975065415.png)

 

如果启动遇到nginx: [emerg] getpwnam("nginx") failed这个错误。少了用户配置

```
 useradd -s /sbin/nologin -M nginx

 id nginx

netstat -tlunp | grep nginx启动命令
```

或者在过程中出现 [emerg] mkdir() “/var/temp/nginx/client” failed (2: No such file or directory) 错误 执行

```
sudo mkdir -p /var/tem/nginx/client 这个sudo我不要加，应为我的就是root权限了，如果不是的需要加 
```

**9.nginx服务器自定义访问配置**

先在我们的根目录通过 下面命令访问我们的主配置文件

```
vim /usr/local/nginx/conf/nginx.conf
```

 ![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107224455426-427473839.png) 第一行修改成这样

然后在最下面中添加 include /root/nginx/*.conf,等会在nginx目录中创建一个nginx目录

![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107224534079-12526931.png)

修改完之后，保存退出

```
先按esc，再按住shift + :  输入：wq!是保存突出

按 i 这个键是先升级编辑
按ecs是退出编辑：
```

9.1返回根目录中，先进入nginx这个目录，在目录创建一个

```
mkdir nginx.conf 文件
```

　通过命令![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107225032679-187829551.png)进入这个里面进行编辑

server_name 是写入自己的服务器上的ip地址或者localhost,写完之后保存退出；

root /root/nginx/upload这个是监听到nginx下面的upload目录里面的index.html文件，等会会在nginx目录创建一个upload目录

![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107225123709-1703126347.png)

~~~
server {
  listen 80;
  server_name www.afudoc.com;
  root /root/nginx/upload;
  autoindex on;
  add_header Canhe-Control "no-cache,must-revalidate";
  location / {
    add_header Access-Control-Allow-Origin *;
  }
}
~~~

9.2这样的话，我们监听的端口号就是8080了，但是和主文件的监听的端口号一样了，所以需要再次修改主文件的端口号，把他改成其他的端口号就行了

 ![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107225405428-1255241265.png)

然后再次保存退出,

9.3检查nginx配置是否成功

```
nginx -t  //出现下面的情况就算配置正确了； 
```

![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107230228770-1227678314.png)

9.4在nginx目录中创建upload目录，等会就会写一个hindextml文件

![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107225808761-2095413229.png)

 9.5在upload目录中，输入

```
vim index.html 创建了一个index.html文件，
```

　　![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107230419018-1385410722.png)

里面写一些内容，然后保存退出

最后配置完之后重启一下nginx服务器

```
nginx -s reload 　　
```

　如果重启过程中遇到下面的问题

nginx: [error] invalid PID number “” in “/usr/local/var/run/nginx/nginx.pid”  **pid位置不对**

```
pkill  nginx  先杀死，然后在次重启一下就好了
```

然后在我们浏览器访问服务器的ip地址就可以看到我们写入的内容了；

如果我们访问的ip地址访问的时候，用于都是nginx欢迎页面，说明我门配置的时候没有配置好对应的nginx.conf文件，可以通过nginx -t查看到nginx所配置的环境是在那个目录里面

![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107231135844-927324723.png)

然后在住目录，通过 vim /etc/nginx/nginx.conf进入再次编辑一下，保存就可以了

 ![img](https://img2018.cnblogs.com/blog/1188378/201901/1188378-20190107230734583-1689546081.png)

 以上都是我们服务器上部署nginx的所有步骤，也是我自己踩过的坑，遇到的问题，接下来还会持续更新数据库的搭建。



## 相关博客

- java8下载地址[Java Downloads | Oracle](https://www.oracle.com/java/technologies/downloads/#java8)

- tomcat下载地址https://tomcat.apache.org/download-90.cgi

[nginx服务器搭建以及配置 - 小周sri的码农 - 博客园 (cnblogs.com)](https://www.cnblogs.com/zhoulifeng/p/10236116.html)



