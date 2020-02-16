(this.webpackJsonppmtool_client_tool=this.webpackJsonppmtool_client_tool||[]).push([[0],{46:function(e,t,a){e.exports=a(80)},51:function(e,t,a){},52:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(25),o=a.n(c),s=(a(51),a(52),a(4)),l=a(5),i=a(7),m=a(6),u=a(8),p=a(9),d=a(1),h=a(3),v=a.n(h),E=a(12),b=a.n(E),f=function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(b.a.post("/api/project",e));case 3:t.push("/dashboard"),r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),a({type:"GET_ERRORS",payload:r.t0.response.data});case 9:case"end":return r.stop()}}),null,null,[[0,6]])}},j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.project;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description," ")),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board "))),n.a.createElement(p.b,{to:"/updateProject/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),n.a.createElement("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project ")))))))}}]),t}(r.Component),g=Object(d.b)(null,{deleteProject:function(e){return function(t){return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure you want to delete the `"+e+"` project?")){a.next=10;break}return a.prev=1,a.next=4,v.a.awrap(b.a.delete("/api/project/".concat(e)));case 4:t({type:"DELETE_PROJECT",payload:e}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),alert(a.t0.message);case 10:case"end":return a.stop()}}),null,null,[[1,7]])}}})(j),y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},N=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(y,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e){return n.a.createElement(g,{key:e.id,project:e})}))))))}}]),t}(r.Component),k=Object(d.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(b.a.get("/api/project/all"));case 2:t=a.sent,e({type:"GET_PROJECTS",payload:t.data});case 4:case"end":return a.stop()}}))}}})(N),O=function(e){e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization},C=a(27),w=a.n(C),S=function(){return function(e){localStorage.removeItem("jwtToken"),O(!1),e({type:"SET_CURENT_USER",payload:{}})}},P=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},n.a.createElement("i",{className:"fas fa-user-circle mr-1"}),r.fullName)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this)},"Logout")))),o=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/register"},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/login"},"Login"))));return e=a&&r?c:o,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),e))}}]),t}(r.Component),D=Object(d.b)((function(e){return{security:e.security}}),{logout:S})(P),x=(a(79),a(23)),T=a(14),_=a(10),R=a(11),I=a.n(R),A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},e.onChange=e.onChange.bind(Object(_.a)(e)),e.onSubmit=e.onSubmit.bind(Object(_.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},e.summary&&n.a.createElement("div",{className:"invalid-feedback"},e.summary),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg ",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:I()("form-control form-control-lg ",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"startDate",value:this.state.startDate,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"endDate",value:this.state.endDate,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),G=Object(d.b)((function(e){return{errors:e.errors}}),{createProject:f})(A),U=a(20),B=a(44),L={},q=a(18),M={projects:[],project:{}},J={project_tasks:[],project_task:{}},W={validToken:!1,user:{}},K=Object(U.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":case"CLEAR_ERRORS":return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(q.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(q.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(q.a)({},e,{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(q.a)({},e,{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(q.a)({},e,{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(q.a)({},e,{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURENT_USER":return Object(q.a)({},e,{validToken:!!t.payload,user:t.payload});default:return e}}}),F={},H=[B.a],X=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),V=window.navigator.userAgent.includes("Chrome")&&X?Object(U.e)(K,F,Object(U.d)(U.a.apply(void 0,H),X)):Object(U.e)(K,F,Object(U.d)(U.a.apply(void 0,H))),z=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={id:"",projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},e.onChange=e.onChange.bind(Object(_.a)(e)),e.onSubmit=e.onSubmit.bind(Object(_.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.createProject(t,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.project&&this.setState(Object(q.a)({},e.project)),e.errors&&this.setState({errors:e.errors});case 2:case"end":return t.stop()}}),null,this)}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Update Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg ",{"is-invalid":e.projectName}),name:"projectName",placeholder:"Project Name",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",name:"projectIdentifier",placeholder:"Unique Project ID",disabled:!0,value:this.state.projectIdentifier})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:I()("form-control form-control-lg ",{"is-invalid":e.description}),name:"description",placeholder:"Project Description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"startDate",value:this.state.startDate,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"endDate",value:this.state.endDate,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),$=Object(d.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(a){var r;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(b.a.get("/api/project/".concat(e)));case 3:r=n.sent,a({type:"GET_PROJECT",payload:r.data}),a({type:"CLEAR_ERRORS",payload:{}}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t.push("/dashboard");case 11:case"end":return n.stop()}}),null,null,[[0,8]])}},createProject:f})(z),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onDeleteClick=a.onDeleteClick.bind(Object(_.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onDeleteClick",value:function(e){e.preventDefault();var t=this.props.project_task,a=t.projectIdentifier,r=t.projectSequence;this.props.deleteProjectTask(a,r,this.props.history)}},{key:"render",value:function(){var e,t,a=this.props.project_task;switch(a.priority){case 1:e="HIGH",t="bg-danger text-light";break;case 2:e="MEDIUM",t="bg-warning text-light";break;case 3:e="LOW",t="bg-info text-light"}return n.a.createElement("div",null,n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",a.projectSequence," -- Priority: ",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(p.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{onClick:this.onDeleteClick,className:"btn btn-danger ml-4"},"Delete"))))}}]),t}(r.Component),Y=Object(d.b)(null,{deleteProjectTask:function(e,t,a){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.confirm("Are you sure you want to delete the `"+t+"` task?")){r.next=4;break}return r.next=3,v.a.awrap(b.a.delete("/api/backlog/".concat(e,"/").concat(t)));case 3:a({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return r.stop()}}))}}})(Q),Z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.project_tasks_prop,t=[],a=[],r=[],c=!0,o=!1,s=void 0;try{for(var l,i=e[Symbol.iterator]();!(c=(l=i.next()).done);c=!0){var m=l.value;switch(m.status){case"TO_DO":t.push(m);break;case"IN_PROGRESS":a.push(m);break;case"DONE":r.push(m)}}}catch(u){o=!0,s=u}finally{try{c||null==i.return||i.return()}finally{if(o)throw s}}return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),t.map((function(e){return n.a.createElement(Y,{key:e.id,project_task:e})}))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),a.map((function(e){return n.a.createElement(Y,{key:e.id,project_task:e})}))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),r.map((function(e){return n.a.createElement(Y,{key:e.id,project_task:e})}))))))}}]),t}(r.Component),ee=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={errors:{}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t,a=this.props.match.params.id;e=function(e,t){return e.length<1?t.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},t.projectNotFound):t.projectIdentifier?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},t.projectIdentifier):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Tasks on this project board."):n.a.createElement(Z,{key:a,project_tasks_prop:e})}(this.props.backlog.project_tasks,this.state.errors);return t=function(e,t){if(!t.projectNotFound&&!t.projectIdentifier)return n.a.createElement(p.b,{to:"/addProjectTask/".concat(e),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task"))}(a,this.state.errors),n.a.createElement("div",{className:"container"},t,n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),t}(r.Component),te=Object(d.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(t){var a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(b.a.get("/api/backlog/".concat(e)));case 3:a=r.sent,t({type:"GET_BACKLOG",payload:a.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),t({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(ee),ae=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={summary:"",acceptanceCriteria:"",status:"TO_DO",priority:3,dueDate:"",errors:{}},a.onChange=a.onChange.bind(Object(_.a)(a)),a.onSubmit=a.onSubmit.bind(Object(_.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.props.match.params.id,a={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.createProjectTask(t,a,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",onChange:this.onChange}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),re=Object(d.b)((function(e){return{errors:e.errors}}),{createProjectTask:function(e,t,a){return function(r){return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(b.a.post("/api/backlog/".concat(e),t));case 3:a.push("/projectBoard/".concat(e)),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),r({type:"GET_ERRORS",payload:n.t0.response.data});case 9:case"end":return n.stop()}}),null,null,[[0,6]])}}})(ae),ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",createdAt:"",projectIdentifier:"",errors:{}},a.onChange=a.onChange.bind(Object(_.a)(a)),a.onSubmit=a.onSubmit.bind(Object(_.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_sequence;this.props.getProjectTask(t,a,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"componentWillReceiveProps",value:function(e){var t=e.project_task;this.setState({id:t.id,projectSequence:t.projectSequence,summary:t.summary,acceptanceCriteria:t.acceptanceCriteria,status:t.status,priority:t.priority,dueDate:t.dueDate})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,createdAt:this.state.createdAt,projectIdentifier:this.state.projectIdentifier},a=this.props.match.params,r=a.backlog_id,n=a.pt_sequence;this.props.updateProjectTask(r,n,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors,t=this.props.match.params.backlog_id;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(t),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",onChange:this.onChange,value:this.state.summary}),e.summary&&n.a.createElement("div",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",onChange:this.onChange,value:this.state.acceptanceCriteria})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",onChange:this.onChange,value:this.state.dueDate})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",onChange:this.onChange,value:this.state.priority},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",onChange:this.onChange,value:this.state.status},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),ce=Object(d.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(r){var n;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(b.a.get("/api/backlog/".concat(e,"/").concat(t)));case 3:n=c.sent,r({type:"GET_PROJECT_TASK",payload:n.data}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),a.push("/dashboard");case 10:case"end":return c.stop()}}),null,null,[[0,7]])}},updateProjectTask:function(e,t,a,r){return function(n){return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(b.a.patch("/api/backlog/".concat(e,"/").concat(t),a));case 3:r.push("/projectBoard/".concat(e)),c.next=9;break;case 6:c.prev=6,c.t0=c.catch(0),n({type:"GET_ERRORS",payload:c.t0.response.data});case 9:case"end":return c.stop()}}),null,null,[[0,6]])}}})(ne),oe=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start you own"),n.a.createElement("hr",null),n.a.createElement(p.b,{to:"/register",className:"btn btn-lg btn-primary mr-2"},"Sign Up"),n.a.createElement(p.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),t}(r.Component),se=Object(d.b)((function(e){return{security:e.security}}),null)(oe),le=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={fullName:"",username:"",password:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object(_.a)(e)),e.onSubmit=e.onSubmit.bind(Object(_.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={fullName:this.state.fullName,username:this.state.username,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg ",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",onChange:this.onChange,value:this.state.fullName}),e.fullName&&n.a.createElement("div",{className:"invalid-feedback"},e.fullName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:I()("form-control form-control-lg ",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",onChange:this.onChange,value:this.state.username}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:I()("form-control form-control-lg ",{"is-invalid":e.password}),placeholder:"Password",name:"password",onChange:this.onChange,value:this.state.password}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:I()("form-control form-control-lg ",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",onChange:this.onChange,value:this.state.confirmPassword}),e.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),ie=Object(d.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(b.a.post("/api/users/register",e));case 3:t.push("/login"),a({type:"GET_ERRORS",payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(le),me=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(_.a)(e)),e.onSubmit=e.onSubmit.bind(Object(_.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:I()("form-control form-control-lg ",{"is-invalid":e.username}),placeholder:"Email Address",value:this.state.username,name:"username",onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:I()("form-control form-control-lg ",{"is-invalid":e.password}),placeholder:"Password",value:this.state.password,name:"password",onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),ue=Object(d.b)((function(e){return{errors:e.errors,security:e.security}}),{login:function(e){return function(t){var a,r,n;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(b.a.post("/api/users/login",e));case 3:a=c.sent,r=a.data.token,localStorage.setItem("jwtToken",r),O(r),n=w()(r),t({type:"SET_CURENT_USER",payload:n}),t({type:"CLEAR_ERRORS",payload:{}}),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),t({type:"GET_ERRORS",payload:c.t0.response.data});case 15:case"end":return c.stop()}}),null,null,[[0,12]])}}})(me),pe=a(45),de=Object(d.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(pe.a)(e,["component","security"]);return n.a.createElement(x.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(x.a,{to:"/login"})}}))})),he=localStorage.jwtToken;if(he){O(he);var ve=w()(he);V.dispatch({type:"SET_CURENT_USER",payload:ve});var Ee=Date.now()/1e3;ve.exp<Ee&&(V.dispatch(S()),window.location.href="/")}var be=function(){return n.a.createElement(d.a,{store:V},n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(D,null),n.a.createElement(x.b,{exact:!0,path:"/",component:se}),n.a.createElement(x.b,{exact:!0,path:"/register",component:ie}),n.a.createElement(x.b,{exact:!0,path:"/login",component:ue}),n.a.createElement(x.d,null,n.a.createElement(de,{exact:!0,path:"/dashboard",component:k}),n.a.createElement(de,{exact:!0,path:"/addProject",component:G}),n.a.createElement(de,{exact:!0,path:"/updateProject/:id",component:$}),n.a.createElement(de,{exact:!0,path:"/projectBoard/:id",component:te}),n.a.createElement(de,{exact:!0,path:"/addProjectTask/:id",component:re}),n.a.createElement(de,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_sequence",component:ce})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.8ed46ca5.chunk.js.map