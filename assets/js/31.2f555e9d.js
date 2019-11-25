(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{238:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"initial-cluster-deployment-using-site-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-cluster-deployment-using-site-yml","aria-hidden":"true"}},[e._v("#")]),e._v(" Initial cluster deployment using "),a("code",[e._v("site.yml")])]),e._v(" "),a("p",[e._v("Once you have configured all of the variables and vault parameters to match your environment, run the\nplaybook "),a("code",[e._v("site.yml")]),e._v(" to perform the initial cluster deployment:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/OpenShift-on-SimpliVity\n$ ansible-playbook -i hosts site.yml --vault-password-file .vault_pass\n")])])]),a("p",[a("code",[e._v("site.yml")]),e._v(" is a wrapper for a number of playblooks that perform different functions:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ansible-playbook -i hosts playbooks/prepare.yml\nansible-playbook -i hosts playbooks/provision.yml\nansible-playbook -i hosts playbooks/configure.yml\nansible-playbook -i hosts playbooks/poweron.yml\nansible-playbook -i hosts playbooks/finish.yml\n")])])]),a("h2",{attrs:{id:"prepare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare","aria-hidden":"true"}},[e._v("#")]),e._v(" Prepare")]),e._v(" "),a("p",[e._v("The preparation stage includes the following tasks:")]),e._v(" "),a("ul",[a("li",[e._v("Install client tools")]),e._v(" "),a("li",[e._v("Create support and cluster folders in vCenter to house the VMs")]),e._v(" "),a("li",[e._v("Populate "),a("code",[e._v("/etc/hosts")]),e._v(" file on the Ansible controller node")]),e._v(" "),a("li",[e._v("Configure and start an HTTP server on Ansible controller node")]),e._v(" "),a("li",[e._v("Set up custom firewall rules")])]),e._v(" "),a("h2",{attrs:{id:"provision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provision","aria-hidden":"true"}},[e._v("#")]),e._v(" Provision")]),e._v(" "),a("p",[e._v("The provision stage includes the following tasks:")]),e._v(" "),a("ul",[a("li",[e._v("Prepare OCP Ignition data files")]),e._v(" "),a("li",[e._v("Provision the bootstrap, master and CoreOS worker nodes")]),e._v(" "),a("li",[e._v("Provision and power on supporting nodes, including DNS/DHCP, load balancers and NFS")])]),e._v(" "),a("h2",{attrs:{id:"configure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure")]),e._v(" "),a("p",[e._v("The configuration phase consists of:")]),e._v(" "),a("ul",[a("li",[e._v("Configuring anti-affinity DRS rules")]),e._v(" "),a("li",[e._v("Configuring supporting nodes including DNS/DHCP, load balancer and NFS nodes.")]),e._v(" "),a("li",[e._v("Configure VM disks and RedHat subscription.")])]),e._v(" "),a("h2",{attrs:{id:"power-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power-on","aria-hidden":"true"}},[e._v("#")]),e._v(" Power on")]),e._v(" "),a("p",[e._v("This stage powers on any nodes that have not already been started. It waits for the OpenShift API server port on the master nodes to be ready and checks that access to port 22 is available on other nodes.")]),e._v(" "),a("h2",{attrs:{id:"finish"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finish","aria-hidden":"true"}},[e._v("#")]),e._v(" Finish")]),e._v(" "),a("p",[e._v("A number of tasks are performed after powering on the nodes to ensure that the cluster has been successfully deployed:")]),e._v(" "),a("ul",[a("li",[e._v("Wait until the OpenShift installer reports that bootstrap is complete")]),e._v(" "),a("li",[e._v("Approve any pending Certificate Signing Requests (CSR)")]),e._v(" "),a("li",[e._v("Wait for the image registry to be ready and configure persistent volumes for the NFS server")]),e._v(" "),a("li",[e._v("Verify that all the cluster operators are available")]),e._v(" "),a("li",[e._v("Wait for the OCP cluster to report installation is complete")])])])}),[],!1,null,null,null);t.default=o.exports}}]);