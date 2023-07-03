import { useSelect } from '@wordpress/data';

import {useEffect} from 'react';
import { CheckboxControl, PanelBody } from '@wordpress/components';


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({clientId,attributes,setAttributes}) {

	useEffect(()=>{

		
	});

	const postPermaLink = useSelect(select => select("core/editor").getPermalink());
    setAttributes({ postPermalink: postPermaLink })
	setAttributes({clntId:clientId})

	return (
		<div { ...useBlockProps() }>

			<section className= "sbgSocialbarMain" >

			<ol className='sbgSocialbarChGrid'>
{
			attributes.socialOptions.map((x,i)=>{

				return <li key={i}>

					<div className='sbgSocialbarChItem'>

						<div className={`sbgSocialbarChInfo sbgSocialbarChInfo${x.name}`}>

							<div className={`sbgSocialbarChInfoFront sbgSocialbarCh${x.name}`} ></div>
							<div clasName={`sbgSocialbarChInfoBack sbgSocialbarChInfoBack${x.name}`} ></div>
							<p className={`sbgSocialbarTooltipP`} id={`sbgSocialbar${x.name}Tooltip`}>
							<a
							  className={`sbgSocialbar${x.name}Tooltip`}
							  href={`${x.href}${attributes.postPermalink}`}
							  target= "_blank"
							  title= {`${__('Share this page on', 'ctc-social-sharing')} ${x.name}`}
							>
                          </a>
						</p>

						</div>

					</div>


				</li>


			})

}
				</ol>


			</section>
      


			<div>
				<InspectorControls>
				  <PanelBody>
					<p>{__('Choose Social Icons','ctc-social-sharing')}</p>

					<ol>

					{

						attributes.socialOptionsInput.map((x,i)=>{


						
							return 	<><li className={`ctcSsEditLi dashicons-before ${x.icon}`} title={x.name} > <CheckboxControl
								key={i}
								name={x.name}
								checked={x.checked}
								id={`${x.name}-sbg-${attributes.clntId}`}
								onChange={() => {

									setAttributes({ socialOptions: attributes.socialOptionsInput.filter(x => true === document.querySelector(`#${x.name}-sbg-${attributes.clntId}`).checked) });
									setAttributes({ socialOptionsInput: attributes.socialOptionsInput.map(x => { return { icon:x.icon, name: x.name, href: x.href, checked: document.querySelector(`#${x.name}-sbg-${attributes.clntId}`).checked }; }) });
								} } /></li></>
						})

					}
					</ol>

				  </PanelBody>

				  <PanelBody>


				  </PanelBody>
				</InspectorControls>
					</div>

		
		</div>
	);
}
