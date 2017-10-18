"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var _collectionLi=require("mvc/collection/collection-li"),_collectionLi2=_interopRequireDefault(_collectionLi),_datasetLiEdit=require("mvc/dataset/dataset-li-edit"),_datasetLiEdit2=_interopRequireDefault(_datasetLiEdit),_baseMvc=require("mvc/base-mvc"),_baseMvc2=_interopRequireDefault(_baseMvc),_localization=require("utils/localization"),_localization2=_interopRequireDefault(_localization),DCListItemView=_collectionLi2.default.DCListItemView,DCListItemEdit=DCListItemView.extend({initialize:function(t){DCListItemView.prototype.initialize.call(this,t)},toString:function(){return"DCListItemEdit("+(this.model?this.model+"":"(no model)")+")"}}),DCEListItemView=_collectionLi2.default.DCEListItemView,DCEListItemEdit=DCEListItemView.extend({initialize:function(t){DCEListItemView.prototype.initialize.call(this,t)},toString:function(){return"DCEListItemEdit("+(this.model?this.model+"":"(no model)")+")"}}),DatasetDCEListItemEdit=_datasetLiEdit2.default.DatasetListItemEdit.extend({initialize:function(t){_datasetLiEdit2.default.DatasetListItemEdit.prototype.initialize.call(this,t)},_fetchModelDetails:function(){var t=this;return t.model.inReadyState()&&!t.model.hasDetails()?t.model.fetch({silent:!0}):jQuery.when()},_renderDeleteButton:function(){return null},toString:function(){return"DatasetDCEListItemEdit("+(this.model?this.model+"":"(no model)")+")"}});DatasetDCEListItemEdit.prototype.templates=_.extend({},_datasetLiEdit2.default.DatasetListItemEdit.prototype.templates,{titleBar:_collectionLi2.default.DatasetDCEListItemView.prototype.templates.titleBar});var NestedDCDCEListItemEdit=_collectionLi2.default.NestedDCDCEListItemView.extend({toString:function(){return"NestedDCDCEListItemEdit("+(this.model?this.model+"":"(no model)")+")"}});exports.default={DCListItemEdit:DCListItemEdit,DCEListItemEdit:DCEListItemEdit,DatasetDCEListItemEdit:DatasetDCEListItemEdit,NestedDCDCEListItemEdit:NestedDCDCEListItemEdit};
//# sourceMappingURL=../../../maps/mvc/collection/collection-li-edit.js.map
