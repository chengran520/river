/**
 * Created by richway on 2015/6/21.
 */

define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    'dojo/_base/html',
    "dojo/dom-construct",
    'dojo/on',
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "base/_BaseWidget",
    "dojo/text!./zTreeWidget.html",
    "dojo/text!../css/zTreeStyle/zTreeStyle.css",

    "dojo/topic",
    "dojo/Deferred"


], function (declare,
             lang,
             html,
             domConstruct,
             on,
             _TemplatedMixin,
             _WidgetsInTemplateMixin,
             _Widget,
             template,
             css,
             topic,
             Deferred

) {
    return declare("vendor.zTree_v3.widget.zTreeWidget", [_Widget, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        constructor: function (args) {
            var methodName = "constructor";
            declare.safeMixin(this, args);
            //设置样式
            this.setCss(css);

            this.curMenu = null;
            this.zTree_Menu = null;
            this.setting = {
                edit: {
                    enable: true,
                    showRemoveBtn: false,
                    showRenameBtn: false
                },
                view: {
                    showLine: false,
                    //showIcon: false,
                    //nameIsHTML:true,
                        selectedMulti: false,
                    dblClickExpand: false
                    ,
                    addDiyDom: lang.hitch(this,this.addDiyDom_)
                },
                data: {
                    keep: {
                        parent:true,
                        leaf:true
                    },
                    simpleData: {
                        enable: true,
                        //重新设置下节点的东西
                        idKey: "page_id",
                        pIdKey: "parent_page_id"
                    }


                },
                callback: {
                    beforeClick: lang.hitch(this,this.beforeClick_),
                    beforeRemove:lang.hitch(this,this.beforeRemove_),
                    beforeRename: lang.hitch(this,this.beforeRename_),
                    onRemove:  lang.hitch(this,this.onRemove_),
                    beforeDrag:  lang.hitch(this,this.beforeDrag_),
                    beforeDrop:  lang.hitch(this,this.beforeDrop_)
                }
            };

            this.zNodes = [
                //{id: 11, pId: 0, name: "菜单列表", open: true,drag:false, isHidden:true},
                {page_id: 111, parent_page_id: 11, name: "综合监视",open: true},
                {page_id: 211, parent_page_id: 11, name: "业务列表"},
                {page_id: 2111, parent_page_id: 211, name: "水情列表"},// icon:APP_ROOT+"base/vendor/zTree_v3/css/zTreeStyle/img/diy/2.png"},
                {page_id: 2112, parent_page_id: 211, name: "雨情列表"},
                {page_id: 311, parent_page_id: 11, name: "图形报表"},
                {page_id: 3111, parent_page_id: 311, name: "收件箱4"},
                {page_id: 3112, parent_page_id: 311, name: "垃圾邮件"},
                {page_id: 3113, parent_page_id: 311, name: "木山站"},
                {page_id: 411, parent_page_id: 11, name: "照片"}
            ];


            topic.subscribe("vendor/tree/nodeNameEdit",lang.hitch(this,this.edit));
        },
        beforeDrag_:function (treeId, treeNodes) {
            for (var i=0,l=treeNodes.length; i<l; i++) {
                if (treeNodes[i].drag === false) {
                    return false;
                }
            }
            return true;
        },
        beforeDrop_:function (treeId, treeNodes, targetNode, moveType) {
            return targetNode ? targetNode.drop !== false : true;
        },

        addDiyDom_: function (treeId, treeNode) {
            var spaceWidth = 5;
            var switchObj = $("#" + treeNode.tId + "_switch"),
                icoObj = $("#" + treeNode.tId + "_ico");
            switchObj.remove();
            icoObj.before(switchObj);

            if (treeNode.level > 1) {
                var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level) + "px'></span>";
                switchObj.before(spaceStr);
            }
            //
        },
        beforeRemove_:function(treeId, treeNode){
            //父页面同时更新页面
            var isDel = confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
            if(isDel)this.getParent().emptyContentDiv();
            return isDel;
        },
        onRemove_:function(e, treeId, treeNode){
           console.log(treeNode.name);
        },
        beforeRename_:function(treeId, treeNode, newName){
            if (newName.length == 0) {
                alert("节点名称不能为空.");
                var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                setTimeout(function(){zTree.editName(treeNode)}, 10);
                return false;
            }
            return true;
        },
        beforeClick_: function (treeId, treeNode) {
            var zTree = $.fn.zTree.getZTreeObj("treeDemo");
            zTree.expandNode(treeNode);

            if(treeNode.isParent){//判断是不是文件夹，直接返回
                return true;
            }
            if(this.currentId == treeNode.page_id){//判断是不是点击同一节点
                return true;
            }

            //判断下是否有页面在编辑状态
            var parent = this.getParent();
            if(parent&&parent.isEdit&&!treeNode.isParent){
                var flag = confirm("有页面正在编辑，要放弃吗？");
                if(flag){//不能是分组的，要是叶子
                    //确认后采取更改选中的节点
                    this.currentId = treeNode.page_id;
                    this.getParent().loadPage(treeNode.name+"|"+treeNode.page_id,treeNode.name);
                }
                return flag;
            }else{
                this.currentId = treeNode.page_id;
                this.getParent().loadPage(treeNode.name+"|"+treeNode.page_id,treeNode.name);
                return true;
            }

        },

        postCreate: function () {
            this.inherited(arguments);

            
        },
        resize: function () {
        },
        currentId:"",
        startup: function () {
            this.inherited(arguments);

            var treeObj =$("#treeDemo");

            $.fn.zTree.init(treeObj, this.setting, this.zNodes);
            var zTree = $.fn.zTree.getZTreeObj("treeDemo");
			var curMenu = zTree.getNodes()[0];//.children[0];
            zTree.selectNode(curMenu);
            //设置当前选中的节点的id
            this.currentId = curMenu.page_id;

            treeObj.hover(lang.hitch(this,function () {
                if (!treeObj.hasClass("showIcon")) {
                    treeObj.addClass("showIcon");
                }
            }, lang.hitch(this,function() {
                treeObj.removeClass("showIcon");
            })));

        },
        //删除选中节点
        removeSelectItem:function() {
            var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
                nodes = zTree.getSelectedNodes(),
                treeNode = nodes[0];
            if (nodes.length == 0) {
                alert("请先选择一个节点");
                return;
            }
            //var callbackFlag = $("#callbackTrigger").attr("checked");
            zTree.removeNode(treeNode, true);


        },
        edit:function(text) {
            var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
                nodes = zTree.getSelectedNodes(),
                treeNode = nodes[0];
            if (nodes.length == 0) {
                alert("请先选择一个节点");
                return;
            }
            treeNode.name = text;
            zTree.updateNode(treeNode);
            //zTree.refresh();
            //
            //zTree.selectNode(treeNode);
            //
            //topic.publish("base/admin/application/AppPageFrame/nameFocus");

            //zTree.editName(treeNode);
        },
        newCount: 1,
        addLeaf:function (e) {
            var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
                isParent = e.isParent,
                nodes = zTree.getSelectedNodes(),
                treeNode = nodes[0];
            if (treeNode) {
                treeNode = zTree.addNodes(treeNode, {page_id:(100 + this.newCount), parent_page_id:treeNode.id, isParent:isParent, name:"新菜单页" + (this.newCount++)});
            } else {
                treeNode = zTree.addNodes(null, {page_id:(100 + this.newCount), parent_page_id:0, isParent:isParent, name:"新菜单" + (this.newCount++)});
            }
            if (treeNode) {
                this.currentId = treeNode[0].page_id;//设置成当前的节点
                //设置成编辑状态，现在不用了
                if(isParent) {
                    zTree.editName(treeNode[0]);
                    return "";
                }else{
                    zTree.selectNode(treeNode[0]);
                    return treeNode[0].name;
                }



            } else {
                alert("叶子节点被锁定，无法增加子节点");

                return "";
            }


        }


    });
});