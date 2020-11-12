
export const MANAGERMENT_SERVICE = 'http://localhost:3000'
/**************************/
/***********User***********/
/**************************/
//method post : req = body:{name,password} 
export const USER_LOGIN = MANAGERMENT_SERVICE + '/user/login'
//method post : req = body:{name,age,gender,password}
export const CREATE_USER = MANAGERMENT_SERVICE + '/user/create'
//method get : req = header:{userId}
export const FIND_MY_USER = MANAGERMENT_SERVICE + '/user/find/myuser'
//method put : req = header:{userId},body:{name,age,gender}
export const EDIT_USER = MANAGERMENT_SERVICE + '/user/update'
/**************************/
/***********Blog***********/
/**************************/
//method get : req = header:{userId}
export const FIND_MY_BLOGS = MANAGERMENT_SERVICE + '/blog/find/all'
