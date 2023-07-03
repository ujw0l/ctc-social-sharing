/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';



/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	return (
		<div { ...useBlockProps.save() }>
		
		<section className= {"sbgSocialbarMain"} >

			<ol className={'sbgSocialbarChGrid'}>
{
			attributes.socialOptions.map((x,i)=>{

				return <li key={i}>

					<div className={'sbgSocialbarChItem'}>

						<div className={`sbgSocialbarChInfo sbgSocialbarChInfo${x.name}`}>

							<div className={`sbgSocialbarChInfoFront sbgSocialbarCh${x.name}`} ></div>
							<div clasName={`sbgSocialbarChInfoBack sbgSocialbarChInfoBack${x.name}`} ></div>
							<p className={`sbgSocialbarTooltipP`} id={`sbgSocialbar${x.name}Tooltip`}>
							<a
							  className={`sbgSocialbar${x.name}Tooltip`}
							  href={`${x.href}${attributes.postPermalink}`}
							  target= {"_blank"}
							  rel='noopener'
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
		</div>
	);
}
