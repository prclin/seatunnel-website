"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[24386],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=p(n),m=r,c=y["".concat(g,".").concat(m)]||y[m]||d[m]||l;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o="OceanBase",i={unversionedId:"connector-v2/source/OceanBase",id:"version-2.3.8/connector-v2/source/OceanBase",title:"OceanBase",description:"JDBC OceanBase Source Connector",source:"@site/versioned_docs/version-2.3.8/connector-v2/source/OceanBase.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/OceanBase",permalink:"/docs/2.3.8/connector-v2/source/OceanBase",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.8/connector-v2/source/OceanBase.md",tags:[],version:"2.3.8",frontMatter:{},sidebar:"docs",previous:{title:"ObsFile",permalink:"/docs/2.3.8/connector-v2/source/ObsFile"},next:{title:"OneSignal",permalink:"/docs/2.3.8/connector-v2/source/OneSignal"}},g={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Mysql Mode",id:"mysql-mode",level:3},{value:"Oracle Mode",id:"oracle-mode",level:3},{value:"Source Options",id:"source-options",level:2},{value:"Tips",id:"tips",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Parallel:",id:"parallel",level:3},{value:"Parallel Boundary:",id:"parallel-boundary",level:3}],u={toc:p},y="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"oceanbase"},"OceanBase"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC OceanBase Source Connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read external data source data through JDBC."),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Driver"),(0,r.yg)("th",{parentName:"tr",align:null},"Url"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OceanBase"),(0,r.yg)("td",{parentName:"tr",align:null},"All OceanBase server versions."),(0,r.yg)("td",{parentName:"tr",align:null},"com.oceanbase.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:oceanbase://localhost:2883/test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oceanbase/oceanbase-client"},"Download"))))),(0,r.yg)("h2",{id:"database-dependency"},"Database Dependency"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,r.yg)("br",null),"\nFor example: cp oceanbase-client-xxx.jar $SEATNUNNEL_HOME/plugins/jdbc/lib/")),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("h3",{id:"mysql-mode"},"Mysql Mode"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Mysql Data type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIT(1)",(0,r.yg)("br",null),"TINYINT(1)"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT",(0,r.yg)("br",null),"TINYINT UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT UNSIGNED",(0,r.yg)("br",null),"MEDIUMINT",(0,r.yg)("br",null),"MEDIUMINT UNSIGNED",(0,r.yg)("br",null),"INT",(0,r.yg)("br",null),"INTEGER",(0,r.yg)("br",null),"YEAR"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT UNSIGNED",(0,r.yg)("br",null),"INTEGER UNSIGNED",(0,r.yg)("br",null),"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(20,0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.<38)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.>38)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL((Get the designated column's specified column size)+1,",(0,r.yg)("br",null),"(Gets the designated column's number of digits to right of the decimal point.)))")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT",(0,r.yg)("br",null),"FLOAT UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,r.yg)("br",null),"DOUBLE UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"TINYTEXT",(0,r.yg)("br",null),"MEDIUMTEXT",(0,r.yg)("br",null),"TEXT",(0,r.yg)("br",null),"LONGTEXT",(0,r.yg)("br",null),"JSON",(0,r.yg)("br",null),"ENUM"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME",(0,r.yg)("br",null),"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYBLOB",(0,r.yg)("br",null),"MEDIUMBLOB",(0,r.yg)("br",null),"BLOB",(0,r.yg)("br",null),"LONGBLOB",(0,r.yg)("br",null),"BINARY",(0,r.yg)("br",null),"VARBINAR",(0,r.yg)("br",null),"BIT(n)",(0,r.yg)("br",null),"GEOMETRY"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")))),(0,r.yg)("h3",{id:"oracle-mode"},"Oracle Mode"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Oracle Data type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Number(p), p <= 9"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Number(p), p <= 18"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Number(p), p > 18"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Number(p,s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Float"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL",(0,r.yg)("br",null)," BINARY_FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY_DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR",(0,r.yg)("br",null),"NCHAR",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"VARCHAR2",(0,r.yg)("br",null),"NVARCHAR2",(0,r.yg)("br",null),"NCLOB",(0,r.yg)("br",null),"CLOB",(0,r.yg)("br",null),"LONG",(0,r.yg)("br",null),"XML",(0,r.yg)("br",null),"ROWID"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,r.yg)("br",null),"TIMESTAMP WITH LOCAL TIME ZONE"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BLOB",(0,r.yg)("br",null),"RAW",(0,r.yg)("br",null),"LONG RAW",(0,r.yg)("br",null),"BFILE"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,r.yg)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc:oceanbase://localhost:2883/test")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source, should be ",(0,r.yg)("inlineCode",{parentName:"td"},"com.oceanbase.jdbc.Driver"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"compatible_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The compatible mode of OceanBase, can be 'mysql' or 'oracle'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Query statement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_column"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The column name for parallelism's partition, only support numeric type column and string type column.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"BigDecimal"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The partition_column min value for scan, if not set SeaTunnel will query database get min value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"BigDecimal"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The partition_column max value for scan, if not set SeaTunnel will query database get max value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_num"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"job parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of partition count, only support positive integer. Default value is job parallelism.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fetch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"For queries that return a large number of objects, you can configure ",(0,r.yg)("br",null)," the row fetch size used in the query to improve performance by ",(0,r.yg)("br",null)," reducing the number database hits required to satisfy the selection criteria.",(0,r.yg)("br",null)," Zero means use jdbc default value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"properties"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Additional connection configuration parameters,when properties and URL have the same parameters, the priority is determined by the ",(0,r.yg)("br",null),"specific implementation of the driver. For example, in MySQL, properties take precedence over the URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.3.8/connector-v2/source-common-options"},"Source Common Options")," for details")))),(0,r.yg)("h3",{id:"tips"},"Tips"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed  in parallel according to the concurrency of tasks.")),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  parallelism = 2\n  job.mode = "BATCH"\n}\n\nsource {\n  Jdbc {\n    driver = "com.oceanbase.jdbc.Driver"\n    url = "jdbc:oceanbase://localhost:2883/test?useUnicode=true&characterEncoding=UTF-8&rewriteBatchedStatements=true"\n    user = "root"\n    password = ""\n    compatible_mode = "mysql"\n    query = "select * from source"\n  }\n}\n\ntransform {\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/transform/sql\n}\n\nsink {\n    Console {}\n}\n')),(0,r.yg)("h3",{id:"parallel"},"Parallel:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Read your query table in parallel with the shard field you configured and the shard data. You can do this if you want to read the whole table")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  parallelism = 10\n  job.mode = "BATCH"\n}\nsource {\n  Jdbc {\n    driver = "com.oceanbase.jdbc.Driver"\n    url = "jdbc:oceanbase://localhost:2883/test?useUnicode=true&characterEncoding=UTF-8&rewriteBatchedStatements=true"\n    user = "root"\n    password = ""\n    compatible_mode = "mysql"\n    query = "select * from source"\n    # Parallel sharding reads fields\n    partition_column = "id"\n    # Number of fragments\n    partition_num = 10\n  }\n}\nsink {\n  Console {}\n}\n')),(0,r.yg)("h3",{id:"parallel-boundary"},"Parallel Boundary:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"It is more efficient to read your data source according to the upper and lower boundaries you configured")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'source {\n  Jdbc {\n    driver = "com.oceanbase.jdbc.Driver"\n    url = "jdbc:oceanbase://localhost:2883/test?useUnicode=true&characterEncoding=UTF-8&rewriteBatchedStatements=true"\n    user = "root"\n    password = ""\n    compatible_mode = "mysql"\n    query = "select * from source"\n    partition_column = "id"\n    partition_num = 10\n    # Read start boundary\n    partition_lower_bound = 1\n    # Read end boundary\n    partition_upper_bound = 500\n  }\n}\n')))}d.isMDXComponent=!0}}]);