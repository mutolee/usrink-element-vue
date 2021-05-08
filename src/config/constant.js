export const BASE_URL = 'http://localhost:8080/'
export const USER_NAME = 'userName'
export const TOKEN = 'token'
export const LOGIN_API = "static/res/login.json"

export const LEFT_MENU = 'leftmenu'
export const IS_ROUTER_LOADED = 'isRouterLoaded'
export const MENUS = 'menus'
export const ARR = 'arr'
export const LEFT_MENU_IS_ROUTER_LOADED = LEFT_MENU + "/" + IS_ROUTER_LOADED;
export const LEFT_MENU_MENUS = LEFT_MENU + "/" + MENUS;
export const LEFT_MENU_ARR = LEFT_MENU + "/" + ARR;

export const GEN_ROUTER = '/'
export const GEN_ROUTER_NAME = 'gen'
export const LOGIN_ROUTER = '/login'
export const NOT_FOUND_ROUTER = '/404'
export const NOT_FOUND_TIT = "404";
export const WELCOME_ROUTER = '/welcome'
export const WELCOME_TIT = "欢迎页"
export const STATIC_ROUTER = [NOT_FOUND_ROUTER, WELCOME_ROUTER]
export const MY_USERINFO_ROUTER = "/user/myUserInfo"
export const MY_MSG_ROUTER = "/user/msg"

export const STATUS_CODE = {
    SUCCESS: 200,
    WARNING: 201,
    NO_MORE: 205,
    ERROR: 300,
    NO_LOGIN: 301,
    NO_PERM: 302
}

