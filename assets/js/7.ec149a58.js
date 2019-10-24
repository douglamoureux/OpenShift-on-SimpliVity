(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{201:function(e,n,a){e.exports=a.p+"assets/img/nginx-example-frontend.b3a5c3b4.png"},242:function(e,n,a){"use strict";a.r(n);var t=a(0),o=Object(t.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"configuring-external-routes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-external-routes","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring external routes")]),e._v(" "),t("p",[e._v("The application you deployed in the previous section is available via the backend (internal) network.\nThe route created for the example application uses the application name "),t("code",[e._v("my-nginx-example")]),e._v(",\nthe cluster name "),t("code",[e._v("ocp")]),e._v(" and the domain name "),t("code",[e._v("hpecloud.org")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://my-nginx-example-my-nginx-example.apps.ocp.hpecloud.org\n")])])]),t("p",[e._v("However, it is more likely that you will want  users to access applications via the frontend (external) network.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("loadbalancers")]),e._v(" variable is used to define the internal and external networking configuration. A virtual IP (VIP) is\nspecified for external access to applications, and also for external (frontend) and internal (backend) access to the OCP\nAPI. The following "),t("code",[e._v("loadbalancers")]),e._v(" definition will be used in the subsequent configuration.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("loadbalancers:\n  apps:\n    vip: 10.15.156.42/24\n  frontend:\n    vip: 10.15.155.9/24\n    interface: ens192\n    vrrp_router_id: 51\n  frontend:\n    vip: 10.15.156.42/24\n    interface: ens224\n    vrrp_router_id: 51\n")])])]),t("p",[e._v("In this example, we assume the domain name "),t("code",[e._v("cloudra.local")]),e._v(" is used for external access to resources and services.\nThe DNS zone used to manage records for this specific cluster is "),t("code",[e._v("ocp.cloudra.local")]),e._v(".")]),e._v(" "),t("p",[e._v("You must configure the DNS resolver used by your external users - the provided playbooks will not do this for you.")]),e._v(" "),t("ul",[t("li",[e._v("If you want users to be able to access the OpenShift API externally, you must configure "),t("code",[e._v("api.ocp.cloudra.local")]),e._v(" so that it resolves to the VIP of the load balancer on the frontend network, in this example: "),t("code",[e._v("10.15.156.42")]),e._v(".")]),e._v(" "),t("li",[e._v("For external access to all your applications, you must create a wildcard record in the "),t("code",[e._v("ocp.cloudra.local")]),e._v(" domain for "),t("code",[e._v("*.apps")]),e._v(" pointing to the same VIP "),t("code",[e._v("10.15.156.42")]),e._v(".")])]),e._v(" "),t("p",[e._v("For the above example, the DNS records would look like:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(";\n;  Database file ocp.cloudra.local.dns for ocp.cloudra.local zone.\n\n;\n;  Zone records\n;\n\napi                     A\t10.15.156.42\n*.apps                  A\t10.15.156.42\n")])])]),t("p",[e._v("In the above example, where the DNS service is running on Windows, the file resides at  "),t("code",[e._v("C:\\Windows\\System32\\dns\\ocp.cloudra.local.dns")]),e._v(".")]),e._v(" "),t("p",[e._v("Now, create an Ingress resource for your sample application. This allows connections from an external client to be routed to your application by connecting to the application DNS name "),t("code",[e._v("my-nginx-example.apps.ocp.cloudra.local")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cat ingress-my-nginx-example.yaml\n\napiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: my-nginx-example\n  namespace: my-nginx-example\nspec:\n  rules:\n  - host: my-nginx-example.apps.ocp.cloudra.local\n    http:\n      paths:\n      - backend:\n          serviceName: my-nginx-example\n          servicePort: 8080\n        path: /\n")])])]),t("p",[e._v("Apply the ingress definition:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc apply -f ingress-my-nginx-example.yaml\n\ningress.extensions/my-nginx-example created\n")])])]),t("p",[e._v("Now, when you run "),t("code",[e._v("oc get routes")]),e._v(", you will see that a new route has been created for external access:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get routes\n\nNAME                     HOST/PORT                                                 PATH   SERVICES           PORT  \nmy-nginx-example         my-nginx-example-my-nginx-example.apps.ocp.hpecloud.org          my-nginx-example   <all> \nmy-nginx-example-rvlhc   my-nginx-example.apps.ocp.cloudra.local                   /      my-nginx-example   8080  \n")])])]),t("p",[e._v("Users can now access the application from the external network using the URL "),t("code",[e._v("http://my-nginx-example.apps.ocp.cloudra.local/")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(201),alt:'"Nginx example - frontend network"',title:"Figure. Nginx example - frontend network"}})]),e._v(" "),t("p",[t("strong",[e._v("Figure. Nginx example - frontend network")])])])}),[],!1,null,null,null);n.default=o.exports}}]);