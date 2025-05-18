import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('./media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');
backupManager.backup();
imageEditor.convertFormatTo('bmp');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor); // jpg

backupManager.undo(); // bmp
console.log(imageEditor); // jpg

backupManager.undo();
console.log(imageEditor); // gif

backupManager.undo();
console.log(imageEditor); // png

backupManager.undo();
console.log(imageEditor); // no mementos
