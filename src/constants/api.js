/*** Base URLs **/
export const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
export const API_URL = BACKEND_BASE_URL + "/cpc-api";
export const IMAGE_BASE_URL = BACKEND_BASE_URL + "/media";
export const FILE_UPLOAD = "uploads/";
export const USER = "users/";
export const USER_LOGIN = "users/login/";
export const SWITCH_LOGIN = "/users/superuser_login/";
export const USER_LOGOUT = "users/logout/";
export const USER_CLONE = "users/user_clone/";

///
export const IMAGE_UPLOAD = "/apis/image-upload/";

//Video Api
export const VIDEO_ROTATE = "/video-rotate/";
export const VIDEO_WITH_AUDIO = "/video-with-audio/";
export const VIDEO_CROP = "/video-cut/";
export const VIDEO_MERGE = "/video-merge/";
export const VIDEO_COMPONENT = "/video-component/";
export const VIDEO_TEXT = "/video-text/";
export const VIDEO_DELETE_COMPONENT = "/delete-component/";
//social auth
export const FACEBOOK_AUTH = "/facebook-signup/";
export const GOOGLE_AUTH = "/google-signup/";
export const FORGOT_PASSWORD = "/users/reset_password/";
export const RESET_PASSWORD = "/users/reset_password_confirm/";
