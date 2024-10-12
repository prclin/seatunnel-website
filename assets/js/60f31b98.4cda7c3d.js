"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[99546],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=l,y=p["".concat(s,".").concat(c)]||p[c]||u[c]||r;return n?a.createElement(y,i(i({ref:t},g),{},{components:n})):a.createElement(y,i({ref:t},g))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(58168),l=(n(96540),n(15680));const r={},i="ClickhouseFile",o={unversionedId:"connector-v2/sink/ClickhouseFile",id:"version-2.3.8/connector-v2/sink/ClickhouseFile",title:"ClickhouseFile",description:"Clickhouse file sink connector",source:"@site/versioned_docs/version-2.3.8/connector-v2/sink/ClickhouseFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/ClickhouseFile",permalink:"/docs/2.3.8/connector-v2/sink/ClickhouseFile",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.8/connector-v2/sink/ClickhouseFile.md",tags:[],version:"2.3.8",frontMatter:{},sidebar:"docs",previous:{title:"Clickhouse",permalink:"/docs/2.3.8/connector-v2/sink/Clickhouse"},next:{title:"Console",permalink:"/docs/2.3.8/connector-v2/sink/Console"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"sharding_key string",id:"sharding_key-string",level:3},{value:"clickhouse_local_path string",id:"clickhouse_local_path-string",level:3},{value:"copy_method string",id:"copy_method-string",level:3},{value:"node_free_password boolean",id:"node_free_password-boolean",level:3},{value:"node_pass list",id:"node_pass-list",level:3},{value:"node_pass.node_address string",id:"node_passnode_address-string",level:3},{value:"node_pass.username string",id:"node_passusername-string",level:3},{value:"node_pass.password string",id:"node_passpassword-string",level:3},{value:"compatible_mode boolean",id:"compatible_mode-boolean",level:3},{value:"file_fields_delimiter string",id:"file_fields_delimiter-string",level:3},{value:"file_temp_path string",id:"file_temp_path-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"Next version",id:"next-version",level:3}],g={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"clickhousefile"},"ClickhouseFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Clickhouse file sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Generate the clickhouse data file with the clickhouse-local program, and then send it to the clickhouse\nserver, also call bulk load. This connector only support clickhouse table which engine is 'Distributed'.And ",(0,l.yg)("inlineCode",{parentName:"p"},"internal_replication")," option\nshould be ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),". Supports Batch and Streaming mode."),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Write data to Clickhouse can also be done using JDBC")),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"host"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"clickhouse_local_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sharding_key"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"copy_method"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"scp")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"node_free_password"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"node_pass"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"node_pass.node_address"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"node_pass.username"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"root"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"node_pass.password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compatible_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_fields_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"\\t"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_temp_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"/tmp/seatunnel/clickhouse-local/file"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"host-string"},"host ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ClickHouse")," cluster address, the format is ",(0,l.yg)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple ",(0,l.yg)("inlineCode",{parentName:"p"},"hosts")," to be specified. Such as ",(0,l.yg)("inlineCode",{parentName:"p"},'"host1:8123,host2:8123"')," ."),(0,l.yg)("h3",{id:"database-string"},"database ","[string]"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"ClickHouse")," database"),(0,l.yg)("h3",{id:"table-string"},"table ","[string]"),(0,l.yg)("p",null,"The table name"),(0,l.yg)("h3",{id:"username-string"},"username ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ClickHouse")," user username"),(0,l.yg)("h3",{id:"password-string"},"password ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ClickHouse")," user password"),(0,l.yg)("h3",{id:"sharding_key-string"},"sharding_key ","[string]"),(0,l.yg)("p",null,"When ClickhouseFile split data, which node to send data to is a problem, the default is random selection, but the\n'sharding_key' parameter can be used to specify the field for the sharding algorithm."),(0,l.yg)("h3",{id:"clickhouse_local_path-string"},"clickhouse_local_path ","[string]"),(0,l.yg)("p",null,"The address of the clickhouse-local program on the spark node. Since each task needs to be called,\nclickhouse-local should be located in the same path of each spark node."),(0,l.yg)("h3",{id:"copy_method-string"},"copy_method ","[string]"),(0,l.yg)("p",null,"Specifies the method used to transfer files, the default is scp, optional scp and rsync"),(0,l.yg)("h3",{id:"node_free_password-boolean"},"node_free_password ","[boolean]"),(0,l.yg)("p",null,"Because seatunnel need to use scp or rsync for file transfer, seatunnel need clickhouse server-side access.\nIf each spark node and clickhouse server are configured with password-free login,\nyou can configure this option to true, otherwise you need to configure the corresponding node password in the node_pass configuration"),(0,l.yg)("h3",{id:"node_pass-list"},"node_pass ","[list]"),(0,l.yg)("p",null,"Used to save the addresses and corresponding passwords of all clickhouse servers"),(0,l.yg)("h3",{id:"node_passnode_address-string"},"node_pass.node_address ","[string]"),(0,l.yg)("p",null,"The address corresponding to the clickhouse server"),(0,l.yg)("h3",{id:"node_passusername-string"},"node_pass.username ","[string]"),(0,l.yg)("p",null,"The username corresponding to the clickhouse server, default root user."),(0,l.yg)("h3",{id:"node_passpassword-string"},"node_pass.password ","[string]"),(0,l.yg)("p",null,"The password corresponding to the clickhouse server."),(0,l.yg)("h3",{id:"compatible_mode-boolean"},"compatible_mode ","[boolean]"),(0,l.yg)("p",null,"In the lower version of Clickhouse, the ClickhouseLocal program does not support the ",(0,l.yg)("inlineCode",{parentName:"p"},"--path")," parameter,\nyou need to use this mode to take other ways to realize the ",(0,l.yg)("inlineCode",{parentName:"p"},"--path")," parameter function"),(0,l.yg)("h3",{id:"file_fields_delimiter-string"},"file_fields_delimiter ","[string]"),(0,l.yg)("p",null,"ClickhouseFile uses csv format to temporarily save data. If the data in the row contains the delimiter value\nof csv, it may cause program exceptions.\nAvoid this with this configuration. Value string has to be an exactly one character long"),(0,l.yg)("h3",{id:"file_temp_path-string"},"file_temp_path ","[string]"),(0,l.yg)("p",null,"The directory where ClickhouseFile stores temporary files locally."),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.8/connector-v2/sink-common-options"},"Sink Common Options")," for details"),(0,l.yg)("h2",{id:"examples"},"Examples"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'ClickhouseFile {\n  host = "192.168.0.1:8123"\n  database = "default"\n  table = "fake_all"\n  username = "default"\n  password = ""\n  clickhouse_local_path = "/Users/seatunnel/Tool/clickhouse local"\n  sharding_key = "age"\n  node_free_password = false\n  node_pass = [{\n    node_address = "192.168.0.1"\n    password = "seatunnel"\n  }]\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Support write data to ClickHouse File and move to ClickHouse data dir")),(0,l.yg)("h3",{id:"next-version"},"Next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Fix generated data part name conflict and improve file commit logic ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3416"},"3416")),(0,l.yg)("li",{parentName:"ul"},"[Feature]"," Support compatible_mode compatible with lower version Clickhouse  ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3416"},"3416"))))}u.isMDXComponent=!0}}]);