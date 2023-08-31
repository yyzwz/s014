"use strict";(self["webpackChunks014"]=self["webpackChunks014"]||[]).push([[7168,2091],{7168:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var i=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("添加课时")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("FormItem",{attrs:{label:"所属课程",prop:"itemId"}},[e("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择所属课程"},model:{value:t.form.itemId,callback:function(e){t.$set(t.form,"itemId",e)},expression:"form.itemId"}},t._l(t.trainList,(function(a,i){return e("Option",{key:i,attrs:{value:a.id}},[t._v(t._s(a.title))])})),1)],1),e("FormItem",{attrs:{label:"课时名称",prop:"title"}},[e("Input",{staticStyle:{width:"570px"},attrs:{"show-word-limit":"",maxlength:"240",placeholder:"请输入课时名称...",clearable:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormItem",{attrs:{label:"知识点",prop:"knowledge"}},[e("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:4,"show-word-limit":"",maxlength:"240",placeholder:"请输入知识点...",clearable:""},model:{value:t.form.knowledge,callback:function(e){t.$set(t.form,"knowledge",e)},expression:"form.knowledge"}})],1),e("FormItem",{attrs:{label:"课时简介",prop:"content"}},[e("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:4,"show-word-limit":"",maxlength:"240",placeholder:"请输入课时简介...",clearable:""},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e("FormItem",{attrs:{label:"视频",prop:"video"}},[e("upload-pic-input",{staticStyle:{width:"570px"},attrs:{placeholder:"请上传课程文件...",accept:".mp4"},model:{value:t.form.video,callback:function(e){t.$set(t.form,"video",e)},expression:"form.video"}})],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},l=[],s=a(8852),r=a(2091);const n={name:"add",components:{uploadPicInput:r["default"]},data(){return{submitLoading:!1,form:{itemId:"",itemName:"",title:"",knowledge:"",content:"",video:""},formValidate:{},trainList:[]}},methods:{init(){this.getTrainListFx()},getTrainListFx(){var t=this;t.trainList=[],(0,s.qn)().then((e=>{e.success&&(t.trainList=e.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,s.Mq)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=n;var c=a(1001),d=(0,c.Z)(o,i,l,!1,null,null,null);const u=d.exports},2091:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{display:"flex"}},[e("Input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:t.placeholder,size:t.size,disabled:t.disabled,readonly:t.readonly,maxlength:t.maxlength},on:{"on-change":t.handleChange},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}}),e("Upload",{attrs:{action:t.uploadFileUrl,headers:t.accessToken,"on-success":t.handleSuccess,"on-error":t.handleError,format:t.format,accept:t.accept,"max-size":1024*t.maxSize,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.beforeUpload,"show-upload-list":!1}},[e("Button",{attrs:{type:"warning",ghost:"",loading:t.loading,size:t.size,disabled:t.disabled,icon:t.icon}},[t._v(t._s(t.buttonTitle))])],1)],1)])},l=[],s=(a(1949),a(7877));const r={name:"uploadPicInput",props:{value:String,size:String,placeholder:{type:String,default:"可输入文件链接"},buttonTitle:{type:String,default:"上传文件"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:Number,icon:{type:String,default:"ios-cloud-upload-outline"},maxSize:{type:Number,default:100},accept:{type:String,default:".pdf"}},computed:{format(){if(this.accept){let t=[];return this.accept.split(",").forEach((e=>{t.push(e.replace(".","").replace(" ",""))})),t}return[]}},data(){return{accessToken:{},currentValue:this.value,loading:!1,uploadFileUrl:s.cT}},methods:{init(){this.accessToken={accessToken:this.getStore("accessToken")}},handleFormatError(t){this.loading=!1,this.$Notice.warning({title:"不支持的文件格式",desc:"所选文件‘ "+t.name+" ’格式不正确, 请选择 "+this.accept+" 格式文件"})},handleMaxSize(t){this.loading=!1,this.$Notice.warning({title:"文件大小过大",desc:"所选文件‘ "+t.name+" ’大小过大, 不得超过 "+this.maxSize+"M."})},beforeUpload(){return this.loading=!0,!0},handleSuccess(t,e){this.loading=!1,t.success?(this.currentValue=t.result,this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)):this.$Message.error(t.message)},handleError(t,e,a){this.loading=!1,this.$Message.error(t.toString())},handleChange(t){this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)},setCurrentValue(t){t!==this.currentValue&&(this.currentValue=t,this.$emit("on-change",this.currentValue))}},watch:{value(t){this.setCurrentValue(t)}},mounted(){this.init()}},n=r;var o=a(1001),c=(0,o.Z)(n,i,l,!1,null,null,null);const d=c.exports},8852:(t,e,a)=>{a.d(e,{Hc:()=>c,Ir:()=>u,JO:()=>l,Mq:()=>s,cO:()=>r,lS:()=>d,qn:()=>o,sA:()=>n});var i=a(7184);const l=t=>(0,i.A_)("/trainItem/getByPage",t),s=t=>(0,i.j0)("/trainItem/insert",t),r=t=>(0,i.j0)("/trainItem/update",t),n=t=>(0,i.j0)("/trainItem/delByIds",t),o=t=>(0,i.A_)("/train/getAll",t),c=t=>(0,i.A_)("/trainCollection/addOne",t),d=t=>(0,i.A_)("/trainCollection/cancelOne",t),u=t=>(0,i.A_)("/trainComment/addOne",t)}}]);