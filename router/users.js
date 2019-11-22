const express = require('express');
const router = new express.Router();

/*
*  /v1/users/login
*/
router.route('/login')
  .get((req, res) => {
    res.send({'code': 10000})
  })
  .post((req, res) => {
    res.send({
      'code': 20000,
      'msg': '登录成功',
      'data': {
        'accessToken': 'token_string'
      }
    })
  })

/*
*  /v1/users/info
*/
router.route('/info')
  .post((req, res) => {
    res.send({
      'code': 20000,
      'msg': '',
      'data': {
        'user': {
          'id': 0,
          'username': 'admin',
          'password': 'any',
          'name': 'Super Admin',
          'avatar': '#',
          'introduction': 'I am a super administrator',
          'email': 'admin@test.com',
          'phone': '1234567890',
          'roles': ['admin']
        }
      }
    })
  })

module.exports = router;
