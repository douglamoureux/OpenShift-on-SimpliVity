(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{244:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"inventory-group-variables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inventory-group-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Inventory group variables")]),e._v(" "),r("h2",{attrs:{id:"group-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#group-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Group files")]),e._v(" "),r("p",[e._v("The following files, in the "),r("code",[e._v("group_vars")]),e._v(" folder, contain variable definitions for each group  of OCP cluster nodes.\nThese group files facilitate more sophisticated settings, such as additional network interfaces.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("group_vars/bootstrap.yml")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Variables defined for the node in the "),r("code",[e._v("[bootstrap]")]),e._v(" group")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("group_vars/infrastructure.yml")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Variables defined for all nodes in the "),r("code",[e._v("[infrastructure]")]),e._v(" group")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("group_vars/loadbalancer.yml")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Variables defined for all nodes in the "),r("code",[e._v("[loadbalancer]")]),e._v(" group")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("group_vars/nfs.yml")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Variables defined for all nodes in the "),r("code",[e._v("[nfs]")]),e._v(" group")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("group_vars/master.yml")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Variables defined for all nodes in the "),r("code",[e._v("[master]")]),e._v(" group")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("group_vars/rhcos_worker.yml")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Variables defined for all nodes in the "),r("code",[e._v("[rhcos_worker]")]),e._v(" group")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("group_vars/rhel_worker.yml")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Variables defined for all nodes in the "),r("code",[e._v("[rhel_worker]")]),e._v(" group")])])])]),e._v(" "),r("h2",{attrs:{id:"overriding-group-variables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overriding-group-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Overriding group variables")]),e._v(" "),r("p",[e._v("If you wish to configure individual nodes with different specifications to the ones defined by the group, it is possible to declare the same variables at the node level, overriding the group value. For exanple, if the default CPU and memory resource limits defined in for your worker nodes in the "),r("code",[e._v("group_vars/worker.yml")]),e._v(" file are not sufficient for all worker nodes, you can override these values in their respective "),r("code",[e._v("hosts")]),e._v(" entries.  For example, if these are the CPU, RAM, and disk limits specified at the group level:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cpus: '4'                                               # Number of vCPUs\nram: '16384'                                            # RAM size in MBs\ndisk1_size: '120'                                       # Disk size in GBs\n")])])]),r("p",[e._v("you can override these values in the individual node entries in the "),r("code",[e._v("hosts")]),e._v(" file:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[rhcos_worker]\nocp-worker0   ansible_host=10.15.155.213\nocp-worker1   ansible_host=10.15.155.214\nocp-worker2   ansible_host=10.15.155.215  cpus=8 ram=32768  # Larger worker node for EFK\nocp-worker3   ansible_host=10.15.155.216  cpus=8 ram=32768  # Larger worker node for EFK\nocp-worker4   ansible_host=10.15.155.217  cpus=8 ram=32768  # Larger worker node for EFK\n")])])]),r("p",[e._v("In the example above, three CoreOS worker nodes ("),r("code",[e._v("ocp-worker2")]),e._v(", "),r("code",[e._v("ocp-worker3")]),e._v(", "),r("code",[e._v("ocp-worker4")]),e._v(")  are allocated  two times more virtual CPU cores and double the RAM compared to the rest of the CoreOS worker nodes.")]),e._v(" "),r("h2",{attrs:{id:"common-variables-across-all-groups"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#common-variables-across-all-groups","aria-hidden":"true"}},[e._v("#")]),e._v(" Common variables across all groups")]),e._v(" "),r("p",[e._v("The following variables apply to all node groups:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Scope")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("ip_addr")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("All nodes")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("IP address in CIDR format to be given to a node")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("esxi_host")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("All nodes")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("ESXi host where the node will be deployed. If the cluster is configured with DRS, this option will be overridden")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("cpus")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("All nodes/groups")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Number of virtual CPU cores to assign to a VM or a group of VMs")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("ram")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("All nodes/groups")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Amount of RAM in MB to assign to a VM or a group of VMs")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("disk1_size")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("All nodes/groups")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Size of the disk in GB to attach to a VM or a group of VMs.")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("folder")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("All nodes/groups")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("The folder where the VM will be stored")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("template")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("All nodes/groups")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Override the default template for the node or group. "),r("br"),r("br"),e._v("The Bootstrap node ("),r("code",[e._v("[bootstrap]")]),e._v(" uses the CoreOS template specified by "),r("code",[e._v("<<master_template>>")]),e._v("."),r("br"),r("br"),e._v("Infrastructure and supporting nodes ("),r("code",[e._v("[infrastructure]")]),e._v(", "),r("code",[e._v("[loadbalancer]")]),e._v(", "),r("code",[e._v("[nfs]")]),e._v(") use the RHEL template specified by "),r("code",[e._v("<<infra_template>>")]),e._v(" by default. "),r("br"),r("br"),e._v("The master nodes ("),r("code",[e._v("[master]")]),e._v(") use the CoreOS template specified by "),r("code",[e._v("<<master_template>>")]),e._v(". "),r("br"),r("br"),e._v("The CoreOS worker nodes ("),r("code",[e._v("[rhcos_worker]")]),e._v(") use  the CoreOS template specified by "),r("code",[e._v("<<worker_template>>")]),e._v(", which is typically the same as <<master_template>>."),r("br"),r("br"),e._v("For RHEL worker nodes ("),r("code",[e._v("[rhel_worker]")]),e._v("), you should set the group default to name of the RHEL template you typically use.")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("ova_path")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("All nodes/groups")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Name of the OVA used to import the template. "),r("br"),r("br"),e._v("The Bootstrap node ("),r("code",[e._v("[bootstrap]")]),e._v(" uses the CoreOS OVA specified by "),r("code",[e._v("<<master_ova_path>>")]),e._v("."),r("br"),r("br"),e._v("Infrastructure and supporting nodes ("),r("code",[e._v("[infrastructure]")]),e._v(", "),r("code",[e._v("[loadbalancer]")]),e._v(", "),r("code",[e._v("[nfs]")]),e._v(") use the RHEL OVA specified by "),r("code",[e._v("<<infra_ova_path>>")]),e._v(" by default. "),r("br"),r("br"),e._v("The master nodes ("),r("code",[e._v("[master]")]),e._v(") use the CoreOS OVA specified by "),r("code",[e._v("<<master_ova_path>>")]),e._v(". "),r("br"),r("br"),e._v("The CoreOS worker nodes ("),r("code",[e._v("[rhcos_worker]")]),e._v(") use  the CoreOS OVA specified by "),r("code",[e._v("<<worker_ova_path>>")]),e._v(", which is typically the same as "),r("code",[e._v("<<master_template>>")]),e._v("."),r("br"),r("br"),e._v("For RHEL worker nodes ("),r("code",[e._v("[rhel_worker]")]),e._v("), you should set the group default to name of the RHEL OVA you typically use.")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);