(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{252:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"sample-vars-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sample-vars-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Sample vars file")]),e._v(" "),n("p",[e._v("A sample "),n("code",[e._v("vars.yml")]),e._v(" file is provided named "),n("code",[e._v("group_vars/all/vars.yml.sample")]),e._v(" that you can use as a model for your own\nvars file. To create a "),n("code",[e._v("vars.yml")]),e._v(" file, you create a new file called "),n("code",[e._v("group_vars/all/vars.yml")]),e._v(" and add entries based on\nthe descriptions in the preceding sections. A sample "),n("code",[e._v("vars.yml")]),e._v(" file is shown below for convenience.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("---\n#\n# OpenShift 4.1 artifacts\n#\nlocal_home: \"{{ lookup('env','HOME') }}\"                        # Local user's HOME directory\ninstall_dir: \"{{ local_home }}/.ocp\"                            # OCP installation dir\nocp_installer_path: \"{{ local_home }}/kits/openshift-install\"   # Path to the OCP installer\nocp_oc_path: \"{{ local_home }}/kits/oc\"                         # Path to the oc client \nocp_kubectl_path: \"{{ local_home }}/kits/kubectl\"               # Path to kubectl client\npull_secret: \"{{ vault.pull_secret }}\"                          # pull secret\n\n#\n# You need a VLAN with transparent access to Internet\n#\nvm_portgroup: hpeOpenshift                                      # portgroup that the VMS connect to (must exist)\ndhcp_subnet: 10.15.152.0/24                                     # subnet to use on the above VLAN (see your net admin)\ngateway: '10.15.152.1'                                          # gateway for the above subnet (see your net admin)\ndomain_name: hpecloud.org                                       # you can keep this\n\n#\n# vcenter related settings\n#\nvcenter_hostname: vcentergen10.am2.cloudra.local                # name of your vCenter server\nvcenter_username: Administrator@vsphere.local                   # Admin user for your vCenter environment\nvcenter_password: '{{ vault.vcenter_password }}'                # Password for the above\nsimplivity_password: '{{ vault.simplivity_password }}'          # not used for now\nvcenter_validate_certs: false                                   # true not implemented/tested\nvcenter_cluster: OCP                                            # Name of your SimpliVity Cluster (must exist)\ndatacenter: DEVOPS                                              # Name of your DATACENTER (must exist)\ndatastores: ['Openshift_HPE']                                   # where to store the VMs (datastore must exist)\ncluster_name: hpe                                               # Name of the K8S Cluster. A VM folder with the same name is created if needed\nntp_servers: ['10.12.2.1']                                      # NTP servers in your environment\ndns_servers: ['10.10.173.1','10.10.173.31']                     # DNS servers in your environment\n\n#\n# folders, templates and OVAs, templates are created using the corresponding OVA if they cannot be found (and only if they cannot be found)\n#\nsupport_folder: 'hpeSupport'                                        # Folder for non-OCP VMs and templates (created if needed)\nmaster_ova_path: '{{ local_home }}/kits/rhcos-4.1.0-x86_64-vmware.ova'          # Path to RHCOS OVA (file is expected to be there)\nworker_ova_path: '{{ master_ova_path }}'                        # Path to the OVA file used to create the VM template for OCP worker nodes\nsupport_ova_path: '{{ local_home }}/kits/hpe-rhel760.ova'                         # Path to the OVA file used to create the VM template for support machines (LBs etc)\nmaster_template: hpe-rhcos                                      # VMware template name for OCP master nodes\nworker_template: '{{ master_template }}'                        # VMware template name for OCP worker nodes (same as master nodes by default, ie RH CoreOS)\nsupport_template: hpe-rhel760                                     # VMware template name for non OCP VMs (such as LBs etc)\n\n#\n# passwordless login\n#\nssh_key: '{{ vault.ssh_key }}'                                  # ssh public key for all VMs, strictly speaking this is public info and should not be in the vault\n\n#\n# Red Hat Network credentials\n#\nrhn_orgid: '{{ vault.rhn_orgid }}'                              # Organization ID associated with RHN account\nrhn_key: '{{ vault.rhn_key }}'                                  # Account Key associated with RHN account\nrhn_user: '{{ vault.rhn_user }}'                                # Username associated with RHN account\nrhn_pass: '{{ vault.rhn_pass }}'                                # Password associated with RHN account\n\n#\n# Load balancer\n#\nfrontend_vm_portgroup: 'extVLAN2968'                            # Name of the portgroup connected to the access/public network\nfrontend_gateway: '10.15.156.1'                                 # Access network gateway\nloadbalancers:\n  apps:\n    vip: 10.15.156.9/24                                         # if omitted, defaults to the internal IP address of the first load balancer (ie no VIP, no HA)\n  backend:\n    vip: 10.15.152.9/24                                         # if ommited, defaults to the internal IP address of the first load balancer (ie no VIP, no HA)\n    interface: ens192                                           # name of the internal/backend interface (ens192 if using RHEL 7.6 and using these playbooks)\n    vrrp_router_id: 51\n  frontend:\n    vip: 10.15.156.9/24                                         # if omitted, defaults to the external IP address of the first load balancer (ie no VIP, no HA)\n    interface: ens224                                           # name of the external/frontend interface (ens224 if RHEL 7.6 and using these playbooks)\n    vrrp_router_id: 51\n\n#\n# Number of NFS Shares to create, you can use these shares to create Persistent Volumes\n#\nnumber_of_nfs_shares: 5                                         # The image registry requires one NFS share, shares are named /srv/share0, /srv/share1 etc..\n\n#\n# LDAP integration\n#\nldap_bind_user_dn: \"cn=adreader,cn=Users,dc=am2,dc=cloudra,dc=local\"       # DN of the user you use to bind with the LDAP service\nldap_bind_user_password: \"{{ vault.ldap_bind_user_password }}\"             # password for the user above, the real password is encrypted in the vault file\n\n#\n# OpenShift-Ansible Playbook\n#\nocp_repo_directory: \"{{ local_home }}/openshift-ansible\"        # OpenShift-Ansible repository directory\n\n#\n# backup related settings\n#\nbackup_directory: \"{{ local_home }}/backups\"                    # will be created if needed\nbackup_artifacts:                                               # additional items to save in a backup\n- \"{{ install_dir }}\"\n- ./group_vars/\n- ./hosts\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);