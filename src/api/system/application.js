import request from '@/utils/request'

// 查询岗位列表
export function listPost(query) {
  return request({
    url: '/thAdmin/list',
    method: 'get',
    params: query
  })
}

// 查询岗位详细
export function getPost(params) {
  return request({
    url: '/thAdmin/getInfo',
    method: 'get',
    params
  })
}

// 新增岗位
export function addPost(data) {
  return request({
    url: '/thAdmin/insert',
    method: 'post',
    data: data
  })
}

// 删除岗位
export function delPost(data) {
  return request({
    url: '/thAdmin/delete',
    method: 'post',
    data
  })
}
