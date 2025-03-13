import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
	RichText,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TabPanel,
	ToggleControl,
	RadioControl,
	Button,
	ButtonGroup,
	ColorPicker,
} from "@wordpress/components";
import "./editor.scss";

const Edit = (props) => {
	useEffect(() => {
		if (!props.attributes.blockId) {
			props.setAttributes({ blockId: props.clientId });
		}
	}, []);

	const { attributes, setAttributes } = props;
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
			<div {...useBlockProps()}>
				<InspectorControls>
					<TabPanel
						className="settings-tab-panel"
						activeClass="color-primary"
						tabs={[
							{
								name: "general-tab",
								title: __("General", "snappy-blocks"),
								className: "general-tab",
							},
							{
								name: "style-tab",
								title: __("Style", "snappy-blocks"),
								className: "style-tab",
							},
							{
								name: "advanced-tab",
								title: __("Advanced", "snappy-blocks"),
								className: "advanced-tab",
							},
						]}
					>
						{(tab) => (
							<>
								{tab.name === "general-tab" && (
									<>
										<PanelBody
											title={__("Title", "snappy-blocks")}
											initialOpen={false}
										>
											<div className="py-4">
												<legend className="ml-0 mb-2">
													{__("HTML Tag", "snappy-blocks")}
												</legend>
												<ButtonGroup>
													<Button
														size="small"
														variant={
															titleTagName === "h1" ? "primary" : "secondary"
														}
														onClick={() => {
															setAttributes({
																titleTagName: "h1",
															});
														}}
													>
														H1
													</Button>
													<Button
														size="small"
														variant={
															titleTagName === "h2" ? "primary" : "secondary"
														}
														onClick={() => {
															setAttributes({
																titleTagName: "h2",
															});
														}}
													>
														H2
													</Button>
													<Button
														size="small"
														variant={
															titleTagName === "h3" ? "primary" : "secondary"
														}
														onClick={() => {
															setAttributes({
																titleTagName: "h3",
															});
														}}
													>
														H3
													</Button>
													<Button
														size="small"
														variant={
															titleTagName === "h4" ? "primary" : "secondary"
														}
														onClick={() => {
															setAttributes({
																titleTagName: "h4",
															});
														}}
													>
														H4
													</Button>
													<Button
														size="small"
														variant={
															titleTagName === "h5" ? "primary" : "secondary"
														}
														onClick={() => {
															setAttributes({
																titleTagName: "h5",
															});
														}}
													>
														H5
													</Button>
													<Button
														size="small"
														variant={
															titleTagName === "h6" ? "primary" : "secondary"
														}
														onClick={() => {
															setAttributes({
																titleTagName: "h6",
															});
														}}
													>
														H6
													</Button>
													<Button
														size="small"
														variant={
															titleTagName === "p" ? "primary" : "secondary"
														}
														onClick={() => {
															setAttributes({
																titleTagName: "p",
															});
														}}
													>
														P
													</Button>
												</ButtonGroup>
												<legend className="ml-0 mb-2 mt-2">
													{__("Alignment", "snappy-blocks")}
												</legend>
												<ButtonGroup>
													<Button
														size="small"
														variant={
															titleAlignment === "left"
																? "primary"
																: "secondary"
														}
														onClick={() => {
															setAttributes({
																titleAlignment: "left",
															});
														}}
													>
														{__("Left", "snappy-blocks")}
													</Button>
													<Button
														size="small"
														variant={
															titleAlignment === "center"
																? "primary"
																: "secondary"
														}
														onClick={() => {
															setAttributes({
																titleAlignment: "center",
															});
														}}
													>
														{__("Center", "snappy-blocks")}
													</Button>
													<Button
														size="small"
														variant={
															titleAlignment === "right"
																? "primary"
																: "secondary"
														}
														onClick={() => {
															setAttributes({
																titleAlignment: "right",
															});
														}}
													>
														{__("Right", "snappy-blocks")}
													</Button>
												</ButtonGroup>
											</div>
										</PanelBody>
										<PanelBody
											title={__("Subtitle", "snappy-blocks")}
											initialOpen={false}
										>
											<div className="py-4">
												<ToggleControl
													__nextHasNoMarginBottom={true}
													label={__("Show/Hide Subtitle", "snappy-blocks")}
													checked={displaySubTitle}
													onChange={() => {
														setAttributes({
															displaySubTitle: !displaySubTitle,
														});
													}}
												/>
												{displaySubTitle && (
													<>
														<RadioControl
															label="Position"
															selected={positionSubTitle}
															options={[
																{
																	label: __("Below title", "snappy-blocks"),
																	value: "below",
																},
																{
																	label: __("Above title", "snappy-blocks"),
																	value: "above",
																},
															]}
															onChange={(value) => {
																setAttributes({
																	positionSubTitle: value,
																});
															}}
														/>
														<legend className="ml-0 mb-2">
															{__("HTML Tag", "snappy-blocks")}
														</legend>
														<ButtonGroup>
															<Button
																size="small"
																variant={
																	subTitleTagName === "h1"
																		? "primary"
																		: "secondary"
																}
																onClick={() => {
																	setAttributes({
																		subTitleTagName: "h1",
																	});
																}}
															>
																H1
															</Button>
															<Button
																size="small"
																variant={
																	subTitleTagName === "h2"
																		? "primary"
																		: "secondary"
																}
																onClick={() => {
																	setAttributes({
																		subTitleTagName: "h2",
																	});
																}}
															>
																H2
															</Button>
															<Button
																size="small"
																variant={
																	subTitleTagName === "h3"
																		? "primary"
																		: "secondary"
																}
																onClick={() => {
																	setAttributes({
																		subTitleTagName: "h3",
																	});
																}}
															>
																H3
															</Button>
															<Button
																size="small"
																variant={
																	subTitleTagName === "h4"
																		? "primary"
																		: "secondary"
																}
																onClick={() => {
																	setAttributes({
																		subTitleTagName: "h4",
																	});
																}}
															>
																H4
															</Button>
															<Button
																size="small"
																variant={
																	subTitleTagName === "h5"
																		? "primary"
																		: "secondary"
																}
																onClick={() => {
																	setAttributes({
																		subTitleTagName: "h5",
																	});
																}}
															>
																H5
															</Button>
															<Button
																size="small"
																variant={
																	subTitleTagName === "h6"
																		? "primary"
																		: "secondary"
																}
																onClick={() => {
																	setAttributes({
																		subTitleTagName: "h6",
																	});
																}}
															>
																H6
															</Button>
															<Button
																size="small"
																variant={
																	subTitleTagName === "p"
																		? "primary"
																		: "secondary"
																}
																onClick={() => {
																	setAttributes({
																		subTitleTagName: "p",
																	});
																}}
															>
																P
															</Button>
														</ButtonGroup>
														<legend className="ml-0 mb-2 mt-2">
															{__("Alignment", "snappy-blocks")}
														</legend>
														<ButtonGroup>
															<Button
																size="small"
																variant={
																	subTitleAlignment === "left"
																		? "primary"
																		: "secondary"
																}
																onClick={() => {
																	setAttributes({
																		subTitleAlignment: "left",
																	});
																}}
															>
																{__("Left", "snappy-blocks")}
															</Button>
															<Button
																size="small"
																variant={
																	subTitleAlignment === "center"
																		? "primary"
																		: "secondary"
																}
																onClick={() => {
																	setAttributes({
																		subTitleAlignment: "center",
																	});
																}}
															>
																{__("Center", "snappy-blocks")}
															</Button>
															<Button
																size="small"
																variant={
																	subTitleAlignment === "right"
																		? "primary"
																		: "secondary"
																}
																onClick={() => {
																	setAttributes({
																		subTitleAlignment: "right",
																	});
																}}
															>
																{__("Right", "snappy-blocks")}
															</Button>
														</ButtonGroup>
													</>
												)}
											</div>
										</PanelBody>
									</>
								)}
								{tab.name === "style-tab" && (
									<>
										<PanelBody
											title={__("Title", "snappy-blocks")}
											initialOpen={false}
										>
											<div className="py-4">
												<legend className="ml-0 mb-2">
													{__("Color", "snappy-blocks")}
												</legend>
												<ColorPicker
													color={titleColor}
													onChange={(value) => {
														setAttributes({
															titleColor: value,
														});
													}}
													defaultValue={titleColor}
												/>
												<legend className="ml-0 mt-2 mb-2">
													{__("Margin", "snappy-blocks")}
												</legend>
												<div className="flex">
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={titleMarginTop}
															onChange={(el) => {
																setAttributes({
																	titleMarginTop: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Top", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={titleMarginRight}
															onChange={(el) => {
																setAttributes({
																	titleMarginRight: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Right", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={titleMarginBottom}
															onChange={(el) => {
																setAttributes({
																	titleMarginBottom: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Bottom", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={titleMarginLeft}
															onChange={(el) => {
																setAttributes({
																	titleMarginLeft: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Left", "snappy-blocks")}</label>
													</div>
												</div>
												<legend className="ml-0 mt-2 mb-2">
													{__("Padding", "snappy-blocks")}
												</legend>
												<div className="flex">
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={titlePaddingTop}
															onChange={(el) => {
																setAttributes({
																	titlePaddingTop: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Top", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={titlePaddingRight}
															onChange={(el) => {
																setAttributes({
																	titlePaddingRight: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Right", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={titlePaddingBottom}
															onChange={(el) => {
																setAttributes({
																	titlePaddingBottom: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Bottom", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={titlePaddingLeft}
															onChange={(el) => {
																setAttributes({
																	titlePaddingLeft: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Left", "snappy-blocks")}</label>
													</div>
												</div>
											</div>
										</PanelBody>
										<PanelBody
											title={__("Subtitle", "snappy-blocks")}
											initialOpen={false}
										>
											<div className="py-4">
												<legend className="ml-0 mb-2">
													{__("Color", "snappy-blocks")}
												</legend>
												<ColorPicker
													color={subTitleColor}
													onChange={(value) => {
														setAttributes({
															subTitleColor: value,
														});
													}}
													defaultValue={subTitleColor}
												/>
												<legend className="ml-0 mt-2 mb-2">
													{__("Margin", "snappy-blocks")}
												</legend>
												<div className="flex">
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={subTitleMarginTop}
															onChange={(el) => {
																setAttributes({
																	subTitleMarginTop: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Top", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={subTitleMarginRight}
															onChange={(el) => {
																setAttributes({
																	subTitleMarginRight: parseInt(
																		el.target.value,
																	),
																});
															}}
														/>
														<label>{__("Right", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={subTitleMarginBottom}
															onChange={(el) => {
																setAttributes({
																	subTitleMarginBottom: parseInt(
																		el.target.value,
																	),
																});
															}}
														/>
														<label>{__("Bottom", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={subTitleMarginLeft}
															onChange={(el) => {
																setAttributes({
																	subTitleMarginLeft: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Left", "snappy-blocks")}</label>
													</div>
												</div>
												<legend className="ml-0 mt-2 mb-2">
													{__("Padding", "snappy-blocks")}
												</legend>
												<div className="flex">
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={subTitlePaddingTop}
															onChange={(el) => {
																setAttributes({
																	subTitlePaddingTop: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Top", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={subTitlePaddingRight}
															onChange={(el) => {
																setAttributes({
																	subTitlePaddingRight: parseInt(
																		el.target.value,
																	),
																});
															}}
														/>
														<label>{__("Right", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={subTitlePaddingBottom}
															onChange={(el) => {
																setAttributes({
																	subTitlePaddingBottom: parseInt(
																		el.target.value,
																	),
																});
															}}
														/>
														<label>{__("Bottom", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={subTitlePaddingLeft}
															onChange={(el) => {
																setAttributes({
																	subTitlePaddingLeft: parseInt(
																		el.target.value,
																	),
																});
															}}
														/>
														<label>{__("Left", "snappy-blocks")}</label>
													</div>
												</div>
											</div>
										</PanelBody>
									</>
								)}
								{tab.name === "advanced-tab" && (
									<>
										<PanelBody
											title={__("Margin & Padding", "snappy-blocks")}
											initialOpen={false}
										>
											<div className="py-4">
												<legend className="ml-0 mb-2">
													{__("Margin", "snappy-blocks")}
												</legend>
												<div className="flex">
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={wrapMarginTop}
															onChange={(el) => {
																setAttributes({
																	wrapMarginTop: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Top", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={wrapMarginRight}
															onChange={(el) => {
																setAttributes({
																	wrapMarginRight: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Right", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={wrapMarginBottom}
															onChange={(el) => {
																setAttributes({
																	wrapMarginBottom: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Bottom", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={wrapMarginLeft}
															onChange={(el) => {
																setAttributes({
																	wrapMarginLeft: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Left", "snappy-blocks")}</label>
													</div>
												</div>
												<legend className="ml-0 mt-2 mb-2">
													{__("Padding", "snappy-blocks")}
												</legend>
												<div className="flex">
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={wrapPaddingTop}
															onChange={(el) => {
																setAttributes({
																	wrapPaddingTop: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Top", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={wrapPaddingRight}
															onChange={(el) => {
																setAttributes({
																	wrapPaddingRight: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Right", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={wrapPaddingBottom}
															onChange={(el) => {
																setAttributes({
																	wrapPaddingBottom: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Bottom", "snappy-blocks")}</label>
													</div>
													<div className="flex flex-col items-center w-1by4">
														<input
															className="w-full p-0i text-center"
															type="number"
															value={wrapPaddingLeft}
															onChange={(el) => {
																setAttributes({
																	wrapPaddingLeft: parseInt(el.target.value),
																});
															}}
														/>
														<label>{__("Left", "snappy-blocks")}</label>
													</div>
												</div>
											</div>
										</PanelBody>
										<PanelBody
											title={__("Background", "snappy-blocks")}
											initialOpen={false}
										>
											<div className="py-4">
												<legend className="ml-0 mb-2">
													{__("Color", "snappy-blocks")}
												</legend>
												<ColorPicker
													color={bgColor}
													onChange={(value) => {
														setAttributes({
															bgColor: value,
														});
													}}
													defaultValue={bgColor}
												/>
												{bgColor !== "transparent" && (
													<Button
														className="button button-large"
														onClick={() => {
															setAttributes({
																bgColor: "transparent",
															});
														}}
													>
														{__("Remove background color", "snappy-blocks")}
													</Button>
												)}
												<legend className="ml-0 mt-2 mb-2">
													{__("Image", "snappy-blocks")}
												</legend>
												<MediaUploadCheck>
													<MediaUpload
														onSelect={(media) => {
															setAttributes({
																bgImage: media.url,
																bgImageId: media.id,
															});
														}}
														allowedTypes={["image"]}
														value={bgImageId}
														render={({ open }) => (
															<div>
																{!bgImage ? (
																	<Button
																		onClick={open}
																		className="button button-large"
																	>
																		{__(
																			"Upload background image",
																			"snappy-blocks",
																		)}
																	</Button>
																) : (
																	<div>
																		<img
																			src={bgImage}
																			alt="Background preview"
																			style={{ maxWidth: "100%" }}
																		/>
																		<Button
																			onClick={() => {
																				setAttributes({
																					bgImage: null,
																					bgImageId: null,
																				});
																			}}
																			className="button"
																			style={{ marginTop: "10px" }}
																		>
																			{__("Remove image", "snappy-blocks")}
																		</Button>
																		<Button
																			onClick={open}
																			className="button"
																			style={{
																				marginTop: "10px",
																				marginLeft: "10px",
																			}}
																		>
																			{__("Change image", "snappy-blocks")}
																		</Button>
																	</div>
																)}
															</div>
														)}
													/>
												</MediaUploadCheck>
												<legend className="ml-0 mt-2 mb-2">
													{__("Background overlay color", "snappy-blocks")}
												</legend>
												<ColorPicker
													color={bgOverlayColor}
													onChange={(value) => {
														setAttributes({
															bgOverlayColor: value,
														});
													}}
													defaultValue={bgOverlayColor}
												/>
												{bgOverlayColor !== "transparent" && (
													<Button
														className="button button-large"
														onClick={() => {
															setAttributes({
																bgOverlayColor: "transparent",
															});
														}}
													>
														{__(
															"Remove background overlay color",
															"snappy-blocks",
														)}
													</Button>
												)}
											</div>
										</PanelBody>
									</>
								)}
							</>
						)}
					</TabPanel>
				</InspectorControls>
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
						<RichText
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
					<RichText
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
						<RichText
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

export default Edit;
