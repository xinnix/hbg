#HBG 项目

## 项目架构
本项目采用MEAN.js架构，由nodejs技术驱动。

## 项目开发环境
Grunt构建，npm管理依赖的软件包

## 部署
拟部署到heroku上面

## API 接口（标准的RESTFull接口）

### inventory 馆藏图书
#### 数据模型
```
{
  location: string, // 位置
  qr_code: string, // 入库编码
  in_time: datetime, // 入库时间
  status: boolean, // 是否借出
  skuid: string,
  url: string,
  name: string,  // 图书书名
  jqimg: string, // 图书封面图片
  price: float,
  buy_price: float,
  author: string,  // 图书作者
  publication: string, // 出版社
  pub-time: datetime   // 出版时间
}
```
#### API
`/inventorys/:id`


### member 会员
#### 数据模型
```
{
  phone_number: string
  baby_name: string
  baby_birthday: datetime
  baby_gender: number
  card_number: string
  active_time: datetime
  valid_days: number
  level: number
  parent_name: string
  address: string
  email: string
  weixin: string
  other: string
  head_photo: string
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
  start_time: datetime,
  end_time: datetime
}
```
#### API
`/records/:id`


### tag 标签
#### 数据模型
```
{
  name: string
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
