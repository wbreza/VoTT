import React from "react";
import { IAssetProps } from "./assetPreview";

/**
 * ImageAsset component used to render all image assets
 */
export class ImageAsset extends React.Component<IAssetProps> {
    private image: React.RefObject<HTMLImageElement> = React.createRef();

    public render() {
        return (
            <img ref={this.image}
                src={this.props.asset.path}
                onLoad={this.onLoad}
                onError={this.onError}
                alt={"Could not load image"}/>
        );
    }

    private onLoad = () => {
        if (this.props.onLoaded) {
            this.props.onLoaded(this.image.current);
            this.props.asset.hasError = false;
        }
    }

    private onError = (e) => {
        console.log("not workig...");
        if (this.props.onAssetError) {
            this.props.onAssetError(e);
        }
    }
}
