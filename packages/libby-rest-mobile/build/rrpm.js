!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@phinxlab/libby-core-public"),require("@phinxlab/libby-rest-public"),require("react-native")):"function"==typeof define&&define.amd?define(["exports","@phinxlab/libby-core-public","@phinxlab/libby-rest-public","react-native"],t):t((e=e||self).Libby={},e.libbyCorePublic,e.libbyRestPublic,e.reactNative)}(this,(function(e,t,r,o){"use strict";class n extends t.SessionStore{async retrieve(){console.log("Retrieve()");try{return await o.AsyncStorage.getItem("x-chino-token")}catch(e){return console.log(e),!1}}async clean(){console.log("Clean()");try{await o.AsyncStorage.removeItem("x-chino-token")}catch(e){return!1}}async persist(e){console.log("Persist()");try{await o.AsyncStorage.setItem("x-chino-token",e)}catch(e){return console.log(e),!1}}static create(){return new n}}e.DAO=t.DAO,e.DAOCommand=t.DAOCommand,e.Database=t.Database,e.DatabaseConnector=t.DatabaseConnector,e.Libby=t.Libby,e.MemoryDAO=t.MemoryDAO,e.MemoryStoreStrategy=t.MemoryStoreStrategy,e.StoreStrategy=t.StoreStrategy,e.SessionStrategy=t.SessionStrategy,e.RoleMapper=t.RoleMapper,e.UserMapper=t.UserMapper,e.RESTConnection=r.RESTConnection,e.RESTDAO=r.RESTDAO,e.RESTSessionStrategy=r.RESTSessionStrategy,e.RESTStoreStrategy=r.RESTStoreStrategy,e.SessionStoreMobile=n,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=rrpm.js.map
