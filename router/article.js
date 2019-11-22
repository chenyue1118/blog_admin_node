const express = require('express');
const router = new express.Router();

/*
*  /v1/users/login
*/
router.route('/list')
  // .get((req, res) => {
  //   res.send({'code': 10000})
  // })
  .get((req, res) => {
    console.log(req.query);
    res.send({
      'code': 20000,
      'msg': '登录成功',
      'data': [
        {
          id: 1,
          status: 'done',
          title: '如何写一篇介绍ts的文章',
          abstractContent: 'any 一旦开启，很容易养成偷懒的习惯，碰到难题就上 any。',
          imageURL: '',
          timestamp: '2019-11-19',
          label: ['ts', 'vue'],
          disableComment: true,
          author: '陈晓',
          reviewer: 'chenchen',
          type: 'article',
          pageviews: 100
        }, {
          id: 2,
          status: 'update',
          title: '如何写一篇介绍ts的文章',
          abstractContent: 'any 任意类型的存在，在我看来就是个潘多拉魔盒',
          imageURL: '',
          timestamp: '2019-11-19',
          label: ['ts', 'vue'],
          disableComment: true,
          author: '陈晓',
          reviewer: 'chenchen',
          type: 'ques',
          pageviews: 12
        }
      ]
    })
  })


module.exports = router;
