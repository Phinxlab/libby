import{SessionStore as e}from"@phinxlab/libby-core-public";export{DAO,DAOCommand,Database,DatabaseConnector,Libby,MemoryDAO,MemoryStoreStrategy,StoreStrategy,SessionStrategy,RoleMapper,UserMapper}from"@phinxlab/libby-core-public";export{RESTConnection,RESTDAO,RESTSessionStrategy,RESTStoreStrategy}from"@phinxlab/libby-rest-public";import{AsyncStorage as t}from"react-native";class r extends e{async retrieve(){console.log("Retrieve()");try{return await t.getItem("x-chino-token")}catch(e){return console.log(e),!1}}async clean(){console.log("Clean()");try{await t.removeItem("x-chino-token")}catch(e){return!1}}async persist(e){console.log("Persist()");try{await t.setItem("x-chino-token",e)}catch(e){return console.log(e),!1}}static create(){return new r}}export{r as SessionStoreMobile};
//# sourceMappingURL=rrpm.module.js.map
