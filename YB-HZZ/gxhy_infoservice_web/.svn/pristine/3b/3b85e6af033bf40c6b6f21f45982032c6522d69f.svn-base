/* SDK控件接口 */
/**
* SDK 初始化  SDK initialization
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note 线程不安全 Thread not safe
*/
#define NETDEV_Init "NETDEV_Init"

/**
* SDK 清理  SDK cleaning
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_Cleanup "NETDEV_Cleanup"

/**
* 用户登录  User login
* @param [IN][String]  strDevIP         设备IP Device IP
* @param [IN][Long]  lDevPort         设备服务器端口 Device server port
* @param [IN][String]  strUserName      用户名 Username
* @param [IN][String]  strPassword      密码 Password
* @return -1表示失败，返回Json字符串表示成功
* @note  返回成功时Json字符串格式{
*                                 "UserID":[int],               用户登录句柄
*                                 "dwDevType":[int],            设备类型,参见枚举#NETDEV_DEVICETYPE_E
*                                 "wAlarmInPortNum":[int],      报警输入个数
*                                 "wAlarmOutPortNum":[int],     报警输出个数
*                                 "dwChannelNum":[int]          通道个数
*                                 }
*/
#define NETDEV_Login "NETDEV_Login"

/**
* 用户注销  User logout
* @param [IN][Long] lUserID    用户登录ID User login ID
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_Logout "NETDEV_Logout"

/**
* 用户登录云端账户 User login to cloud account
* @param [IN][String]  strCloudSrvUrl       云端服务器URL  Cloud server URL 
* @param [IN][String]  strUserName          云端账户名 Cloud account name
* @param [IN][String]  strPassWord          云端账户密码  Cloud account password 
* @return 返回的用户登陆ID,-1表示失败,其他值表示返回的用户登录ID值  Returned user ID. 1 means failure, any other value is a user ID.
* @note 
*/
#define NETDEV_LoginCloud "NETDEV_LoginCloud"

/**
* 云端设备登录 Cloud device login
* @param [IN][Long]  lUserID             云端账户登录ID    Cloud account login ID 
* @param [IN][Json]  jCloudInfo           云端设备登录信息  Cloud device login info 
* @return -1表示失败,返回Json字符串表示成功
* @note 1、jCloudInfo格式{
*                         "szDeviceName":[String],            设备名称
*                         "szDevicePassword":[String],        设备登录密码 (可选)
*                         "dwT2UTimeout":[Long]               P2P超时时间, 默认为15s
*                         }
*       2、返回成功时Json字符串格式{
*                                 "UserID":[int],             用户登陆ID
*                                 "dwDevType":[int],          设备类型,参见枚举#NETDEV_DEVICETYPE_E
* *                               "wAlarmInPortNum":[int],    报警输入个数
*                                 "wAlarmOutPortNum":[int],   报警输出个数
*                                 "dwChannelNum":[int]        通道个数
*                                   }
*/
#define NETDEV_LoginCloudDev "NETDEV_LoginCloudDev"
/**
* 获取云端设备信息 
* @param [IN][Long]  lUserID             云端账户登录ID    Cloud account login ID 
* @return -1表示失败,返回设备信息字符串表示成功
* @note 1、返回失败说明查询结束。
*       2、返回设备信息字符串中的User name后的字段作为NETDEV_LoginCloudDev中jCloudInfo字符串中szDeviceName的输入值即可登录设备。
*/

#define NETDEV_GetCloudDevList "NETDEV_GetCloudDevList"

/**
* 启动实时预览  Start live preview
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @param [IN][Long]  lUserID                 用户登录ID User login ID
* @param [IN][Json]  jPreviewInfo            预览参数,参考枚举：NETDEV_PROTOCAL_E,NETDEV_LIVE_STREAM_INDEX_E. Preview parameter, see enumeration: NETDEV_PROTOCAL_E, NETDEV_LIVE_STREAM_INDEX_E.
* @return 返回0表示成功，-1表示失败
* @note  jPreviewInfo格式{
*                         "dwChannelID":[Long],      通道ID
*                         "dwStreamType":[Long],     码流类型
*                         "dwLinkMode":[Long],       传输协议
*                         "dwFluency":[Long]         图像播放流畅性优先类型,参见枚举#NETDEV_PICTURE_FLUENCY_E
*/
#define NETDEV_RealPlay "NETDEV_RealPlay"

/**
* 停止实时预览  Stop live preview
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note 对应关闭NETDEV_RealPlay开启的实况 Stop the live view started by NETDEV_RealPlay
*/
#define NETDEV_StopRealPlay "NETDEV_StopRealPlay"

