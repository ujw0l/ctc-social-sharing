/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {

	keywords: [__('Social Bar', 'ctc-social-sharing'), __('Social Sharing', 'ctc-social-sharing')],

	attributes: {
        socialOptions: {
            type: 'array',
            default: [
                { name: 'Facebook', href: 'https://www.facebook.com/sharer/sharer.php?u=' },
                { name: "Twitter", href: 'http://twitter.com/share?url=' },
                { name: 'Linkedin', href: 'http://www.linkedin.com/cws/share?url=' },
                { name: "Pinterest", href: "http://pinterest.com/pin/create/link/?url=" },
                { name: "Reddit", href: "http://www.reddit.com/submit?url=" },
				{name:"Whatsapp",href:"https://api.whatsapp.com/send?text="}
            ]
        },
        socialOptionsInput: {
            type: 'array',
            default: [
                { name: 'Facebook', href: 'https://www.facebook.com/sharer/sharer.php?u=', checked: true, icon: 'dashicons-facebook-alt'},
                { name: "Twitter", href: 'http://twitter.com/share?url=', checked: true, icon:'dashicons-twitter' },
                { name: 'Linkedin', href: 'http://www.linkedin.com/cws/share?url=', checked: true, icon:'dashicons-linkedin' },
                { name: "Pinterest", href: "http://pinterest.com/pin/create/link/?url=", checked: true ,icon:'dashicons-pinterest'},
                { name: "Reddit", href: "http://www.reddit.com/submit?url=", checked: true, icon:'dashicons-reddit' },
				{name:"Whatsapp",href:"https://api.whatsapp.com/send?text=",checked:true , icon: 'dashicons-whatsapp'}
            ]
        },
        postPermalink: {
            type: 'string',
            default: ''
        },
        clntId: { type: 'String', default: '' },
    },



	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
