// This code is generated automatically using deployer's(console.hashingsystems.com) interface generator
// @createdDate : Mon Apr 20 2020 12:08:34 GMT-0500 (Central Daylight Time) 
// @dependencies : hash-sdk 
// @language : JavaScript
// hash-sdk should be installed 
// # npm i hash-sdk 
// # yarn add hash-sdk 

const hash = require("hash-sdk"); 


(function(exports) { 
const myApp ={
            /**
    * Initializes an account for interacting with below functions
    */
    
    init : async()=> {
        try{
            // Setting it default to software it talks to sdk directly
            await hash.setProvider('software');
          const accountData = {
                      accountId: process.env.ACCOUNT_ID/*<accountId(0.0.1234)>*/,
                      network: 'testnet'/*<mainnet | testnet>*/,
                      keys: {
                          privateKey: process.env.PRIV_KEY/*<aplphanumeric user privatekey>*/
                      }
                  }
            await hash.setAccount(accountData);
        }catch(e){
            console.log('Error in intializing account:::',e);
            throw e;
        }
    },
file_hnstxt : {
      fileRetrieve : async() => {
          const data = {
              memo: "file retrieve",
              fileId: "0.0.39692"
          }
          return await hash.triggerFileRetrieve(data);
      }
    },

topic_testing : {
      topicUpdate : async(updatedData) => {
          const data = {
              topicId:"0.0.39693"
          }
          if(updatedData.topicName){
              data.memo = updatedData.topicName;
          }
          if(updatedData.submitKeyList){
            data.submitKeyList = updatedData.submitKeyList;
          }
          if(updatedData.expirationTime){
            data.expirationTime = updatedData.expirationTime;
          }
          return await hash.triggerTopicUpdate(data);
      },
      

      topicInfo : async() => {
          const data  = {
              memo: "consensus topic info",
              topicId:"0.0.39693"
          }
          return await hash.triggerTopicInfo(data);
      },
      

      topicDelete : async() => {
          const data = {
              memo: "consensus topic delete",
              topicId:"0.0.39693"
          }
          return await hash.triggerTopicDelete(data);
      },
      

      messageSubmit : async(message=" ") => {
          const data = {
              memo: "consensus message submit",
              topicId:"0.0.39693",
              message
          }
          return await hash.triggerMessageSubmit(data);
      }
    },
    

topic_2345 : {
      topicUpdate : async(updatedData) => {
          const data = {
              topicId:"0.0.39695"
          }
          if(updatedData.topicName){
              data.memo = updatedData.topicName;
          }
          if(updatedData.submitKeyList){
            data.submitKeyList = updatedData.submitKeyList;
          }
          if(updatedData.expirationTime){
            data.expirationTime = updatedData.expirationTime;
          }
          return await hash.triggerTopicUpdate(data);
      },
      

      topicInfo : async() => {
          const data  = {
              memo: "consensus topic info",
              topicId:"0.0.39695"
          }
          return await hash.triggerTopicInfo(data);
      },
      

      topicDelete : async() => {
          const data = {
              memo: "consensus topic delete",
              topicId:"0.0.39695"
          }
          return await hash.triggerTopicDelete(data);
      },
      

      messageSubmit : async(message=" ") => {
          const data = {
              memo: "consensus message submit",
              topicId:"0.0.39695",
              message
          }
          return await hash.triggerMessageSubmit(data);
      }
    },
        }   
        exports.myApp = myApp; 
        exports.hashSdk = hash;
       
    })(typeof exports === 'undefined'? module.exports: exports);
    
   