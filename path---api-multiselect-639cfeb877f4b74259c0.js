webpackJsonp(["path---api-multiselect"],{"./.cache/json/api-multiselect.json":function(e,t){e.exports={data:{componentMetadata:{displayName:"Multiselect",doclets:{public:!0},composes:["./util/Filter"],props:[{name:"data",defaultValue:{value:"[]",computed:!1},doclets:{},type:{name:"array",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>An array of possible values for the Multiselect.</p>\n<p><strong>Tip:</strong> When <code>data</code> is an array of <code>objects</code> consider specifying\n<code>textField</code> and <code>valueField</code> as well.</p>"}}},{name:"value",defaultValue:{value:"[]",computed:!1},doclets:{},type:{name:"array",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Controls the current value of the Multiselect.</p>"}}},{name:"onChange",defaultValue:null,doclets:{type:"{function (\n dataItems: ?any[],\n metadata: {\n   dataItem: any,\n   action: 'insert' | 'remove',\n   originalEvent: SyntheticEvent,\n   lastValue: ?any[],\n   searchTerm: ?string\n }\n): void}"},type:{name:"function (\n dataItems: ?any[],\n metadata: {\n   dataItem: any,\n   action: 'insert' | 'remove',\n   originalEvent: SyntheticEvent,\n   lastValue: ?any[],\n   searchTerm: ?string\n }\n): void",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>A callback fired when the current <code>value</code> changes.</p>"}}},{name:"searchTerm",defaultValue:{value:"''",computed:!1},doclets:{},type:{name:"string",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Controls the value of the search text used to filter undefined items.\n<code>searchTerm</code> is only applicable when filtering is enabled.</p>\n<p>Use <code>defaultSearchTerm</code> instead to set an initial value for uncontrolled widgets.</p>"}}},{name:"onSearch",defaultValue:null,doclets:{type:"{function (\n searchTerm: ?string,\n metadata: {\n   action: 'clear' | 'input',\n   lastSearchTerm: ?string,\n   originalEvent: SyntheticEvent,\n }\n): void}"},type:{name:"function (\n searchTerm: ?string,\n metadata: {\n   action: 'clear' | 'input',\n   lastSearchTerm: ?string,\n   originalEvent: SyntheticEvent,\n }\n): void",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>A callback fired when the current <code>searchTerm</code> changes.</p>"}}},{name:"open",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Controls the visibility of the Multiselect popup. Use <code>defaultOpen</code>\nto set an initial value for uncontrolled widgets.</p>"}}},{name:"onToggle",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>A callback fired with the Multiselect's popup visibility is about to change.</p>\n<p>Use in conjunction with the <code>open</code> prop to manually control the popup visibility.</p>"}}},{name:"valueField",defaultValue:null,doclets:{},type:{name:"union",value:["string","(dataItem?) => string"],raw:"CustomPropTypes.accessor"},description:{childMarkdownRemark:{html:"<p>A property name that provides the value of the <code>data</code> items.\nThis value is used to uniquely distinigush items from others in the <code>data</code> list.</p>\n<p>Generally, <code>valueField</code> points to an Id field, or other unique identifier.\nWhen not provided, the referential identity of each data item is used.</p>"}}},{name:"textField",defaultValue:null,doclets:{},type:{name:"union",value:["string","(dataItem?) => string"],raw:"CustomPropTypes.accessor"},description:{childMarkdownRemark:{html:"<p>A property name, or accessor function, that provides the text content of the <code>data</code>\nitems. The Multiselect will filter data based on this value as well as use it as the\ndefault display value for list items and selected values.</p>"}}},{name:"tagComponent",defaultValue:null,doclets:{},type:{name:"union",value:["ReactComponent","string"],raw:"CustomPropTypes.elementType"},description:null},{name:"itemComponent",defaultValue:null,doclets:{},type:{name:"union",value:["ReactComponent","string"],raw:"CustomPropTypes.elementType"},description:{childMarkdownRemark:{html:"<p>Customize the rendering of each Multiselect list item.</p>"}}},{name:"listComponent",defaultValue:{value:"List",computed:!0},doclets:{},type:{name:"union",value:["ReactComponent","string"],raw:"CustomPropTypes.elementType"},description:null},{name:"groupComponent",defaultValue:null,doclets:{},type:{name:"union",value:["ReactComponent","string"],raw:"CustomPropTypes.elementType"},description:{childMarkdownRemark:{html:"<p>Customize the rendering of the group headings when <code>groupBy</code> is active.</p>"}}},{name:"groupBy",defaultValue:null,doclets:{},type:{name:"union",value:["string","(dataItem?) => string"],raw:"CustomPropTypes.accessor"},description:{childMarkdownRemark:{html:"<p>To display grouped lists, specify a property name, or accesor function,\nwhose value is used to group the <code>data</code> list.</p>\n<p>The <code>groupBy</code> value is also used as the text for group headings when <code>groupComponent</code>\nis not provided.</p>"}}},{name:"allowCreate",defaultValue:{value:"'onFilter'",computed:!1},doclets:{},type:{name:"enum",value:[{value:"true",computed:!1},{value:"false",computed:!1},{value:"'onFilter'",computed:!1}],raw:null},description:{childMarkdownRemark:{html:"<p>Enables the list option creation UI. <code>onFilter</code> will only the UI when\nactively filtering for a list item.</p>"}}},{name:"onSelect",defaultValue:null,doclets:{type:"{ (dataItem: ?any, metadata: { originalEvent: SyntheticEvent }) => void }"},type:{name:" (dataItem: ?any, metadata: { originalEvent: SyntheticEvent }) => void ",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>This handler fires when an item has been selected from the list. It fires before the <code>onChange</code> handler and fires\nregardless of whether the value has actually changed.</p>"}}},{name:"onCreate",defaultValue:null,doclets:{type:"{ (searchTerm: string) => void }"},type:{name:" (searchTerm: string) => void ",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>This handler fires when the user chooses to create a new list option.\nIt is up to the widget parent to implement creation logic,\na common implementation is shown below, where the new tag is selected\nand added to the data list.</p>"}}},{name:"busy",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Controls the loading/busy spinner visibility. Presentational only! Useful\nfor providing visual feedback while data is being loaded.</p>"}}},{name:"dropUp",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Controls the opening direction of the Multiselect popup.</p>"}}},{name:"popupTransition",defaultValue:null,doclets:{},type:{name:"union",value:["ReactComponent","string"],raw:"CustomPropTypes.elementType"},description:{childMarkdownRemark:{html:"<p>A <code>Transition</code> component from react-transition-group v2. The\nprovided component will be used instead of the default <code>SlideDownTransition</code> for\nfully customizable animations. The transition component is also injected with a\n<code>dropUp</code> prop indicating the direction it should open.</p>"}}},{name:"inputProps",defaultValue:null,doclets:{},type:{name:"object",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>An object of props that is passed directly to the underlying input component.</p>"}}},{name:"listProps",defaultValue:null,doclets:{},type:{name:"object",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>An object of props that is passed directly to the underlying <code>List</code> component.</p>"}}},{name:"autoFocus",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Pass focus to the Multiselect when it mounts.</p>"}}},{name:"placeholder",defaultValue:null,doclets:{},type:{name:"string",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Text to display in the input when the value is empty.</p>"}}},{name:"disabled",defaultValue:null,doclets:{},type:{name:"union",value:["bool","Array"],raw:"CustomPropTypes.disabled.acceptsArray"},description:null},{name:"readOnly",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:"CustomPropTypes.disabled"},description:{childMarkdownRemark:{html:"<p>Controls the read-only state of the Multiselect.</p>"}}},{name:"messages",defaultValue:null,doclets:{},type:{name:"shape",value:{open:{name:"union",raw:"CustomPropTypes.message",required:!1,value:["string","(props?) => string"]},emptyList:{name:"union",raw:"CustomPropTypes.message",required:!1,value:["string","(props?) => string"]},emptyFilter:{name:"union",raw:"CustomPropTypes.message",required:!1,value:["string","(props?) => string"]},createOption:{name:"union",raw:"CustomPropTypes.message",required:!1,value:["string","(props?) => string"]},tagsLabel:{name:"union",raw:"CustomPropTypes.message",required:!1,value:["string","(props?) => string"]},selectedItems:{name:"union",raw:"CustomPropTypes.message",required:!1,value:["string","(props?) => string"]},noneSelected:{name:"union",raw:"CustomPropTypes.message",required:!1,value:["string","(props?) => string"]},removeLabel:{name:"union",raw:"CustomPropTypes.message",required:!1,value:["string","(props?) => string"]}},raw:null},description:{childMarkdownRemark:{html:"<p>Object hash containing display text and/or text for screen readers.\nUse the <code>messages</code> object to localize widget text or provide custom rendering.</p>"}}},{name:"filter",defaultValue:{value:"'startsWith'",computed:!1},doclets:{},type:null,description:{childMarkdownRemark:{html:'<p>Enable and customize filtering behavior for the Multiselect. Specify\none of the built-in methods (<code>"startsWith"</code> <code>"endsWith"</code> <code>"contains"</code>)\nor provide a function that returns <code>true</code> or <code>false</code> for each passed in item\n(analogous to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/filter">array.filter</a> builtin)</p>\n<p>You can explicitly disable filtering by setting <code>filter</code> to <code>false</code>.\nundefined</p>'}}}],description:{childMarkdownRemark:{frontmatter:{shortcuts:[{key:"left arrow",label:"move focus to previous tag"},{key:"right arrow",label:"move focus to next tag"},{key:"delete",label:null},{key:"backspace",label:null},{key:"alt + up arrow",label:"close Multiselect"},{key:"down arrow",label:"open Multiselect"},{key:"up arrow",label:"move focus to previous item"},{key:"home",label:"move focus to first item"},{key:"end",label:"move focus to last item"},{key:"enter",label:"select focused item"},{key:"ctrl + enter",label:"create new tag from current searchTerm"},{key:"any key",label:"search list for item starting with key"}]},html:"<p>A select listbox alternative.</p>"}}}},pathContext:{displayName:"Multiselect",publicComponents:["Calendar","Combobox","DateTimePicker","DropdownList","Multiselect","NumberPicker","SelectList"]}}}});
//# sourceMappingURL=path---api-multiselect-639cfeb877f4b74259c0.js.map