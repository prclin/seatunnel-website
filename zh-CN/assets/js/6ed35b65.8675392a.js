"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[38145],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>m});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=l,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||o;return a?t.createElement(m,r(r({ref:n},u),{},{components:a})):t.createElement(m,r({ref:n},u))}));function m(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=g;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:l,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},92801:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=a(58168),l=(a(96540),a(15680));const o={sidebar_position:2},r="SeaTunnel Engine\u5feb\u901f\u5f00\u59cb",s={unversionedId:"start-v2/locally/quick-start-seatunnel-engine",id:"start-v2/locally/quick-start-seatunnel-engine",title:"SeaTunnel Engine\u5feb\u901f\u5f00\u59cb",description:"\u6b65\u9aa4 1: \u90e8\u7f72SeaTunnel\u53ca\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/start-v2/locally/quick-start-seatunnel-engine.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/quick-start-seatunnel-engine",permalink:"/zh-CN/docs/start-v2/locally/quick-start-seatunnel-engine",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/start-v2/locally/quick-start-seatunnel-engine.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"\u672c\u5730\u90e8\u7f72",permalink:"/zh-CN/docs/start-v2/locally/deployment"},next:{title:"Flink Engine\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/start-v2/locally/quick-start-flink"}},i={},c=[{value:"\u6b65\u9aa4 1: \u90e8\u7f72SeaTunnel\u53ca\u8fde\u63a5\u5668",id:"\u6b65\u9aa4-1-\u90e8\u7f72seatunnel\u53ca\u8fde\u63a5\u5668",level:2},{value:"\u6b65\u9aa4 2: \u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a",id:"\u6b65\u9aa4-2-\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a",level:2},{value:"\u6b65\u9aa4 3: \u8fd0\u884cSeaTunnel\u5e94\u7528\u7a0b\u5e8f",id:"\u6b65\u9aa4-3-\u8fd0\u884cseatunnel\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"\u6269\u5c55\u793a\u4f8b\uff1a\u4ece MySQL \u5230 Doris \u6279\u5904\u7406\u6a21\u5f0f",id:"\u6269\u5c55\u793a\u4f8b\u4ece-mysql-\u5230-doris-\u6279\u5904\u7406\u6a21\u5f0f",level:2},{value:"\u6b65\u9aa41\uff1a\u4e0b\u8f7d\u8fde\u63a5\u5668",id:"\u6b65\u9aa41\u4e0b\u8f7d\u8fde\u63a5\u5668",level:2},{value:"\u6b65\u9aa42\uff1a\u653e\u5165 MySQL \u9a71\u52a8",id:"\u6b65\u9aa42\u653e\u5165-mysql-\u9a71\u52a8",level:2},{value:"\u6b65\u9aa43\uff1a\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a",id:"\u6b65\u9aa43\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a",level:2},{value:"\u6b65\u9aa4 4: \u8fd0\u884cSeaTunnel\u5e94\u7528\u7a0b\u5e8f",id:"\u6b65\u9aa4-4-\u8fd0\u884cseatunnel\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"\u6b64\u5916",id:"\u6b64\u5916",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...a}=e;return(0,l.yg)(p,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"seatunnel-engine\u5feb\u901f\u5f00\u59cb"},"SeaTunnel Engine\u5feb\u901f\u5f00\u59cb"),(0,l.yg)("h2",{id:"\u6b65\u9aa4-1-\u90e8\u7f72seatunnel\u53ca\u8fde\u63a5\u5668"},"\u6b65\u9aa4 1: \u90e8\u7f72SeaTunnel\u53ca\u8fde\u63a5\u5668"),(0,l.yg)("p",null,"\u5728\u5f00\u59cb\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u6309\u7167",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"\u90e8\u7f72"),"\u4e2d\u7684\u63cf\u8ff0\u4e0b\u8f7d\u5e76\u90e8\u7f72\u4e86SeaTunnel\u3002"),(0,l.yg)("h2",{id:"\u6b65\u9aa4-2-\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a"},"\u6b65\u9aa4 2: \u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a"),(0,l.yg)("p",null,"\u7f16\u8f91",(0,l.yg)("inlineCode",{parentName:"p"},"config/v2.batch.config.template"),"\uff0c\u5b83\u51b3\u5b9a\u4e86\u5f53seatunnel\u542f\u52a8\u540e\u6570\u636e\u8f93\u5165\u3001\u5904\u7406\u548c\u8f93\u51fa\u7684\u65b9\u5f0f\u53ca\u903b\u8f91\u3002\n\u4e0b\u9762\u662f\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\uff0c\u5b83\u4e0e\u4e0a\u9762\u63d0\u5230\u7684\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u76f8\u540c\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\ntransform {\n  FieldMapper {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    field_mapper = {\n      age = age\n      name = new_name\n    }\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "fake1"\n  }\n}\n\n')),(0,l.yg)("p",null,"\u5173\u4e8e\u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\u8bf7\u67e5\u770b",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/concept/config"},"\u914d\u7f6e\u7684\u57fa\u672c\u6982\u5ff5")),(0,l.yg)("h2",{id:"\u6b65\u9aa4-3-\u8fd0\u884cseatunnel\u5e94\u7528\u7a0b\u5e8f"},"\u6b65\u9aa4 3: \u8fd0\u884cSeaTunnel\u5e94\u7528\u7a0b\u5e8f"),(0,l.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u4ece2.3.1\u7248\u672c\u5f00\u59cb\uff0cseatunnel.sh\u4e2d\u7684-e\u53c2\u6570\u88ab\u5e9f\u5f03\uff0c\u8bf7\u6539\u7528-m\u53c2\u6570\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-${version}"\n./bin/seatunnel.sh --config ./config/v2.batch.config.template -m local\n\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u67e5\u770b\u8f93\u51fa"),": \u5f53\u60a8\u8fd0\u884c\u8be5\u547d\u4ee4\u65f6\uff0c\u60a8\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u5b83\u7684\u8f93\u51fa\u3002\u60a8\u53ef\u4ee5\u8ba4\u4e3a\u8fd9\u662f\u547d\u4ee4\u8fd0\u884c\u6210\u529f\u6216\u5931\u8d25\u7684\u6807\u5fd7\u3002"),(0,l.yg)("p",null,"SeaTunnel\u63a7\u5236\u53f0\u5c06\u4f1a\u6253\u5370\u4e00\u4e9b\u5982\u4e0b\u65e5\u5fd7\u4fe1\u606f:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"2022-12-19 11:01:45,417 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - output rowType: name<STRING>, age<INT>\n2022-12-19 11:01:46,489 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=1:  SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: CpiOd, 8520946\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=2: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: eQqTs, 1256802974\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=3: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: UsRgO, 2053193072\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=4: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: jDQJj, 1993016602\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=5: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: rqdKp, 1392682764\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=6: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: wCoWN, 986999925\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=7: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: qomTU, 72775247\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=8: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: jcqXR, 1074529204\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=9: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: AkWIO, 1961723427\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=10: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: hBoib, 929089763\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=11: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: GSvzm, 827085798\n2022-12-19 11:01:46,491 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=12: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: NNAYI, 94307133\n2022-12-19 11:01:46,491 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=13: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: EexFl, 1823689599\n2022-12-19 11:01:46,491 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=14: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: CBXUb, 869582787\n2022-12-19 11:01:46,491 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=15: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: Wbxtm, 1469371353\n2022-12-19 11:01:46,491 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=16: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: mIJDt, 995616438\n")),(0,l.yg)("h2",{id:"\u6269\u5c55\u793a\u4f8b\u4ece-mysql-\u5230-doris-\u6279\u5904\u7406\u6a21\u5f0f"},"\u6269\u5c55\u793a\u4f8b\uff1a\u4ece MySQL \u5230 Doris \u6279\u5904\u7406\u6a21\u5f0f"),(0,l.yg)("h2",{id:"\u6b65\u9aa41\u4e0b\u8f7d\u8fde\u63a5\u5668"},"\u6b65\u9aa41\uff1a\u4e0b\u8f7d\u8fde\u63a5\u5668"),(0,l.yg)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5728",(0,l.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/config/plugin_config"),"\u6587\u4ef6\u4e2d\u52a0\u5165\u8fde\u63a5\u5668\u540d\u79f0\uff0c\u7136\u540e\uff0c\u6267\u884c\u547d\u4ee4\u6765\u5b89\u88c5\u8fde\u63a5\u5668(\u5f53\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4ece ",(0,l.yg)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/seatunnel/"},"Apache Maven Repository")," \u624b\u52a8\u4e0b\u8f7d\u8fde\u63a5\u5668\uff0c\u7136\u540e\u5c06\u5176\u79fb\u52a8\u81f3",(0,l.yg)("inlineCode",{parentName:"p"},"connectors/"),"\u76ee\u5f55\u4e0b)\uff0c\u6700\u540e\uff0c\u786e\u8ba4\u8fde\u63a5\u5668",(0,l.yg)("inlineCode",{parentName:"p"},"connector-jdbc"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"connector-doris"),"\u5728",(0,l.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/connectors/"),"\u76ee\u5f55\u4e0b\u5373\u53ef\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# \u914d\u7f6e\u8fde\u63a5\u5668\u540d\u79f0\n--seatunnel-connectors--\nconnector-jdbc\nconnector-doris\n--end--\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u8fde\u63a5\u5668\nsh bin/install-plugin.sh\n")),(0,l.yg)("h2",{id:"\u6b65\u9aa42\u653e\u5165-mysql-\u9a71\u52a8"},"\u6b65\u9aa42\uff1a\u653e\u5165 MySQL \u9a71\u52a8"),(0,l.yg)("p",null,"\u60a8\u9700\u8981\u4e0b\u8f7d ",(0,l.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc driver jar package")," \u9a71\u52a8\uff0c\u5e76\u653e\u7f6e\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/lib/"),"\u76ee\u5f55\u4e0b"),(0,l.yg)("h2",{id:"\u6b65\u9aa43\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a"},"\u6b65\u9aa43\uff1a\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'cd seatunnel/job/\n\nvim st.conf\n\nenv {\n  parallelism = 2\n  job.mode = "BATCH"\n}\nsource {\n    Jdbc {\n        url = "jdbc:mysql://localhost:3306/test"\n        driver = "com.mysql.cj.jdbc.Driver"\n        connection_check_timeout_sec = 100\n        user = "user"\n        password = "pwd"\n        table_path = "test.table_name"\n        query = "select  * from test.table_name"\n    }\n}\n\nsink {\n   Doris {\n          fenodes = "doris_ip:8030"\n          username = "user"\n          password = "pwd"\n          database = "test_db"\n          table = "table_name"\n          sink.enable-2pc = "true"\n          sink.label-prefix = "test-cdc"\n          doris.config = {\n            format = "json"\n            read_json_by_line="true"\n          }\n      }\n}\n')),(0,l.yg)("p",null,"\u5173\u4e8e\u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\u8bf7\u67e5\u770b",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/concept/config"},"\u914d\u7f6e\u7684\u57fa\u672c\u6982\u5ff5")),(0,l.yg)("h2",{id:"\u6b65\u9aa4-4-\u8fd0\u884cseatunnel\u5e94\u7528\u7a0b\u5e8f"},"\u6b65\u9aa4 4: \u8fd0\u884cSeaTunnel\u5e94\u7528\u7a0b\u5e8f"),(0,l.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd seatunnel/\n./bin/seatunnel.sh --config ./job/st.conf -m local\n\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u67e5\u770b\u8f93\u51fa"),": \u5f53\u60a8\u8fd0\u884c\u8be5\u547d\u4ee4\u65f6\uff0c\u60a8\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u5b83\u7684\u8f93\u51fa\u3002\u60a8\u53ef\u4ee5\u8ba4\u4e3a\u8fd9\u662f\u547d\u4ee4\u8fd0\u884c\u6210\u529f\u6216\u5931\u8d25\u7684\u6807\u5fd7\u3002"),(0,l.yg)("p",null,"SeaTunnel\u63a7\u5236\u53f0\u5c06\u4f1a\u6253\u5370\u4e00\u4e9b\u5982\u4e0b\u65e5\u5fd7\u4fe1\u606f:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"***********************************************\n           Job Statistic Information\n***********************************************\nStart Time                : 2024-08-13 10:21:49\nEnd Time                  : 2024-08-13 10:21:53\nTotal Time(s)             :                   4\nTotal Read Count          :                1000\nTotal Write Count         :                1000\nTotal Failed Count        :                   0\n***********************************************\n")),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u60f3\u4f18\u5316\u81ea\u5df1\u7684\u4f5c\u4e1a\uff0c\u8bf7\u53c2\u7167\u8fde\u63a5\u5668\u4f7f\u7528\u6587\u6863")),(0,l.yg)("h2",{id:"\u6b64\u5916"},"\u6b64\u5916"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5f00\u59cb\u7f16\u5199\u60a8\u81ea\u5df1\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u9009\u62e9\u60a8\u60f3\u8981\u4f7f\u7528\u7684",(0,l.yg)("a",{parentName:"li",href:"../../connector-v2/source"},"\u8fde\u63a5\u5668"),"\uff0c\u5e76\u6839\u636e\u8fde\u63a5\u5668\u7684\u6587\u6863\u914d\u7f6e\u53c2\u6570\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/seatunnel-engine/about"},"SeaTunnel\u5f15\u64ce"),". \u5728\u8fd9\u91cc\u4f60\u5c06\u4e86\u89e3\u5982\u4f55\u90e8\u7f72SeaTunnel Engine\u7684\u96c6\u7fa4\u6a21\u5f0f\u4ee5\u53ca\u5982\u4f55\u5728\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u4f7f\u7528\u3002")))}d.isMDXComponent=!0}}]);