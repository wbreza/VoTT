import { IpcRendererProxy } from "../../common/ipcRendererProxy";
import { IStorageProvider } from "./storageProviderFactory";
import { IAssetProvider } from "./assetProviderFactory";
import { IAsset, StorageType } from "../../models/applicationState";
import getHostOs, { HostOsType } from "../../common/hostOs";
import { ConsoleHttpPipelineLogger } from "@azure/ms-rest-js/es/lib/httpPipelineLogger";

const PROXY_NAME = "LocalFileSystem";

export interface ILocalFileSystemProxyOptions {
    folderPath: string;
}

export class LocalFileSystemProxy implements IStorageProvider, IAssetProvider {

    public storageType: StorageType.Local;
    constructor(private options?: ILocalFileSystemProxyOptions) {
        if (!this.options) {
            this.options = {
                folderPath: null,
            };
        }
    }

    public selectContainer(): Promise<string> {
        return IpcRendererProxy.send(`${PROXY_NAME}:selectContainer`);
    }

    public readText(fileName: string): Promise<string> {
        // const filePath = [this.options.folderPath, fileName].join("\\");
        // return IpcRendererProxy.send(`${PROXY_NAME}:readText`, [filePath]);
        if (getHostOs().type == HostOsType.Windows){
            const filePath = [this.options.folderPath, fileName].join("\\");
            console.log("WINDOWS READ TEXT " + filePath);
            return IpcRendererProxy.send(`${PROXY_NAME}:readText`, [filePath]);
        } else {
            const filePath = [this.options.folderPath, fileName].join("/");
            console.log("MAC READ TEXT" + filePath);
            return IpcRendererProxy.send(`${PROXY_NAME}:readText`, [filePath]);
        }
    }

    public readBinary(fileName: string): Promise<Buffer> {
        // const filePath = [this.options.folderPath, fileName].join("\\");
        // return IpcRendererProxy.send(`${PROXY_NAME}:readBinary`, [filePath]);
        if (getHostOs().type == HostOsType.Windows){
            const filePath = [this.options.folderPath, fileName].join("\\");
            console.log("WINDOWS READ BINARY " + filePath);
            return IpcRendererProxy.send(`${PROXY_NAME}:readBinary`, [filePath]);
        } else {
            const filePath = [this.options.folderPath, fileName].join("/");
            console.log("MAC READ BINARY " + filePath);
            return IpcRendererProxy.send(`${PROXY_NAME}:readBinary`, [filePath]);
        }
    }

    public deleteFile(fileName: string): Promise<void> {
        // const filePath = [this.options.folderPath, fileName].join("\\");
        // return IpcRendererProxy.send(`${PROXY_NAME}:deleteFile`, [filePath]);
        if (getHostOs().type == HostOsType.Windows){
            const filePath = [this.options.folderPath, fileName].join("\\");
            console.log("WINDOWS DELETE FILE " + filePath);
            return IpcRendererProxy.send(`${PROXY_NAME}:deleteFile`, [filePath]);
        } else {
            const filePath = [this.options.folderPath, fileName].join("/");
            console.log("MAC DELETE FILE " + filePath);
            return IpcRendererProxy.send(`${PROXY_NAME}:deleteFile`, [filePath]);
        }
    }

    public writeText(fileName: string, contents: string): Promise<void> {
        // const filePath = [this.options.folderPath, fileName].join("\\");
        // return IpcRendererProxy.send(`${PROXY_NAME}:writeText`, [filePath, contents]);
        if (getHostOs().type == HostOsType.Windows){
            const filePath = [this.options.folderPath, fileName].join("\\");
            console.log("WINDOWS WRITE TEXT " + filePath);
            return IpcRendererProxy.send(`${PROXY_NAME}:writeText`, [filePath, contents]);
        } else {
            const filePath = [this.options.folderPath, fileName].join("/");
            console.log("MAC WRITE TEXT " + filePath);
            return IpcRendererProxy.send(`${PROXY_NAME}:writeText`, [filePath, contents]);
        }
    }

