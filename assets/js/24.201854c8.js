(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{254:function(e,a,r){"use strict";r.r(a);var s=r(0),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"sample-vault-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sample-vault-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Sample vault file")]),e._v(" "),r("p",[e._v("A vault file is used to protect any sensitive variables that should not appear in clear text in your "),r("code",[e._v("group_vars/all/vars.yml")]),e._v(" file. The vault file will be encrypted and will require a password to be entered before it can be read or updated.")]),e._v(" "),r("p",[e._v("A sample vault file is provided named "),r("code",[e._v("group_vars/all/vault.sample")]),e._v(" that you can use as a model for your own vault file. To create a vault, you create a new file called "),r("code",[e._v("group_vars/all/vault.yml")]),e._v(" and add entries similar to:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("---\nvault:\n  vcenter_password: 'YourvCenterAdminPassword'\n  simplivity_password: 'YourvCenterAdminPassword'\n  rhn_orgid: 'YourRHNOrgId'\n  rhn_key: 'YourRHNkey'\n  rhn_user: 'YourRHNuser'\n  rhn_pass: 'YourRHNpassword'\n  pull_secret: '...  replace with your pull secret  ...'\n  ssh_key: '...  replace with your ssh public key  ...'\n  ldap_bind_user_password: 'password of LDAP user used for binding with LDAP'\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);