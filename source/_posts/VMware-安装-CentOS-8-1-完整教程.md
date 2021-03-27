---
title: 'VMware 安装 CentOS 8.1 完整教程 '
top: false
cover: false
toc: true
mathjax: true
date: 2020-03-05 18:29:16
password:
summary: 这篇文章详细的记录我安装CentOS 8.1的过程，其他CentOS 8系列的发行版本安装可作参考。
tags:
- VMware
- CentOS
categories:
- Linux
---

我使用的<font color=red size=3>VMware</font>版本：<font color=red size=3>VMware 15 Pro</font>

镜像：<font color=red size=3>CentOS 8.1</font>

**电脑配置需求：**

- <font color=red size=3>2 GB</font> 及以上的<font color=red size=3>RAM</font>（官方推荐至少<font color=red size=3>4G</font>）
- <font color=red size=3>2 GHz </font>或以上的 <font color=red size=3>CPU</font>
- <font color=red size=3>64 </font>位 <font color=red size=3>x86</font> 架构
- <font color=red size=3>20 GB </font>及以上硬盘空间

**关于CentOS 8.1**

- 基于Linux 4.18
- 提供 PHP 7.2、Python 3.6、Ansible 2.8、VIM 8.0 和 Squid 4
- 使用网络管理器（nmcli 和 nmtui）进行网络配置，移除了网络脚本
通过 BaseOS 和应用流(AppStream)仓库发布.
- AppStream 是对传统rpm格式的全新扩展，为一个组件同时提供多个主要版本
- YUM 包管理器基于 DNF 技术，提供模块化内容支持，增强了性能，并且提供了设计良好的API用于与其他工具集成
- RHEL 8提供了版本控制工具: Git 2.18, Mercurial 4.8,和 Subversion 1.10.

> 内核实时修补；称为 FRR 的新路由协议堆栈（支持多种 IPv4 和 IPv6 路由协议）；伯克利数据包筛选器（eBPF）的扩展版本，可帮助系统管理员解决复杂的网络问题；支持在使用设备时对 LUKS2 中的块设备进行重新加密；此外，还提供了一种用于为容器生成 SELinux 策略的新工具 udica.

<font color=red size=3>CentOS 8</font>系列增加了许多新特性，<font color=red size=3>CentOS 8.1</font>相当于它的第二个发行版本，我这里就不列出了，具体可以看官方文档：

[CentOS 官网文档手册](https://wiki.centos.org/zh/Manuals/ReleaseNotes/CentOS8.1905#A.2BbpBO43gB-)

[Centos8与Centos7区别参照redhat）](https://www.cnblogs.com/RXDXB/p/11660287.html)
# 一、准备过程 #

目前比较流行的两款虚拟机软件 <font color=red size=3>VMware</font> 、<font color=red size=3>VirtualBox</font>，<font color=red size=3>VirtualBox</font>安装<font color=red size=3>CentOS 8</font>系列目前还有很多<font color=red size=3>Bug</font>，推荐使用<font color=red size=3>VMware</font>。

1.安装<font color=red size=3>VMware</font>

如果你还没有安装虚拟机，进入[VMware官网](https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html "VMware")下载相应版本安装即可：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/01.png)

官网下载过程可能有点慢，这里安装过程我就不赘述了。

2.下载<font color=red size=3>CentOS 8.1</font>镜像资源

进入[CentOS官网](http://mirrors.huaweicloud.com/centos/8.1.1911/isos/x86_64/CentOS-8.1.1911-x86_64-dvd1.iso "CentOS")下载<font color=red size=3>CentOS 8.1</font>镜像，我这里给的是在华为云的，下载速度还是可以。


# 二、创建虚拟机 #

1.打开<font color=red size=3>VMware</font>，点击创建新的虚拟机：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/02.png)

2.点击自定义（高级）：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/03.png)

3.这一步直接默认就可以：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/04.png)

4.选择稍后安装操作系统：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/05.png)

5.选择<font color=red size=3>Linux</font>，版本选择<font color=red size=3>Linux 4 ×64位</font>，因为<font color=red size=3>CentOS 8</font>系列基于<font color=red size=3> Linux</font> 内核<font color=red size=3> 4.18</font>：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/06.png)

6.虚拟机名称随便，安装位置看自己电脑配置吧，建议安装在<font color=red size=3>D</font>盘：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/07.png)

7.处理器数量根据自己电脑来配置，反正不够后面可以更改，要安装图形界面的话可以填大一点，新手就这个配置也可以了：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/08.png)

8.内存大小根据自己电脑适当配置，我的电脑内存<font color=red size=3>16G</font>，所以我给它分配<font color=red size=3>4G</font>，要安装图形界面的话可以填大一点：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/09.png)

