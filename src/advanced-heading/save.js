import { RichText, useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
	const {
		blockId,
		titleTagName,
		titleText,
		titleAlignment,
		titleColor,
		titleMarginTop,
		titleMarginRight,
		titleMarginBottom,
		titleMarginLeft,
		titlePaddingTop,
		titlePaddingRight,
		titlePaddingBottom,
		titlePaddingLeft,
		displaySubTitle,
		positionSubTitle,
		subTitleTagName,
		subTitleText,
		subTitleAlignment,
		subTitleColor,
		subTitleMarginTop,
		subTitleMarginRight,
		subTitleMarginBottom,
		subTitleMarginLeft,
		subTitlePaddingTop,
		subTitlePaddingRight,
		subTitlePaddingBottom,
		subTitlePaddingLeft,
		bgColor,
		bgImage,
		bgImageId,
		bgOverlayColor,
		bgOverlayOpacity,
		wrapMarginTop,
		wrapMarginRight,
		wrapMarginBottom,
		wrapMarginLeft,
		wrapPaddingTop,
		wrapPaddingRight,
		wrapPaddingBottom,
		wrapPaddingLeft,
	} = attributes;

	return (
		<>
			<style>
				{`
				#block-{blockId} .advanced-heading-wrap:before {
					content: '';
					background-color: ${bgOverlayColor};
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					opacity: ${bgOverlayOpacity};
					z-index: -1;
				}
				`}
			</style>
			<div id={`block-${blockId}`} {...useBlockProps.save()}>
				<div
					className="advanced-heading-wrap"
					style={{
						position: "relative",
						zIndex: 2,
						backgroundColor: bgColor,
						backgroundImage: bgImage ? `url(${bgImage})` : "none",
						backgroundSize: "cover",
						backgroundPosition: "center",
						marginTop: wrapMarginTop,
						marginRight: wrapMarginRight,
						marginBottom: wrapMarginBottom,
						marginLeft: wrapMarginLeft,
						paddingTop: wrapPaddingTop,
						paddingRight: wrapPaddingRight,
						paddingBottom: wrapPaddingBottom,
						paddingLeft: wrapPaddingLeft,
					}}
				>
					{displaySubTitle && "above" === positionSubTitle && (
						<RichText.Content
							tagName={subTitleTagName}
							value={subTitleText}
							onChange={(value) => {
								setAttributes({ subTitleText: value });
							}}
							style={{
								color: subTitleColor,
								textAlign: subTitleAlignment,
								marginTop: subTitleMarginTop,
								marginRight: subTitleMarginRight,
								marginBottom: subTitleMarginBottom,
								marginLeft: subTitleMarginLeft,
								paddingTop: subTitlePaddingTop,
								paddingRight: subTitlePaddingRight,
								paddingBottom: subTitlePaddingBottom,
								paddingLeft: subTitlePaddingLeft,
							}}
						/>
					)}
					<RichText.Content
						tagName={titleTagName}
						value={titleText}
						onChange={(value) => {
							setAttributes({ titleText: value });
						}}
						style={{
							color: titleColor,
							textAlign: titleAlignment,
							marginTop: titleMarginTop,
							marginRight: titleMarginRight,
							marginBottom: titleMarginBottom,
							marginLeft: titleMarginLeft,
							paddingTop: titlePaddingTop,
							paddingRight: titlePaddingRight,
							paddingBottom: titlePaddingBottom,
							paddingLeft: titlePaddingLeft,
						}}
					/>
					{displaySubTitle && "below" === positionSubTitle && (
						<RichText.Content
							tagName={subTitleTagName}
							value={subTitleText}
							onChange={(value) => {
								setAttributes({ subTitleText: value });
							}}
							style={{
								color: subTitleColor,
								textAlign: subTitleAlignment,
								marginTop: subTitleMarginTop,
								marginRight: subTitleMarginRight,
								marginBottom: subTitleMarginBottom,
								marginLeft: subTitleMarginLeft,
								paddingTop: subTitlePaddingTop,
								paddingRight: subTitlePaddingRight,
								paddingBottom: subTitlePaddingBottom,
								paddingLeft: subTitlePaddingLeft,
							}}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default save;
