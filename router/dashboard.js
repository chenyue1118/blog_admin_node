const express = require('express');
const router = new express.Router();

/*
* /v1/dashboard/info
* 文章数  集合
* 问答数  集合
* 评论数  集合
* 访问量  集合
*/
router.route('/info')
  .get((req, res) => {
    const data = {
      'code': 20000,
      'msg': '登录成功',
      'data': {
        articleNumber: 13,
        questionNumber: 26,
        commentNumber: 68,
        trafficVolume: 120,
        articleTrend: [12, 12, 13, 13, 13, 14, 18],
        questionTrend: [5, 6, 13, 23, 28, 32, 36],
        commentTrend: [12, 12, 13, 13, 13, 14, 18],
        trafficTrend: [1, 11, 22, 33, 44, 44, 55]
      }
    }
    res.send(data)
  })

module.exports = router;
