import { IStorageProvider } from "../../interfaces/IStorageProvider";
import { IAzureConfig } from "../../interfaces/IAzureConfig";

export class AzureStorage implements IStorageProvider {
  private config: IAzureConfig;
  constructor(config: IAzureConfig) {
	this.config = config;
  }

  deleteFile(filePath: string): Promise<void> {
	return Promise.resolve(undefined);
  }

  downloadFile(remotePath: string, localPath: string): Promise<void> {
	return Promise.resolve(undefined);
  }

  listFiles(directoryPath: string): Promise<string[]> {
	return Promise.resolve([]);
  }

  uploadFile(localPath: string, remotePath: string): Promise<any> {
	return Promise.resolve(undefined);
  }
}