/**
* 本地录像  Local recording
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @param [IN][String]  strSaveFileName       下载后保存到PC机的文件路径,需为绝对路径（包括文件名）
* @param [IN][Long]  lFormat                 文件格式 Format of saved file, see #NETDEV_MEDIA_FILE_FORMAT_E 
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note  需调用NETDEV_StopSavaRealData才可以完成录像的保存。
*/
#define NETDEV_SaveRealData "NETDEV_SaveRealData"

/**
* 停止本地录像 Stop local recording
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_StopSavaRealData "NETDEV_StopSavaRealData"

/**
* 实况抓拍  Live view snapshot
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @param [IN][String]  strFileName           保存图像的文件路径（包括文件名） File path to save images (including file name)
* @param [IN][Long]  lFormat                 保存图像格式,参见#NETDEV_PICTURE_FORMAT_E   Image saving format, see #NETDEV_PICTURE_FORMAT_E
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note 文件名中可以不携带抓拍格式的后缀名 File format suffix is not required in the file name
*/
#define NETDEV_CapturePicture "NETDEV_CapturePicture"

/**
* 开启声音  Enable sound
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_OpenSound "NETDEV_OpenSound"

/**
* 关闭声音 Mute
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_CloseSound "NETDEV_CloseSound"

/**
* 调节扬声器音量 Control sound volume
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @param [IN][Long]  lVolume                 音量 Volume
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_SetSoundVolume "NETDEV_SetSoundVolume"

/**
* 获取扬声器音量 Get sound volumn
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @return -1表示失败,其他为当前音量大小
* @note
*/
#define NETDEV_GetSoundVolume "NETDEV_GetSoundVolume"

/**
* 云台预置位操作(需先启动预览)  PTZ preset operation (preview required)
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @param [IN][Long]  lPTZPresetCmd           操作云台预置位命令,参考枚举NETDEV_PTZ_PRESETCMD_E  PTZ preset operation commands, see NETDEV_PTZ_PRESETCMD_E
* @param [IN][String]  strPresetName         预置位的名称 Preset name
* @param [IN][Long]  lPresetID               预置位的序号（从1开始）,最多支持255个预置位 Preset number (starting from 1). Up to 255 presets are supported.
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_PTZPreset "NETDEV_PTZPreset"

/**
* 云台控制操作(需先启动实况预览)  PTZ control operation (preview required)
* @param [IN][Long]  lResourceId             窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @param [IN][Long]  lPTZCommand             云台控制命令,参见#NETDEV_PTZ_E PTZ control commands, see #NETDEV_PTZ_E
* @param [IN][Long]  lSpeed              云台控制的速度,用户按不同解码器的速度控制值设置.取值范围[1,9] Speed of PTZ control, which is configured according to the speed control value of different decoders. Value ranges from 1 to 9.
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_PTZControl "NETDEV_PTZControl"

/**
* 根据文件类型.时间查找设备录像文件  Query recording files according to file type and time
* @param [IN][Long]  lUserID        用户登录ID User login ID
* @param [IN][Json]  jFindCond    录像查询条件 Search condition
* @return 录像查询业务号,返回-1表示失败,其他值作为NETDEV_FindClose等函数的参数.Recording search service number. -1 means failure. Other values are used as the handle parameters of functions like NETDEV_FindClose.
* @note 1、此函数返回值为录像查询业务号,若返回值为非-1,则查询录像文件成功：
*           一.将上述业务号作为NETDEV_FindNextFile函数的入参lpFindHandle,多次调用NETDEV_FindNextFile函数,以逐个获取详细录像文件信息.
*           二.查询结束后,必须以上述业务号作为NETDEV_FindClose函数的入参lpFindHandle,调用NETDEV_FindClose函数,以释放资源,关闭查找.
*       2、jFindCond格式{
*                        "szFileName":[String],      录像文件名
*                        "dwChannelID":[Long],       通道号
*                        "dwFileType":[Long],        录像存储类型,参见枚举#NETDEV_PLAN_STORE_TYPE_E
*                        "tBeginTime":[Long],        起始时间
*                        "tEndTime":[Long],          结束时间
*                       }
*/
#define NETDEV_FindFile "NETDEV_FindFile"

/**
* 逐个获取查找到的文件信息  Obtain the information of found files one by one.
* @param [IN][Long]  lFindHandle     文件查找ID File search handle
* @return -1表示失败,返回Json字符串表示成功
* @note 1、返回成功时Json字符串格式{
                                    "szFileName":[String],      录像文件名
                                    "tBeginTime":[Long],        起始时间
                                    "tEndTime":[Long],          结束时间
                                    "byFileType":[Bool]         录像存储类型
                                    }
*       2、返回失败说明查询结束 A returned failure indicates the end of search.
*/
#define NETDEV_FindNextFile "NETDEV_FindNextFile"

