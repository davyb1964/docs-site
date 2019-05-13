(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{211:function(t,e,i){"use strict";i.r(e);var s=i(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("p",[t._v("Use commands in the plugins command group to install and manage plug-ins for Zowe CLI.")]),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("You can install the following plug-ins:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("If you installed Zowe CLI from a registry, confirm that NPM is set to target the registry by issuing the following command:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),i("p",[t._v("Ensure that you meet the software requirements for a plug-in before you install\nthe plug-in to Zowe CLI. For information related to each plug-in,\nsee "),i("router-link",{attrs:{to:"./cli-swreqplugins.html"}},[t._v("Software requirements for Zowe CLI plug-ins")]),t._v(".")],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),i("ul",[i("li",[i("p",[t._m(10),i("br"),t._v("\n(Optional) Specifies the name of a plug-in, an npm package, or a\npointer to a (local or remote) URL. When you do not specify a\nplug-in version, the command installs the latest plug-in version and\nspecifies the prefix that is stored in npm save-prefix. For more\ninformation, see "),i("a",{attrs:{href:"https://docs.npmjs.com/misc/config#save-prefix",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm save prefix"),i("OutboundLink")],1),t._v(". For more\ninformation about npm semantic versioning, see "),i("a",{attrs:{href:"https://docs.npmjs.com/misc/semver",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm semver"),i("OutboundLink")],1),t._v(". Optionally, you can\nspecify a specific version of a plug-in to install. For example, "),i("code",[t._v("zowe plugins install pluginName@^1.0.0")]),t._v(".")]),t._v(" "),t._m(11)]),t._v(" "),t._m(12)]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),i("p",[t._v("Issue the plug-in validation command to run tests against all plug-ins (or against a plug-in that you specify) to verify that the plug-ins integrate properly with Zowe CLI. The tests confirm that the plug-in does not conflict with existing command groups in the base application. The command response provides you with details or error messages about how the plug-ins integrate with Zowe CLI.")]),t._v(" "),i("p",[t._v("Perform validation after you install the plug-ins to help ensure that it integrates with Zowe CLI.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),i("ul",[i("li",[t._m(24),t._v(" "),i("p",[t._v("Specifies the name of an installed plug-in that you want to update.\nThe name of the plug-in is not always the same as the name of the\nNPM package. You can use npm semantic versioning to specify a\nplug-in version to which to update. For more information,\nsee "),i("a",{attrs:{href:"https://docs.npmjs.com/misc/semver",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm semver"),i("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(25)]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),i("p",[i("strong",[t._v("Tip:")]),t._v(" The command is equivalent to using "),i("a",{attrs:{href:"https://docs.npmjs.com/cli/uninstall",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm uninstall"),i("OutboundLink")],1),t._v(" to uninstall a package.")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"installing-plug-ins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Important!")]),this._v(" Plug-ins can gain control of your CLI application\nlegitimately during the execution of every command. Install third-party\nplug-ins at your own risk. We make no warranties regarding\nthe use of third-party plug-ins.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[i("strong",[t._v("Zowe CLI Plug-in for IBM CICS")])]),t._v(" "),i("p",[t._v("Use "),i("code",[t._v("@brightside/cics@lts-incremental")]),t._v(" in your command syntax to install, update, and validate the plug-in.")])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("Zowe CLI Plug-in for IBM Db2 Database")])]),t._v(" "),i("p",[t._v("Use "),i("code",[t._v("@brightside/db2@lts-incremental")]),t._v(" in your command syntax to install, update, and validate the IBM Db2 Database plug-in.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"setting-the-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-registry","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting the registry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you installed Zowe CLI from the zowe-cli-bundle.zip distributed with the Zowe PAX media, proceed to the "),e("a",{attrs:{href:"#installing-plug-ins"}},[this._v("Install step")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm config set @brightside:registry https://api.bintray.com/npm/ca/brightside\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"meeting-the-software-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meeting-the-software-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Meeting the software requirements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installing-plug-ins-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-plug-ins-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Issue an "),e("code",[this._v("install")]),this._v("command to install plug-ins to Zowe CLI. The\n"),e("code",[this._v("install")]),this._v(" command contains the following syntax:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins install [plugin...] [--registry <registry>]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("code",[this._v("[plugin...]")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tip:")]),this._v(" You can install multiple plug-ins with one command. For\nexample, issue "),e("code",[this._v("zowe plugins install plugin1 plugin2 plugin3")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[e("code",[this._v("[--registry <registry>]")])]),e("br"),this._v("\n(Optional) Specifies a registry URL from which to install a plug-in\nwhen you do not use "),e("code",[this._v("npm config set")]),this._v(" to set the registry initially.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Examples: Install plug-ins")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[t._v("The following example illustrates the syntax to use to install a\nplug-in that is distributed with the zowe-cli-bundle.zip.\nIf you are using zowe-cli-bundle.zip, issue the following command for each plug-in .tgz file:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("zowe plugins install ./zowe-cli-cics.tgz \n")])])])]),t._v(" "),i("li",[i("p",[t._v('The following example illustrates the syntax to use to install a\nplug-in that is named "my-plugin" from a specified registry:')]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("zowe plugins install @brightside/my-plugin@lts-incremental\n")])])])]),t._v(" "),i("li",[i("p",[t._v('The following example illustrates the syntax to use to install a\nspecific version of "my-plugins"')]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(' zowe plugins install @brightside/my-plugin@"^1.2.3"\n')])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"validating-plug-ins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validating-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Validating plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("validate")]),this._v(" command has the following syntax:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins validate [plugin]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[e("code",[this._v("[plugin]")])]),e("br"),this._v("\n(Optional) Specifies the name of the plug-in that you want to\nvalidate. If you do not specify a plug-in name, the command\nvalidates all installed plug-ins. The name of the plug-in is not\nalways the same as the name of the NPM package.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Examples: Validate plug-ins")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("The following example illustrates the syntax to use to validate a\nspecified installed plug-in:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins validate @brightside/my-plugin\n")])])])]),this._v(" "),e("li",[e("p",[this._v("The following example illustrates the syntax to use to validate all\ninstalled plug-ins:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins validate\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updating-plug-ins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Issue the "),e("code",[this._v("update")]),this._v(" command to install the latest version or a specific\nversion of a plug-in that you installed previously. The "),e("code",[this._v("update")]),this._v(" command\nhas the following syntax:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins update [plugin...] [--registry <registry>]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[e("code",[this._v("[plugin...]")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[e("code",[this._v("[--registry <registry>]")])])]),this._v(" "),e("p",[this._v("(Optional) Specifies a registry URL that is different from the\nregistry URL of the original installation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Examples: Update plug-ins")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("The following example illustrates the syntax to use to update an\ninstalled plug-in to the latest version:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins update @brightside/my-plugin@lts-incremental\n")])])])]),this._v(" "),e("li",[e("p",[this._v("The following example illustrates the syntax to use to update a\nplug-in to a specific version:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('zowe plugins update @brightside/my-plugin@"^1.2.3"\n')])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"uninstalling-plug-ins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Uninstalling plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Issue the "),e("code",[this._v("uninstall")]),this._v(" command to uninstall plug-ins from a base\napplication. After the uninstall process completes successfully,\nthe product no longer contains the plug-in\nconfiguration.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("uninstall")]),this._v(" command contains the following syntax:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins uninstall [plugin]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[e("code",[this._v("[plugin]")])]),e("br"),this._v("\nSpecifies the plug-in name to uninstall.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example: Uninstall plug-ins")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("The following example illustrates the syntax to use to uninstall a plug-in:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins uninstall @brightside/my-plugin\n")])])])])])}],!1,null,null,null);n.options.__file="cli-installplugins.md";e.default=n.exports}}]);