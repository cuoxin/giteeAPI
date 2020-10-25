//index.js
//获取应用实例
const app = getApp();

const url_head_list = "/pages/show/list/list?";
const url_head_artical = "/pages/show/artical/artical?";

Page({

  data: {

    API_list: [{
      "name": "issues",
      "chinese_name": "问题",
      "url": url_head_list + "name=issues&chinese_name=issues"
    },{
      "name": "branches",
      "chinese_name": "分支",
      "url": url_head_list + "name=branches&chinese_name=分支"
    },{
      "name": "commits",
      "chinese_name": "提交",
      "url": url_head_list + "name=commits&chinese_name=提交"
    },{
      "name": "readme",
      "chinese_name": "README",
      "url": url_head_list + "name=readme&chinese_name=README"
    },{
      "name": "comments",
      "chinese_name": "commit评论",
      "url": url_head_list + "name=comments&chinese_name=commit评论"
    },{
      "name": "contributors",
      "chinese_name": "贡献者",
      "url": url_head_list + "name=contributors&chinese_name=贡献者"
    },{
      "name": "collaborators",
      "chinese_name": "成员",
      "url": url_head_list + "name=collaborators&chinese_name=成员"
    },{
      "name": "releases",
      "chinese_name": "releases",
      "url": url_head_list + "name=releases&chinese_name=releases"
    }]

  }
})
