import type { ImageEditor } from './image-editor';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup: save state de image editor`);
    this.mementos.push(this.imageEditor.save());
  }
  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log('Backup: mementos');
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.getName()} restore successfully`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
