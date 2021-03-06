/*-------------------------------------------------------------------------------------------------
 - Project:   Sproutcore WYSIWYG                                                                  -
 - Copyright: ©2012 Matygo Educational Incorporated operating as Learndot                         -
 - Author:    Joe Gaudet (joe@learndot.com) and contributors (see contributors.txt)               -
 - License:   Licensed under MIT license (see license.js)                                         -
 -------------------------------------------------------------------------------------------------*/
/*globals SproutCoreWysiwyg */
sc_require('panes/wysiwyg_command_picker_pane');
SC.WYSIWYGLinkPickerPane = SC.WYSIWYGPickerPane.extend({

	layout: {
		height: 128,
		width: 260
	},

	contentView: SC.View.extend({
		childViews: [ 'linkText', 'url', 'ok', 'cancel' ],

		becomeFirstResponder: function() {
			if (this.getPath('pane.command.linkText')) {
				this.get('url').becomeFirstResponder();
			}
			else {
				this.get('linkText').becomeFirstResponder();
			}
		},

		linkText: SC.TextFieldView.extend({
			hint: 'Link Text',
			valueBinding: '.pane.command.linkText',
			layout: {
				top: 5,
				left: 5,
				right: 5,
				height: 40,
			}
		}),

		url: SC.TextFieldView.extend({
			hint: 'Link Url',
			valueBinding: '.pane.command.url',
			layout: {
				top: 50,
				left: 5,
				right: 5,
				height: 40,
			}
		}),

		ok: SC.ButtonView.extend(SC.AutoResize, {
			layout: {
				bottom: 5,
				left: 5,
				height: 28
			},
			title: 'Ok',
			isDefault: YES,
			action: 'ok',
			target: SC.outlet('pane')
		}),

		cancel: SC.ButtonView.extend(SC.AutoResize, {
			layout: {
				bottom: 5,
				right: 5,
				height: 28
			},
			title: 'Cancel',
			action: 'cancel',
			target: SC.outlet('pane')
		})
	})
});
