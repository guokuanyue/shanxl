import Mock from 'mockjs'


Mock.mock('http://123.com','get',{
    'name|3':'xiaolei',
    'age|20-30':25,
})