9.设置虚拟机网络连接模式（<font color=red size=3>NAT</font>）：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/10.png)

**关于网络连接模式说明：**

- 桥接：选择桥接模式的话虚拟机和宿主机在网络上就是平级的关系，相当于连接在同一交换机上。

- NAT：NAT模式就是虚拟机要联网得先通过宿主机才能和外面进行通信。

- 仅主机：虚拟机与宿主机直接连起来

10.选择<font color=red size=3>I/O</font>控制器类型，然后下一步：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/11.png)

11.选择磁盘类型：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/12.png)

12.选择创建新虚拟磁盘，然后下一步：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/13.png)

13.根据自己的需要分配磁盘容量，勾选将虚拟磁盘拆分成多个文件（方便以后将虚拟机拷贝到设备），然后下一步：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/14.png)

14.根据自己需要指定磁盘文件存储位置，我放在D盘：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/15.png)

15.到这里虚拟机就创建完成了，可以点击自定义硬件更改配置，点击完成创建成功：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/16.png)

# 三、安装CentOS 8.1 #
1.点击编辑虚拟机设置：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/17.png)

2.选择<font color=red size=3>CD/DVD</font>，勾选启动时连接，再选择使用ISO映像文件，找到下载好的系统镜像文件添加进去，最后确定：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/18.png)

3.开启此虚拟机：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/19.png)

4.开启虚拟机后会出现以下界面，鼠标点进黑窗口，使用键盘方向键选择第一项，安装<font color=red size=3>CentOS 8</font>，回车，系统开始自动安装

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/20.png)

5.安装完成后选择语言，根据自己情况选择，然后点击继续：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/21.png)

6.首先打开网络和主机名，给虚拟机连上网络：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/22.png)

**如果网络连接不上，多半是<font color=red size=3>DHCP</font>问题，解决办法：**

[解决安装centos 过程中以太网连接不上网络，不能自动分配ip的问题](https://blog.csdn.net/suoyudong/article/details/83037670) (By 索渝东)

7.点击时间和日期，设置系统时间并更改时区(打开网络时间)：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/23.png)

8.选择安装目的地：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/24.png)

9.选择自定义配置，点击完成：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/25.png)

10.添加磁盘分区

<font color=red size=3>Linux</font>的分区，并不像<font color=red size=3>Windows</font>一样，分成<font color=red size=3>C、D、E</font>等盘，介绍几个重要的分区：

- 交换分区（swap）：交换分区和Windows的虚拟内存很像。现在内存也便宜，物理服务器的配置也高，以前的说法是一般为物理内存的2倍，现在一般情况下划分为4~8GB备用即可。我们虚拟机的内存是4GB，我们就划8GB吧。
- 启动分区（boot）：200MB足够了。
- 根分区（/）：剩余空间都给根分区吧。当然我们也可以单独划出/data分区，专门用来存储存数据，不过这里我们先不这样做，直接全部都给根分区。

按照下图顺序依次进行设置：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/26.png)

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/27.png)

11.点击完成后会弹出更改摘要页面，点击接受更改：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/28.png)

12.点击开始安装：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/29.png)

13.设置<font color=red size=3>ROOT</font>密码：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/30.png)

14.点击创建用户，可以把用户设为管理员方便操作，如果密码简单就点击两次完成：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/31.png)

15.安装完成后点击重启电脑：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/32.png)

16.重启完成后点击<font color=red size=3>LICENS INFORMATION</font>,勾选同意许可，然后点击完成：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/33.png)

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/34.png)

17.点击结束配置：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/35.png)

18.来到登录界面，点击未列出，以<font color=red size=3>root</font>登录，方便后面配置操作：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/36.png)

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/37.png)

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/38.png)

19.选择语言：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/39.png)

选择键盘布局：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/40.png)

是否打开位置服务：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/41.png)

然后按照需要添加账号，然后就可以进入啦：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/42.png)

20.关闭系统使用帮助后，来到我们的<font color=red size=3>centos8.1</font>桌面，点击活动可以看到系统软件，第一个是内置浏览器，点击最下面可以看到系统所有软件：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/43.png)

21.点击右上角折叠按钮可以连接网络，打开浏览器就可以访问啦，如果不能联网，在上面已经给出解决办法：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/44.png)

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/45.png)

22.右上角有关机按钮，点击就可以关机：

![](https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/%E5%8D%9A%E5%AE%A2/_posts/VMware-%E5%AE%89%E8%A3%85-CentOS-8-1-%E5%AE%8C%E6%95%B4%E6%95%99%E7%A8%8B/46.png)

到这里，我们的<font color=red size=3>CentOS 8 Linux</font> 就算安装完成了，其他<font color=red size=3>CentOS 8 </font>系列发行版本安装过程类似，可作参考。

