---
sidebar: auto
sidebarDepth: 2
---
## 环境配置
### 重装系统
- [系统下载](https://msdn.itellyou.cn/)

### Git环境
- [安装和公钥/私钥的配置](https://www.cnblogs.com/joyho/articles/4062574.html)
- [常用命令](https://github.com/Majk1224/project)
``` bash
- 克隆仓库： git clone git@github.com:mjk/project.git
- 拉取代码： git pull origin master
- 新建分支： git branch majinkai
- 删除分支： git branch -d majinkai
- 切换分支： git checkout majinkai
- 推送远程： git push origin master
- 查看提交记录： git log 
- 回滚代码： git reset --hard [commit:6]
- 回滚文件： git checkout -- filepath
- 回到最新代码： git reset HEAD | git pull origin master
- 隐藏当前分支改动： git stash 
- 回退隐藏： git stash pop
- 合并分支： git merge majinkai
- 会用PR给他人仓库贡献代码
```
- 提交之前需要配置全局用户和密码，git commit的时候需要  
```bash
git config --global user.name "your name"  
git config --global user.email "you email"
```
### Node环境
- [安装教程](https://www.cnblogs.com/zhouyu2017/p/6485265.html)
- 可以查看到node版本和npm版本即可
- 安装使用nrm管控仓库源
```bash
// 安装
npm i -g nrm
// 添加自定义源地址, 其中 yynpm 为自定义名称
nrm add yynpm 源地址
// 查看仓库源列表
nrm ls
// 切换 npm 仓库源
nrm use yynpm
```
- cnpm配置
``` bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
- 进阶：可以使用[nvm](https://github.com/creationix/nvm)管理window上的node版本


## 开发工具
### ConEmu安装
- [安装教程](https://www.jianshu.com/p/264e75aef8bb)
- 多个终端方便快速切换

### mac推荐终端安装

- HomeBrew [安装](https://brew.sh/)（mac上的软件上的包管理工具）或执行命令安装
``` bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
执行如果遇到 [Connection refused](#ConnectionRefused)，参见下面的处理方式 
### iterm2 
- [iterm2安装](https://iterm2.com/)
### ZSH 安装

``` bash
1. brew install zsh
2. zsh --version (如果返回正确的版本号即代表安装成功)
   zsh 5.8 (x86_64-apple-darwin20.0)
3. 将 zsh 设置为系统的默认 shell
```
Recent Mac OS versions:
``` bash
chsh -s /usr/local/bin/zsh
```
Mac OS High Sierra and before:
``` bash
chsh -s /bin/zsh
```
### Oh My Zsh 安装
``` bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# or

sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
#### 主题安装
oh my zsh 有很多主题可安装折腾，有兴趣的可参见 https://github.com/ohmyzsh/ohmyzsh/wiki/Themes 配置指定主题

#### 插件安装
   autojump
用于自动跳转之前访问的文件夹，比如本机有个 ~/Codes/leopard-web-app-custom 项目文件夹，进入过一次后，下次在任意目录下输入关键词，比如j app-cus 后 Tab 键会自动补齐__ 下划线, 然后回车即可进入 ~/Codes/leopard-web-app-custom，方便快捷。
``` bash
brew install autojump
```
- tig 更强大的 git 命令行工具
[更多使用方法文档](https://jonas.github.io/tig/)
``` bash
brew install tig

个别使用方法示例：
• 直接在命令行 输入tig, 可直接查看当前分支的提交记录信息
• tig 指定分支，比如 tig release/daily 则可查看 release/daily。这样就不再需要切换到指定分支才能查看
• 输入tig 后，选中指定的提交记录信息行，按 t 可查看当前提交记录状态下各文件的信息
```
- zsh-autosuggestions (输入命令提示自动完成插件)
``` bash
brew install zsh-autosuggestions
```
以上插件完成后，进入 oh-my-zsh 的配置文件 ~/.zshrc 文件中，找到 plugins= 字段所在行，将相关插件添加进去。

![配置插件](/study/oyzPlugins.png)

保存配置文件，执行 source ~/.zshrc  让配置生效。
- alias 的使用
.zshrc 文件中可以定义 alias，这样就可以做到输入简单字符串执行指定命令的操作行为，简化输入命令
比如：我想登陆通过ssh 登陆服务器，正常执行时 ssh jinlong@47.107.105.88 -p 60022， 这是我可以定义个alias 为：
``` bash
alias sh88="ssh jinlong@47.107.105.88 -p 60022"
```
保存后，source ~/.zshrc 。再在命令行就可直接输入 sh88 即可执行 ssh 登陆命令
###  Connection refused<span id="ConnectionRefused"> 问题处理</span>

 如果执行curl 命令发现遇到如下问题

 ![ConnectionRefused](/study/ConnectionRefused.png)
 可按照以下步骤解决
- 访问 https://www.ipaddress.com/
- 将执行命令中的域名地址输入上面的网站，获取到IP地址。比如上面的域名是 raw.githubusercontent.com

  ![checkIP](/study/checkIP.png)

- 修改自己电脑的 /ets/hosts 配置，将 raw.githubusercontent.com 及查询到的 IP 地址添加进去
  
  ![addIP](/study/addIP.png)

- 再次执行相关的 curl 命令即可成功
### VSCode
- [汉化教程](https://jingyan.baidu.com/article/7e44095377c9d12fc1e2ef5b.html)
### 抓包工具 Charles
- [安装和破解](https://zhubangbang.com/charles-crack-version-free-download-and-install-tutorial.html)
- [使用教程](http://www.cnblogs.com/jiayuchn-test/p/8875105.html)
### 小飞机 ShadowSocks
- [安装教程](https://gitman6.github.io/cshow/windows.html)
- 使用以前的账号配置服务器
### Chrome
- 未翻墙，可以去[应用中心下载](https://pc.qq.com/detail/1/detail_2661.html) 或 [谷歌上网助手下载](http://googlehelper.net/)
- 已翻墙，去官网下载安装，后续安装插件
- 常用插件如下   

![插件列表](/study/FastStoneEditor.jpg)

## 沟通工具
- 企业邮箱
- 企业微信
- 飞书
- 钉钉
- 百度Hi

## 如何解决问题
### 常用方法
![秘籍](/study/baidu.png)
### 进阶方法
- 查看官方文档
- 查看Github issues
- 使用Google搜索问题