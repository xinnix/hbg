#HBG 项目

## 项目架构
本项目采用MEAN.js架构，由nodejs技术驱动。

## 项目开发环境
Grunt构建，npm管理后端依赖的软件包，bower管理前端依赖软件包

## 部署
拟部署到heroku上面

## API 接口（标准的RESTFull接口）

### inventory 馆藏图书
#### 数据模型
```
{
  location: String,   // 位置
  qr_code: String,    // 入库编码
  in_time: Date,      // 入库时间
  isRent: Boolean,    // 是否借出
  skuid: String,      // 书商品编号(jd.com)
  url: String,        // 书网页地址（jd.com）
  name: String,       // 图书书名
  isbn: String,       // 图书isbn
  jqimg: String,      // 图书封面图片
  price: Number,      // wMaprice
  author: String,     // 图书作者
  pub: String,        // 出版社
  pub-time: Date      // 出版时间
}
```
#### API
`/inventorys/:id`


### member 会员
#### 数据模型
```
{
  phone_Number: String
  baby_name: String
  baby_birthday: Date
  isBoy: Boolean
  card_Number: String
  active_time: Date
  valid_days: Number
  level: Number		// 会员类型0,1,2分别代表 临时，普通年卡，高级年卡
  parent_name: String
  address: String
  email: String
  weixin: String
  other: String
  head_photo: String
}
```
#### API
`/members/:id`


### record 借阅纪录
#### 数据模型
```
{
  inventory: ref
  member: ref
  start_time: Date,
  end_time: Date
}
```
#### API
`/records/:id`


### tag 标签
#### 数据模型
```
{
  name: String
}
```
#### API
`/tags/:id`


### tag_inventory 标签和藏书(多对对)
#### 数据模型
```
{
  tag: ref
  inventory: ref
}
```
#### API
`/tis/:id`
