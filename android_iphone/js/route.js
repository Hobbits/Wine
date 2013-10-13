/**
 * 定义所有Action
 */
var SERVER = 'http://putaoshu.sqapp.cn/index.php';
var SERVER_ROOT = 'http://putaoshu.sqapp.cn/';
//var SERVER = 'http://yunku.4pu.com/wine2/code/index.php';
//var SERVER_ROOT = 'http://yunku.4pu.com/wine2/code/';
var IMAGE_ROOT = SERVER_ROOT+'uploads/';

var APP_ACTION = {
    'UPLAD_WELIFEIMAGE'             :SERVER+'/Welife/uploadimg/',
    'POST_WELIFE'                   :SERVER+'/Welife/app_edit_share',
    'GET_WELIFESHARES'              :SERVER+'/Welife/get_shares/',
    'GET_VIDEOLIST'                 :SERVER+'/Video/getvideos/',
    'GET_ALBUMPHOTO'                 :SERVER+'/Photo/getAll/',  //获取相册内容

    //主题会所
    'GET_CLUB'                         :SERVER+'/Club/get_club/',                   //获取会所列表
    'GET_CLUB_DETAIL'                 :SERVER+'/Club/get_club_detail/',           //获取会所详情

    //文章类
    'GET_START_PIC'                 :SERVER+'/Article/get_start_pic',                   //上滑图片
    'GET_INFORMATION_FIND'         :SERVER+'/Article/get_information_find/',          //信息-发现
    'GET_INFORMATION_RELEVANCE'   :SERVER+'/Article/get_information_relevance/',    //信息-关联
    'GET_SERVICE_DESIGN'           :SERVER+'/Article/get_service_design/',            //多元服务-设计
    'GET_SERVICE_EXPERIENCE'       :SERVER+'/Article/get_service_experience/',        //多元服务-体验
    'GET_SERVICE_MANAGER'           :SERVER+'/Article/get_service_manager/',           //多元服务-管家
    'GET_SERVICE_VIP'                :SERVER+'/Article/get_service_vip/',               //多元服务-会员
    'GET_HEART_GARDEN'              :SERVER+'/Article/get_heart_garden/',                //心灵花园
    'GET_APPLY01'                     :SERVER+'/Article/get_apply01/',                   //荐-最新推荐
    'GET_APPLY02'                     :SERVER+'/Article/get_apply02/',                   //荐-精品阅读
    'GET_APPLY03'                     :SERVER+'/Article/get_apply03/',                   //荐-生活必备
    'GET_ARTICLE_DETAIL'           :SERVER+'/Article/get_article_detail/',             //获取文章详情

    //商品类
    'GET_EAT_PRODUCT'                 :SERVER+'/Product/get_eat/',                         //获取吃商品
    'GET_CLOTHES_PRODUCT'             :SERVER+'/Product/get_clothes/',                     //获取衣商品
    'GET_ARTICLE_PRODUCT'              :SERVER+'/Product/get_article/',                     //获取文商品
    'GET_OTHER_PRODUCT'                :SERVER+'/Product/get_other/',                       //获取其他商品
    'GET_PRODUCT_DETAIL'               :SERVER+'/Product/get_product_detail/',          //获取商品详情


    //用户
    'USER_REGISTER'                     :SERVER+'/User/register',                            //用户注册
    'UPLOAD_USERHEAD'                   :SERVER+'/User/uploadimg/',
    'LOGIN'                             :SERVER+'/User/login',
    'USER_LOGOUT'                            :SERVER+'/User/logout',
    'EDIT_POST'                         :SERVER+'/Community/edit_post',                     //发贴
    'GET_POST_LIST'                     :SERVER+'/Community/get_post/',                      //帖子列表
    'GET_POST_COMMENT'                  :SERVER+'/Community/get_post_content/',              //获取帖子评论
    'SEND_COMMENT'                      :SERVER+'/Community/add_comment/'                    //发表评论
};