/**
* 关闭文件查找,释放资源  Close file search and release resources
* @param [IN][Long]  lFindHandle     文件查找ID File search handle
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_FindClose "NETDEV_FindClose"

/**
* 按时间下载录像文件 Download recordings by time
* @param [IN][Long]   lUserID                用户登录ID User login ID
* @param [IN][Json]   jPlayBackCond          下载录像Json字符串
* @param [IN][String] strSaveFileName        下载后保存到PC机的文件路径,需为绝对路径（包括文件名） Downloaded file save path on PC, must be an absolute path (including file name)
* @param [IN][Long]   lFormat                录像文件保存格式 Recording file saving format
* @return 下载ID, 返回-1表示失败,其他值作为NETDEV_StopGetFile等函数的参数. Download handle. 0 means failure. Other values are used as the handle parameters of functions like NETDEV_StopGetFile.
* @note  1、jPlayBackCond格式{
*                           "dwChannelID":[Long],       通道
*                           "tBeginTime":[Long],        开始时间
*                           "tEndTime":[Long],          结束时间
*                           "dwLinkMode":[Long],        传输协议
*                           "dwFileType":[Long],        录像存储类型
*                           "dwDownloadSpeed":[Long]    下载速度
*                          }
*       2、需调用NETDEV_StopDownload才可以完成录像的保存。
*/
#define NETDEV_GetFileByTime "NETDEV_GetFileByTime"

/**
* 停止下载录像文件 Stop downloading recording files
* @param [IN]  lDownloadHandle  下载ID Playback handle
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_StopDownload "NETDEV_StopDownload"

/**
* 按时间回放录像文件  Play back recording by time. 
* @param [IN][Long]  lResourceId            窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @param [IN][Long]  lUserID                用户登录ID User login ID
* @param [IN][Json]  jPlayBackCond          回放录像Json字符串,参考 LPNETDEV_PLAYBACKCOND_S Pointer to playback-by-time structure, see LPNETDEV_PLAYBACKCOND_S
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note  jPlayBackCond格式{
*                           "dwChannelID":[Long],       通道
*                           "tBeginTime":[Long],        开始时间
*                           "tEndTime":[Long],          结束时间
*                           "dwLinkMode":[Long],        传输协议
*                           "dwFileType":[Long],        录像存储类型
*                           "dwDownloadSpeed":[Long]    下载速度
*                          }
*/
#define NETDEV_PlayBack "NETDEV_PlayBack"

/**
* 停止回放业务  Stop playback service
* @param [IN][Long]  lResourceId            窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @return TRUE表示成功,其他表示失败 TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_StopPlayback "NETDEV_StopPlayback"

/**
* 控制录像回放的状态  Control recording playback status.
* @param [IN][Long]  lResourceId            窗格资源ID，使用NetSDKGetFocusWnd函数获取，可参考Demo
* @param [IN][Long]  lControlCode    控制录像回放状态命令 参考枚举：NETDEV_VOD_PLAY_CTRL_E Command for controlling recording playback status, see NETDEV_VOD_PLAY_CTRL_E
* @param [IN][Json]  jBuffer         输入参数Json字符串, 播放速度参考枚举：NETDEV_VOD_PLAY_STATUS_E,播放时间参数类型为：INT64 Pointer to input/output parameters. For playing speed, see NETDEV_VOD_PLAY_STATUS_E. The type of playing time: INT64.
* @return -1表示失败,返回Json字符串表示成功
* @note 1、jBuffer格式{
                       "pulTime":[Long],             播放进度，lControlCode为NETDEV_PLAY_CTRL_SETPLAYTIME（即设置播放进度时）有效
                       "pulSpeed":[Long]             播放速度，lControlCode为NETDEV_PLAY_CTRL_SETPLAYSPEED（即设置播放速度时）有效
                       }
        2、返回成功时Json字符串格式{
                        "PlaySpeed":[Long],          播放速度，lControlCode为NETDEV_PLAY_CTRL_GETPLAYSPEED（即获取播放速度时）有效
                        "PlayTime":[Long]            播放进度，lControlCode为NETDEV_PLAY_CTRL_GETPLAYTIME（即获取播放进度时）有效
        }
        3、开始.暂停.恢复播放时,jBuffer字符串中各项均置为0，设置速度时，jBuffer字符串中时间字段可置为0，反之亦然。
*/
#define NETDEV_PlayBackControl "NETDEV_PlayBackControl"
