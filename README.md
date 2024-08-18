# OmniCloud

**OmniCloud** is a unified interface for interacting with multiple cloud storage providers. This package simplifies the process of managing files across different cloud storage services by providing a single, consistent API.

## Features

- [ ] Unified API for multiple cloud storage providers
- [ ] Support for AWS S3
- [ ] Support for Google Cloud Storage
- [ ] Support for Azure Blob Storage
- [ ] Easy configuration setup
- [ ] TypeScript support
- [ ] Pluggable architecture for adding custom providers
- [ ] Standardized error handling
- [ ] Comprehensive examples and documentation

## Installation

To install the package, use npm or yarn:

```bash
npm install omni-cloud
```

or

```bash
yarn add omni-cloud
```

## Usage

### Configuration

Configure OmniCloud with the necessary credentials for your chosen cloud storage providers.

```javascript
const OmniCloud = require('omni-cloud');

const storage = new OmniCloud({
  provider: 'aws',
  aws: {
    accessKeyId: 'your-access-key-id',
    secretAccessKey: 'your-secret-access-key',
    region: 'your-region',
    bucketName: 'your-bucket-name'
  },
  google: {
    // Google Cloud Storage config
  },
  azure: {
    // Azure Blob Storage config
  }
});
```

### Upload a File

```javascript
async function uploadFile() {
  try {
    const result = await storage.upload('path/to/local/file.txt', 'remote/file.txt');
    console.log('File uploaded successfully:', result);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

uploadFile();
```

### Download a File

```javascript
async function downloadFile() {
  try {
    await storage.download('remote/file.txt', 'path/to/local/file.txt');
    console.log('File downloaded successfully');
  } catch (error) {
    console.error('Error downloading file:', error);
  }
}

downloadFile();
```

## API

### `upload(localPath: string, remotePath: string): Promise`

Uploads a file from the local filesystem to the specified remote path in the configured cloud storage provider.

### `download(remotePath: string, localPath: string): Promise`

Downloads a file from the specified remote path in the configured cloud storage provider to the local filesystem.

### `list(directoryPath: string): Promise`

Lists the files and directories at the specified path in the configured cloud storage provider.

### `delete(filePath: string): Promise`

Deletes the file at the specified path in the configured cloud storage provider.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to all contributors and supporters of this project.

