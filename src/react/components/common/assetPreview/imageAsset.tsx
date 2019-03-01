import React from "react";
import { IAssetProps } from "./assetPreview";

/**
 * ImageAsset component used to render all image assets
 */
export class ImageAsset extends React.Component<IAssetProps> {
    private image: React.RefObject<HTMLImageElement> = React.createRef();
    private hasError: boolean = false;

    public render() {
        return (
            <img ref={this.image}
                src={this.props.asset.path}
                onLoad={this.onLoad}
                onError={this.onError}
                alt={"Could not load image"}/>
            // <div>
            //     {!this.hasError &&
            //         <img ref={this.image}
            //             src={this.props.asset.path}
            //             onLoad={this.onLoad}
            //             onError={this.onError}
            //             alt={"Could not load image"}/>
            //     }
            // </div>
        );
    }

    private onLoad = () => {
        if (this.props.onLoaded) {
            this.props.onLoaded(this.image.current);
            this.hasError = false;
        }
    }

    private onError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        console.log(e);
        e.preventDefault();
        e.stopPropagation();
        // this.image.current.src = "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg";
        this.hasError = true;
    }
}
