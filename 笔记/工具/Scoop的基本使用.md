[scoop使用指南_TA-MEI的博客-CSDN博客](https://blog.csdn.net/weixin_43826113/article/details/106982923)

[scoop: 国内镜像版 (gitee.com)](https://gitee.com/squallliu/scoop#install-scoop-to-a-custom-directory-by-changing-scoop)



scoop安装
确保安装 PowerShell 5（或更高版本，包括PowerShell 核心）和.NET 框架 4.5（或更高版本）。

查看powershell 版本

Get-Host | Select-Object Version
1
在 PowerShell 中输入下面内容，保证允许本地脚本的执行：

set-executionpolicy remotesigned -scope currentuser
1
执行下面的命令安装 Scoop：

iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
1
测试一下

scoop help
1
自定义安装路径
[environment]::setEnvironmentVariable('SCOOP','D:\Scoop','User')
$env:SCOOP='D:\Scoop'
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
1
2
3
自定义路径 D:\Scoop

将全局应用安装到自定义目录
假设目标目录是D:\Applications\Scoop\globalApps,在PowerShell命令控制台中运行：

[environment]::setEnvironmentVariable('SCOOP_GLOBAL','D:\Applications\Scoop\globalApps','Machine')
$env:SCOOP_GLOBAL='D:\Applications\Scoop\globalApps'
1
2
scoop 卸载
scoop 安装软件
命令	动作
search	搜索软件名
install	安装软件
update	更新软件
status	查看软件状态
uninstall	卸载软件
info	查看软件详情
home	打开软件主页
下载加速
scoop install aria2
1
如果用了aria2还是很慢，可以关闭它：

scoop config aria2-enabled false
1
示例

scoop search git
scoop install git
1
2
全局安装

scoop install oraclejdk8 -g;
1
scoop 添加扩展软件包
known-application-buckets

由于 Scoop 的存储桶本质上都是一个个 git 库，所以想要添加额外的存储库，需要有 git 环境支撑，输入 scoop install git 进行安装即可。

输入 scoop bucket known 就能查看官方已知的存储桶列表

scoop bucket add <仓库名>
1
    "extras": "https://github.com/lukesampson/scoop-extras.git",
    "versions": "https://github.com/scoopinstaller/versions",
    "nightlies": "https://github.com/scoopinstaller/nightlies",
    "nirsoft": "https://github.com/kodybrown/scoop-nirsoft",
    "php": "https://github.com/nueko/scoop-php.git",
    "nerd-fonts": "https://github.com/matthewjberger/scoop-nerd-fonts.git",
    "nonportable": "https://github.com/oltolm/scoop-nonportable",
    "java": "https://github.com/se35710/scoop-java",
    "games": "https://github.com/Calinou/scoop-games"
1
2
3
4
5
6
7
8
9
示例

scoop bucket add dorado https://github.com/h404bi/dorado
1
scoop install dorado/<App 名>
1
其他推荐存储桶
Bucket 地址：kodybrown/scoop-nirsoft

NirSoft 官网地址：NirSoft

scoop 常用命令
有关Scoop命令的信息是内置的。如果您使用Git，则应该找到熟悉的帮助界面。

要查看命令列表，请运行：

scoop help
1
要查看有关特定命令的帮助，请运行：

scoop help <command>
1
当前命令为（从的输出scoop help）：

alias          Manage scoop aliases
bucket         Manage Scoop buckets
cache          Show or clear the download cache
checkup        Check for potential problems
cleanup        Cleanup apps by removing old versions
config         Get or set configuration values
create         Create a custom app manifest
depends        List dependencies for an app
export         Exports (an importable) list of installed apps
help           Show help for a command
hold           Hold an app to disable updates
home           Opens the app homepage
info           Display information about an app
install        Install apps
list           List installed apps
prefix         Returns the path to the specified app
reset          Reset an app to resolve conflicts
search         Search available apps
status         Show status and check for new app versions
unhold         Unhold an app to enable updates
uninstall      Uninstall an app
update         Update apps, or Scoop itself
virustotal     Look for app's hash on virustotal.com
which          Locate a shim/executable (similar to 'which' on Linux)
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
scoop help            #帮助
scoop list            #查看当前已安装软件
scoop info app        #查看软件信息
scoop install app     #安装软件
scoop search app      #搜索软件
scoop uninstall app   #卸载软件
scoop update app      #更新指定软件
scoop update *        #更新安装的软件和scoop

# 设置代理(http)
scoop config proxy 127.0.0.1:4412
1
2
3
4
5
6
7
8
9
10
11
示例:

列出已安装的所有包

scoop list
1
Scoop 命令说明

scoop help
1
获取某个包的安装信息

scoop info python
1
打开某个包的官网

scoop home python
1
禁止某个包更新

scoop hold python
1
使用代理
用于一些下载较慢的情况。具体使用见官方Wiki。

这里仅记录使用当前用户的网络代理配置：

# 使用当前用户的默认代理
scoop config proxy currentuser@default

# 移除代理
scoop config rm proxy
1
2
3
4
5
检查问题
在安装各种包时，或者进行了一些配置，可能会造成一些冲突或错误，这时可以使用scoop checkup来检查问题，并按照其提示来解决。

而解决大部分问题的一个方案是重置：

scoop reset *
1
它会重置所有的环境变量、快捷方式以解决冲突。

安装 MySQL
由于包版本可能更新，Scoop 在包安装目录下提供一个current的软链接文件夹，表示当前使用版本的包。因此我们只需进入该目录查找我们需要的文件。
确定 MySQL 已安装，然后进入 Scoop 安装目录下的/apps/mysql/current目录，并进入其中的bin目录，并输入以下命令：

# 初始化本地数据库
mysqld --initialize
# 安装 MySQL 服务
mysqld --install mysql
# 启动 MySQL 服务
sc start mysql
# 使用初始密码进入 MySQL：初始密码为空
# mysql -u root -p
# 运行数据库
mysqld --console
# 修改 MySQL 8 的密码插件及初始密码
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
# 退出数据库
quit;
# 停止 MySQL 服务
sc stop mysql
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
或者在安装完 MySQL 后按其提示继续：

更新包
scoop status
scoop update git
# 更新所有包
scoop update *
scoop update * --global
# 清除旧版本安装信息
scoop cleanup *
scoop cleanup * --global
1
2
3
4
5
6
7
8
导出安装软件列表
scoop.cmd export > app_list.txt
1
更新所有安装软件
scoop update * && scoop cleanup *
1
Python 版本切换
scoop install python27 python
python --version # -> Python 3.6.2

# switch to python 2.7.x
scoop reset python27
python --version # -> Python 2.7.13

# switch back (to 3.x)
scoop reset python
python --version # -> Python 3.6.2
1
2
3
4
5
6
7
8
9
10
注：Ruby 版本切换类似，都是通过 scoop reset 切换

进阶操作

自定义软件包
应用清单

App Manifests

创建你自己的软件包

creating-your-own-bucke

相关文章
scoop官网

scoop GitHub

scoop 文档

少数派

scoop-config

Linnzh/Blog/issues/42

jszbug
————————————————
版权声明：本文为CSDN博主「TA-MEI」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_43826113/article/details/106982923