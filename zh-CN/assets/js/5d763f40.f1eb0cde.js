"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[97928],{15680:(e,n,a)=>{a.d(n,{xA:()=>i,yg:()=>m});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),c=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},i=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(a),y=t,m=u["".concat(p,".").concat(y)]||u[y]||g[y]||l;return a?r.createElement(m,o(o({ref:n},i),{},{components:a})):r.createElement(m,o({ref:n},i))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:t,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},18606:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(58168),t=(a(96540),a(15680));const l={sidebar_position:4},o="Spark \u5f15\u64ce\u5feb\u901f\u5f00\u59cb",s={unversionedId:"start-v2/locally/quick-start-spark",id:"start-v2/locally/quick-start-spark",title:"Spark \u5f15\u64ce\u5feb\u901f\u5f00\u59cb",description:"\u6b65\u9aa4 1: \u90e8\u7f72SeaTunnel\u53ca\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/start-v2/locally/quick-start-spark.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/quick-start-spark",permalink:"/zh-CN/docs/start-v2/locally/quick-start-spark",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/start-v2/locally/quick-start-spark.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Flink \u5f15\u64ce\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/start-v2/locally/quick-start-flink"},next:{title:"\u4f7f\u7528Docker\u8fdb\u884c\u90e8\u7f72",permalink:"/zh-CN/docs/start-v2/docker/"}},p={},c=[{value:"\u6b65\u9aa4 1: \u90e8\u7f72SeaTunnel\u53ca\u8fde\u63a5\u5668",id:"\u6b65\u9aa4-1-\u90e8\u7f72seatunnel\u53ca\u8fde\u63a5\u5668",level:2},{value:"\u6b65\u9aa4 2: \u90e8\u7f72\u5e76\u914d\u7f6eSpark",id:"\u6b65\u9aa4-2-\u90e8\u7f72\u5e76\u914d\u7f6espark",level:2},{value:"\u6b65\u9aa4 3: \u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a",id:"\u6b65\u9aa4-3-\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a",level:2},{value:"\u6b65\u9aa4 4: \u8fd0\u884cSeaTunnel\u5e94\u7528\u7a0b\u5e8f",id:"\u6b65\u9aa4-4-\u8fd0\u884cseatunnel\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"\u6b64\u5916",id:"\u6b64\u5916",level:2}],i={toc:c},u="wrapper";function g(e){let{components:n,...a}=e;return(0,t.yg)(u,(0,r.A)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"spark-\u5f15\u64ce\u5feb\u901f\u5f00\u59cb"},"Spark \u5f15\u64ce\u5feb\u901f\u5f00\u59cb"),(0,t.yg)("h2",{id:"\u6b65\u9aa4-1-\u90e8\u7f72seatunnel\u53ca\u8fde\u63a5\u5668"},"\u6b65\u9aa4 1: \u90e8\u7f72SeaTunnel\u53ca\u8fde\u63a5\u5668"),(0,t.yg)("p",null,"\u5728\u5f00\u59cb\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u6309\u7167",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"\u90e8\u7f72"),"\u4e2d\u7684\u63cf\u8ff0\u4e0b\u8f7d\u5e76\u90e8\u7f72\u4e86SeaTunnel\u3002"),(0,t.yg)("h2",{id:"\u6b65\u9aa4-2-\u90e8\u7f72\u5e76\u914d\u7f6espark"},"\u6b65\u9aa4 2: \u90e8\u7f72\u5e76\u914d\u7f6eSpark"),(0,t.yg)("p",null,"\u8bf7\u5148",(0,t.yg)("a",{parentName:"p",href:"https://spark.apache.org/downloads.html"},"\u4e0b\u8f7dSpark"),"(",(0,t.yg)("strong",{parentName:"p"},"\u9700\u8981\u7248\u672c >= 2.4.0"),")\u3002 \u66f4\u591a\u4fe1\u606f\u60a8\u53ef\u4ee5\u67e5\u770b",(0,t.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/spark-standalone.html#installing-spark-standalone-to-a-cluster"},"\u5165\u95e8: Standalone\u6a21\u5f0f")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u914d\u7f6eSeaTunnel"),": \u4fee\u6539",(0,t.yg)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh"),"\u4e2d\u7684\u8bbe\u7f6e,\u5b83\u662f\u57fa\u4e8e\u4f60\u7684\u5f15\u64ce\u5728",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"\u90e8\u7f72"),"\u65f6\u7684\u5b89\u88c5\u8def\u5f84\u3002\n\u5c06",(0,t.yg)("inlineCode",{parentName:"p"},"SPARK_HOME"),"\u4fee\u6539\u4e3aSpark\u7684\u90e8\u7f72\u76ee\u5f55\u3002"),(0,t.yg)("h2",{id:"\u6b65\u9aa4-3-\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a"},"\u6b65\u9aa4 3: \u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a"),(0,t.yg)("p",null,"\u7f16\u8f91",(0,t.yg)("inlineCode",{parentName:"p"},"config/v2.streaming.conf.template"),"\uff0c\u5b83\u51b3\u5b9a\u4e86\u5f53SeaTunnel\u542f\u52a8\u540e\u6570\u636e\u8f93\u5165\u3001\u5904\u7406\u548c\u8f93\u51fa\u7684\u65b9\u5f0f\u53ca\u903b\u8f91\u3002\n\u4e0b\u9762\u662f\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\uff0c\u5b83\u4e0e\u4e0a\u9762\u63d0\u5230\u7684\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u76f8\u540c\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\ntransform {\n  FieldMapper {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    field_mapper = {\n      age = age\n      name = new_name\n    }\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "fake1"\n  }\n}\n\n')),(0,t.yg)("p",null,"\u5173\u4e8e\u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\u8bf7\u67e5\u770b",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/concept/config"},"\u914d\u7f6e\u7684\u57fa\u672c\u6982\u5ff5")),(0,t.yg)("h2",{id:"\u6b65\u9aa4-4-\u8fd0\u884cseatunnel\u5e94\u7528\u7a0b\u5e8f"},"\u6b65\u9aa4 4: \u8fd0\u884cSeaTunnel\u5e94\u7528\u7a0b\u5e8f"),(0,t.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,t.yg)("p",null,"Spark 2.4.x"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},'cd "apache-seatunnel-${version}"\n./bin/start-seatunnel-spark-2-connector-v2.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/v2.streaming.conf.template\n')),(0,t.yg)("p",null,"Spark 3.x.x"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-${version}"\n./bin/start-seatunnel-spark-3-connector-v2.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/v2.streaming.conf.template\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u67e5\u770b\u8f93\u51fa"),": \u5f53\u60a8\u8fd0\u884c\u8be5\u547d\u4ee4\u65f6\uff0c\u60a8\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u5b83\u7684\u8f93\u51fa\u3002\u60a8\u53ef\u4ee5\u8ba4\u4e3a\u8fd9\u662f\u547d\u4ee4\u8fd0\u884c\u6210\u529f\u6216\u5931\u8d25\u7684\u6807\u5fd7\u3002"),(0,t.yg)("p",null,"SeaTunnel\u63a7\u5236\u53f0\u5c06\u4f1a\u6253\u5370\u4e00\u4e9b\u5982\u4e0b\u65e5\u5fd7\u4fe1\u606f:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"fields : name, age\ntypes : STRING, INT\nrow=1 : elWaB, 1984352560\nrow=2 : uAtnp, 762961563\nrow=3 : TQEIB, 2042675010\nrow=4 : DcFjo, 593971283\nrow=5 : SenEb, 2099913608\nrow=6 : DHjkg, 1928005856\nrow=7 : eScCM, 526029657\nrow=8 : sgOeE, 600878991\nrow=9 : gwdvw, 1951126920\nrow=10 : nSiKE, 488708928\nrow=11 : xubpl, 1420202810\nrow=12 : rHZqb, 331185742\nrow=13 : rciGD, 1112878259\nrow=14 : qLhdI, 1457046294\nrow=15 : ZTkRx, 1240668386\nrow=16 : SGZCr, 94186144\n")),(0,t.yg)("h2",{id:"\u6b64\u5916"},"\u6b64\u5916"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5f00\u59cb\u7f16\u5199\u60a8\u81ea\u5df1\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u9009\u62e9\u60a8\u60f3\u8981\u4f7f\u7528\u7684",(0,t.yg)("a",{parentName:"li",href:"../../connector-v2/source"},"\u8fde\u63a5\u5668"),"\uff0c\u5e76\u6839\u636e\u8fde\u63a5\u5668\u7684\u6587\u6863\u914d\u7f6e\u53c2\u6570\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8eSeaTunnel\u8fd0\u884c\u5728Spark\u4e0a\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,t.yg)("a",{parentName:"li",href:"../../../en/other-engine/spark.md"},"\u57fa\u4e8eSpark\u7684SeaTunnel"),"\u3002"),(0,t.yg)("li",{parentName:"ul"},"SeaTunnel\u6709\u5185\u7f6e\u7684",(0,t.yg)("inlineCode",{parentName:"li"},"Zeta"),"\u5f15\u64ce\uff0c\u5b83\u662f\u4f5c\u4e3aSeaTunnel\u7684\u9ed8\u8ba4\u5f15\u64ce\u3002\u60a8\u53ef\u4ee5\u53c2\u8003",(0,t.yg)("a",{parentName:"li",href:"/zh-CN/docs/start-v2/locally/quick-start-seatunnel-engine"},"\u5feb\u901f\u5f00\u59cb"),"\u914d\u7f6e\u548c\u8fd0\u884c\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u3002")))}g.isMDXComponent=!0}}]);