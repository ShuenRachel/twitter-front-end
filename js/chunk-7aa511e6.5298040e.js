(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aa511e6"],{"34e6":function(t,e,s){"use strict";s("3c04")},"3c04":function(t,e,s){},"5cfb":function(t,e,s){},"5d87":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"admin"},[s("section",{staticClass:"admin-tweets"},t._l(t.tweetsData,(function(e){return s("TweetsList",{key:e.id,attrs:{"init-tweet-data":e},on:{"after-delete-clicked":t.deleteTweet}})})),1)])},i=[],n=s("1da1"),r=(s("96cf"),s("d9e2"),s("7e75")),c=s("be6c"),o=s("ac0d"),l={mixins:[o["a"]],components:{TweetsList:r["a"]},created:function(){this.fetchTweets()},data:function(){return{tweetsData:[]}},methods:{fetchTweets:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getAllTweets();case 3:if(s=e.sent,"OK"===s.statusText){e.next=6;break}throw new Error("status: "+s.status);case 6:t.tweetsData=s.data,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.ToastError({title:"無法取得推文資料，請稍後再試"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},deleteTweet:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c["a"].deleteTweet(t);case 3:if(a=s.sent,"success"===a.data.status){s.next=6;break}throw new Error("status: "+a.status);case 6:e.fetchTweets(),s.next=12;break;case 9:s.prev=9,s.t0=s["catch"](0),e.ToastError({title:"無法刪除推文，請稍後再試"});case 12:case"end":return s.stop()}}),s,null,[[0,9]])})))()}}},u=l,w=(s("34e6"),s("2877")),d=Object(w["a"])(u,a,i,!1,null,"6236450a",null);e["default"]=d.exports},"7e75":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tweet-container"},[s("div",{staticClass:"tweet"},[s("div",{staticClass:"tweet__user-avatar",class:{pointer:!t.isAdmin},style:{backgroundImage:"url("+t.tweet.avatar+")"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toUserProfilePage(t.tweet.tweetUserId)}}}),s("div",{staticClass:"tweet__info-container"},[s("div",{staticClass:"info"},[s("span",{staticClass:"name",class:{pointer:!t.isAdmin},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toUserProfilePage(t.tweet.tweetUserId)}}},[t._v(t._s(t.tweet.tweetUserName))]),s("span",{staticClass:"account",class:{pointer:!t.isAdmin},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toUserProfilePage(t.tweet.tweetUserId)}}},[t._v(t._s(t.tweet.tweetUserAccount)+"・"+t._s(t._f("fromNow")(t.tweet.createdAt)))]),s("div",{staticClass:"content",class:{pointer:!t.isAdmin},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toTweetPage(t.tweet.TweetId)}}},[s("p",[t._v(t._s(t.tweet.description))])]),t.isAdmin?s("div",{staticClass:"content",class:{"admin-width":t.isAdmin}},[s("p",[t._v(t._s(t._f("descriptionOverflow")(t.tweet.description)))])]):t._e()]),t.isAdmin?t._e():s("div",{staticClass:"tweet__footer"},[s("div",{staticClass:"tweet__footer__actives"},[s("div",{staticClass:"tweet__footer__actives__reply",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleReplyClicked(t.tweet.TweetId)}}},[s("svg",{staticClass:"actives-icon actives-icon__reply",attrs:{width:"12",height:"12",viewBox:"0 0 21 20",fill:"#657786",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12.8461 0.241934L8.69812 0.231934H8.69612C4.32212 0.231934 0.896118 3.65893 0.896118 8.03393C0.896118 12.1319 4.08212 15.2399 8.36112 15.4039V19.2319C8.36112 19.3399 8.40512 19.5179 8.48112 19.6349C8.62312 19.8599 8.86512 19.9819 9.11312 19.9819C9.25112 19.9819 9.39012 19.9439 9.51512 19.8639C9.77912 19.6959 15.9881 15.7239 17.6031 14.3579C19.5051 12.7479 20.6431 10.3879 20.6461 8.04593V8.02893C20.6401 3.66193 17.2161 0.241933 12.8461 0.240933V0.241934ZM16.6331 13.2139C15.4991 14.1739 11.7711 16.6189 9.86112 17.8569V14.6699C9.86112 14.2559 9.52612 13.9199 9.11112 13.9199H8.71512C5.05512 13.9199 2.39712 11.4439 2.39712 8.03393C2.39712 4.49993 5.16512 1.73193 8.69712 1.73193L12.8441 1.74193H12.8461C16.3781 1.74193 19.1461 4.50793 19.1481 8.03793C19.1451 9.94793 18.2061 11.8819 16.6341 13.2139H16.6331Z"}})]),s("span",{staticClass:"tweet__footer__actives__count"},[t._v(t._s(t.tweet.repliedCount))])]),t.tweet.liked?s("div",{staticClass:"tweet__footer__actives__like",on:{click:function(e){return t.deleteLike(t.tweet.TweetId)}}},[s("svg",{staticClass:"actives-icon actives-icon__like",attrs:{width:"12.5",height:"11.8",viewBox:"0 0 22 20",fill:"#E0245E",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z"}})]),s("span",{staticClass:"tweet__footer__actives__count liked"},[t._v(t._s(t.tweet.likeCount))])]):s("div",{staticClass:"tweet__footer__actives__like",on:{click:function(e){return t.addLike(t.tweet.TweetId)}}},[s("svg",{staticClass:"actives-icon actives-icon__unlike",attrs:{width:"12.5",height:"11.8",viewBox:"0 0 21 20",fill:"#657786",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10.8 19.6379H10.786C8.203 19.5899 0.75 12.8559 0.75 6.47788C0.75 3.41388 3.275 0.723877 6.153 0.723877C8.443 0.723877 9.983 2.30388 10.799 3.45388C11.613 2.30588 13.153 0.723877 15.444 0.723877C18.324 0.723877 20.848 3.41388 20.848 6.47888C20.848 12.8549 13.394 19.5889 10.811 19.6359H10.8V19.6379ZM6.154 2.22488C4.074 2.22488 2.251 4.21288 2.251 6.47988C2.251 12.2199 9.285 18.0759 10.801 18.1379C12.319 18.0759 19.351 12.2209 19.351 6.47988C19.351 4.21288 17.528 2.22488 15.448 2.22488C12.92 2.22488 11.508 5.16088 11.496 5.18988C11.266 5.75188 10.34 5.75188 10.109 5.18988C10.095 5.15988 8.684 2.22488 6.155 2.22488H6.154Z"}})]),s("span",{staticClass:"tweet__footer__actives__count",class:{liked:t.tweet.liked}},[t._v(t._s(t.tweet.likeCount))])])])]),t.isAdmin?s("div",{staticClass:"delete"},[s("div",{staticClass:"delete-icon-container",on:{click:function(e){return t.handleDeleteClicked(t.tweet.TweetId)}}},[s("svg",{staticClass:"close-icon",attrs:{width:"15",height:"15",viewBox:"0 0 16 16",fill:"#657786",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z"}})])])]):t._e()])])])},i=[],n=s("1da1"),r=s("5530"),c=(s("96cf"),s("d9e2"),s("ac0d")),o=s("6783"),l=s("2f62"),u={props:{initTweetData:{type:Object,require:!0}},data:function(){return{tweet:{},isUserPage:!0,isLike:!1}},computed:Object(r["a"])({},Object(l["b"])(["isAdmin"])),methods:{fetchTweet:function(){this.tweet=this.initTweetData},addLike:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,o["a"].addLike(t);case 3:if(a=s.sent,"success"===a.data.status){s.next=6;break}throw new Error(a.message);case 6:e.tweet.liked=!0,e.tweet.likeCount+=1,s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](0),e.ToastError({title:"無法讚好推文，請稍後再試"});case 13:case"end":return s.stop()}}),s,null,[[0,10]])})))()},deleteLike:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,o["a"].deleteLike(t);case 3:if(a=s.sent,"success"===a.data.status){s.next=6;break}throw new Error(a.message);case 6:e.tweet.liked=!1,e.tweet.likeCount-=1,s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](0),e.ToastError({title:"無法取消讚好推文，請稍後再試"});case 13:case"end":return s.stop()}}),s,null,[[0,10]])})))()},handleReplyClicked:function(t){this.$emit("after-reply-clicked",t)},handleDeleteClicked:function(t){var e=confirm("確定要刪除TweetId為：".concat(t," 此篇推文？"));e?this.$emit("after-delete-clicked",t):alert("你按了取消按鈕")},toUserProfilePage:function(t){this.isAdmin||this.$router.push({name:"user-all-tweets",params:{user_id:t}})},toTweetPage:function(t){this.isAdmin||this.$router.push({name:"user-tweet",params:{tweet_id:t}})}},created:function(){this.fetchTweet()},watch:{initTweetData:function(){this.fetchTweet()}},mixins:[c["c"],c["a"],c["b"]]},w=u,d=(s("f5b4"),s("2877")),f=Object(d["a"])(w,a,i,!1,null,"16586808",null);e["a"]=f.exports},be6c:function(t,e,s){"use strict";var a=s("2fa3");e["a"]={getAllUsers:function(){return a["a"].get("/admin/users")},getAllTweets:function(){return a["a"].get("/tweets")},deleteTweet:function(t){return a["a"].delete("/admin/tweets/".concat(t))}}},f5b4:function(t,e,s){"use strict";s("5cfb")}}]);
//# sourceMappingURL=chunk-7aa511e6.5298040e.js.map