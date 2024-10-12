"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[78759],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),s=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(g.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,m=u["".concat(g,".").concat(c)]||u[c]||d[c]||l;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},15166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={},o="MongoDB",i={unversionedId:"connector-v2/source/MongoDB",id:"version-2.3.8/connector-v2/source/MongoDB",title:"MongoDB",description:"MongoDB Source Connector",source:"@site/versioned_docs/version-2.3.8/connector-v2/source/MongoDB.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/MongoDB",permalink:"/zh-CN/docs/2.3.8/connector-v2/source/MongoDB",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.8/connector-v2/source/MongoDB.md",tags:[],version:"2.3.8",frontMatter:{},sidebar:"docs",previous:{title:"MongoDB CDC",permalink:"/zh-CN/docs/2.3.8/connector-v2/source/MongoDB-CDC"},next:{title:"My Hours",permalink:"/zh-CN/docs/2.3.8/connector-v2/source/MyHours"}},g={},s=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Tips",id:"tips",level:3},{value:"How to Create a MongoDB Data Synchronization Jobs",id:"how-to-create-a-mongodb-data-synchronization-jobs",level:2},{value:"Parameter Interpretation",id:"parameter-interpretation",level:2},{value:"MongoDB Database Connection URI Examples",id:"mongodb-database-connection-uri-examples",level:3},{value:"MatchQuery Scan",id:"matchquery-scan",level:3},{value:"Projection Scan",id:"projection-scan",level:3},{value:"Partitioned Scan",id:"partitioned-scan",level:3},{value:"Flat Sync String",id:"flat-sync-string",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"Next Version",id:"next-version",level:3}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mongodb"},"MongoDB"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"MongoDB Source Connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"The MongoDB Connector provides the ability to read and write data from and to MongoDB.\nThis document describes how to set up the MongoDB connector to run data reads against MongoDB."),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("p",null,"In order to use the Mongodb connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Dependency"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.yg)("td",{parentName:"tr",align:null},"universal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/connector-mongodb"},"Download"))))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("p",null,"The following table lists the field data type mapping from MongoDB BSON type to SeaTunnel data type."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"MongoDB BSON type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ObjectId"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Binary"),(0,r.yg)("td",{parentName:"tr",align:null},"BINARY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int32"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int64"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Decimal128"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null},"Date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Object"),(0,r.yg)("td",{parentName:"tr",align:null},"ROW")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")))),(0,r.yg)("p",null,"For specific types in MongoDB, we use Extended JSON format to map them to SeaTunnel STRING type."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"MongoDB BSON type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel STRING"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Symbol"),(0,r.yg)("td",{parentName:"tr",align:null},'{"_value": {"$symbol": "12"}}')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RegularExpression"),(0,r.yg)("td",{parentName:"tr",align:null},'{"_value": {"$regularExpression": {"pattern": "^9$", "options": "i"}}}')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JavaScript"),(0,r.yg)("td",{parentName:"tr",align:null},'{"_value": {"$code": "function() { return 10; }"}}')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DbPointer"),(0,r.yg)("td",{parentName:"tr",align:null},'{"_value": {"$dbPointer": {"$ref": "db.coll", "$id": {"$oid": "63932a00da01604af329e33c"}}}}')))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tips")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"1.When using the DECIMAL type in SeaTunnel, be aware that the maximum range cannot exceed 34 digits, which means you should use decimal(34, 18).",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uri"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The MongoDB standard connection uri. eg. mongodb://user:password@hosts:27017/database?readPreference=secondary&slaveOk=true.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of MongoDB database to read or write.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"collection"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of MongoDB collection to read or write.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"MongoDB's BSON and seatunnel data structure mapping.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"match.query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"In MongoDB, filters are used to filter documents for query operations.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"match.projection"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"In MongoDB, Projection is used to control the fields contained in the query results.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition.split-key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"_id"),(0,r.yg)("td",{parentName:"tr",align:null},"The key of Mongodb fragmentation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition.split-size"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"64 ",(0,r.yg)("em",{parentName:"td"}," 1024 ")," 1024"),(0,r.yg)("td",{parentName:"tr",align:null},"The size of Mongodb fragment.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cursor.no-timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"MongoDB server normally times out idle cursors after an inactivity period (10 minutes) to prevent excess memory use. Set this option to true to prevent that. However, if the application takes longer than 30 minutes to process the current batch of documents, the session is marked as expired and closed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fetch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"2048"),(0,r.yg)("td",{parentName:"tr",align:null},"Set the number of documents obtained from the server for each batch. Setting the appropriate batch size can improve query performance and avoid the memory pressure caused by obtaining a large amount of data at one time.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max.time-min"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"600"),(0,r.yg)("td",{parentName:"tr",align:null},"This parameter is a MongoDB query option that limits the maximum execution time for query operations. The value of maxTimeMin is in Minute. If the execution time of the query exceeds the specified time limit, MongoDB will terminate the operation and return an error.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"flat.sync-string"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"By utilizing flatSyncString, only one field attribute value can be set, and the field type must be a String. This operation will perform a string mapping on a single MongoDB data entry.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"../source-common-options.md"},"Source Common Options")," for details")))),(0,r.yg)("h3",{id:"tips"},"Tips"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"1.The parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"match.query")," is compatible with the historical old version parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"matchQuery"),", and they are equivalent replacements.",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"how-to-create-a-mongodb-data-synchronization-jobs"},"How to Create a MongoDB Data Synchronization Jobs"),(0,r.yg)("p",null,"The following example demonstrates how to create a data synchronization job that reads data from MongoDB and prints it on the local client:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\n# Create a source to connect to Mongodb\nsource {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "source_table"\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_int = int\n        c_bigint = bigint\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(38, 18)"\n        c_timestamp = timestamp\n        c_row = {\n          c_map = "map<string, string>"\n          c_array = "array<int>"\n          c_string = string\n          c_boolean = boolean\n          c_int = int\n          c_bigint = bigint\n          c_double = double\n          c_bytes = bytes\n          c_date = date\n          c_decimal = "decimal(38, 18)"\n          c_timestamp = timestamp\n        }\n      }\n    }\n  }\n}\n\n# Console printing of the read Mongodb data\nsink {\n  Console {\n    parallelism = 1\n  }\n}\n')),(0,r.yg)("h2",{id:"parameter-interpretation"},"Parameter Interpretation"),(0,r.yg)("h3",{id:"mongodb-database-connection-uri-examples"},"MongoDB Database Connection URI Examples"),(0,r.yg)("p",null,"Unauthenticated single node connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.100:27017/mydb\n")),(0,r.yg)("p",null,"Replica set connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.100:27017/mydb?replicaSet=xxx\n")),(0,r.yg)("p",null,"Authenticated replica set connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://admin:password@192.168.0.100:27017/mydb?replicaSet=xxx&authSource=admin\n")),(0,r.yg)("p",null,"Multi-node replica set connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.1:27017,192.168.0.2:27017,192.168.0.3:27017/mydb?replicaSet=xxx\n")),(0,r.yg)("p",null,"Sharded cluster connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.100:27017/mydb\n")),(0,r.yg)("p",null,"Multiple mongos connections:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.1:27017,192.168.0.2:27017,192.168.0.3:27017/mydb\n")),(0,r.yg)("p",null,"Note: The username and password in the URI must be URL-encoded before being concatenated into the connection string."),(0,r.yg)("h3",{id:"matchquery-scan"},"MatchQuery Scan"),(0,r.yg)("p",null,"In data synchronization scenarios, the matchQuery approach needs to be used early to reduce the number of documents that need to be processed by subsequent operators, thus improving performance.\nHere is a simple example of a seatunnel using ",(0,r.yg)("inlineCode",{parentName:"p"},"match.query")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "orders"\n    match.query = "{status: \\"A\\"}"\n    schema = {\n      fields {\n        id = bigint\n        status = string\n      }\n    }\n  }\n}\n')),(0,r.yg)("p",null,"The following are examples of MatchQuery query statements of various data types:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# Query Boolean type\n"{c_boolean:true}"\n# Query string type\n"{c_string:\\"OCzCj\\"}"\n# Query the integer\n"{c_int:2}"\n# Type of query time\n"{c_date:ISODate(\\"2023-06-26T16:00:00.000Z\\")}"\n# Query floating point type\n{c_double:{$gte:1.71763202185342e+308}}\n')),(0,r.yg)("p",null,"Please refer to how to write the syntax of ",(0,r.yg)("inlineCode",{parentName:"p"},"match.query"),"\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/tutorial/query-documents"},"https://www.mongodb.com/docs/manual/tutorial/query-documents")),(0,r.yg)("h3",{id:"projection-scan"},"Projection Scan"),(0,r.yg)("p",null,"In MongoDB, Projection is used to control which fields are included in the query results. This can be accomplished by specifying which fields need to be returned and which fields do not.\nIn the find() method, a projection object can be passed as a second argument. The key of the projection object indicates the fields to include or exclude, and a value of 1 indicates inclusion and 0 indicates exclusion.\nHere is a simple example, assuming we have a collection named users:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Returns only the name and email fields\ndb.users.find({}, { name: 1, email: 0 });\n")),(0,r.yg)("p",null,"In data synchronization scenarios, projection needs to be used early to reduce the number of documents that need to be processed by subsequent operators, thus improving performance.\nHere is a simple example of a seatunnel using projection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "users"\n    match.projection = "{ name: 1, email: 0 }"\n    schema = {\n      fields {\n        name = string\n      }\n    }\n  }\n}\n\n')),(0,r.yg)("h3",{id:"partitioned-scan"},"Partitioned Scan"),(0,r.yg)("p",null,"To speed up reading data in parallel source task instances, seatunnel provides a partitioned scan feature for MongoDB collections. The following partitioning strategies are provided.\nUsers can control data sharding by setting the partition.split-key for sharding keys and partition.split-size for sharding size."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "users"\n    partition.split-key = "id"\n    partition.split-size = 1024\n    schema = {\n      fields {\n        id = bigint\n        status = string\n      }\n    }\n  }\n}\n\n')),(0,r.yg)("h3",{id:"flat-sync-string"},"Flat Sync String"),(0,r.yg)("p",null,"By utilizing ",(0,r.yg)("inlineCode",{parentName:"p"},"flat.sync-string"),", only one field attribute value can be set, and the field type must be a String.\nThis operation will perform a string mapping on a single MongoDB data entry."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 10\n  job.mode = "BATCH"\n}\nsource {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "users"\n    flat.sync-string = true\n    schema = {\n      fields {\n        data = string\n      }\n    }\n  }\n}\nsink {\n  Console {}\n}\n')),(0,r.yg)("p",null,"Use the data samples synchronized with modified parameters, such as the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "_id":{\n    "$oid":"643d41f5fdc6a52e90e59cbf"\n  },\n  "c_map":{\n    "OQBqH":"jllt",\n    "rkvlO":"pbfdf",\n    "pCMEX":"hczrdtve",\n    "DAgdj":"t",\n    "dsJag":"voo"\n  },\n  "c_array":[\n    {\n      "$numberInt":"-865590937"\n    },\n    {\n      "$numberInt":"833905600"\n    },\n    {\n      "$numberInt":"-1104586446"\n    },\n    {\n      "$numberInt":"2076336780"\n    },\n    {\n      "$numberInt":"-1028688944"\n    }\n  ],\n  "c_string":"bddkzxr",\n  "c_boolean":false,\n  "c_tinyint":{\n    "$numberInt":"39"\n  },\n  "c_smallint":{\n    "$numberInt":"23672"\n  },\n  "c_int":{\n    "$numberInt":"-495763561"\n  },\n  "c_bigint":{\n    "$numberLong":"3768307617923954543"\n  },\n  "c_float":{\n    "$numberDouble":"5.284220288280258E37"\n  },\n  "c_double":{\n    "$numberDouble":"1.1706091642478246E308"\n  },\n  "c_bytes":{\n    "$binary":{\n      "base64":"ZWJ4",\n      "subType":"00"\n    }\n  },\n  "c_date":{\n    "$date":{\n      "$numberLong":"1686614400000"\n    }\n  },\n  "c_decimal":{\n    "$numberDecimal":"683265300"\n  },\n  "c_timestamp":{\n    "$date":{\n      "$numberLong":"1684283772000"\n    }\n  },\n  "c_row":{\n    "c_map":{\n      "OQBqH":"cbrzhsktmm",\n      "rkvlO":"qtaov",\n      "pCMEX":"tuq",\n      "DAgdj":"jzop",\n      "dsJag":"vwqyxtt"\n    },\n    "c_array":[\n      {\n        "$numberInt":"1733526799"\n      },\n      {\n        "$numberInt":"-971483501"\n      },\n      {\n        "$numberInt":"-1716160960"\n      },\n      {\n        "$numberInt":"-919976360"\n      },\n      {\n        "$numberInt":"727499700"\n      }\n    ],\n    "c_string":"oboislr",\n    "c_boolean":true,\n    "c_tinyint":{\n      "$numberInt":"-66"\n    },\n    "c_smallint":{\n      "$numberInt":"1308"\n    },\n    "c_int":{\n      "$numberInt":"-1573886733"\n    },\n    "c_bigint":{\n      "$numberLong":"4877994302999518682"\n    },\n    "c_float":{\n      "$numberDouble":"1.5353209063652051E38"\n    },\n    "c_double":{\n      "$numberDouble":"1.1952441956458565E308"\n    },\n    "c_bytes":{\n      "$binary":{\n        "base64":"cWx5Ymp0Yw==",\n        "subType":"00"\n      }\n    },\n    "c_date":{\n      "$date":{\n        "$numberLong":"1686614400000"\n      }\n    },\n    "c_decimal":{\n      "$numberDecimal":"656406177"\n    },\n    "c_timestamp":{\n      "$date":{\n        "$numberLong":"1684283772000"\n      }\n    }\n  },\n  "id":{\n    "$numberInt":"2"\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add MongoDB Source Connector")),(0,r.yg)("h3",{id:"next-version"},"Next Version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Feature]","Refactor mongodb source connector(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4620"},"4620"),")")))}d.isMDXComponent=!0}}]);