/**
 * 定义所有Action
// */
var SERVER = 'http://putaoshu.sqapp.cn/index.php';
var SERVER_ROOT = 'http://putaoshu.sqapp.cn/';
//var SERVER = 'http://yk.no-ip.biz/wine2/code/index.php';
//var SERVER_ROOT = 'http://yk.no-ip.biz/wine2/code/';
//var SERVER = 'https://wine-yunku.rhcloud.com/index.php';
//var SERVER_ROOT = 'https://wine-yunku.rhcloud.com/';
//var SERVER = 'http://192.168.1.104/wine2/code/index.php';
//var SERVER_ROOT = 'http://192.168.1.104/wine2/code/';
var IMAGE_ROOT = SERVER_ROOT+'uploads/';

var APP_ACTION = {
    'UPLAD_WELIFEIMAGE'             :SERVER+'/welife/uploadimg/',
    'POST_WELIFE'                   :SERVER+'/welife/app_edit_share',
    'GET_WELIFESHARES'              :SERVER+'/welife/get_shares/',
    'GET_VIDEOLIST'                 :SERVER+'/video/getvideos/',//获取视频列表
    'GET_CLUB_VIDEOLIST'            :SERVER+'/video/get_club_videos/',//获取我的空间视频列表
    'GET_ALBUMPHOTO'                :SERVER+'/photo/getAll/',  //获取相册内容

    //主题会所
    'GET_CLUB'                        :SERVER+'/club/get_club/',                   //获取主题会所列表
    'GET_CLUB_MODEL'                  :SERVER+'/club/get_club_model/',           //可添加会所模块列表
    'GET_CLUBINREG'                   :SERVER+'/club/reg_club/',                 //注册页面会所下拉列表
    'GET_CLUB_DETAIL'                 :SERVER+'/club/get_club_detail/',         //获取会所详情

    //文章类
    'GET_START_PIC'                 :SERVER+'/article/get_start_pic',                   //上滑图片
    'GET_INFORMATION_FIND'         :SERVER+'/article/get_information_find/',          //信息-发现
    'GET_INFORMATION_RELEVANCE'   :SERVER+'/article/get_information_relevance/',    //信息-关联
    'GET_SERVICE_DESIGN'           :SERVER+'/article/get_service_design/',            //多元服务-设计
    'GET_SERVICE_EXPERIENCE'       :SERVER+'/article/get_service_experience/',        //多元服务-体验
    'GET_SERVICE_MANAGER'           :SERVER+'/article/get_service_manager/',           //多元服务-管家
    'GET_SERVICE_VIP'                :SERVER+'/article/get_service_vip/',               //多元服务-会员
    'GET_HEART_GARDEN'              :SERVER+'/article/get_heart_garden/',                //心灵花园
    'GET_APPLY01'                     :SERVER+'/article/get_apply01/',                   //荐-最新推荐
    'GET_APPLY02'                     :SERVER+'/article/get_apply02/',                   //荐-精品阅读
    'GET_APPLY03'                     :SERVER+'/article/get_apply03/',                   //荐-生活必备
    'GET_ARTICLE_DETAIL'           :SERVER+'/article/get_article_detail/',             //获取文章详情
    'PRAISE_ARTICLE'             :SERVER+'/article/praise_article/',                 //赞文章

    //文章评论
    'GET_REVIEW_LIST'               :SERVER+'/review/review_list/',                 //获取评论列表
    'ADD_REVIEW'                 :SERVER+'/review/add_review/',                     //添加评论

    //商品类
    'GET_EAT_PRODUCT'                 :SERVER+'/product/get_eat/',                         //获取吃商品
    'GET_CLOTHES_PRODUCT'             :SERVER+'/product/get_clothes/',                     //获取衣商品
    'GET_ARTICLE_PRODUCT'              :SERVER+'/product/get_article/',                     //获取文商品
    'GET_OTHER_PRODUCT'                :SERVER+'/product/get_other/',                       //获取其他商品
    'GET_PRODUCT_DETAIL'               :SERVER+'/product/get_product_detail/',          //获取商品详情


    //用户
    'USER_REGISTER'                     :SERVER+'/user/register',      //用户注册
    'CLUBOWNER_REGISTER'                :SERVER+'/user/club_register/',
    'REGISTER_COUNT'                    :SERVER+'/user/user_count',
    'UPLOAD_USERHEAD'                   :SERVER+'/user/uploadimg/',
    'LOGIN'                             :SERVER+'/user/login',
    'USER_LOGOUT'                            :SERVER+'/user/logout',
    'CHANGEPSW'                         :SERVER+'/user/new_pwd',
    'EDIT_POST'                         :SERVER+'/community/edit_post',                     //发贴
    'GET_POST_LIST'                     :SERVER+'/community/get_post/',                      //帖子列表
    'GET_POST_COMMENT'                  :SERVER+'/community/get_post_content/',              //获取帖子评论
    'SEND_COMMENT'                      :SERVER+'/community/add_comment/'                    //发表评论
};


