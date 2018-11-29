import S from '~/utils/tools/string'
import D from '~/utils/tools/date'

export function ellipsis3(str){
  return S.ellipsis(str, 65)
}
export function formatDate(str){
  return D.formatTime(str,'{y}/{m}/{d}')
}
export function formatRole(role){
  switch (role) {
    case 'superAdmin':
      return '超级管理员'
      break
    case 'admin':
      return '管理员'
      break
    case 'user':
      return '用户'
      break
    default:
      return ''
  }
}
