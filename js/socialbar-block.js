
const { CheckboxControl, PanelBody } = wp.components;
const { InspectorControls } = wp.blockEditor;
const { useSelect } = wp.data;
const { __ } = wp.i18n;
const ssEl = wp.element.createElement;
const { registerBlockType } = wp.blocks;

registerBlockType('ctc-social-sharing/social-sharing-block', {
    title: __("CTC Social Sharing", 'ctc-social-sharing'),
    icon: 'share',
    description: __("Social sharing block", "ctc-social-sharing"),
    category: 'common',
    keywords: [__('Social Bar', 'ctc-social-sharing'), __('Social Sharing', 'ctc-social-sharing')],
    example: {},
    attributes: {
        socialOptions: {
            type: 'array',
            default: [
                { name: 'Facebook', href: 'https://www.facebook.com/sharer/sharer.php?u=' },
                { name: "Twitter", href: 'http://twitter.com/share?url=' },
                { name: 'Linkedin', href: 'http://www.linkedin.com/cws/share?url=' },
                { name: "Pinterest", href: "http://pinterest.com/pin/create/link/?url=" },
                { name: "Reddit", href: "http://www.reddit.com/submit?url=" }
            ]
        },
        socialOptionsInput: {
            type: 'array',
            default: [
                { name: 'Facebook', href: 'https://www.facebook.com/sharer/sharer.php?u=', checked: true },
                { name: "Twitter", href: 'http://twitter.com/share?url=', checked: true },
                { name: 'Linkedin', href: 'http://www.linkedin.com/cws/share?url=', checked: true },
                { name: "Pinterest", href: "http://pinterest.com/pin/create/link/?url=", checked: true },
                { name: "Reddit", href: "http://www.reddit.com/submit?url=", checked: true }
            ]
        },
        postPermalink: {
            type: 'string',
            default: ''
        },
        clntId: { type: 'String', default: '' },
    },


    edit: props => {
        const postPermaLink = useSelect(select => select("core/editor").getPermalink());
        props.setAttributes({ postPermalink: postPermaLink })
        props.setAttributes({ clntId: props.clientId });

        return ssEl('div', null, ssEl('section', { className: "sbgSocialbarMain" },
            ssEl('ol', { className: 'sbgSocialbarChGrid' },
                props.attributes.socialOptions.map(x => {
                    return ssEl('li', null,
                        ssEl('div', { className: 'sbgSocialbarChItem' },
                            ssEl('div', { className: `sbgSocialbarChInfo sbgSocialbarChInfo${x.name}` },
                                ssEl('div', { className: `sbgSocialbarChInfoFront sbgSocialbarCh${x.name}` }, ''),
                                ssEl('div', { className: `sbgSocialbarChInfoBack sbgSocialbarChInfoBack${x.name}` }, ''),
                                ssEl('p', { className: `sbgSocialbarTooltipP`, id: `sbgSocialbar${x.name}Tooltip` },
                                    ssEl('a', { className: `sbgSocialbar${x.name}Tooltip`, href: `${x.href}${props.attributes.postPermalink}`, target: "_blank", title: `${__('Share this page on', 'ctc-social-sharing')} ${x.name}` }, ''))
                            )));
                })

            ),
            ssEl(InspectorControls, null,
                ssEl(PanelBody, null,
                    ssEl('div', null,
                        ssEl('h4', null, __('Select social icons', 'ctc-social-sharing')),

                        props.attributes.socialOptionsInput.map((x, i) => ssEl('div', { 'id': 'sbg-social-sharing' },
                            ssEl(CheckboxControl, {
                                name: x.name,
                                label: x.name,
                                checked: x.checked,
                                id: `${x.name}-sbg-${props.attributes.clntId}`,
                                onChange: checked => {
                                    props.setAttributes({ socialOptions: props.attributes.socialOptionsInput.filter(x => true === document.querySelector(`#${x.name}-sbg-${props.attributes.clntId}`).checked) });
                                    props.setAttributes({ socialOptionsInput: props.attributes.socialOptionsInput.map(x => { return { name: x.name, href: x.href, checked: document.querySelector(`#${x.name}-sbg-${props.attributes.clntId}`).checked } }) });
                                },
                            }),
                        ))),

                ))));
    },
    save: props => {
        return (
            ssEl('div', null, ssEl('section', { className: "sbgfSocialbarMain" },
                ssEl('ol', { className: 'sbgfSocialbarChGrid' },
                    props.attributes.socialOptions.map(x => {
                        return ssEl('li', null,
                            ssEl('div', { className: 'sbgfSocialbarChItem' },
                                ssEl('div', { className: `sbgfSocialbarChInfo sbgfSocialbarChInfo${x.name}` },
                                    ssEl('div', { className: `sbgfSocialbarChInfoFront sbgfSocialbarCh${x.name}` }, ''),
                                    ssEl('div', { className: `sbgfSocialbarChInfoBack sbgfSocialbarChInfoBack${x.name}` }, ''),
                                    ssEl('p', { className: `sbgfSocialbarTooltipP`, id: `sbgfSocialbar${x.name}Tooltip` },
                                        ssEl('a', { className: `sbgfSocialbar${x.name}Tooltip`, href: `${x.href}${props.attributes.postPermalink}`, target: "_blank", title: `${__('Share this page on', 'ctc-social-sharing')} ${x.name}`, rel: 'noopener noreferrer' }, ''))
                                )));
                    })

                )))

        );
    }
});
