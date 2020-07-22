var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 0 全部  1 未完成  2 已完成
const list = [
  {
      id: 1,
      task: '大野智',
      state: 1,
      time: '2020-07-20 17:49:00',
      complete: '2020-07-20 17:49:00'
  },
  {
      id: 2,
      task: '夫君子之行',
      state: 1,
      time: '2020-07-20 17:49:00',
      complete: '2020-07-11 17:49:00'
  },
  {
      id: 3,
      task: '刘备',
      state: 1,
      time: '2020-07-14 12:29:00',
      complete: '2020-07-10 17:49:00'
  },
  {
      id: 4,
      task: '孙尚香',
      state: 2,
      time: '2020-02-20 17:49:00',
      complete: '2020-03-20 17:49:00'
  }
];

router.get('/getTaskList', function(req, res, next){
  let state = req.query.state - 0, listnew= [];
  if(state === 1){
    listnew = list.filter(item => item.state === 1)
  } else if(state === 2) {
    listnew = list.filter(item => item.state === 2)
  } else {
    listnew = list;
  }
  res.send({
    code: 0,
    list: listnew
  })
})

router.post('/addTask', function(req, res, next){
  console.log(req.body)
  res.setStatus({code: 200});
  res.send({status: 200, data: [0, 1, 2]})
})

router.get('/list', function(req, res, next){
  console.log(req.query.callback)
  // let { callback } = req.query;
  // let data = {
  //   code: 0,
  //   list: [1, 2, 3]
  // }
  res.send(1)
})

module.exports = router;
