import type { SmartHouseCommand } from './smart-house-command';
import type { SmartHouseLight } from './smart-house-light';

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}
  execute(): void {
    this.light.on();
  }
  undo(): void {
    this.light.off();
  }
}
