"use strict";(self["webpackChunks014"]=self["webpackChunks014"]||[]).push([[7473,1315,1085],{1315:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var i=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("添加课时收藏")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"课时",prop:"itemId"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择课时..."},model:{value:e.form.itemId,callback:function(t){e.$set(e.form,"itemId",t)},expression:"form.itemId"}},e._l(e.trainItemList,(function(s,i){return t("Option",{key:i,attrs:{value:s.id}},[e._v(e._s(s.itemName)+" - "+e._s(s.title))])})),1)],1),t("FormItem",{attrs:{label:"收藏人",prop:"userId"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择收藏人..."},model:{value:e.form.userId,callback:function(t){e.$set(e.form,"userId",t)},expression:"form.userId"}},e._l(e.userList,(function(s,i){return t("Option",{key:i,attrs:{value:s.id}},[e._v(e._s(s.nickname))])})),1)],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},a=[],l=s(2914);const r={name:"add",components:{},data(){return{submitLoading:!1,form:{itemId:"",itemName:"",userId:"",userName:"",time:""},formValidate:{},trainItemList:[],userList:[]}},methods:{init(){this.getTrainItemListFx(),this.getUserListFx()},getTrainItemListFx(){var e=this;e.trainItemList=[],(0,l.JO)().then((t=>{t.success&&(e.trainItemList=t.result)}))},getUserListFx(){var e=this;e.userList=[],(0,l.lE)().then((t=>{t.success&&(e.userList=t.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.qK)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=r;var n=s(1001),c=(0,n.Z)(o,i,a,!1,null,null,null);const m=c.exports},1085:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var i=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑课时收藏")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"课时",prop:"itemId"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择课时..."},model:{value:e.form.itemId,callback:function(t){e.$set(e.form,"itemId",t)},expression:"form.itemId"}},e._l(e.trainItemList,(function(s,i){return t("Option",{key:i,attrs:{value:s.id}},[e._v(e._s(s.itemName)+" - "+e._s(s.title))])})),1)],1),t("FormItem",{attrs:{label:"收藏人",prop:"userId"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择收藏人..."},model:{value:e.form.userId,callback:function(t){e.$set(e.form,"userId",t)},expression:"form.userId"}},e._l(e.userList,(function(s,i){return t("Option",{key:i,attrs:{value:s.id}},[e._v(e._s(s.nickname))])})),1)],1),t("FormItem",{attrs:{label:"收藏时间",prop:"time"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},a=[],l=s(2914);const r={name:"edit",components:{},props:{data:Object},data(){return{submitLoading:!1,form:{itemId:"",itemName:"",userId:"",userName:"",time:""},formValidate:{},trainItemList:[],userList:[]}},methods:{init(){this.getTrainItemListFx(),this.getUserListFx(),this.handleReset(),this.form=this.data},getTrainItemListFx(){var e=this;e.trainItemList=[],(0,l.JO)().then((t=>{t.success&&(e.trainItemList=t.result)}))},getUserListFx(){var e=this;e.userList=[],(0,l.lE)().then((t=>{t.success&&(e.userList=t.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.aV)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=r;var n=s(1001),c=(0,n.Z)(o,i,a,!1,null,null,null);const m=c.exports},7473:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},["add"==e.currView?t("add",{on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),"edit"==e.currView?t("edit",{attrs:{data:e.formData},on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),t("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==e.currView,expression:"currView=='index'"}]},[t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{attrs:{label:"",prop:"itemName"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"课时名称",clearable:""},model:{value:e.searchForm.itemName,callback:function(t){e.$set(e.searchForm,"itemName",t)},expression:"searchForm.itemName"}})],1),t("Form-item",{attrs:{label:"",prop:"userName"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"收藏人",clearable:""},model:{value:e.searchForm.userName,callback:function(t){e.$set(e.searchForm,"userName",t)},expression:"searchForm.userName"}})],1),t("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"info",size:"small",icon:"md-add",ghost:"",disabled:!e.$route.meta.permTypes.includes("add")},on:{click:e.add}},[e._v("添加")]),t("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:"",disabled:!e.$route.meta.permTypes.includes("delete")},on:{click:e.delAll}},[e._v("删除")]),t("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:e.excelData}},[e._v("导出")])],1),t("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(t){e.showFilterPanelFlag=!e.showFilterPanelFlag}}},[e._v(" 列筛选")]),t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(t){e.modal1=!0}}},[e._v(" 使用教程")]),t("Modal",{attrs:{title:"使用教程"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[t("p",[e._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),t("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[t("transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[t("CheckboxGroup",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.mycolumns,(function(e){return t("div",{key:e.key},[t("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:e.title}})],1)})),0)],1)])],1),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]}),t("Row",[t("Table",{ref:"table",attrs:{loading:e.loading,height:e.tableHeight,border:"",stripe:"",size:"small",columns:e.columns,data:e.data,sortable:"custom","row-class-name":e.rowClassNmae},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect,"on-row-click":e.rowClick}})],1),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)},a=[],l=s(2914),r=s(1315),o=s(1085);const n={name:"single-window",components:{add:r["default"],edit:o["default"]},data(){return{tableHeight:0,selected:["选择","序号","课时名称","收藏人","收藏时间","创建时间","创建者","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(e,t)=>e("span",t.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"课时ID",key:"itemId",minWidth:120,tooltip:!0,sortable:!1},{title:"课时名称",key:"itemName",minWidth:200,tooltip:!0,sortable:!1},{title:"收藏人ID",key:"userId",minWidth:120,tooltip:!0,sortable:!1},{title:"收藏人",key:"userName",minWidth:120,tooltip:!0,sortable:!1},{title:"收藏时间",key:"time",minWidth:200,tooltip:!0,sortable:!1},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:230,fixed:"right",render:(e,t)=>{var s=this;return e("div",[e("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",ghost:!0,disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("edit"))},style:{marginRight:"5px"},on:{click:()=>{this.edit(t.row)}}},"编辑"),e("Button",{props:{type:"error",size:"small",icon:"md-trash",ghost:!0,disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("edit"))},on:{click:()=>{this.remove(t.row)}}},"取消收藏")])}}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1}},methods:{init(){this.getDataList()},submited(){this.currView="index",this.getDataList()},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},rowClick(e,t){this.selectRow=e},rowClassNmae(e,t){return e.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(e){this.selectList=e,this.selectCount=e.length},getDataList(){this.loading=!0,(0,l.No)(this.searchForm).then((e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)}))},add(){this.currView="add"},edit(e){for(let i in e)null==e[i]&&(e[i]="");let t=JSON.stringify(e),s=JSON.parse(t);this.formData=s,this.currView="edit"},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 ?",loading:!0,onOk:()=>{(0,l.JL)({ids:e.id}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),(0,l.JL)({ids:e}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let e=[];for(var t=0;t<this.selected.length;t++)for(var s=this.selected[t],i=0;i<this.columns.length;i++)this.columns[i].title==s&&e.push(this.columns[i]);this.columns=e},watch:{selected:function(e){let t=[];for(var s=0;s<this.mycolumns.length;s++){var i=this.mycolumns[s];(void 0==i.title||e.includes(i.title))&&t.push(i)}this.columns=t}}},c=n;var m=s(1001),d=(0,m.Z)(c,i,a,!1,null,null,null);const h=d.exports},2914:(e,t,s)=>{s.d(t,{JL:()=>o,JO:()=>n,No:()=>a,aV:()=>r,lE:()=>c,qK:()=>l});var i=s(7184);const a=e=>(0,i.A_)("/trainCollection/getByPage",e),l=e=>(0,i.j0)("/trainCollection/insert",e),r=e=>(0,i.j0)("/trainCollection/update",e),o=e=>(0,i.j0)("/trainCollection/delByIds",e),n=e=>(0,i.A_)("/trainItem/getAll2",e),c=e=>(0,i.A_)("/superUser/getAll",e)}}]);