    public writeBinary(fileName: string, contents: Buffer): Promise<void> {
        // const filePath = [this.options.folderPath, fileName].join("\\");
        // return IpcRendererProxy.send(`${PROXY_NAME}:writeBinary`, [filePath, contents]);
        if (getHostOs().type == HostOsType.Windows){
            const filePath = [this.options.folderPath, fileName].join("\\");
            console.log("WINDOWS WRITE BINARY " + filePath);
            return IpcRendererProxy.send(`${PROXY_NAME}:writeBinary`, [filePath, contents]);
        } else {
            const filePath = [this.options.folderPath, fileName].join("/");
            console.log("MAC WRITE BINARY" + filePath);
            return IpcRendererProxy.send(`${PROXY_NAME}:writeBinary`, [filePath, contents]);
        }
    }

    public listFiles(folderName?: string, ext?: string): Promise<string[]> {
        // const folderPath = folderName ? [this.options.folderPath, folderName].join("\\") : this.options.folderPath;
        // return IpcRendererProxy.send(`${PROXY_NAME}:listFiles`, [folderPath]);
        if (getHostOs().type == HostOsType.Windows){
            const folderPath = folderName ? [this.options.folderPath, folderName].join("\\") : this.options.folderPath;
            console.log("WINDOWS LIST FILES " + folderPath);
            return IpcRendererProxy.send(`${PROXY_NAME}:listFiles`, [folderPath]);
        } else {
            const folderPath = folderName ? [this.options.folderPath, folderName].join("/") : this.options.folderPath;
            console.log("MAC LIST FILES " + folderPath);
            return IpcRendererProxy.send(`${PROXY_NAME}:listFiles`, [folderPath]);
        }
    }

    public listContainers(folderName?: string): Promise<string[]> {
        // const folderPath = folderName ? [this.options.folderPath, folderName].join("\\") : this.options.folderPath;
        // return IpcRendererProxy.send(`${PROXY_NAME}:listContainers`, [folderPath]);
        if (getHostOs().type == HostOsType.Windows){
            const folderPath = folderName ? [this.options.folderPath, folderName].join("\\") : this.options.folderPath;
            console.log("WINDOWS LIST CONTAINERS " + folderPath);
            return IpcRendererProxy.send(`${PROXY_NAME}:listContainers`, [folderPath]);
        } else {
            const folderPath = folderName ? [this.options.folderPath, folderName].join("/") : this.options.folderPath;
            console.log("MAC LIST CONTAINERS " + folderPath);
            return IpcRendererProxy.send(`${PROXY_NAME}:listContainers`, [folderPath]);
        }
    }

    public createContainer(folderName: string): Promise<void> {
        // const folderPath = [this.options.folderPath, folderName].join("\\");
        // return IpcRendererProxy.send(`${PROXY_NAME}:createContainer`, [folderPath]);
        if (getHostOs().type == HostOsType.Windows){
            const folderPath = [this.options.folderPath, folderName].join("\\");
            console.log("WINDOWS CREATE CONTAINER " + folderPath);
            return IpcRendererProxy.send(`${PROXY_NAME}:createContainer`, [folderPath]);
        } else {
            const folderPath = [this.options.folderPath, folderName].join("/");
            console.log("MAC CREATE CONTAINER " + folderPath);
            return IpcRendererProxy.send(`${PROXY_NAME}:createContainer`, [folderPath]);
        }
    }

    public deleteContainer(folderName: string): Promise<void> {
        if (getHostOs().type == HostOsType.Windows){
            const folderPath = [this.options.folderPath, folderName].join("\\");
            console.log("WINDOWS DELETE CONTAINER " + folderPath);
            return IpcRendererProxy.send(`${PROXY_NAME}:deleteContainer`, [folderPath]);
        } else {
            const folderPath = [this.options.folderPath, folderName].join("/");
            console.log("MAC DELETE CONTAINER " + folderPath);
            return IpcRendererProxy.send(`${PROXY_NAME}:deleteContainer`, [folderPath]);
        }
    }

    public getAssets(folderName?: string): Promise<IAsset[]> {
        if (getHostOs().type == HostOsType.Windows){
            const folderPath = [this.options.folderPath, folderName].join("\\");
            console.log("WINDOWS GET ASSETS " + folderPath);
            return IpcRendererProxy.send(`${PROXY_NAME}:getAssets`, [folderPath]);
        } else {
            const folderPath = [this.options.folderPath, folderName].join("/");
            console.log("MAC GET ASSETS " + folderPath);
            return IpcRendererProxy.send(`${PROXY_NAME}:getAssets`, [folderPath]);
        }
    }
}
